<?php
/**
 * Empower Pro Blocks.
 *
 * This file adds the default theme settings to the Empower Pro Blocks Theme.
 *
 * @package Empower_Pro_Blocks
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/empower-pro-blocks/
 */

// add_filter( 'simple_social_default_styles', 'empower_pro_blocks_social_default_styles' );
/**
 * Set Simple Social Icon defaults.
 *
 * @since 1.0.0
 *
 * @param array $defaults Social style defaults.
 * @return array Modified social style defaults.
 */
function empower_pro_blocks_social_default_styles( $defaults ) {

	global $empower_pro_blocks_appearance;
	$args       = $empower_pro_blocks_appearance['simple-social-icons-settings'];

	return wp_parse_args( $args, $defaults );

}
