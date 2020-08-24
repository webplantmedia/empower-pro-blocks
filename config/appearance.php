<?php
/**
 * Empower Pro appearance settings.
 *
 * @package empower_pro_blocks
 * @author  Web Plant Media
 * @license GPL-2.0-or-later
 * @link    https://webplantmedia.com/product/empower-pro-blocks/
 */

$empower_pro_blocks_default_colors = array(
	'primary'   => '#ed5652',
	'secondary' => '#ff7226',
	'third' => '#a44e9e',
	'fourth' => '#d43c31',
	'fifth' => '#42b97c',
	'sixth' => '#d43c31',
	'seventh' => '#176e99',
	'eighth' => '#ffcc2a',
);

$empower_pro_blocks_primary_color              = get_option( 'empower_pro_blocks_primary_color', $empower_pro_blocks_default_colors['primary'] );
$empower_pro_blocks_primary_color_brightness   = empower_pro_blocks_color_brightness( $empower_pro_blocks_primary_color, 0.15 );
$empower_pro_blocks_primary_color_contrast     = empower_pro_blocks_color_contrast( $empower_pro_blocks_primary_color );

$empower_pro_blocks_secondary_color            = get_option( 'empower_pro_blocks_secondary_color', $empower_pro_blocks_default_colors['secondary'] );
$empower_pro_blocks_secondary_color_brightness = empower_pro_blocks_color_brightness( $empower_pro_blocks_secondary_color, 0.15 );
$empower_pro_blocks_secondary_color_contrast   = empower_pro_blocks_color_contrast( $empower_pro_blocks_secondary_color );

$empower_pro_blocks_third_color                = get_option( 'empower_pro_blocks_third_color', $empower_pro_blocks_default_colors['third'] );
$empower_pro_blocks_third_color_brightness     = empower_pro_blocks_color_brightness( $empower_pro_blocks_third_color, 0.15 );
$empower_pro_blocks_third_color_contrast       = empower_pro_blocks_color_contrast( $empower_pro_blocks_third_color );

$empower_pro_blocks_fourth_color            = get_option( 'empower_pro_blocks_fourth_color', $empower_pro_blocks_default_colors['fourth'] );
$empower_pro_blocks_fourth_color_brightness = empower_pro_blocks_color_brightness( $empower_pro_blocks_fourth_color, 0.15 );
$empower_pro_blocks_fourth_color_contrast   = empower_pro_blocks_color_contrast( $empower_pro_blocks_fourth_color );

$empower_pro_blocks_fifth_color            = get_option( 'empower_pro_blocks_fifth_color', $empower_pro_blocks_default_colors['fifth'] );
$empower_pro_blocks_fifth_color_brightness = empower_pro_blocks_color_brightness( $empower_pro_blocks_fifth_color, 0.15 );
$empower_pro_blocks_fifth_color_contrast   = empower_pro_blocks_color_contrast( $empower_pro_blocks_fifth_color );

$empower_pro_blocks_sixth_color            = get_option( 'empower_pro_blocks_sixth_color', $empower_pro_blocks_default_colors['sixth'] );
$empower_pro_blocks_sixth_color_brightness = empower_pro_blocks_color_brightness( $empower_pro_blocks_sixth_color, 0.15 );
$empower_pro_blocks_sixth_color_contrast   = empower_pro_blocks_color_contrast( $empower_pro_blocks_sixth_color );

$empower_pro_blocks_seventh_color            = get_option( 'empower_pro_blocks_seventh_color', $empower_pro_blocks_default_colors['seventh'] );
$empower_pro_blocks_seventh_color_brightness = empower_pro_blocks_color_brightness( $empower_pro_blocks_seventh_color, 0.15 );
$empower_pro_blocks_seventh_color_contrast   = empower_pro_blocks_color_contrast( $empower_pro_blocks_seventh_color, 0.15 );

