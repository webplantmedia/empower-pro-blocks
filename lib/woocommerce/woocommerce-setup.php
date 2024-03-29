<?php
/**
 * Empower Pro Blocks.
 *
 * This file adds the required WooCommerce setup functions to the Empower Pro Blocks Theme.
 *
 * @package Empower_Pro_Blocks
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/empower-pro-blocks/
 */

/**
 * Adds Shop Sidebar widget area.
 *
 * @since 1.0.0
 */
genesis_register_sidebar(
	array(
		'id'          => 'empower-pro-blocks-shop',
		'name'        => __( 'Shop Sidebar', 'empower-pro-blocks' ),
		'description' => __( 'This sidebar displays on your shop pages.', 'empower-pro-blocks' ),
	)
);

add_action( 'wp', 'empower_pro_blocks_woocommerce_display_sidebar' );
/**
 * Remove default sidebar, add shop sidebar
 *
 * @since 1.0.0
 *
 * @return void
 */
function empower_pro_blocks_woocommerce_display_sidebar() {

	if ( is_shop() || is_product() || is_product_category() || is_product_tag() || is_product_taxonomy() ) {
		if ( is_active_sidebar( 'empower-pro-blocks-shop' ) ) {

			$site_layout = genesis_site_layout();

			switch ( $site_layout ) {
				case 'sidebar-content':
					add_filter( 'genesis_site_layout', '__genesis_return_sidebar_content' );
					break;
				case 'content-sidebar':
					add_filter( 'genesis_site_layout', '__genesis_return_content_sidebar' );
					break;
				default:
					add_filter( 'genesis_site_layout', '__genesis_return_content_sidebar' );
			}
		} else {
			add_filter( 'genesis_site_layout', '__genesis_return_full_width_content' );
		}
	}

}

add_action( 'genesis_before', 'empower_pro_blocks_woocommerce_add_sidebar', 20 );
/**
 * Remove default sidebar, add shop sidebar
 *
 * @since 1.0.0
 *
 * @return void
 */
function empower_pro_blocks_woocommerce_add_sidebar() {

	if ( is_shop() || is_product() || is_product_category() || is_product_tag() || is_product_taxonomy() ) {
		remove_action( 'genesis_sidebar', 'genesis_do_sidebar' );
		remove_action( 'genesis_sidebar_alt', 'genesis_do_sidebar_alt' );

		if ( is_active_sidebar( 'empower-pro-blocks-shop' ) ) {
			add_action( 'genesis_sidebar', 'empower_pro_blocks_woocommerce_do_sidebar' );
		}
	}

}

/**
 * Remove default sidebar, add shop sidebar
 *
 * @since 1.0.0
 *
 * @return void
 */
function empower_pro_blocks_woocommerce_do_sidebar() {
	if ( ! dynamic_sidebar( 'empower-pro-blocks-shop' ) && current_user_can( 'edit_theme_options' ) ) {
		genesis_default_widget_area_content( __( 'Shop Sidebar', 'empower-pro-blocks' ) );
	}
}

add_filter( 'woocommerce_enqueue_styles', 'empower_pro_blocks_woocommerce_styles' );
/**
 * Enqueues the theme's custom WooCommerce styles to the WooCommerce plugin.
 *
 * @param array $enqueue_styles The WooCommerce styles to enqueue.
 * @since 1.0.0
 *
 * @return array Modified WooCommerce styles to enqueue.
 */
function empower_pro_blocks_woocommerce_styles( $enqueue_styles ) {

	$enqueue_styles['empower-pro-blocks-woocommerce-styles'] = array(
		'deps'    => array( 'empower-pro-blocks-main' ),
		'media'   => 'screen',
		'src'     => EMPOWER_PRO_BLOCKS_DIR . 'css/woocommerce-theme.css',
		'version' => EMPOWER_PRO_BLOCKS_VERSION,
	);

	return $enqueue_styles;

}

// Adds product gallery support.
add_theme_support( 'wc-product-gallery-lightbox' );
add_theme_support( 'wc-product-gallery-slider' );
add_theme_support( 'wc-product-gallery-zoom' );

// Set default image sizes for WooCommerce products.
add_theme_support(
	'woocommerce',
	array(
		'thumbnail_image_width' => 600,
		// 'gallery_thumbnail_image_width' => 100,
		'single_image_width'    => 900,
	)
);

