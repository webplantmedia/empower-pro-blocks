<?php
/**
 * Empower Pro Blocks.
 *
 * This file adds the Customizer additions to the Empower Pro Blocks Theme.
 *
 * @package Empower_Pro_Blocks
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/empower-pro-blocks/
 */

add_action( 'customize_register', 'empower_pro_blocks_customizer_register' );
/**
 * Registers settings and controls with the Customizer.
 *
 * @since 1.0.0
 *
 * @param WP_Customize_Manager $wp_customize Customizer object.
 */
function empower_pro_blocks_customizer_register( $wp_customize ) {

	$appearance    = genesis_get_config( 'appearance' );
	$theme_upgrade = genesis_get_config( 'theme-upgrade' );

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial(
			'blogname',
			array(
				'selector' => '.site-title a',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blogdescription',
			array(
				'selector' => '.site-description',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'nav_menu_locations[primary]',
			array(
				'selector' => '.nav-primary',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'nav_menu_locations[secondary]',
			array(
				'selector' => '.nav-secondary',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'nav_menu_locations[tertiary]',
			array(
				'selector' => '.nav-tertiary',
			)
		);
	}

	$wp_customize->add_panel(
		'empower_pro_blocks_settings',
		array(
			'description' => __( 'Customize the Empower Pro Blocks Theme.', 'empower-pro-blocks' ),
			'priority'    => 80,
			'title'       => __( 'Empower Pro Blocks Settings', 'empower-pro-blocks' ),
		)
	);

	// Color 1 settings.
	$wp_customize->add_setting(
		'empower_pro_blocks_primary_color',
		array(
			'default'           => $appearance['primary-color'],
			'sanitize_callback' => 'sanitize_hex_color',
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'empower_pro_blocks_primary_color',
			array(
				'label'    => __( 'Color 1', 'empower-pro-blocks' ),
				'section'  => 'colors',
				'settings' => 'empower_pro_blocks_primary_color',
			)
		)
	);

	// Color 2 settings.
	$wp_customize->add_setting(
		'empower_pro_blocks_secondary_color',
		array(
			'default'           => $appearance['secondary-color'],
			'sanitize_callback' => 'sanitize_hex_color',
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'empower_pro_blocks_secondary_color',
			array(
				'label'    => __( 'Color 2', 'empower-pro-blocks' ),
				'section'  => 'colors',
				'settings' => 'empower_pro_blocks_secondary_color',
			)
		)
	);

	// Menu settings section.
	$wp_customize->add_section(
		'empower_pro_blocks_menu_settings',
		array(
			'description' => sprintf( '<strong>%s</strong>', __( 'Modify the Empower Pro Blocks Theme menu settings.', 'empower-pro-blocks' ) ),
			'title'       => __( 'Menu Settings', 'empower-pro-blocks' ),
			'panel'       => 'empower_pro_blocks_settings',
		)
	);

	// Add search menu checkbox to the Customizer.
	$wp_customize->add_setting(
		'empower_pro_blocks_hide_menu_search',
		array(
			'default'           => $appearance['hide-menu-search'],
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_hide_menu_search',
		array(
			'label'       => __( 'Hide search button in main menu?', 'empower-pro-blocks' ),
			'description' => __( 'Check the box if you want to hide the search feature from displaying in your main menu.', 'empower-pro-blocks' ),
			'section'     => 'empower_pro_blocks_menu_settings',
			'type'        => 'checkbox',
			'settings'    => 'empower_pro_blocks_hide_menu_search',
		)
	);

	// Add search menu checkbox to the Customizer.
	$wp_customize->add_setting(
		'empower_pro_blocks_mobile_cta_text',
		array(
			'default'           => $appearance['mobile-cta-text'],
			'sanitize_callback' => 'wp_kses_post',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_menu_button',
		array(
			'label'       => __( 'Mobile CTA Text', 'empower-pro-blocks' ),
			'description' => __( 'Call to action text to display on mobile devices.', 'empower-pro-blocks' ),
			'section'     => 'empower_pro_blocks_menu_settings',
			'type'        => 'text',
			'settings'    => 'empower_pro_blocks_mobile_cta_text',
		)
	);

	$wp_customize->add_setting(
		'empower_pro_blocks_mega_menu',
		array(
			'default'           => '',
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_mega_menu',
		array(
			'label'       => __( 'Mega Menu', 'empower-pro-blocks' ),
			'description' => __( 'Select page with mega menu.', 'empower-pro-blocks' ),
			'section'     => 'empower_pro_blocks_menu_settings',
			'type'        => 'dropdown-pages',
			'settings'    => 'empower_pro_blocks_mega_menu',
			'allow_addition' => true,
		)
	);

	$wp_customize->add_setting(
		'empower_pro_blocks_mobile_menu',
		array(
			'default'           => '',
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_mobile_menu',
		array(
			'label'       => __( 'Mobile Menu', 'empower-pro-blocks' ),
			'description' => __( 'Select page with mobile menu.', 'empower-pro-blocks' ),
			'section'     => 'empower_pro_blocks_menu_settings',
			'type'        => 'dropdown-pages',
			'settings'    => 'empower_pro_blocks_mobile_menu',
			'allow_addition' => true,
		)
	);

	$wp_customize->add_setting(
		'empower_pro_blocks_footer_menu',
		array(
			'default'           => '',
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_footer_menu',
		array(
			'label'       => __( 'Footer Menu', 'empower-pro-blocks' ),
			'description' => __( 'Select page with footer menu.', 'empower-pro-blocks' ),
			'section'     => 'empower_pro_blocks_menu_settings',
			'type'        => 'dropdown-pages',
			'settings'    => 'empower_pro_blocks_footer_menu',
			'allow_addition' => true,
		)
	);

	// Basic settings section.
	$wp_customize->add_section(
		'empower_pro_blocks_basic_settings',
		array(
			'description' => sprintf( '<strong>%s</strong>', __( 'Modify the Empower Pro Blocks Theme basic settings.', 'empower-pro-blocks' ) ),
			'title'       => __( 'Basic Settings', 'empower-pro-blocks' ),
			'panel'       => 'empower_pro_blocks_settings',
		)
	);

	// Add single post image setting to the Customizer.
	$wp_customize->add_setting(
		'empower_pro_blocks_post_image',
		array(
			'default'           => $appearance['post-image'],
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_post_image',
		array(
			'label'       => __( 'Show featured image on posts?', 'empower-pro-blocks' ),
			'description' => __( 'Check the box if you would like to display the featured image above the content on single posts.', 'empower-pro-blocks' ),
			'section'     => 'empower_pro_blocks_basic_settings',
			'type'        => 'checkbox',
			'settings'    => 'empower_pro_blocks_post_image',
		)
	);

	// Add page setting to the Customizer.
	$wp_customize->add_setting(
		'empower_pro_blocks_page_image',
		array(
			'default'           => $appearance['page-image'],
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_page_image',
		array(
			'label'       => __( 'Show featured image on pages?', 'empower-pro-blocks' ),
			'description' => __( 'Check the box if you would like to display the featured image above the content on single pages.', 'empower-pro-blocks' ),
			'section'     => 'empower_pro_blocks_basic_settings',
			'type'        => 'checkbox',
			'settings'    => 'empower_pro_blocks_page_image',
		)
	);

	// Add upgrade checkbox to the Customizer.
	$wp_customize->add_setting(
		'empower_pro_blocks_check_for_updates',
		array(
			'default'           => $theme_upgrade['check-for-updates'],
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_check_for_updates',
		array(
			'label'       => __( 'Check for theme updates?', 'empower-pro-blocks' ),
			'description' => __( 'Check the box if you would like to receive dashboard updates for the latest version of Empower Pro Blocks theme. If you have edited your theme files with custom code, then you should uncheck this setting.', 'empower-pro-blocks' ),
			'section'     => 'empower_pro_blocks_basic_settings',
			'type'        => 'checkbox',
			'settings'    => 'empower_pro_blocks_check_for_updates',
		)
	);

	// Add portfolio image setting to the Customizer if portfolio in use.
	if ( post_type_exists( 'portfolio' ) ) {
		$wp_customize->add_setting(
			'empower_pro_blocks_portfolio_image',
			array(
				'default'           => $appearance['portfolio-image'],
				'sanitize_callback' => 'absint',
			)
		);

		$wp_customize->add_control(
			'empower_pro_blocks_portfolio_image',
			array(
				'label'       => __( 'Show featured image on portfolio items?', 'empower-pro-blocks' ),
				'description' => __( 'Check the box if you would like to display the featured image above the content on single portfolio items.', 'empower-pro-blocks' ),
				'section'     => 'empower_pro_blocks_basic_settings',
				'type'        => 'checkbox',
				'settings'    => 'empower_pro_blocks_portfolio_image',
			)
		);
	}

	// Add event image setting to the Customizer if events is in use.
	if ( post_type_exists( 'event' ) ) {
		$wp_customize->add_setting(
			'empower_pro_blocks_event_image',
			array(
				'default'           => $appearance['event-image'],
				'sanitize_callback' => 'absint',
			)
		);

		$wp_customize->add_control(
			'empower_pro_blocks_event_image',
			array(
				'label'       => __( 'Show featured image on event items?', 'empower-pro-blocks' ),
				'description' => __( 'Check the box if you would like to display the featured image above the content on single event items.', 'empower-pro-blocks' ),
				'section'     => 'empower_pro_blocks_basic_settings',
				'type'        => 'checkbox',
				'settings'    => 'empower_pro_blocks_event_image',
			)
		);
	}

	// Sticky image.
	$wp_customize->add_setting(
		'empower_pro_blocks_logo_sticky',
		array(
			'default' => $appearance['logo-sticky'],
			// 'sanitize_callback' => 'esc_attr',
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Media_Control(
			$wp_customize,
			'empower_pro_blocks_logo_sticky',
			array(
				'description' => __( 'Select an image for the call to action section above the footer.', 'empower-pro-blocks' ),
				'label'       => __( 'Sticky Logo', 'empower-pro-blocks' ),
				'section'     => 'title_tagline',
				'settings'    => 'empower_pro_blocks_logo_sticky',
				'priority'    => 9,
			)
		)
	);

	$wp_customize->add_setting(
		'empower_pro_blocks_logo_width',
		array(
			'default'           => $appearance['logo-width'],
			'sanitize_callback' => 'absint',
		)
	);

	// Add a control for the logo size.
	$wp_customize->add_control(
		'empower_pro_blocks_logo_width',
		array(
			'label'       => __( 'Logo Width', 'empower-pro-blocks' ),
			'description' => __( 'The maximum width of the logo in pixels.', 'empower-pro-blocks' ),
			'section'     => 'title_tagline',
			'settings'    => 'empower_pro_blocks_logo_width',
			'type'        => 'number',
			'input_attrs' => array(
				'min' => 100,
			),

		)
	);

	$wp_customize->add_setting(
		'empower_pro_blocks_logo_top_spacing',
		array(
			'default'           => $appearance['logo-top-spacing'],
			'sanitize_callback' => 'absint',
		)
	);

	// Add a control for the logo size.
	$wp_customize->add_control(
		'empower_pro_blocks_logo_top_spacing',
		array(
			'label'       => __( 'Logo Top Spacing', 'empower-pro-blocks' ),
			'description' => __( 'The top padding space above logo.', 'empower-pro-blocks' ),
			'section'     => 'title_tagline',
			'settings'    => 'empower_pro_blocks_logo_top_spacing',
			'type'        => 'number',
			'input_attrs' => array(
				'min' => 0,
			),

		)
	);

	$wp_customize->add_setting(
		'empower_pro_blocks_logo_bottom_spacing',
		array(
			'default'           => $appearance['logo-bottom-spacing'],
			'sanitize_callback' => 'absint',
		)
	);

	// Add a control for the logo size.
	$wp_customize->add_control(
		'empower_pro_blocks_logo_bottom_spacing',
		array(
			'label'       => __( 'Logo Bottom Spacing', 'empower-pro-blocks' ),
			'description' => __( 'The bottom padding space below logo.', 'empower-pro-blocks' ),
			'section'     => 'title_tagline',
			'settings'    => 'empower_pro_blocks_logo_bottom_spacing',
			'type'        => 'number',
			'input_attrs' => array(
				'min' => 0,
			),

		)
	);
	$wp_customize->add_setting(
		'empower_pro_blocks_shop_columns',
		array(
			'default'           => $appearance['shop-columns'],
			'sanitize_callback' => 'absint',
		)
	);

	// Add a control for the logo size.
	$wp_customize->add_control(
		'empower_pro_blocks_shop_columns',
		array(
			'label'       => __( 'Shop Columns', 'empower-pro-blocks' ),
			'description' => __( 'The number of columns to display on the shop page.', 'empower-pro-blocks' ),
			'section'     => 'woocommerce_product_catalog',
			'settings'    => 'empower_pro_blocks_shop_columns',
			'type'        => 'select',
			'choices'     => array(
				'2' => esc_html__( '2', 'empower-pro-blocks' ),
				'3' => esc_html__( '3', 'empower-pro-blocks' ),
				'4' => esc_html__( '4', 'empower-pro-blocks' ),
			),

		)
	);

	$wp_customize->add_setting(
		'empower_pro_blocks_shop_rows',
		array(
			'default'           => $appearance['shop-rows'],
			'sanitize_callback' => 'absint',
		)
	);

	// Add a control for the logo size.
	$wp_customize->add_control(
		'empower_pro_blocks_shop_rows',
		array(
			'label'       => __( 'Shop Rows', 'empower-pro-blocks' ),
			'description' => __( 'The number of rows to display on the shop page.', 'empower-pro-blocks' ),
			'section'     => 'woocommerce_product_catalog',
			'settings'    => 'empower_pro_blocks_shop_rows',
			'type'        => 'select',
			'choices'     => array(
				'1'  => esc_html__( '1', 'empower-pro-blocks' ),
				'2'  => esc_html__( '2', 'empower-pro-blocks' ),
				'3'  => esc_html__( '3', 'empower-pro-blocks' ),
				'4'  => esc_html__( '4', 'empower-pro-blocks' ),
				'5'  => esc_html__( '5', 'empower-pro-blocks' ),
				'6'  => esc_html__( '6', 'empower-pro-blocks' ),
				'7'  => esc_html__( '7', 'empower-pro-blocks' ),
				'8'  => esc_html__( '8', 'empower-pro-blocks' ),
				'9'  => esc_html__( '9', 'empower-pro-blocks' ),
				'10' => esc_html__( '10', 'empower-pro-blocks' ),
			),

		)
	);

	// WooCommerce display settings section.
	$wp_customize->add_section(
		'empower_pro_blocks_shop_display_settings',
		array(
			'title' => __( 'Display Settings', 'empower-pro-blocks' ),
			'panel' => 'woocommerce',
		)
	);

	$display = array(
		'post_menu_search'      => array(
			'default' => $appearance['shop-post-menu-search'],
			'label'   => __( 'Search for posts instead of products in the main menu search.', 'empower-pro-blocks' ),
		),
		'hide_menu_cart'        => array(
			'default' => $appearance['shop-hide-menu-cart'],
			'label'   => __( 'Hide shopping cart in main menu', 'empower-pro-blocks' ),
		),
		'hide_result_count'     => array(
			'default' => $appearance['shop-hide-result-count'],
			'label'   => __( 'Hide result count string from shop page', 'empower-pro-blocks' ),
		),
		'hide_catalog_ordering' => array(
			'default' => $appearance['shop-hide-catalog-ordering'],
			'label'   => __( 'Hide ordering dropdown from shop page', 'empower-pro-blocks' ),
		),
		'hide_stars'            => array(
			'default' => $appearance['shop-hide-stars'],
			'label'   => __( 'Hide product review stars from shop page', 'empower-pro-blocks' ),
		),
		'product_hide_stars'    => array(
			'default' => $appearance['shop-product-hide-stars'],
			'label'   => __( 'Hide product review stars from product page', 'empower-pro-blocks' ),
		),
		'product_hide_meta'     => array(
			'default' => $appearance['shop-product-hide-meta'],
			'label'   => __( 'Hide product meta from product page', 'empower-pro-blocks' ),
		),
		'gallery_zoom'          => array(
			'default' => $appearance['shop-gallery-zoom'],
			'label'   => __( 'Disable gallery zoom on product page', 'empower-pro-blocks' ),
		),
		'gallery_lightbox'      => array(
			'default' => $appearance['shop-gallery-lightbox'],
			'label'   => __( 'Disable gallery lightbox on product page', 'empower-pro-blocks' ),
		),
		'gallery_slider'        => array(
			'default' => $appearance['shop-gallery-slider'],
			'label'   => __( 'Disable gallery slider on product page', 'empower-pro-blocks' ),
		),
		'footer_cta'            => array(
			'default' => $appearance['shop-footer-cta'],
			'label'   => __( 'Disable Footer CTA on shop and product pages', 'empower-pro-blocks' ),
		),
	);

	foreach ( $display as $id => $setting ) {
		// WooCommerce display setting.
		$wp_customize->add_setting(
			'empower_pro_blocks_shop_' . $id,
			array(
				'default'           => $setting['default'],
				'sanitize_callback' => 'absint',
			)
		);

		$option = array(
			'label'    => $setting['label'],
			'section'  => 'empower_pro_blocks_shop_display_settings',
			'type'     => 'checkbox',
			'settings' => 'empower_pro_blocks_shop_' . $id,
		);

		if ( isset( $setting['description'] ) && ! empty( $setting['description'] ) ) {
			$option['description'] = $setting['description'];
		}

		if ( isset( $setting['active_callback'] ) && ! empty( $setting['active_callback'] ) ) {
			$option['active_callback'] = $setting['active_callback'];
		}

		$wp_customize->add_control(
			'empower_pro_blocks_shop_' . $id,
			$option
		);
	}

}

add_action( 'customize_preview_init', 'empower_pro_blocks_customize_preview_init' );
/**
 * Custom css to help fix CSS conflicts with theme and customizer view.
 *
 * @return void
 */
function empower_pro_blocks_customize_preview_init() {
	wp_enqueue_style( 'empower-pro-blocks-customizer-style', CHILD_URL . '/css/customize.css', array(), CHILD_THEME_VERSION );
}

/**
 * Check if menu search is selected.
 *
 * @return bool
 */
function empower_pro_blocks_customize_is_menu_search() {
	if ( current_theme_supports( 'empower-pro-blocks-menu-search' ) ) {
		return true;
	}

	return false;
}