$empower_pro_blocks_eighth_color            = get_option( 'empower_pro_blocks_eighth_color', $empower_pro_blocks_default_colors['eighth'] );
$empower_pro_blocks_eighth_color_brightness = empower_pro_blocks_color_brightness( $empower_pro_blocks_eighth_color, 0.15 );
$empower_pro_blocks_eighth_color_contrast   = empower_pro_blocks_color_contrast( $empower_pro_blocks_eighth_color );

$empower_pro_blocks_text_color            = '#777777';
$empower_pro_blocks_text_color_brightness = empower_pro_blocks_color_brightness( $empower_pro_blocks_text_color, 0.15 );
$empower_pro_blocks_text_color_contrast   = empower_pro_blocks_color_contrast( $empower_pro_blocks_text_color );

$empower_pro_blocks_darktext_color            = '#222222';
$empower_pro_blocks_darktext_color_brightness = empower_pro_blocks_color_brightness( $empower_pro_blocks_darktext_color, 0.15 );
$empower_pro_blocks_darktext_color_contrast   = empower_pro_blocks_color_contrast( $empower_pro_blocks_darktext_color );

$empower_pro_blocks_altbackground_color            = '#f7f7f7';
$empower_pro_blocks_altbackground_color_brightness = empower_pro_blocks_color_brightness( $empower_pro_blocks_altbackground_color, 0.15 );
$empower_pro_blocks_altbackground_color_contrast   = empower_pro_blocks_color_contrast( $empower_pro_blocks_altbackground_color );

$empower_pro_blocks_border_color            = '#edecee';
$empower_pro_blocks_border_color_brightness = empower_pro_blocks_color_brightness( $empower_pro_blocks_border_color, 0.15 );
$empower_pro_blocks_border_color_contrast   = empower_pro_blocks_color_contrast( $empower_pro_blocks_border_color );

$empower_pro_blocks_white_color            = '#ffffff';
$empower_pro_blocks_white_color_brightness = empower_pro_blocks_color_brightness( $empower_pro_blocks_white_color, 0.15 );
$empower_pro_blocks_white_color_contrast   = empower_pro_blocks_color_contrast( $empower_pro_blocks_white_color );

$empower_pro_blocks_logo_sticky                = get_option( 'empower_pro_blocks_logo_sticky', '' );
$empower_pro_blocks_logo_width                 = get_option( 'empower_pro_blocks_logo_width', 270 );
$empower_pro_blocks_logo_top_spacing           = get_option( 'empower_pro_blocks_logo_top_spacing', 20 );
$empower_pro_blocks_logo_bottom_spacing        = get_option( 'empower_pro_blocks_logo_bottom_spacing', 10 );
$empower_pro_blocks_shop_post_menu_search      = get_option( 'empower_pro_blocks_shop_post_menu_search', 0 );
$empower_pro_blocks_shop_hide_menu_cart        = get_option( 'empower_pro_blocks_shop_hide_menu_cart', 0 );
$empower_pro_blocks_shop_gallery_zoom          = get_option( 'empower_pro_blocks_shop_gallery_zoom', 0 );
$empower_pro_blocks_shop_gallery_lightbox      = get_option( 'empower_pro_blocks_shop_gallery_lightbox', 0 );
$empower_pro_blocks_shop_gallery_slider        = get_option( 'empower_pro_blocks_shop_gallery_slider', 0 );
$empower_pro_blocks_shop_hide_stars            = get_option( 'empower_pro_blocks_shop_hide_stars', 0 );
$empower_pro_blocks_shop_product_hide_stars    = get_option( 'empower_pro_blocks_shop_product_hide_stars', 0 );
$empower_pro_blocks_shop_hide_result_count     = get_option( 'empower_pro_blocks_shop_hide_result_count', 0 );
$empower_pro_blocks_shop_hide_catalog_ordering = get_option( 'empower_pro_blocks_shop_hide_catalog_ordering', 0 );
$empower_pro_blocks_shop_product_hide_meta     = get_option( 'empower_pro_blocks_shop_product_hide_meta', 0 );
$empower_pro_blocks_shop_columns               = get_option( 'empower_pro_blocks_shop_columns', 3 );
$empower_pro_blocks_shop_rows                  = get_option( 'empower_pro_blocks_shop_rows', 2 );
$empower_pro_blocks_shop_footer_cta            = get_option( 'empower_pro_blocks_shop_footer_cta', 0 );
$empower_pro_blocks_post_image                 = get_option( 'empower_pro_blocks_post_image', 1 );
$empower_pro_blocks_page_image                 = get_option( 'empower_pro_blocks_page_image', 1 );
$empower_pro_blocks_mobile_cta_text            = get_option( 'empower_pro_blocks_mobile_cta_text', 'Contact' );
$empower_pro_blocks_mega_menu                  = get_option( 'empower_pro_blocks_mega_menu', '' );
$empower_pro_blocks_mobile_menu                = get_option( 'empower_pro_blocks_mobile_menu', '' );
$empower_pro_blocks_footer_menu                = get_option( 'empower_pro_blocks_footer_menu', '' );
$empower_pro_blocks_hide_menu_search           = get_option( 'empower_pro_blocks_hide_menu_search', 1 );
$empower_pro_blocks_portfolio_image            = get_option( 'empower_pro_blocks_portfolio_image', 1 );
$empower_pro_blocks_event_image                = get_option( 'empower_pro_blocks_event_image', 1 );

