<?php
/**
 * Leadership Pro child theme.
 *
 * Theme supports.
 *
 * @package Leadership_Pro
 * @author  Web Plant Media
 * @license GPL-2.0-or-later
 * @link    https://webplantmedia.com/product/leadership-pro/
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
		'primary'    => __( 'Header Menu', 'leadership-pro' ),
		// 'secondary'  => __( 'Footer Menu', 'leadership-pro' ),
		// 'tertiary'   => __( 'Top Bar Menu', 'leadership-pro' ),
		'primary-cta' => __( 'Header Menu CTA', 'leadership-pro' ),
		// 'mobile-cta' => __( 'Mobile CTA', 'leadership-pro' ),
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
