<?php
/**
 * Empower Pro Blocks.
 *
 * This file adds the WooCommerce styles and the custom CSS to the Empower Pro Blocks Theme's custom WooCommerce stylesheet.
 *
 * @package Empower_Pro_Blocks
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/empower-pro-blocks/
 */

add_action( 'wp_enqueue_scripts', 'empower_pro_blocks_woocommerce_css' );
/**
 * Adds the themes's custom CSS to the WooCommerce stylesheet.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_woocommerce_css() {

	global $empower_pro_blocks_appearance;

	$woo_css = '';

	$woo_css .= sprintf(
		'

		html .woocommerce-MyAccount-navigation ul li > a:focus,
		html .woocommerce-MyAccount-navigation ul li > a:hover,
		html .woocommerce-MyAccount-navigation ul li.is-active > a,
		html .woocommerce div.product p.price,
		html .woocommerce div.product span.price,
		html #empower-pro-blocks-cart-menu-item .sub-menu .widget_shopping_cart_content ul.cart_list li > a:focus,
		html #empower-pro-blocks-cart-menu-item .sub-menu .widget_shopping_cart_content ul.cart_list li > a:hover,
		html .cart-menu .cart_dropdown_link:hover,
		html .cart-menu .cart_dropdown_link:focus,
		html .woocommerce ul.products li.product h3:hover,
		html .woocommerce ul.products li.product .price {
			color: %1$s;
		}

		html .woocommerce span.soldout::before,
		html .woocommerce span.onsale::before {
			border-top-color: %1$s;
			border-bottom-color: %1$s;
		}

		html .woocommerce span.soldout,
		html .woocommerce span.onsale,
		html .woocommerce nav.woocommerce-pagination ul li span.current {
			background-color: %1$s;
			border-color: %1$s;
			color: %3$s;
		}

		html .woocommerce .woocommerce-Tabs-panel--description a.button,
		html .woocommerce .woocommerce-Tabs-panel--description a.button.alt,
		html .woocommerce .woocommerce-product-details__short-description a.button,
		html .woocommerce .woocommerce-product-details__short-description a.button.alt {
			background-color: %1$s;
			border-color: %1$s;
			color: %3$s;
		}

		html .woocommerce .woocommerce-Tabs-panel--description a.button:focus,
		html .woocommerce .woocommerce-Tabs-panel--description a.button:hover,
		html .woocommerce .woocommerce-Tabs-panel--description a.button.alt:focus,
		html .woocommerce .woocommerce-Tabs-panel--description a.button.alt:hover,
		html .woocommerce .woocommerce-product-details__short-description a.button:focus,
		html .woocommerce .woocommerce-product-details__short-description a.button:hover,
		html .woocommerce .woocommerce-product-details__short-description a.button.alt:focus,
		html .woocommerce .woocommerce-product-details__short-description a.button.alt:hover {
			background-color: %2$s;
			border-color: %2$s;
			color: %3$s;
		}

		html .woocommerce nav.woocommerce-pagination ul li a:focus,
		html .woocommerce nav.woocommerce-pagination ul li a:hover {
			background-color: %2$s;
			border-color: %2$s;
			color: %3$s;
		}

		html .woocommerce .woocommerce-breadcrumb a:hover,
		html .woocommerce .woocommerce-breadcrumb a:focus,
		html .woocommerce .widget_layered_nav ul li.chosen a::before,
		html .woocommerce .widget_layered_nav_filters ul li a::before,
		html .woocommerce .widget_rating_filter ul li.chosen a::before {
			color: %4$s;
		}

		html #menu-cart-dropdown a.button,
		html .woocommerce .woocommerce-Tabs-panel--description a.button.secondary,
		html .woocommerce .woocommerce-product-details__short-description a.button.secondary,
		html .woocommerce a.button,
		html .woocommerce button.button,
		html .woocommerce button.button.alt,
		html .woocommerce button.button.alt.disabled,
		html .woocommerce input.button,
		html .woocommerce input.button.alt,
		html .woocommerce input.button[type="submit"],
		html .woocommerce #respond input#submit,
		html .woocommerce #respond input#submit.alt,
		html .woocommerce .button.button-hero {
			border-color: %4$s !important;
			background-color: %4$s !important;
			color: %6$s !important;
		}

		html #menu-cart-dropdown a.button:focus,
		html #menu-cart-dropdown a.button:hover,
		html .woocommerce .woocommerce-Tabs-panel--description a.button.secondary:focus,
		html .woocommerce .woocommerce-Tabs-panel--description a.button.secondary:hover,
		html .woocommerce .woocommerce-product-details__short-description a.button.secondary:focus,
		html .woocommerce .woocommerce-product-details__short-description a.button.secondary:hover,
		html .woocommerce a.button:focus,
		html .woocommerce a.button:hover,
		html .woocommerce button.button:focus,
		html .woocommerce button.button:hover,
		html .woocommerce button.button.alt:focus,
		html .woocommerce button.button.alt:hover,
		html .woocommerce button.button.alt.disabled:focus,
		html .woocommerce button.button.alt.disabled:hover,
		html .woocommerce input.button:focus,
		html .woocommerce input.button:hover,
		html .woocommerce input.button.alt:focus,
		html .woocommerce input.button.alt:hover,
		html .woocommerce input.button[type="submit"]:focus,
		html .woocommerce input.button[type="submit"]:hover,
		html .woocommerce #respond input#submit:focus,
		html .woocommerce #respond input#submit:hover,
		html .woocommerce #respond input#submit.alt:focus,
		html .woocommerce #respond input#submit.alt:hover,
		html .woocommerce .button.button-hero:focus,
		html .woocommerce .button.button-hero:hover {
			border-color: %5$s !important;
			background-color: %5$s !important;
			color: %6$s !important;
		}

		html .woocommerce a.button.text {
			border-color: %1$s !important;
			background-color: transparent !important;
			color: %1$s !important;
		}

		html .woocommerce a.button.text:focus,
		html .woocommerce a.button.text:hover {
			border-color: %2$s !important;
			background-color: transparent;
			color: %2$s !important;
		}

		html .woocommerce.widget_price_filter .ui-slider .ui-slider-handle,
		html .woocommerce.widget_price_filter .ui-slider .ui-slider-range {
			background-color: %4$s;
			color: %4$s;
		}

		html ul.woocommerce-error,
		html .woocommerce-error,
		html .woocommerce-info,
		html .woocommerce-message {
		}

		html .select2-container--default .select2-results__option[data-selected="true"],
		html .select2-container--default .select2-results__option--highlighted[aria-selected],
		html .select2-container--default .select2-results__option--highlighted[data-selected] {
			background-color: %4$s;
			color: %6$s;
		}

		html .woocommerce a.remove:hover,
		html .woocommerce a.remove {
			color: %7$s !important;
		}

		',
		$empower_pro_blocks_appearance['primary-color'],
		$empower_pro_blocks_appearance['primary-bright-color'],
		$empower_pro_blocks_appearance['primary-contrast-color'],
		$empower_pro_blocks_appearance['secondary-color'],
		$empower_pro_blocks_appearance['secondary-bright-color'],
		$empower_pro_blocks_appearance['secondary-contrast-color'],
		$empower_pro_blocks_appearance['text-color']
	);

	if ( $woo_css ) {
		$woo_css = empower_pro_blocks_compact( $woo_css );

		wp_add_inline_style( 'empower-pro-blocks-woocommerce-styles', $woo_css );
	}

}