add_action( 'wp_loaded', 'empower_pro_blocks_woocommerce_check_features', 11 );
/**
 * Check WooCommerce gallery features.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_woocommerce_check_features() {
	global $empower_pro_blocks_appearance;

	if ( $empower_pro_blocks_appearance['shop-post-menu-search'] ) {
		remove_theme_support( 'empower-pro-blocks-shop-menu-search' );
	}

	if ( $empower_pro_blocks_appearance['shop-hide-menu-cart'] ) {
		remove_theme_support( 'empower-pro-blocks-shop-menu-cart' );
	}

	if ( $empower_pro_blocks_appearance['shop-gallery-zoom'] ) {
		remove_theme_support( 'wc-product-gallery-zoom' );
	}

	if ( $empower_pro_blocks_appearance['shop-gallery-lightbox'] ) {
		remove_theme_support( 'wc-product-gallery-lightbox' );
	}

	if ( $empower_pro_blocks_appearance['shop-gallery-slider'] ) {
		remove_theme_support( 'wc-product-gallery-slider' );
	}

	if ( $empower_pro_blocks_appearance['shop-hide-stars'] ) {
		remove_action( 'woocommerce_after_shop_loop_item_title', 'woocommerce_template_loop_rating', 5 );
	}

	if ( $empower_pro_blocks_appearance['shop-product-hide-stars'] ) {
		remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_rating', 10 );
	}

	if ( $empower_pro_blocks_appearance['shop-hide-result-count'] ) {
		remove_action( 'woocommerce_before_shop_loop', 'woocommerce_result_count', 20 );
	}

	if ( $empower_pro_blocks_appearance['shop-hide-catalog-ordering'] ) {
		remove_action( 'woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30 );
	}

	if ( $empower_pro_blocks_appearance['shop-product-hide-meta'] ) {
		remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );
	}
}

add_action( 'genesis_meta', 'empower_pro_blocks_single_product_titles' );
/**
 * Remove single product titles.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_single_product_titles() {

	// Removes single WooCommerce product titles.
	remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_title', 5 );

}

/* add_action( 'wp_enqueue_scripts', 'empower_pro_blocks_enqueue_scripts', 99 ); */
/**
 * Prints an inline script to the footer to keep products the same height.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_enqueue_scripts() {

	// If WooCommerce isn't active or not on a WooCommerce page, exits early.
	if ( ! class_exists( 'WooCommerce' ) || ! is_shop() && ! is_woocommerce() && ! is_cart() ) {
		return;
	}
}

// Changes menu search from post search to product search.
add_theme_support( 'empower-pro-blocks-shop-menu-search' );

// Adds menu cart.
add_theme_support( 'empower-pro-blocks-shop-menu-cart' );

add_action( 'genesis_header', 'empower_pro_blocks_woocommerce_menu_cart', 11 );
/**
 * Display menu cart after nav menu.
 *
 * @since 1.0.0
 *
 * @return void
 */
function empower_pro_blocks_woocommerce_menu_cart() {
	if ( ! current_theme_supports( 'empower-pro-blocks-shop-menu-cart' ) ) {
		return;
	}

	echo '<nav id="nav-cart" class="cart-menu in-menu-bar"><ul id="genesis-nav-cart" class="menu genesis-nav-menu js-superfish">';

	do_action( 'empower_pro_blocks_cart' );

	echo '</ul></nav>';
}

add_action( 'empower_pro_blocks_cart', 'empower_pro_blocks_woocommerce_cart_dropdown', 10 );
/**
 * Add cart button dropdown
 *
 * @return void
 */
function empower_pro_blocks_woocommerce_cart_dropdown() {
	global $woocommerce;

	$link             = wc_get_cart_url();
	$cart_items_count = $woocommerce->cart->cart_contents_count;

	$output  = '';
	$output .= '<li id="empower-pro-blocks-cart-menu-item" class="cart menu-item">';
	$output .= "<a class='cart_dropdown_link' href='" . esc_url( $link ) . "'>";
	$output .= "<span class='alert-count-wrapper'>";
	$output .= "<i class='ion-ios-cart-outline'></i>";
	if ( 0 !== intval( WC()->cart->get_cart_contents_count() ) ) {
		$output .= "<span class='alert-count'>" . intval( $cart_items_count ) . '</span>';
	}
	$output .= '</span>';
	$output .= '</a>';
	$output .= '<ul id="menu-cart-dropdown" class="woo-sub-menu sub-menu woocommerce widget_shopping_cart cart_list"><li>';
	$output .= '<div class="widget_shopping_cart_content"></div>';
	$output .= '</li></ul>';
	$output .= '</li>';

	echo $output; /* WPCS: XSS OK. HTML output. */
}