return array(
	'fonts-url'                    => '//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i|Source+Sans+Pro:100,100i,300,300i,400,400i,600,600i,700,700i&display=swap',
	'title-font-url'               => '',
	'icons-url'                    => '//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
	'icons-js-url'                 => '//unpkg.com/ionicons@5.1.2/dist/ionicons.js',
	'content-width'                => 750,
	// Colors.
	'primary-color'                => $empower_pro_blocks_primary_color,
	'primary-bright-color'         => $empower_pro_blocks_primary_color_brightness,
	'primary-contrast-color'       => $empower_pro_blocks_primary_color_contrast,

	'secondary-color'              => $empower_pro_blocks_secondary_color,
	'secondary-bright-color'       => $empower_pro_blocks_secondary_color_brightness,
	'secondary-contrast-color'     => $empower_pro_blocks_secondary_color_contrast,

	'third-color'          => $empower_pro_blocks_third_color,
	'third-bright-color'   => $empower_pro_blocks_third_color_brightness,
	'third-contrast-color' => $empower_pro_blocks_third_color_contrast,

	'fourth-color'          => $empower_pro_blocks_fourth_color,
	'fourth-bright-color'   => $empower_pro_blocks_fourth_color_brightness,
	'fourth-contrast-color' => $empower_pro_blocks_fourth_color_contrast,

	'fifth-color'          => $empower_pro_blocks_fifth_color,
	'fifth-bright-color'   => $empower_pro_blocks_fifth_color_brightness,
	'fifth-contrast-color' => $empower_pro_blocks_fifth_color_contrast,

	'sixth-color'          => $empower_pro_blocks_sixth_color,
	'sixth-bright-color'   => $empower_pro_blocks_sixth_color_brightness,
	'sixth-contrast-color' => $empower_pro_blocks_sixth_color_contrast,

	'seventh-color'          => $empower_pro_blocks_seventh_color,
	'seventh-bright-color'   => $empower_pro_blocks_seventh_color_brightness,
	'seventh-contrast-color' => $empower_pro_blocks_seventh_color_contrast,

	'eighth-color'          => $empower_pro_blocks_eighth_color,
	'eighth-bright-color'   => $empower_pro_blocks_eighth_color_brightness,
	'eighth-contrast-color' => $empower_pro_blocks_eighth_color_contrast,

	'bodytext-color'          => $empower_pro_blocks_text_color,
	'bodytext-bright-color'   => $empower_pro_blocks_text_color_brightness,
	'bodytext-contrast-color' => $empower_pro_blocks_text_color_contrast,

	'darktext-color'          => $empower_pro_blocks_darktext_color,
	'darktext-bright-color'   => $empower_pro_blocks_darktext_color_brightness,
	'darktext-contrast-color' => $empower_pro_blocks_darktext_color_contrast,

	'altbackground-color'          => $empower_pro_blocks_altbackground_color,
	'altbackground-bright-color'   => $empower_pro_blocks_altbackground_color_brightness,
	'altbackground-contrast-color' => $empower_pro_blocks_altbackground_color_contrast,

	'border-color'          => $empower_pro_blocks_border_color,
	'border-bright-color'   => $empower_pro_blocks_border_color_brightness,
	'border-contrast-color' => $empower_pro_blocks_border_color_contrast,

	'white-color'          => $empower_pro_blocks_white_color,
	'white-bright-color'   => $empower_pro_blocks_white_color_brightness,
	'white-contrast-color' => $empower_pro_blocks_white_color_contrast,

	'default-colors'               => $empower_pro_blocks_default_colors,

	// Logo.
	'logo-sticky'                  => $empower_pro_blocks_logo_sticky,
	'logo-width'                   => $empower_pro_blocks_logo_width,
	'logo-top-spacing'             => $empower_pro_blocks_logo_top_spacing,
	'logo-bottom-spacing'          => $empower_pro_blocks_logo_bottom_spacing,
	// WooCommerce.
	'shop-post-menu-search'        => $empower_pro_blocks_shop_post_menu_search,
	'shop-hide-menu-cart'          => $empower_pro_blocks_shop_hide_menu_cart,
	'shop-gallery-zoom'            => $empower_pro_blocks_shop_gallery_zoom,
	'shop-gallery-lightbox'        => $empower_pro_blocks_shop_gallery_lightbox,
	'shop-gallery-slider'          => $empower_pro_blocks_shop_gallery_slider,
	'shop-hide-stars'              => $empower_pro_blocks_shop_hide_stars,
	'shop-product-hide-stars'      => $empower_pro_blocks_shop_product_hide_stars,
	'shop-hide-result-count'       => $empower_pro_blocks_shop_hide_result_count,
	'shop-hide-catalog-ordering'   => $empower_pro_blocks_shop_hide_catalog_ordering,
	'shop-product-hide-meta'       => $empower_pro_blocks_shop_product_hide_meta,
	'shop-columns'                 => $empower_pro_blocks_shop_columns,
	'shop-rows'                    => $empower_pro_blocks_shop_rows,
	'shop-footer-cta'              => $empower_pro_blocks_shop_footer_cta,
	// Menu.
	'mobile-cta-text'              => $empower_pro_blocks_mobile_cta_text,
	'hide-menu-search'             => $empower_pro_blocks_hide_menu_search,
	'mega_menu'		               => $empower_pro_blocks_mega_menu,
	'mobile_menu'		           => $empower_pro_blocks_mobile_menu,
	'footer_menu'		           => $empower_pro_blocks_footer_menu,
	// Images.
	'post-image'                   => $empower_pro_blocks_post_image,
	'page-image'                   => $empower_pro_blocks_page_image,
	'portfolio-image'              => $empower_pro_blocks_portfolio_image,
	'event-image'                  => $empower_pro_blocks_event_image,
	// Simple Social Icons.
	'simple-social-icons-settings' => array(
		'title'                  => 'Connect',
		'alignment'              => 'aligncenter',
		'background_color'       => '',
		'background_color_hover' => '',
		'border_radius'          => 9999,
		'border_width'           => 0,
		'icon_color'             => $empower_pro_blocks_text_color,
		'icon_color_hover'       => $empower_pro_blocks_text_color_brightness,
		'size'                   => 62,
	),
	// Editor.
	'editor-color-palette'         => array(
		array(
			'name'  => __( 'Primary color', 'empower-pro-blocks' ),
			'slug'  => 'primary',
			'color' => $empower_pro_blocks_primary_color,
		),
		array(
			'name'  => __( 'Secondary color', 'empower-pro-blocks' ),
			'slug'  => 'secondary',
			'color' => $empower_pro_blocks_secondary_color,
		),
		array(
			'name'  => __( 'Third color', 'empower-pro-blocks' ),
			'slug'  => 'third',
			'color' => $empower_pro_blocks_third_color,
		),
		array(
			'name'  => __( 'Fourth color', 'empower-pro-blocks' ),
			'slug'  => 'fourth',
			'color' => $empower_pro_blocks_fourth_color,
		),
		array(
			'name'  => __( 'Fifth color', 'empower-pro-blocks' ),
			'slug'  => 'fifth',
			'color' => $empower_pro_blocks_fifth_color,
		),
		array(
			'name'  => __( 'Sixth color', 'empower-pro-blocks' ),
			'slug'  => 'sixth',
			'color' => $empower_pro_blocks_sixth_color,
		),
		array(
			'name'  => __( 'Seventh color', 'empower-pro-blocks' ),
			'slug'  => 'seventh',
			'color' => $empower_pro_blocks_seventh_color,
		),
		array(
			'name'  => __( 'Eighth color', 'empower-pro-blocks' ),
			'slug'  => 'eighth',
			'color' => $empower_pro_blocks_eighth_color,
		),
		array(
			'name'  => __( 'Body Text color', 'empower-pro-blocks' ),
			'slug'  => 'bodytext',
			'color' => $empower_pro_blocks_text_color,
		),
		array(
			'name'  => __( 'Dark Text color', 'empower-pro-blocks' ),
			'slug'  => 'darktext',
			'color' => $empower_pro_blocks_darktext_color,
		),
		array(
			'name'  => __( 'White color', 'empower-pro-blocks' ),
			'slug'  => 'white',
			'color' => $empower_pro_blocks_white_color,
		),
		array(
			'name'  => __( 'Alternate Background color', 'empower-pro-blocks' ),
			'slug'  => 'altbackground',
			'color' => $empower_pro_blocks_altbackground_color,
		),
		array(
			'name'  => __( 'Border color', 'empower-pro-blocks' ),
			'slug'  => 'border',
			'color' => $empower_pro_blocks_border_color,
		),
	),
	'editor-font-sizes'            => array(
		array(
			'name'      => __( 'Tiny', 'empower-pro-blocks' ),
			'shortName' => __( 'T', 'empower-pro-blocks' ),
			'size'      => 13,
			'slug'      => 'tiny',
		),
		array(
			'name'      => __( 'X Small', 'empower-pro-blocks' ),
			'shortName' => __( 'XS', 'empower-pro-blocks' ),
			'size'      => 14,
			'slug'      => 'xsmall',
		),
		array(
			'name'      => __( 'Small', 'empower-pro-blocks' ),
			'shortName' => __( 'S', 'empower-pro-blocks' ),
			'size'      => 16,
			'slug'      => 'small',
		),
		array(
			'name'      => __( 'Normal', 'empower-pro-blocks' ),
			'shortName' => __( 'M', 'empower-pro-blocks' ),
			'size'      => 18,
			'slug'      => 'normal',
		),
		array(
			'name'      => __( 'Large', 'empower-pro-blocks' ),
			'shortName' => __( 'L', 'empower-pro-blocks' ),
			'size'      => 20,
			'slug'      => 'large',
		),
		array(
			'name'      => __( 'Larger', 'empower-pro-blocks' ),
			'shortName' => __( 'XL', 'empower-pro-blocks' ),
			'size'      => 24,
			'slug'      => 'larger',
		),
		array(
			'name'      => __( 'Huge', 'empower-pro-blocks' ),
			'shortName' => __( 'H', 'empower-pro-blocks' ),
			'size'      => 50,
			'slug'      => 'huge',
		),
	),
);
