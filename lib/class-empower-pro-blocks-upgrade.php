<?php
/**
 * Empower Pro Blocks
 *
 * WARNING: This file is part of the core Empower Pro Blocks Framework. DO NOT edit this file under any circumstances.
 *
 * @package Empower_Pro_Blocks
 * @license GPL-2.0+
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Empower_Pro_Blocks_Upgrade' ) ) :
	/**
	 * The Empower_Pro_Blocks WooCommerce Integration class.
	 */
	class Empower_Pro_Blocks_Upgrade {
		/**
		 * Template name.
		 *
		 * @var string
		 */
		private $template_name = 'empower-pro-blocks';

		/**
		 * Initialize.
		 *
		 * @return void
		 */
		public function __construct() {
			add_filter( 'site_transient_update_themes', array( $this, 'update_push' ), 10, 1 ); // most active one.
			add_filter( 'transient_update_themes', array( $this, 'update_push' ), 10, 1 );

			add_action( 'load-update-core.php', array( $this, 'clear_update_transient' ) );
			add_action( 'load-themes.php', array( $this, 'clear_update_transient' ) );

			// remove comment to always force a check with the server.
			/* $this->clear_update_transient(); */
		}

		/**
		 * Ping http://api.webplantmedia.com/ asking if a new version of this theme is available.
		 *
		 * If not, it returns false.
		 *
		 * If so, the external server passes serialized data back to this function, which gets unserialized and returned for use.
		 *
		 * Applies `empower_pro_blocks_update_remote_post_options` filter.
		 *
		 * Ping occurs at a maximum of once every 24 hours.
		 *
		 * @since 1.1.0
		 *
		 * @global string $wp_version WordPress version string.
		 *
		 * @return array Unserialized data, or empty array if updates are disabled or
		 *               theme does not support `empower-pro-blocks-auto-updates`.
		 */
		public function update_check() {
			global $empower_pro_blocks;

			// Use cache.
			static $theme_update = null;

			global $wp_version;

			// If updates are disabled.
			$theme_upgrade = empower_pro_blocks_get_config( 'theme-upgrade' );
			if ( ! $theme_upgrade['check-for-updates'] ) {
				return array();
			}

			// If cache is empty, pull transient.
			if ( ! $theme_update ) {
				$theme_update = get_transient( $this->template_name . '-update' );
			}

			// If transient has expired, do a fresh update check.
			if ( ! $theme_update ) {
				$installed_theme = wp_get_theme();
				$template        = $installed_theme->get_template();
				$stylesheet      = $installed_theme->get_stylesheet();
				$version         = $installed_theme->get( 'Version' );

				$url     = 'https://api.webplantmedia.com/themes/update-check/1.2/';
				$options = apply_filters(
					'empower_pro_blocks_update_remote_post_options',
					array(
						'user-agent' => 'WordPress/' . $wp_version . '; ' . home_url( '/' ),
						'body'       => array(
							'php_version' => phpversion(),
							'wp_version'  => $wp_version,
							'uri'         => home_url( '/' ),
							'version'     => $version,
							'template'    => $template,
							'stylesheet'  => $stylesheet,
						),
					)
				);

				$response = wp_remote_post( $url, $options );

				if ( is_wp_error( $response ) || 200 !== wp_remote_retrieve_response_code( $response ) ) {
					return array();
				}

				$response_body = json_decode( wp_remote_retrieve_body( $response ), true );

				if ( empty( $response_body ) || ! is_array( $response_body ) ) {
					$theme_update = array( $template => array( 'new_version' => $version ) );
					set_transient( $this->template_name . '-update', $theme_update, HOUR_IN_SECONDS );
					return array();
				}

				$theme_update = $response_body;

				// And store in transient for 24 hours.
				set_transient( $this->template_name . '-update', $theme_update, DAY_IN_SECONDS );

			}

			return $theme_update;

		}

		/**
		 * Integrate the Empower Pro Blocks update check into the WordPress update checks.
		 *
		 * This function filters the value that is returned when WordPress tries to pull theme update transient data.
		 *
		 * It uses `empower_pro_blocks_update_check()` to check to see if we need to do an update, and if so, adds the proper array to the
		 * `$value->response` object. WordPress handles the rest.
		 *
		 * @since 1.1.0
		 *
		 * @param object $value Update check object.
		 * @return object Modified update check object.
		 */
		public function update_push( $value ) {
			if ( defined( 'DISALLOW_FILE_MODS' ) && true === DISALLOW_FILE_MODS ) {
				return $value;
			}

			if ( isset( $value->response[ $this->template_name ] ) ) {
				unset( $value->response[ $this->template_name ] );
			}

			$theme_update = $this->update_check();

			if ( $theme_update && isset( $theme_update[ $this->template_name ] ) && isset( $theme_update[ $this->template_name ]['package'] ) ) {
				$value->response[ $this->template_name ] = $theme_update[ $this->template_name ];
				$this->clear_update_transient();
			}

			return $value;

		}

		/**
		 * Delete Empower Pro Blocks update transient after updates or when viewing the themes page.
		 *
		 * The server will then do a fresh version check.
		 *
		 * It also disables the update nag on those pages as well.
		 *
		 * @since 1.1.0
		 *
		 * @see empower_pro_blocks_update_nag()
		 */
		public function clear_update_transient() {
			delete_transient( $this->template_name . '-update' );
		}
	}
endif;

return new Empower_Pro_Blocks_Upgrade();