add_filter( 'woocommerce_add_to_cart_fragments', 'empower_pro_blocks_woocommerce_header_cart_fragments' );
/**
 * Ajax update for item count in cart
 *
 * @param array $fragments Check Woo Docs.
 *
 * @return array
 */
function empower_pro_blocks_woocommerce_header_cart_fragments( $fragments ) {
	global $woocommerce;

	$link = wc_get_cart_url();

	$cart_items_count = $woocommerce->cart->cart_contents_count;

	$temp = '<a class="cart_dropdown_link" href="' . esc_url( $link ) . '"><span class="alert-count-wrapper"><i class="ion-ios-cart-outline"></i><span class="alert-count">' . $cart_items_count . '</span></span></a>';

	$fragments['a.cart_dropdown_link'] = $temp;

	return $fragments;
}

add_action( 'woocommerce_before_mini_cart', 'empower_pro_blocks_add_header_mini_cart', 10 );
/**
 * Add header mini cart
 *
 * @return void
 */
function empower_pro_blocks_add_header_mini_cart() {
	global $woocommerce;
	$cart_items_count = $woocommerce->cart->cart_contents_count;

	$output = '<h3 class="widget-sub-title">' . $cart_items_count . ' ' . esc_html__( 'items in your cart', 'empower-pro-blocks' ) . '</h3>';

	echo $output; /* WPCS: XSS OK. HTML output. */
}

add_filter( 'woocommerce_style_smallscreen_breakpoint', 'empower_pro_blocks_woocommerce_breakpoint' );
/**
 * Modifies the WooCommerce breakpoints.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_woocommerce_breakpoint() {

	$current = genesis_site_layout();
	$layouts = array(
		'content-sidebar',
		'sidebar-content',
	);

	if ( in_array( $current, $layouts, true ) ) {
		return '1200px';
	} else {
		return '860px';
	}

}

add_filter( 'genesiswooc_default_products_per_page', 'empower_pro_blocks_default_products_per_page' );
/**
 * Sets the default products per page value.
 *
 * @since 1.0.0
 *
 * @return int Number of products to show per page.
 */
function empower_pro_blocks_default_products_per_page() {

	return 6;

}

add_filter( 'loop_shop_columns', 'empower_pro_blocks_product_archive_columns' );
/**
 * Change number of products in a row to 3.
 *
 * @since 1.0.0
 *
 * @return int Number of products to show per row.
 */
function empower_pro_blocks_product_archive_columns() {

	return 3; // 3 products per row.

}


add_filter( 'woocommerce_pagination_args', 'empower_pro_blocks_woocommerce_pagination' );
/**
 * Update the next and previous arrows to the default Genesis style.
 *
 * @param array $args The previous and next text arguments.
 * @since 1.0.0
 *
 * @return array New next and previous text arguments.
 */
function empower_pro_blocks_woocommerce_pagination( $args ) {

	$args['prev_text'] = sprintf( '&laquo; %s', __( 'Previous Page', 'empower-pro-blocks' ) );
	$args['next_text'] = sprintf( '%s &raquo;', __( 'Next Page', 'empower-pro-blocks' ) );

	return $args;

}

add_action( 'after_switch_theme', 'empower_pro_blocks_woocommerce_image_dimensions_after_theme_setup', 1 );
/**
 * Defines WooCommerce image sizes on theme activation.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_woocommerce_image_dimensions_after_theme_setup() {

	global $pagenow;

	// Checks conditionally to see if we're activating the current theme and that WooCommerce is installed.
	if ( ! isset( $_GET['activated'] ) || 'themes.php' !== $pagenow || ! class_exists( 'WooCommerce' ) ) { // WPCS: CSRF ok.
		return;
	}

	empower_pro_blocks_update_woocommerce_image_dimensions();

}

add_action( 'activated_plugin', 'empower_pro_blocks_woocommerce_image_dimensions_after_woo_activation', 10, 2 );
/**
 * Define the WooCommerce image sizes on WooCommerce activation.
 *
 * @since 1.0.0
 *
 * @param string $plugin The path of the plugin being activated.
 */
function empower_pro_blocks_woocommerce_image_dimensions_after_woo_activation( $plugin ) {

	// Checks to see if WooCommerce is being activated.
	if ( 'woocommerce/woocommerce.php' !== $plugin ) {
		return;
	}

	empower_pro_blocks_update_woocommerce_image_dimensions();

}

