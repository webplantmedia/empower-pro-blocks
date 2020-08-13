<?php
/**
 * Empower Pro Blocks child theme.
 *
 * Theme supports.
 *
 * @package Empower_Pro_Blocks
 * @author  Web Plant Media
 * @license GPL-2.0-or-later
 * @link    https://webplantmedia.com/product/empower-pro-blocks/
 */

return array(
	'custom-logo'           => array(
		'flex-height'     => true,
		'flex-width'      => true,
		'header-selector' => '.site-title a',
		'header-text'     => false,
		'height'          => 160,
		'width'           => 600,
	),
	'html5'                 => array(
		'caption',
		'comment-form',
		'comment-list',
		'gallery',
		'search-form',
	),
	'genesis-accessibility' => array(
		'404-page',
		'drop-down-menu',
		'headings',
		'search-form',
		'skip-links',
	),
	'genesis-menus'         => array(
		'primary'    => __( 'Header Menu', 'empower-pro-blocks' ),
		// 'secondary'  => __( 'Footer Menu', 'empower-pro-blocks' ),
		// 'tertiary'   => __( 'Top Bar Menu', 'empower-pro-blocks' ),
		'primary-cta' => __( 'Header Menu CTA', 'empower-pro-blocks' ),
		// 'mobile-cta' => __( 'Mobile CTA', 'empower-pro-blocks' ),
	),
	'genesis-structural-wraps' => array(
		'header',
		// 'menu-primary',
		'menu-secondary',
		// 'site-inner',
		'footer-widgets',
		'footer'
	),
);
