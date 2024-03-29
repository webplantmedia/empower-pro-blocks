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

add_action('customize_register', 'empower_pro_blocks_customizer_register');
/**
 * Registers settings and controls with the Customizer.
 *
 * @since 1.0.0
 *
 * @param WP_Customize_Manager $wp_customize Customizer object.
 */
function empower_pro_blocks_customizer_register($wp_customize)
{

	global $empower_pro_blocks_defaults;
	$theme_upgrade = empower_pro_blocks_get_config('theme-upgrade');
	$site_element_pages = empower_pro_blocks_fetch_all_site_elements();

	if (isset($wp_customize->selective_refresh)) {
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
			'nav_menu_locations[primary-home]',
			array(
				'selector' => '.nav-primary-home',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'nav_menu_locations[primary-mba]',
			array(
				'selector' => '.nav-primary-mba',
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
			'description' => __('Customize the Empower Pro Blocks Theme.', 'empower-pro-blocks'),
			'priority'    => 80,
			'title'       => __('Empower Pro Blocks Settings', 'empower-pro-blocks'),
		)
	);

	// Menu settings section.
	$wp_customize->add_section(
		'empower_pro_blocks_menu_settings',
		array(
			'description' => sprintf('<strong>%s</strong>', __('Modify the Empower Pro Blocks Theme menu settings.', 'empower-pro-blocks')),
			'title'       => __('Menu Settings', 'empower-pro-blocks'),
			'panel'       => 'empower_pro_blocks_settings',
		)
	);

	// Add search menu checkbox to the Customizer.
	$wp_customize->add_setting(
		'empower_pro_blocks_hide_menu_search',
		array(
			'default'           => $empower_pro_blocks_defaults['hide-menu-search'],
			'sanitize_callback' => 'absint',
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_hide_menu_search',
		array(
			'label'       => __('Hide search button in main menu?', 'empower-pro-blocks'),
			'description' => __('Check the box if you want to hide the search feature from displaying in your main menu.', 'empower-pro-blocks'),
			'section'     => 'empower_pro_blocks_menu_settings',
			'type'        => 'checkbox',
			'settings'    => 'empower_pro_blocks_hide_menu_search',
		)
	);

	// Add search menu checkbox to the Customizer.
	$wp_customize->add_setting(
		'empower_pro_blocks_mobile_cta_text',
		array(
			'default'           => $empower_pro_blocks_defaults['mobile-cta-text'],
			'sanitize_callback' => 'wp_kses_post',
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_menu_button',
		array(
			'label'       => __('Mobile CTA Text', 'empower-pro-blocks'),
			'description' => __('Call to action text to display on mobile devices.', 'empower-pro-blocks'),
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
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_mega_menu',
		array(
			'label'       => __('Mega Menu', 'empower-pro-blocks'),
			'description' => __('Select page with mega menu.', 'empower-pro-blocks'),
			'section'     => 'empower_pro_blocks_menu_settings',
			'type'        => 'select',
			'settings'    => 'empower_pro_blocks_mega_menu',
			'choices'  => $site_element_pages,
			'default'  => $empower_pro_blocks_defaults['mega-menu'],
		)
	);

	$wp_customize->add_setting(
		'empower_pro_blocks_mobile_menu',
		array(
			'default'           => '',
			'sanitize_callback' => 'absint',
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_mobile_menu',
		array(
			'label'       => __('Mobile Menu', 'empower-pro-blocks'),
			'description' => __('Select page with mobile menu.', 'empower-pro-blocks'),
			'section'     => 'empower_pro_blocks_menu_settings',
			'type'        => 'select',
			'settings'    => 'empower_pro_blocks_mobile_menu',
			'choices'  => $site_element_pages,
			'default'  => $empower_pro_blocks_defaults['mobile-menu'],
		)
	);

	$wp_customize->add_setting(
		'empower_pro_blocks_mega_menu_home',
		array(
			'default'           => '',
			'sanitize_callback' => 'absint',
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_mega_menu_home',
		array(
			'label'       => __('Mega Menu (Home)', 'empower-pro-blocks'),
			'description' => __('Select page with mega menu.', 'empower-pro-blocks'),
			'section'     => 'empower_pro_blocks_menu_settings',
			'type'        => 'select',
			'settings'    => 'empower_pro_blocks_mega_menu_home',
			'choices'  => $site_element_pages,
			'default'  => $empower_pro_blocks_defaults['mega-menu-home'],
		)
	);

	$wp_customize->add_setting(
		'empower_pro_blocks_mobile_menu_home',
		array(
			'default'           => '',
			'sanitize_callback' => 'absint',
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_mobile_menu_home',
		array(
			'label'       => __('Mobile Menu (Home', 'empower-pro-blocks'),
			'description' => __('Select page with mobile menu.', 'empower-pro-blocks'),
			'section'     => 'empower_pro_blocks_menu_settings',
			'type'        => 'select',
			'settings'    => 'empower_pro_blocks_mobile_menu_home',
			'choices'  => $site_element_pages,
			'default'  => $empower_pro_blocks_defaults['mobile-menu-home'],
		)
	);

	$wp_customize->add_setting(
		'empower_pro_blocks_mega_menu_mba',
		array(
			'default'           => '',
			'sanitize_callback' => 'absint',
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_mega_menu_mba',
		array(
			'label'       => __('Mega Menu (MBA)', 'empower-pro-blocks'),
			'description' => __('Select page with mega menu.', 'empower-pro-blocks'),
			'section'     => 'empower_pro_blocks_menu_settings',
			'type'        => 'select',
			'settings'    => 'empower_pro_blocks_mega_menu_mba',
			'choices'  => $site_element_pages,
			'default'  => $empower_pro_blocks_defaults['mega-menu-mba'],
		)
	);

	$wp_customize->add_setting(
		'empower_pro_blocks_mobile_menu_mba',
		array(
			'default'           => '',
			'sanitize_callback' => 'absint',
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_mobile_menu_mba',
		array(
			'label'       => __('Mobile Menu (MBA)', 'empower-pro-blocks'),
			'description' => __('Select page with mobile menu.', 'empower-pro-blocks'),
			'section'     => 'empower_pro_blocks_menu_settings',
			'type'        => 'select',
			'settings'    => 'empower_pro_blocks_mobile_menu_mba',
			'choices'  => $site_element_pages,
			'default'  => $empower_pro_blocks_defaults['mobile-menu-mba'],
		)
	);

	$wp_customize->add_setting(
		'empower_pro_blocks_footer_menu',
		array(
			'default'           => '',
			'sanitize_callback' => 'absint',
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_footer_menu',
		array(
			'label'       => __('Footer Menu', 'empower-pro-blocks'),
			'description' => __('Select page with footer menu.', 'empower-pro-blocks'),
			'section'     => 'empower_pro_blocks_menu_settings',
			'type'        => 'select',
			'settings'    => 'empower_pro_blocks_footer_menu',
			'choices'  => $site_element_pages,
			'default'  => $empower_pro_blocks_defaults['footer-menu'],
		)
	);

	$wp_customize->add_setting(
		'empower_pro_blocks_popup',
		array(
			'default'           => '',
			'sanitize_callback' => 'absint',
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_popup',
		array(
			'label'       => __('Popup', 'empower-pro-blocks'),
			'description' => __('Select page for call to action popup.', 'empower-pro-blocks'),
			'section'     => 'empower_pro_blocks_menu_settings',
			'type'        => 'select',
			'settings'    => 'empower_pro_blocks_popup',
			'choices'  => $site_element_pages,
			'default'  => $empower_pro_blocks_defaults['popup'],
		)
	);

	// Basic settings section.
	$wp_customize->add_section(
		'empower_pro_blocks_basic_settings',
		array(
			'description' => sprintf('<strong>%s</strong>', __('Modify the Empower Pro Blocks Theme basic settings.', 'empower-pro-blocks')),
			'title'       => __('Basic Settings', 'empower-pro-blocks'),
			'panel'       => 'empower_pro_blocks_settings',
		)
	);

	// Add single post image setting to the Customizer.
	$wp_customize->add_setting(
		'empower_pro_blocks_post_image',
		array(
			'default'           => $empower_pro_blocks_defaults['post-image'],
			'sanitize_callback' => 'absint',
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_post_image',
		array(
			'label'       => __('Show featured image on posts?', 'empower-pro-blocks'),
			'description' => __('Check the box if you would like to display the featured image above the content on single posts.', 'empower-pro-blocks'),
			'section'     => 'empower_pro_blocks_basic_settings',
			'type'        => 'checkbox',
			'settings'    => 'empower_pro_blocks_post_image',
		)
	);

	// Add page setting to the Customizer.
	$wp_customize->add_setting(
		'empower_pro_blocks_page_image',
		array(
			'default'           => $empower_pro_blocks_defaults['page-image'],
			'sanitize_callback' => 'absint',
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_page_image',
		array(
			'label'       => __('Show featured image on pages?', 'empower-pro-blocks'),
			'description' => __('Check the box if you would like to display the featured image above the content on single pages.', 'empower-pro-blocks'),
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
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_check_for_updates',
		array(
			'label'       => __('Check for theme updates?', 'empower-pro-blocks'),
			'description' => __('Check the box if you would like to receive dashboard updates for the latest version of Empower Pro Blocks theme. If you have edited your theme files with custom code, then you should uncheck this setting.', 'empower-pro-blocks'),
			'section'     => 'empower_pro_blocks_basic_settings',
			'type'        => 'checkbox',
			'settings'    => 'empower_pro_blocks_check_for_updates',
		)
	);

	// Add portfolio image setting to the Customizer if portfolio in use.
	if (post_type_exists('portfolio')) {
		$wp_customize->add_setting(
			'empower_pro_blocks_portfolio_image',
			array(
				'default'           => $empower_pro_blocks_defaults['portfolio-image'],
				'sanitize_callback' => 'absint',
				'type' => 'option',
			)
		);

		$wp_customize->add_control(
			'empower_pro_blocks_portfolio_image',
			array(
				'label'       => __('Show featured image on portfolio items?', 'empower-pro-blocks'),
				'description' => __('Check the box if you would like to display the featured image above the content on single portfolio items.', 'empower-pro-blocks'),
				'section'     => 'empower_pro_blocks_basic_settings',
				'type'        => 'checkbox',
				'settings'    => 'empower_pro_blocks_portfolio_image',
			)
		);
	}

	// Add event image setting to the Customizer if events is in use.
	if (post_type_exists('event')) {
		$wp_customize->add_setting(
			'empower_pro_blocks_event_image',
			array(
				'default'           => $empower_pro_blocks_defaults['event-image'],
				'sanitize_callback' => 'absint',
				'type' => 'option',
			)
		);

		$wp_customize->add_control(
			'empower_pro_blocks_event_image',
			array(
				'label'       => __('Show featured image on event items?', 'empower-pro-blocks'),
				'description' => __('Check the box if you would like to display the featured image above the content on single event items.', 'empower-pro-blocks'),
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
			'default' => $empower_pro_blocks_defaults['logo-sticky'],
			// 'sanitize_callback' => 'esc_attr',
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Media_Control(
			$wp_customize,
			'empower_pro_blocks_logo_sticky',
			array(
				'description' => __('Select an image for the call to action section above the footer.', 'empower-pro-blocks'),
				'label'       => __('Sticky Logo', 'empower-pro-blocks'),
				'section'     => 'title_tagline',
				'settings'    => 'empower_pro_blocks_logo_sticky',
				'priority'    => 9,
			)
		)
	);

	$wp_customize->add_setting(
		'empower_pro_blocks_logo_width',
		array(
			'default'           => $empower_pro_blocks_defaults['logo-width'],
			'sanitize_callback' => 'absint',
			'type' => 'option',
		)
	);

	// Add a control for the logo size.
	$wp_customize->add_control(
		'empower_pro_blocks_logo_width',
		array(
			'label'       => __('Logo Width', 'empower-pro-blocks'),
			'description' => __('The maximum width of the logo in pixels.', 'empower-pro-blocks'),
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
			'default'           => $empower_pro_blocks_defaults['logo-top-spacing'],
			'sanitize_callback' => 'absint',
			'type' => 'option',
		)
	);

	// Add a control for the logo size.
	$wp_customize->add_control(
		'empower_pro_blocks_logo_top_spacing',
		array(
			'label'       => __('Logo Top Spacing', 'empower-pro-blocks'),
			'description' => __('The top padding space above logo.', 'empower-pro-blocks'),
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
			'default'           => $empower_pro_blocks_defaults['logo-bottom-spacing'],
			'sanitize_callback' => 'absint',
			'type' => 'option',
		)
	);

	// Add a control for the logo size.
	$wp_customize->add_control(
		'empower_pro_blocks_logo_bottom_spacing',
		array(
			'label'       => __('Logo Bottom Spacing', 'empower-pro-blocks'),
			'description' => __('The bottom padding space below logo.', 'empower-pro-blocks'),
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
			'default'           => $empower_pro_blocks_defaults['shop-columns'],
			'sanitize_callback' => 'absint',
			'type' => 'option',
		)
	);

	// Add a control for the logo size.
	$wp_customize->add_control(
		'empower_pro_blocks_shop_columns',
		array(
			'label'       => __('Shop Columns', 'empower-pro-blocks'),
			'description' => __('The number of columns to display on the shop page.', 'empower-pro-blocks'),
			'section'     => 'woocommerce_product_catalog',
			'settings'    => 'empower_pro_blocks_shop_columns',
			'type'        => 'select',
			'choices'     => array(
				'2' => esc_html__('2', 'empower-pro-blocks'),
				'3' => esc_html__('3', 'empower-pro-blocks'),
				'4' => esc_html__('4', 'empower-pro-blocks'),
			),

		)
	);

	$wp_customize->add_setting(
		'empower_pro_blocks_shop_rows',
		array(
			'default'           => $empower_pro_blocks_defaults['shop-rows'],
			'sanitize_callback' => 'absint',
			'type' => 'option',
		)
	);

	// Add a control for the logo size.
	$wp_customize->add_control(
		'empower_pro_blocks_shop_rows',
		array(
			'label'       => __('Shop Rows', 'empower-pro-blocks'),
			'description' => __('The number of rows to display on the shop page.', 'empower-pro-blocks'),
			'section'     => 'woocommerce_product_catalog',
			'settings'    => 'empower_pro_blocks_shop_rows',
			'type'        => 'select',
			'choices'     => array(
				'1'  => esc_html__('1', 'empower-pro-blocks'),
				'2'  => esc_html__('2', 'empower-pro-blocks'),
				'3'  => esc_html__('3', 'empower-pro-blocks'),
				'4'  => esc_html__('4', 'empower-pro-blocks'),
				'5'  => esc_html__('5', 'empower-pro-blocks'),
				'6'  => esc_html__('6', 'empower-pro-blocks'),
				'7'  => esc_html__('7', 'empower-pro-blocks'),
				'8'  => esc_html__('8', 'empower-pro-blocks'),
				'9'  => esc_html__('9', 'empower-pro-blocks'),
				'10' => esc_html__('10', 'empower-pro-blocks'),
			),

		)
	);

	// WooCommerce display settings section.
	$wp_customize->add_section(
		'empower_pro_blocks_shop_display_settings',
		array(
			'title' => __('Display Settings', 'empower-pro-blocks'),
			'panel' => 'woocommerce',
		)
	);

	$display = array(
		'post_menu_search'      => array(
			'default' => $empower_pro_blocks_defaults['shop-post-menu-search'],
			'label'   => __('Search for posts instead of products in the main menu search.', 'empower-pro-blocks'),
		),
		'hide_menu_cart'        => array(
			'default' => $empower_pro_blocks_defaults['shop-hide-menu-cart'],
			'label'   => __('Hide shopping cart in main menu', 'empower-pro-blocks'),
		),
		'hide_result_count'     => array(
			'default' => $empower_pro_blocks_defaults['shop-hide-result-count'],
			'label'   => __('Hide result count string from shop page', 'empower-pro-blocks'),
		),
		'hide_catalog_ordering' => array(
			'default' => $empower_pro_blocks_defaults['shop-hide-catalog-ordering'],
			'label'   => __('Hide ordering dropdown from shop page', 'empower-pro-blocks'),
		),
		'hide_stars'            => array(
			'default' => $empower_pro_blocks_defaults['shop-hide-stars'],
			'label'   => __('Hide product review stars from shop page', 'empower-pro-blocks'),
		),
		'product_hide_stars'    => array(
			'default' => $empower_pro_blocks_defaults['shop-product-hide-stars'],
			'label'   => __('Hide product review stars from product page', 'empower-pro-blocks'),
		),
		'product_hide_meta'     => array(
			'default' => $empower_pro_blocks_defaults['shop-product-hide-meta'],
			'label'   => __('Hide product meta from product page', 'empower-pro-blocks'),
		),
		'gallery_zoom'          => array(
			'default' => $empower_pro_blocks_defaults['shop-gallery-zoom'],
			'label'   => __('Disable gallery zoom on product page', 'empower-pro-blocks'),
		),
		'gallery_lightbox'      => array(
			'default' => $empower_pro_blocks_defaults['shop-gallery-lightbox'],
			'label'   => __('Disable gallery lightbox on product page', 'empower-pro-blocks'),
		),
		'gallery_slider'        => array(
			'default' => $empower_pro_blocks_defaults['shop-gallery-slider'],
			'label'   => __('Disable gallery slider on product page', 'empower-pro-blocks'),
		),
		'footer_cta'            => array(
			'default' => $empower_pro_blocks_defaults['shop-footer-cta'],
			'label'   => __('Disable Footer CTA on shop and product pages', 'empower-pro-blocks'),
		),
	);

	foreach ($display as $id => $setting) {
		// WooCommerce display setting.
		$wp_customize->add_setting(
			'empower_pro_blocks_shop_' . $id,
			array(
				'default'           => $setting['default'],
				'sanitize_callback' => 'absint',
				'type' => 'option',
			)
		);

		$option = array(
			'label'    => $setting['label'],
			'section'  => 'empower_pro_blocks_shop_display_settings',
			'type'     => 'checkbox',
			'settings' => 'empower_pro_blocks_shop_' . $id,
		);

		if (isset($setting['description']) && !empty($setting['description'])) {
			$option['description'] = $setting['description'];
		}

		if (isset($setting['active_callback']) && !empty($setting['active_callback'])) {
			$option['active_callback'] = $setting['active_callback'];
		}

		$wp_customize->add_control(
			'empower_pro_blocks_shop_' . $id,
			$option
		);
	}

	// Basic settings section.
	$wp_customize->add_section(
		'empower_pro_blocks_banner_settings',
		array(
			'title'       => __('Banner Settings', 'empower-pro-blocks'),
			'panel'       => 'empower_pro_blocks_settings',
		)
	);

	// Add single post image setting to the Customizer.
	$wp_customize->add_setting(
		'empower_pro_blocks_banner_mba_image',
		array(
			'default'           => $empower_pro_blocks_defaults['banner-mba-image'],
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Image_Control(
			$wp_customize,
			'empower_pro_blocks_banner_mba_image',
			array(
				'label'       => __('Banner Image (MBA)', 'empower-pro-blocks'),
				'section'     => 'empower_pro_blocks_banner_settings',
				'settings'    => 'empower_pro_blocks_banner_mba_image',
			)
		)
	);
	$wp_customize->add_setting(
		'empower_pro_blocks_banner_mba_text',
		array(
			'default'           => $empower_pro_blocks_defaults['banner-mba-text'],
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_bannery_mba_text',
		array(
			'label'       => __('Banner Text (MBA)', 'empower-pro-blocks'),
			'section'     => 'empower_pro_blocks_banner_settings',
			'settings'    => 'empower_pro_blocks_banner_mba_text',
			'type' => 'textarea'
		)
	);
	$wp_customize->add_setting(
		'empower_pro_blocks_banner_mba_short_text',
		array(
			'default'           => $empower_pro_blocks_defaults['banner-mba-short-text'],
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_bannery_mba_short_text',
		array(
			'label'       => __('Banner Short Text (MBA)', 'empower-pro-blocks'),
			'section'     => 'empower_pro_blocks_banner_settings',
			'settings'    => 'empower_pro_blocks_banner_mba_short_text',
			'type' => 'textarea'
		)
	);
	$wp_customize->add_setting(
		'empower_pro_blocks_banner_mba_url',
		array(
			'default'           => $empower_pro_blocks_defaults['banner-mba-url'],
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_bannery_mba_url',
		array(
			'label'       => __('Banner URL (MBA)', 'empower-pro-blocks'),
			'section'     => 'empower_pro_blocks_banner_settings',
			'settings'    => 'empower_pro_blocks_banner_mba_url',
			'type' => 'text'
		)
	);

	$wp_customize->add_setting(
		'empower_pro_blocks_banner_mba_button',
		array(
			'default'           => $empower_pro_blocks_defaults['banner-mba-button'],
			'type' => 'option',
		)
	);

	$wp_customize->add_control(
		'empower_pro_blocks_bannery_mba_button',
		array(
			'label'       => __('Banner Button Label (MBA)', 'empower-pro-blocks'),
			'section'     => 'empower_pro_blocks_banner_settings',
			'settings'    => 'empower_pro_blocks_banner_mba_button',
			'type' => 'text'
		)
	);
}

add_action('customize_preview_init', 'empower_pro_blocks_customize_preview_init');
/**
 * Custom css to help fix CSS conflicts with theme and customizer view.
 *
 * @return void
 */
function empower_pro_blocks_customize_preview_init()
{
	wp_enqueue_style('empower-pro-blocks-customizer-style', EMPOWER_PRO_BLOCKS_URL . 'css/customize.css', array(), EMPOWER_PRO_BLOCKS_VERSION);
}

/**
 * Check if menu search is selected.
 *
 * @return bool
 */
function empower_pro_blocks_customize_is_menu_search()
{
	if (current_theme_supports('empower-pro-blocks-menu-search')) {
		return true;
	}

	return false;
}