/**
 * Updates WooCommerce image dimensions.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_update_woocommerce_image_dimensions() {

	// Updates image size options.
	update_option( 'woocommerce_single_image_width', 660 );    // Single product image.
	update_option( 'woocommerce_thumbnail_image_width', 500 ); // Catalog image.

	// Updates image cropping option.
	update_option( 'woocommerce_thumbnail_cropping', '1:1' );

}

add_filter( 'woocommerce_get_image_size_gallery_thumbnail', 'empower_pro_blocks_gallery_image_thumbnail' );
/**
 * Filters the WooCommerce gallery image dimensions.
 *
 * @since 1.0.0
 *
 * @param array $size The gallery image size and crop arguments.
 * @return array The modified gallery image size and crop arguments.
 */
function empower_pro_blocks_gallery_image_thumbnail( $size ) {

	$size = array(
		'width'  => 180,
		'height' => 180,
		'crop'   => 1,
	);

	return $size;

}

add_filter( 'woocommerce_output_related_products_args', 'empower_pro_blocks_related_products_args' );
add_filter( 'woocommerce_upsell_display_args', 'empower_pro_blocks_related_products_args' );
/**
 * Display 2 products and two columns for related posts and upsells.
 *
 * @since 1.01
 *
 * @param mixed $args Default arguments.
 * @return array
 */
function empower_pro_blocks_related_products_args( $args ) {
	global $empower_pro_blocks_appearance;

	$args = array_merge(
		$args,
		array(
			'posts_per_page' => $empower_pro_blocks_appearance['shop-columns'],
			'columns'        => $empower_pro_blocks_appearance['shop-columns'],
		)
	);

	return $args;
}

add_filter( 'loop_shop_columns', 'empower_pro_blocks_loop_columns' );
/**
 * Display 2-4 columns in shop page.
 *
 * @since 1.01
 *
 * @return int
 */
function empower_pro_blocks_loop_columns() {
	global $empower_pro_blocks_appearance;

	return $empower_pro_blocks_appearance['shop-columns'];
}

add_filter( 'loop_shop_per_page', 'empower_pro_blocks_loop_per_page', 20 );
/**
 * Control how many rows are displayed in the shop page.
 *
 * @since 1.01
 *
 * @return int
 */
function empower_pro_blocks_loop_per_page() {
	global $empower_pro_blocks_appearance;

	$limit = $empower_pro_blocks_appearance['shop-rows'] * $empower_pro_blocks_appearance['shop-columns'];

	return $limit;
}

add_filter( 'empower_pro_blocks_gray_line_after_title', 'empower_pro_blocks_remove_gray_line_after_title' );
/**
 * Remove gray line.
 *
 * @since 1.01
 *
 * @param string $html Gray line HTML.
 * @return string
 */
function empower_pro_blocks_remove_gray_line_after_title( $html ) {

	if ( is_woocommerce() ) {
		return null;
	}

	return $html;

}

add_filter( 'empower_pro_blocks_show_above_footer_cta', 'empower_pro_blocks_remove_footer_cta' );
/**
 * Remove CTA on product pages.
 *
 * @since 1.01
 *
 * @param bool $show Show footer CTA.
 * @return bool
 */
function empower_pro_blocks_remove_footer_cta( $show ) {

	global $empower_pro_blocks_appearance;

	if ( is_woocommerce() ) {
		if ( $empower_pro_blocks_appearance['shop-footer-cta'] ) {
			return false;
		}
	}

	return $show;

}

add_action( 'woocommerce_before_shop_loop_item_title', 'empower_pro_blocks_display_sold_out_loop_woocommerce' );
/**
 * Display Sold Out Message on Product Archive.
 *
 * @since 1.01
 *
 * @return void
 */
function empower_pro_blocks_display_sold_out_loop_woocommerce() {
	global $product;

	if ( ! $product->is_in_stock() ) {
		echo '<span class="soldout">' . __( 'Sold Out', 'empower-pro-blocks' ) . '</span>'; /* WPCS: XSS OK. HTML output. */
	}
}

add_action( 'genesis_onboarding_after_import_content', 'empower_pro_blocks_woocommerce_after_import', 11, 2 );
/**
 * Install default pages after onboarding.
 *
 * @since 1.01
 *
 * @param array $content  Array content in config folder of theme.
 * @param array $imported_post_ids  List of id's imported.
 * @return void
 */
function empower_pro_blocks_woocommerce_after_import( $content, $imported_post_ids ) {
	if ( class_exists( 'WC_Install' ) ) {
		WC_Install::create_pages();
	}
}
