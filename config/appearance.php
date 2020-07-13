<?php
/**
 * Empower Pro appearance settings.
 *
 * @package wpm_epb_empower_pro_blocks
 * @author  Web Plant Media
 * @license GPL-2.0-or-later
 * @link    https://webplantmedia.com/product/wpm-epb/
 */

$wpm_epb_default_colors = array(
	'primary'   => '#ed5652',
	'secondary' => '#ff7226',
	'third' => '#a44e9e',
	'fourth' => '#d43c31',
	'fifth' => '#42b97c',
	'sixth' => '#942940',
	'seventh' => '#176e99',
	'eighth' => '#ffb433',
);

$wpm_epb_primary_color              = get_theme_mod( 'wpm_epb_empower_pro_blocks_primary_color', $wpm_epb_default_colors['primary'] );
$wpm_epb_primary_color_brightness   = wpm_epb_empower_pro_blocks_color_brightness( $wpm_epb_primary_color, 0.15 );
$wpm_epb_primary_color_contrast     = wpm_epb_empower_pro_blocks_color_contrast( $wpm_epb_primary_color );
$wpm_epb_secondary_color            = get_theme_mod( 'wpm_epb_empower_pro_blocks_secondary_color', $wpm_epb_default_colors['secondary'] );
$wpm_epb_secondary_color_brightness = wpm_epb_empower_pro_blocks_color_brightness( $wpm_epb_secondary_color, 0.15 );
$wpm_epb_secondary_color_contrast   = wpm_epb_empower_pro_blocks_color_contrast( $wpm_epb_secondary_color );
$wpm_epb_third_color                = get_theme_mod( 'wpm_epb_empower_pro_blocks_third_color', $wpm_epb_default_colors['third'] );
$wpm_epb_third_color_brightness     = wpm_epb_empower_pro_blocks_color_brightness( $wpm_epb_third_color, 0.15 );
$wpm_epb_fourth_color               = get_theme_mod( 'wpm_epb_empower_pro_blocks_fourth_color', $wpm_epb_default_colors['fourth'] );
$wpm_epb_fourth_color_brightness    = wpm_epb_empower_pro_blocks_color_brightness( $wpm_epb_fourth_color, 0.15 );
$wpm_epb_fifth_color                = get_theme_mod( 'wpm_epb_empower_pro_blocks_fifth_color', $wpm_epb_default_colors['fifth'] );
$wpm_epb_fifth_color_brightness     = wpm_epb_empower_pro_blocks_color_brightness( $wpm_epb_fifth_color, 0.15 );
$wpm_epb_sixth_color                = get_theme_mod( 'wpm_epb_empower_pro_blocks_sixth_color', $wpm_epb_default_colors['sixth'] );
$wpm_epb_sixth_color_brightness     = wpm_epb_empower_pro_blocks_color_brightness( $wpm_epb_sixth_color, 0.15 );
$wpm_epb_seventh_color                = get_theme_mod( 'wpm_epb_empower_pro_blocks_seventh_color', $wpm_epb_default_colors['seventh'] );
$wpm_epb_seventh_color_brightness     = wpm_epb_empower_pro_blocks_color_brightness( $wpm_epb_seventh_color, 0.15 );
$wpm_epb_eighth_color                = get_theme_mod( 'wpm_epb_empower_pro_blocks_eighth_color', $wpm_epb_default_colors['eighth'] );
$wpm_epb_eighth_color_brightness     = wpm_epb_empower_pro_blocks_color_brightness( $wpm_epb_eighth_color, 0.15 );
$wpm_epb_text_color                 = '#222222';
$wpm_epb_text_color_brightness      = wpm_epb_empower_pro_blocks_color_brightness( $wpm_epb_text_color, 0.15 );
$wpm_epb_dark_text_color            = '#000000';
$wpm_epb_alt_background_color       = '#f7f7f7';
$wpm_epb_border_color               = '#edecee';
$wpm_epb_logo_sticky                = get_theme_mod( 'wpm_epb_empower_pro_blocks_logo_sticky', '' );
$wpm_epb_logo_width                 = get_theme_mod( 'wpm_epb_empower_pro_blocks_logo_width', 150 );
$wpm_epb_logo_top_spacing           = get_theme_mod( 'wpm_epb_empower_pro_blocks_logo_top_spacing', 10 );
$wpm_epb_logo_bottom_spacing        = get_theme_mod( 'wpm_epb_empower_pro_blocks_logo_bottom_spacing', 10 );
$wpm_epb_shop_post_menu_search      = get_theme_mod( 'wpm_epb_empower_pro_blocks_shop_post_menu_search', 0 );
$wpm_epb_shop_hide_menu_cart        = get_theme_mod( 'wpm_epb_empower_pro_blocks_shop_hide_menu_cart', 0 );
$wpm_epb_shop_gallery_zoom          = get_theme_mod( 'wpm_epb_empower_pro_blocks_shop_gallery_zoom', 0 );
$wpm_epb_shop_gallery_lightbox      = get_theme_mod( 'wpm_epb_empower_pro_blocks_shop_gallery_lightbox', 0 );
$wpm_epb_shop_gallery_slider        = get_theme_mod( 'wpm_epb_empower_pro_blocks_shop_gallery_slider', 0 );
$wpm_epb_shop_hide_stars            = get_theme_mod( 'wpm_epb_empower_pro_blocks_shop_hide_stars', 0 );
$wpm_epb_shop_product_hide_stars    = get_theme_mod( 'wpm_epb_empower_pro_blocks_shop_product_hide_stars', 0 );
$wpm_epb_shop_hide_result_count     = get_theme_mod( 'wpm_epb_empower_pro_blocks_shop_hide_result_count', 0 );
$wpm_epb_shop_hide_catalog_ordering = get_theme_mod( 'wpm_epb_empower_pro_blocks_shop_hide_catalog_ordering', 0 );
$wpm_epb_shop_product_hide_meta     = get_theme_mod( 'wpm_epb_empower_pro_blocks_shop_product_hide_meta', 0 );
$wpm_epb_shop_columns               = get_theme_mod( 'wpm_epb_empower_pro_blocks_shop_columns', 3 );
$wpm_epb_shop_rows                  = get_theme_mod( 'wpm_epb_empower_pro_blocks_shop_rows', 2 );
$wpm_epb_shop_footer_cta            = get_theme_mod( 'wpm_epb_empower_pro_blocks_shop_footer_cta', 0 );
$wpm_epb_post_image                 = get_theme_mod( 'wpm_epb_empower_pro_blocks_post_image', 1 );
$wpm_epb_page_image                 = get_theme_mod( 'wpm_epb_empower_pro_blocks_page_image', 1 );
$wpm_epb_mobile_cta_text            = get_theme_mod( 'wpm_epb_empower_pro_blocks_mobile_cta_text', 'Contact' );
$wpm_epb_mega_menu                  = get_theme_mod( 'wpm_epb_empower_pro_blocks_mega_menu', '' );
$wpm_epb_mobile_menu                = get_theme_mod( 'wpm_epb_empower_pro_blocks_mobile_menu', '' );
$wpm_epb_footer_menu                = get_theme_mod( 'wpm_epb_empower_pro_blocks_footer_menu', '' );
$wpm_epb_hide_menu_search           = get_theme_mod( 'wpm_epb_empower_pro_blocks_hide_menu_search', 1 );
$wpm_epb_portfolio_image            = get_theme_mod( 'wpm_epb_empower_pro_blocks_portfolio_image', 1 );
$wpm_epb_event_image                = get_theme_mod( 'wpm_epb_empower_pro_blocks_event_image', 1 );

