<?php
/**
 * Leadership Pro.
 *
 * This file adds the Customizer additions to the Leadership Pro Theme.
 *
 * @package Leadership_Pro
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/leadership-pro/
 */

add_action( 'customize_register', 'leadership_pro_customizer_register' );
/**
 * Registers settings and controls with the Customizer.
 *
 * @since 1.0.0
 *
 * @param WP_Customize_Manager $wp_customize Customizer object.
 */
function leadership_pro_customizer_register( $wp_customize ) {

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
		'leadership_pro_settings',
		array(
			'description' => __( 'Customize the Leadership Pro Theme.', 'leadership-pro' ),
			'priority'    => 80,
			'title'       => __( 'Leadership Pro Settings', 'leadership-pro' ),
		)
	);

	// Color 1 settings.
	$wp_customize->add_setting(
		'leadership_pro_primary_color',
		array(
			'default'           => $appearance['primary-color'],
			'sanitize_callback' => 'sanitize_hex_color',
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'leadership_pro_primary_color',
			array(
				'label'    => __( 'Color 1', 'leadership-pro' ),
				'section'  => 'colors',
				'settings' => 'leadership_pro_primary_color',
			)
		)
	);

	// Color 2 settings.
	$wp_customize->add_setting(
		'leadership_pro_secondary_color',
		array(
			'default'           => $appearance['secondary-color'],
			'sanitize_callback' => 'sanitize_hex_color',
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'leadership_pro_secondary_color',
			array(
				'label'    => __( 'Color 2', 'leadership-pro' ),
				'section'  => 'colors',
				'settings' => 'leadership_pro_secondary_color',
			)
		)
	);

	// Menu settings section.
	$wp_customize->add_section(
		'leadership_pro_menu_settings',
		array(
			'description' => sprintf( '<strong>%s</strong>', __( 'Modify the Leadership Pro Theme menu settings.', 'leadership-pro' ) ),
			'title'       => __( 'Menu Settings', 'leadership-pro' ),
			'panel'       => 'leadership_pro_settings',
		)
	);

	// Add search menu checkbox to the Customizer.
	$wp_customize->add_setting(
		'leadership_pro_hide_menu_search',
		array(
			'default'           => $appearance['hide-menu-search'],
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'leadership_pro_hide_menu_search',
		array(
			'label'       => __( 'Hide search button in main menu?', 'leadership-pro' ),
			'description' => __( 'Check the box if you want to hide the search feature from displaying in your main menu.', 'leadership-pro' ),
			'section'     => 'leadership_pro_menu_settings',
			'type'        => 'checkbox',
			'settings'    => 'leadership_pro_hide_menu_search',
		)
	);

	// Add search menu checkbox to the Customizer.
	$wp_customize->add_setting(
		'leadership_pro_mobile_cta_text',
		array(
			'default'           => $appearance['mobile-cta-text'],
			'sanitize_callback' => 'wp_kses_post',
		)
	);

	$wp_customize->add_control(
		'leadership_pro_menu_button',
		array(
			'label'       => __( 'Mobile CTA Text', 'leadership-pro' ),
			'description' => __( 'Call to action text to display on mobile devices.', 'leadership-pro' ),
			'section'     => 'leadership_pro_menu_settings',
			'type'        => 'text',
			'settings'    => 'leadership_pro_mobile_cta_text',
		)
	);

	$wp_customize->add_setting(
		'leadership_pro_mega_menu',
		array(
			'default'           => '',
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'leadership_pro_mega_menu',
		array(
			'label'       => __( 'Mega Menu', 'leadership-pro' ),
			'description' => __( 'Select page with mega menu.', 'leadership-pro' ),
			'section'     => 'leadership_pro_menu_settings',
			'type'        => 'dropdown-pages',
			'settings'    => 'leadership_pro_mega_menu',
			'allow_addition' => true,
		)
	);

	$wp_customize->add_setting(
		'leadership_pro_mobile_menu',
		array(
			'default'           => '',
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'leadership_pro_mobile_menu',
		array(
			'label'       => __( 'Mobile Menu', 'leadership-pro' ),
			'description' => __( 'Select page with mobile menu.', 'leadership-pro' ),
			'section'     => 'leadership_pro_menu_settings',
			'type'        => 'dropdown-pages',
			'settings'    => 'leadership_pro_mobile_menu',
			'allow_addition' => true,
		)
	);

	$wp_customize->add_setting(
		'leadership_pro_footer_menu',
		array(
			'default'           => '',
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'leadership_pro_footer_menu',
		array(
			'label'       => __( 'Footer Menu', 'leadership-pro' ),
			'description' => __( 'Select page with footer menu.', 'leadership-pro' ),
			'section'     => 'leadership_pro_menu_settings',
			'type'        => 'dropdown-pages',
			'settings'    => 'leadership_pro_footer_menu',
			'allow_addition' => true,
		)
	);

	// Basic settings section.
	$wp_customize->add_section(
		'leadership_pro_basic_settings',
		array(
			'description' => sprintf( '<strong>%s</strong>', __( 'Modify the Leadership Pro Theme basic settings.', 'leadership-pro' ) ),
			'title'       => __( 'Basic Settings', 'leadership-pro' ),
			'panel'       => 'leadership_pro_settings',
		)
	);

	// Add single post image setting to the Customizer.
	$wp_customize->add_setting(
		'leadership_pro_post_image',
		array(
			'default'           => $appearance['post-image'],
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'leadership_pro_post_image',
		array(
			'label'       => __( 'Show featured image on posts?', 'leadership-pro' ),
			'description' => __( 'Check the box if you would like to display the featured image above the content on single posts.', 'leadership-pro' ),
			'section'     => 'leadership_pro_basic_settings',
			'type'        => 'checkbox',
			'settings'    => 'leadership_pro_post_image',
		)
	);

	// Add page setting to the Customizer.
	$wp_customize->add_setting(
		'leadership_pro_page_image',
		array(
			'default'           => $appearance['page-image'],
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'leadership_pro_page_image',
		array(
			'label'       => __( 'Show featured image on pages?', 'leadership-pro' ),
			'description' => __( 'Check the box if you would like to display the featured image above the content on single pages.', 'leadership-pro' ),
			'section'     => 'leadership_pro_basic_settings',
			'type'        => 'checkbox',
			'settings'    => 'leadership_pro_page_image',
		)
	);

	// Add upgrade checkbox to the Customizer.
	$wp_customize->add_setting(
		'leadership_pro_check_for_updates',
		array(
			'default'           => $theme_upgrade['check-for-updates'],
			'sanitize_callback' => 'absint',
		)
	);

	$wp_customize->add_control(
		'leadership_pro_check_for_updates',
		array(
			'label'       => __( 'Check for theme updates?', 'leadership-pro' ),
			'description' => __( 'Check the box if you would like to receive dashboard updates for the latest version of Leadership Pro theme. If you have edited your theme files with custom code, then you should uncheck this setting.', 'leadership-pro' ),
			'section'     => 'leadership_pro_basic_settings',
			'type'        => 'checkbox',
			'settings'    => 'leadership_pro_check_for_updates',
		)
	);

	// Add portfolio image setting to the Customizer if portfolio in use.
	if ( post_type_exists( 'portfolio' ) ) {
		$wp_customize->add_setting(
			'leadership_pro_portfolio_image',
			array(
				'default'           => $appearance['portfolio-image'],
				'sanitize_callback' => 'absint',
			)
		);

		$wp_customize->add_control(
			'leadership_pro_portfolio_image',
			array(
				'label'       => __( 'Show featured image on portfolio items?', 'leadership-pro' ),
				'description' => __( 'Check the box if you would like to display the featured image above the content on single portfolio items.', 'leadership-pro' ),
				'section'     => 'leadership_pro_basic_settings',
				'type'        => 'checkbox',
				'settings'    => 'leadership_pro_portfolio_image',
			)
		);
	}

	// Add event image setting to the Customizer if events is in use.
	if ( post_type_exists( 'event' ) ) {
		$wp_customize->add_setting(
			'leadership_pro_event_image',
			array(
				'default'           => $appearance['event-image'],
				'sanitize_callback' => 'absint',
			)
		);

		$wp_customize->add_control(
			'leadership_pro_event_image',
			array(
				'label'       => __( 'Show featured image on event items?', 'leadership-pro' ),
				'description' => __( 'Check the box if you would like to display the featured image above the content on single event items.', 'leadership-pro' ),
				'section'     => 'leadership_pro_basic_settings',
				'type'        => 'checkbox',
				'settings'    => 'leadership_pro_event_image',
			)
		);
	}

	// Sticky image.
	$wp_customize->add_setting(
		'leadership_pro_logo_sticky',
		array(
			'default' => $appearance['logo-sticky'],
			// 'sanitize_callback' => 'esc_attr',
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Media_Control(
			$wp_customize,
			'leadership_pro_logo_sticky',
			array(
				'description' => __( 'Select an image for the call to action section above the footer.', 'leadership-pro' ),
				'label'       => __( 'Sticky Logo', 'leadership-pro' ),
				'section'     => 'title_tagline',
				'settings'    => 'leadership_pro_logo_sticky',
				'priority'    => 9,
			)
		)
	);

	$wp_customize->add_setting(
		'leadership_pro_logo_width',
		array(
			'default'           => $appearance['logo-width'],
			'sanitize_callback' => 'absint',
		)
	);

	// Add a control for the logo size.
	$wp_customize->add_control(
		'leadership_pro_logo_width',
		array(
			'label'       => __( 'Logo Width', 'leadership-pro' ),
			'description' => __( 'The maximum width of the logo in pixels.', 'leadership-pro' ),
			'section'     => 'title_tagline',
			'settings'    => 'leadership_pro_logo_width',
			'type'        => 'number',
			'input_attrs' => array(
				'min' => 100,
			),

		)
	);

	$wp_customize->add_setting(
		'leadership_pro_logo_top_spacing',
		array(
			'default'           => $appearance['logo-top-spacing'],
			'sanitize_callback' => 'absint',
		)
	);

	// Add a control for the logo size.
	$wp_customize->add_control(
		'leadership_pro_logo_top_spacing',
		array(
			'label'       => __( 'Logo Top Spacing', 'leadership-pro' ),
			'description' => __( 'The top padding space above logo.', 'leadership-pro' ),
			'section'     => 'title_tagline',
			'settings'    => 'leadership_pro_logo_top_spacing',
			'type'        => 'number',
			'input_attrs' => array(
				'min' => 0,
			),

		)
	);

	$wp_customize->add_setting(
		'leadership_pro_logo_bottom_spacing',
		array(
			'default'           => $appearance['logo-bottom-spacing'],
			'sanitize_callback' => 'absint',
		)
	);

	// Add a control for the logo size.
	$wp_customize->add_control(
		'leadership_pro_logo_bottom_spacing',
		array(
			'label'       => __( 'Logo Bottom Spacing', 'leadership-pro' ),
			'description' => __( 'The bottom padding space below logo.', 'leadership-pro' ),
			'section'     => 'title_tagline',
			'settings'    => 'leadership_pro_logo_bottom_spacing',
			'type'        => 'number',
			'input_attrs' => array(
				'min' => 0,
			),

		)
	);
	$wp_customize->add_setting(
		'leadership_pro_shop_columns',
		array(
			'default'           => $appearance['shop-columns'],
			'sanitize_callback' => 'absint',
		)
	);

	// Add a control for the logo size.
	$wp_customize->add_control(
		'leadership_pro_shop_columns',
		array(
			'label'       => __( 'Shop Columns', 'leadership-pro' ),
			'description' => __( 'The number of columns to display on the shop page.', 'leadership-pro' ),
			'section'     => 'woocommerce_product_catalog',
			'settings'    => 'leadership_pro_shop_columns',
			'type'        => 'select',
			'choices'     => array(
				'2' => esc_html__( '2', 'leadership-pro' ),
				'3' => esc_html__( '3', 'leadership-pro' ),
				'4' => esc_html__( '4', 'leadership-pro' ),
			),

		)
	);

	$wp_customize->add_setting(
		'leadership_pro_shop_rows',
		array(
			'default'           => $appearance['shop-rows'],
			'sanitize_callback' => 'absint',
		)
	);

	// Add a control for the logo size.
	$wp_customize->add_control(
		'leadership_pro_shop_rows',
		array(
			'label'       => __( 'Shop Rows', 'leadership-pro' ),
			'description' => __( 'The number of rows to display on the shop page.', 'leadership-pro' ),
			'section'     => 'woocommerce_product_catalog',
			'settings'    => 'leadership_pro_shop_rows',
			'type'        => 'select',
			'choices'     => array(
				'1'  => esc_html__( '1', 'leadership-pro' ),
				'2'  => esc_html__( '2', 'leadership-pro' ),
				'3'  => esc_html__( '3', 'leadership-pro' ),
				'4'  => esc_html__( '4', 'leadership-pro' ),
				'5'  => esc_html__( '5', 'leadership-pro' ),
				'6'  => esc_html__( '6', 'leadership-pro' ),
				'7'  => esc_html__( '7', 'leadership-pro' ),
				'8'  => esc_html__( '8', 'leadership-pro' ),
				'9'  => esc_html__( '9', 'leadership-pro' ),
				'10' => esc_html__( '10', 'leadership-pro' ),
			),

		)
	);

	// WooCommerce display settings section.
	$wp_customize->add_section(
		'leadership_pro_shop_display_settings',
		array(
			'title' => __( 'Display Settings', 'leadership-pro' ),
			'panel' => 'woocommerce',
		)
	);

	$display = array(
		'post_menu_search'      => array(
			'default' => $appearance['shop-post-menu-search'],
			'label'   => __( 'Search for posts instead of products in the main menu search.', 'leadership-pro' ),
		),
		'hide_menu_cart'        => array(
			'default' => $appearance['shop-hide-menu-cart'],
			'label'   => __( 'Hide shopping cart in main menu', 'leadership-pro' ),
		),
		'hide_result_count'     => array(
			'default' => $appearance['shop-hide-result-count'],
			'label'   => __( 'Hide result count string from shop page', 'leadership-pro' ),
		),
		'hide_catalog_ordering' => array(
			'default' => $appearance['shop-hide-catalog-ordering'],
			'label'   => __( 'Hide ordering dropdown from shop page', 'leadership-pro' ),
		),
		'hide_stars'            => array(
			'default' => $appearance['shop-hide-stars'],
			'label'   => __( 'Hide product review stars from shop page', 'leadership-pro' ),
		),
		'product_hide_stars'    => array(
			'default' => $appearance['shop-product-hide-stars'],
			'label'   => __( 'Hide product review stars from product page', 'leadership-pro' ),
		),
		'product_hide_meta'     => array(
			'default' => $appearance['shop-product-hide-meta'],
			'label'   => __( 'Hide product meta from product page', 'leadership-pro' ),
		),
		'gallery_zoom'          => array(
			'default' => $appearance['shop-gallery-zoom'],
			'label'   => __( 'Disable gallery zoom on product page', 'leadership-pro' ),
		),
		'gallery_lightbox'      => array(
			'default' => $appearance['shop-gallery-lightbox'],
			'label'   => __( 'Disable gallery lightbox on product page', 'leadership-pro' ),
		),
		'gallery_slider'        => array(
			'default' => $appearance['shop-gallery-slider'],
			'label'   => __( 'Disable gallery slider on product page', 'leadership-pro' ),
		),
		'footer_cta'            => array(
			'default' => $appearance['shop-footer-cta'],
			'label'   => __( 'Disable Footer CTA on shop and product pages', 'leadership-pro' ),
		),
	);

	foreach ( $display as $id => $setting ) {
		// WooCommerce display setting.
		$wp_customize->add_setting(
			'leadership_pro_shop_' . $id,
			array(
				'default'           => $setting['default'],
				'sanitize_callback' => 'absint',
			)
		);

		$option = array(
			'label'    => $setting['label'],
			'section'  => 'leadership_pro_shop_display_settings',
			'type'     => 'checkbox',
			'settings' => 'leadership_pro_shop_' . $id,
		);

		if ( isset( $setting['description'] ) && ! empty( $setting['description'] ) ) {
			$option['description'] = $setting['description'];
		}

		if ( isset( $setting['active_callback'] ) && ! empty( $setting['active_callback'] ) ) {
			$option['active_callback'] = $setting['active_callback'];
		}

		$wp_customize->add_control(
			'leadership_pro_shop_' . $id,
			$option
		);
	}

}

add_action( 'customize_preview_init', 'leadership_pro_customize_preview_init' );
/**
 * Custom css to help fix CSS conflicts with theme and customizer view.
 *
 * @return void
 */
function leadership_pro_customize_preview_init() {
	wp_enqueue_style( 'leadership-pro-customizer-style', CHILD_URL . '/css/customize.css', array(), CHILD_THEME_VERSION );
}

/**
 * Check if menu search is selected.
 *
 * @return bool
 */
function leadership_pro_customize_is_menu_search() {
	if ( current_theme_supports( 'leadership-pro-menu-search' ) ) {
		return true;
	}

	return false;
}