return array(
	'fonts-url'                    => '//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i|Source+Sans+Pro:100,100i,300,300i,400,400i,600,600i,700,700i&display=swap',
	'title-font-url'               => '',
	'icons-url'                    => '//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
	'icons-js-url'                 => '//unpkg.com/ionicons@5.0.0/dist/ionicons.js',
	'content-width'                => 750,
	// Colors.
	'primary-color'                => $wpm_epb_primary_color,
	'primary-bright-color'         => $wpm_epb_primary_color_brightness,
	'primary-contrast-color'       => $wpm_epb_primary_color_contrast,
	'secondary-color'              => $wpm_epb_secondary_color,
	'secondary-bright-color'       => $wpm_epb_secondary_color_brightness,
	'secondary-contrast-color'     => $wpm_epb_secondary_color_contrast,
	'third-color'                  => $wpm_epb_third_color,
	'third-bright-color'           => $wpm_epb_third_color_brightness,
	'fourth-color'                 => $wpm_epb_fourth_color,
	'fourth-bright-color'          => $wpm_epb_fourth_color_brightness,
	'fifth-color'                  => $wpm_epb_fifth_color,
	'fifth-bright-color'           => $wpm_epb_fifth_color_brightness,
	'sixth-color'                  => $wpm_epb_sixth_color,
	'sixth-bright-color'           => $wpm_epb_sixth_color_brightness,
	'seventh-color'                => $wpm_epb_seventh_color,
	'seventh-bright-color'         => $wpm_epb_seventh_color_brightness,
	'eighth-color'                 => $wpm_epb_eighth_color,
	'eighth-bright-color'          => $wpm_epb_eighth_color_brightness,
	'dark-text-color'              => $wpm_epb_dark_text_color,
	'text-color'                   => $wpm_epb_text_color,
	'alt-background-color'         => $wpm_epb_alt_background_color,
	'default-colors'               => $wpm_epb_default_colors,
	// Logo.
	'logo-sticky'                  => $wpm_epb_logo_sticky,
	'logo-width'                   => $wpm_epb_logo_width,
	'logo-top-spacing'             => $wpm_epb_logo_top_spacing,
	'logo-bottom-spacing'          => $wpm_epb_logo_bottom_spacing,
	// WooCommerce.
	'shop-post-menu-search'        => $wpm_epb_shop_post_menu_search,
	'shop-hide-menu-cart'          => $wpm_epb_shop_hide_menu_cart,
	'shop-gallery-zoom'            => $wpm_epb_shop_gallery_zoom,
	'shop-gallery-lightbox'        => $wpm_epb_shop_gallery_lightbox,
	'shop-gallery-slider'          => $wpm_epb_shop_gallery_slider,
	'shop-hide-stars'              => $wpm_epb_shop_hide_stars,
	'shop-product-hide-stars'      => $wpm_epb_shop_product_hide_stars,
	'shop-hide-result-count'       => $wpm_epb_shop_hide_result_count,
	'shop-hide-catalog-ordering'   => $wpm_epb_shop_hide_catalog_ordering,
	'shop-product-hide-meta'       => $wpm_epb_shop_product_hide_meta,
	'shop-columns'                 => $wpm_epb_shop_columns,
	'shop-rows'                    => $wpm_epb_shop_rows,
	'shop-footer-cta'              => $wpm_epb_shop_footer_cta,
	// Menu.
	'mobile-cta-text'              => $wpm_epb_mobile_cta_text,
	'hide-menu-search'             => $wpm_epb_hide_menu_search,
	'mega_menu'		               => $wpm_epb_mega_menu,
	'mobile_menu'		           => $wpm_epb_mobile_menu,
	'footer_menu'		           => $wpm_epb_footer_menu,
	// Images.
	'post-image'                   => $wpm_epb_post_image,
	'page-image'                   => $wpm_epb_page_image,
	'portfolio-image'              => $wpm_epb_portfolio_image,
	'event-image'                  => $wpm_epb_event_image,
	// Simple Social Icons.
	'simple-social-icons-settings' => array(
		'title'                  => 'Connect',
		'alignment'              => 'aligncenter',
		'background_color'       => '',
		'background_color_hover' => '',
		'border_radius'          => 9999,
		'border_width'           => 0,
		'icon_color'             => $wpm_epb_text_color,
		'icon_color_hover'       => $wpm_epb_text_color_brightness,
		'size'                   => 62,
	),
	// Editor.
	'editor-color-palette'         => array(
		array(
			'name'  => __( 'Primary color', 'wpm-epb' ),
			'slug'  => 'primary',
			'color' => $wpm_epb_primary_color,
		),
		array(
			'name'  => __( 'Secondary color', 'wpm-epb' ),
			'slug'  => 'secondary',
			'color' => $wpm_epb_secondary_color,
		),
		array(
			'name'  => __( 'Third color', 'wpm-epb' ),
			'slug'  => 'third',
			'color' => $wpm_epb_third_color,
		),
		array(
			'name'  => __( 'Fourth color', 'wpm-epb' ),
			'slug'  => 'fourth',
			'color' => $wpm_epb_fourth_color,
		),
		array(
			'name'  => __( 'Fifth color', 'wpm-epb' ),
			'slug'  => 'fifth',
			'color' => $wpm_epb_fifth_color,
		),
		array(
			'name'  => __( 'Sixth color', 'wpm-epb' ),
			'slug'  => 'sixth',
			'color' => $wpm_epb_sixth_color,
		),
		array(
			'name'  => __( 'Seventh color', 'wpm-epb' ),
			'slug'  => 'seventh',
			'color' => $wpm_epb_seventh_color,
		),
		array(
			'name'  => __( 'Eighth color', 'wpm-epb' ),
			'slug'  => 'eighth',
			'color' => $wpm_epb_eighth_color,
		),
		array(
			'name'  => __( 'Default Text color', 'wpm-epb' ),
			'slug'  => 'default-text',
			'color' => $wpm_epb_text_color,
		),
		array(
			'name'  => __( 'Dark Text color', 'wpm-epb' ),
			'slug'  => 'dark-text',
			'color' => $wpm_epb_dark_text_color,
		),
		array(
			'name'  => __( 'White color', 'wpm-epb' ),
			'slug'  => 'white',
			'color' => '#ffffff',
		),
		array(
			'name'  => __( 'Alternate Background color', 'wpm-epb' ),
			'slug'  => 'alternate-background',
			'color' => $wpm_epb_alt_background_color,
		),
		array(
			'name'  => __( 'Border color', 'wpm-epb' ),
			'slug'  => 'border',
			'color' => $wpm_epb_border_color,
		),
	),
	'editor-font-sizes'            => array(
		array(
			'name'      => __( 'Tiny', 'wpm-epb' ),
			'shortName' => __( 'T', 'wpm-epb' ),
			'size'      => 13,
			'slug'      => 'tiny',
		),
		array(
			'name'      => __( 'X Small', 'wpm-epb' ),
			'shortName' => __( 'XS', 'wpm-epb' ),
			'size'      => 14,
			'slug'      => 'xsmall',
		),
		array(
			'name'      => __( 'Small', 'wpm-epb' ),
			'shortName' => __( 'S', 'wpm-epb' ),
			'size'      => 16,
			'slug'      => 'small',
		),
		array(
			'name'      => __( 'Normal', 'wpm-epb' ),
			'shortName' => __( 'M', 'wpm-epb' ),
			'size'      => 18,
			'slug'      => 'normal',
		),
		array(
			'name'      => __( 'Large', 'wpm-epb' ),
			'shortName' => __( 'L', 'wpm-epb' ),
			'size'      => 20,
			'slug'      => 'large',
		),
		array(
			'name'      => __( 'Larger', 'wpm-epb' ),
			'shortName' => __( 'XL', 'wpm-epb' ),
			'size'      => 24,
			'slug'      => 'larger',
		),
		array(
			'name'      => __( 'Huge', 'wpm-epb' ),
			'shortName' => __( 'H', 'wpm-epb' ),
			'size'      => 50,
			'slug'      => 'huge',
		),
	),
);
