<?php
/**
 * Empower Pro Blocks.
 *
 * This file adds the required CSS to the front end to the Empower Pro Blocks Theme.
 *
 * @package Empower_Pro_Blocks
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/empower-pro-blocks/
 */

/**
 * Checks the settings for the link color and accent color.
 * If any of these value are set the appropriate CSS is output.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_get_css( $appearance ) {

	$css = '';

	$primary_color = '%1$s';
	$primary_bright_color = '%2$s';
	$primary_contrast_color = '%3$s';
	$secondary_color = '%4$s';
	$secondary_bright_color = '%5$s';
	$secondary_contrast_color = '%6$s';
	$text_color = '%7$s';
	$dark_text_color = '%8$s';
	$alt_background_color = '%9$s';
	$third_color = '%10$s';
	$third_bright_color = '%11$s';
	$fourth_color = '%12$s';
	$fourth_bright_color = '%13$s';
	$fifth_color = '%14$s';
	$fifth_bright_color = '%15$s';
	$sixth_color = '%16$s';
	$sixth_bright_color = '%17$s';
	$seventh_color = '%18$s';
	$seventh_bright_color = '%19$s';
	$eighth_color = '%20$s';
	$eighth_bright_color = '%21$s';

	$css .= "

		html .entry-meta a,
		html .ab-block-post-grid .ab-post-grid-items .ab-block-post-grid-title a:focus,
		html .ab-block-post-grid .ab-post-grid-items .ab-block-post-grid-title a:hover,
		html .entry-title a:focus,
		html .entry-title a:hover,
		html .menu-toggle:focus,
		html .menu-toggle:hover,
		html .nav-primary .genesis-nav-menu > li > a.active,
		html .nav-primary .genesis-nav-menu .sub-menu li > a:focus,
		html .nav-primary .genesis-nav-menu .sub-menu li > a:hover {
			color: $primary_color;
		}

		html .globalNav .dropdownContent .linkGroup .small-icons .linkContainer i:before {
			color: $third_color;
		}

		html #footer.footer-widgets a:hover,
		html #footer.footer-widgets a:focus,
		html .entry-meta a:hover,
		html .entry-meta a:focus {
			color: $primary_bright_color;
			border-color: $primary_bright_color;
		}

		html .sidebar .widget_mc4wp_form_widget,
		html .sidebar .enews-widget {
		}

		html .footer-widgets .widget .widgettitle,
		html .footer-widgets .widget .widget-title {
			color: $secondary_color !important;
		}

		html .site-footer a:hover,
		html .site-footer a:focus,
		html .footer-widgets a:hover,
		html .footer-widgets a:focus {
			color: $primary_bright_color;
			border-color: $primary_bright_color;
		}

		html .sidebar .widget-title,
		html .sidebar .widgettitle {
		}

		html .sidebar .widget.widget_mc4wp_form_widget,
		html .sidebar .widget.enews-widget {
		}

		html .sidebar .widget.widget_mc4wp_form_widget:not([type='submit']),
		html .sidebar .widget.enews-widget input:not([type='submit']) {
		}

		html .sidebar .widget_mc4wp_form_widget,
		html .sidebar .widget_mc4wp_form_widget .widget-title,
		html .sidebar .enews-widget,
		html .sidebar .enews-widget .widget-title {
			color: $primary_contrast_color !important;
		}

		html .more-from-category a,
		html .widget_mc4wp_form_widget input[type='submit'],
		html .sidebar .widget_mc4wp_form_widget input[type='submit'],
		html .enews-widget input[type='submit'],
		html .sidebar .enews-widget input[type='submit'],
		html .soliloquy-container .soliloquy-wrapper .soliloquy-caption .button,
		html .button.button-hero,
		html a.button.primary,
		html a.button,
		html button,
		html button.primary,
		html #master div.wpforms-container-full .wpforms-form button[type='submit'].primary,
		html input[type='button'].primary,
		html input[type='reset'].primary,
		html input[type='submit'].primary,
		html .button.primary,
		html .message.primary {
			border-color: $primary_color;
			background-color: $primary_color;
			color: $primary_contrast_color;
		}

		html .message.primary a {
			color: $primary_contrast_color;
		}

		html .more-from-category a:hover,
		html .more-from-category a:focus,
		html .widget_mc4wp_form_widget input[type='submit']:focus,
		html .widget_mc4wp_form_widget input[type='submit']:hover,
		html .enews-widget input[type='submit']:focus,
		html .enews-widget input[type='submit']:hover,
		html .button.button-hero:focus,
		html .button.button-hero:hover,
		html a.button.primary:focus,
		html a.button.primary:hover,
		html a.button:focus,
		html a.button:hover,
		html #master div.wpforms-container-full .wpforms-form button[type='submit'].primary:focus,
		html #master div.wpforms-container-full .wpforms-form button[type='submit'].primary:hover,
		html button:focus,
		html button:hover,
		html button.primary:focus,
		html button.primary:hover,
		html input[type='button'].primary:focus,
		html input[type='button'].primary:hover,
		html input[type='reset'].primary:focus,
		html input[type='reset'].primary:hover,
		html input[type='submit'].primary:focus,
		html input[type='submit'].primary:hover,
		html .button.primary:focus,
		html .button.primary:hover {
			border-color: $primary_bright_color;
			background-color: $primary_bright_color;
			color: $primary_contrast_color;
		}

		html .soliloquy-container .soliloquy-wrapper .soliloquy-caption .button:focus,
		html .soliloquy-container .soliloquy-wrapper .soliloquy-caption .button:hover {
			border-color: $primary_bright_color;
			background-color: $primary_bright_color;
			color: $primary_contrast_color;
		}

		html #master div.wpforms-container-full .wpforms-form input:focus,
		html #master div.wpforms-container-full .wpforms-form textarea:focus,
		html #master div.wpforms-container-full .wpforms-form select:focus,
		html .woocommerce-cart table.cart td.actions .coupon .input-text:focus,
		html .post_search_form_content form input[type='search']:focus,
		html input:focus,
		html textarea:focus {
			border-color: $secondary_color;
			outline: none;
		}

		html body,
		html .pricing-table .featured {
			border-color: $primary_color;
		}

		html .pricing-table .featured:hover {
			border-color: $primary_bright_color;
		}

		html .pricing-table .price {
			color: $primary_color;
		}

		html .nav-primary .genesis-nav-menu li a:focus,
		html .nav-primary .genesis-nav-menu li a:hover {
			color: $primary_color !important;
		}

		html .nav-primary .genesis-nav-menu li:hover > a,
		html .nav-primary .genesis-nav-menu li a:focus,
		html .nav-primary .genesis-nav-menu li a:hover {
			border-bottom-color: $primary_color;
		}

		html .globalNav .dropdownArrow {
		}
		html .globalNav .dropdownBackground {
		}
		html .nav-primary .genesis-nav-menu > li > a::after {
		}

		html .globalNav .button-mobile:focus,
		html .globalNav .button-mobile:hover,
		html .nav-primary .genesis-nav-menu li.moved-item-nav-primary-cta a:hover,
		html .nav-primary-cta .genesis-nav-menu > li > a:hover {
			background-color: $primary_color !important;
			color: $primary_contrast_color !important;
			background-color: #333 !important;
			color: #fff !important;
		}

		html .nav-mobile-cta a {
			background-color: #333 !important;
			color: #fff !important;
		}

		html input[type='button'].text,
		html input[type='reset'].text,
		html input[type='submit'].text {
			border-color: $primary_color;
			color: $primary_color;
		}

		html .archive-pagination .active a,
		html .archive-pagination .active a:focus,
		html .archive-pagination .active a:hover {
			border-color: $secondary_color;
			background-color: $secondary_color;
			color: $secondary_contrast_color;
		}

		html .archive-pagination a:focus,
		html .archive-pagination a:hover {
			border-color: $secondary_color;
			background-color: $secondary_color;
			color: $secondary_contrast_color;
		}

		html .lost_password a,
		html .view-all-portfolio a {
			border-color: $primary_color;
			color: $primary_color;
		}

		html .lost_password a:focus,
		html .lost_password a:hover,
		html .view-all-portfolio a:focus,
		html .view-all-portfolio a:hover  {
			border-color: $primary_bright_color;
			color: $primary_bright_color;
		}

		html a.more-link::after,
		html .soliloquy-container .soliloquy-wrapper .soliloquy-caption .button.text::after,
		html .comment-reply-link::after,
		html a.button.text::after {
			background-color: $primary_color !important;
		}

		html a.more-link:hover::after,
		html .soliloquy-container .soliloquy-wrapper .soliloquy-caption .button.text:hover::after,
		html .comment-reply-link:hover::after,
		html a.button.text:hover::after {
			background-color: $primary_bright_color !important;
		}

		html a.more-link,
		html .soliloquy-container .soliloquy-wrapper .soliloquy-caption .button.text,
		html .comment-reply-link,
		html a.button.text {
			background-color: transparent !important;
			border-bottom: 2px solid $primary_color;
		}

		html a.more-link:focus,
		html a.more-link:hover,
		html .soliloquy-container .soliloquy-wrapper .soliloquy-caption .button.text:focus,
		html .soliloquy-container .soliloquy-wrapper .soliloquy-caption .button.text:hover,
		html .comment-reply-link:focus,
		html .comment-reply-link:hover,
		html a.button.text:focus,
		html a.button.text:hover {
			background-color: transparent !important;
			border-bottom-color: $primary_bright_color;
			color: $primary_bright_color;
		}

		html a {
			color: $primary_color;
			border-color: $primary_color;
		}

		html .sidebar ul a:focus,
		html .sidebar ul a:hover,
		html .sidebar ol a:focus,
		html .sidebar ol a:hover,
		html a:focus,
		html a:hover {
			color: $primary_bright_color;
			border-color: $primary_bright_color;
		}

		html .above-footer-image #sb_instagram #sbi_load .sbi_follow_btn a,
		html .above-footer-image #sb_instagram #sbi_load .sbi_load_btn,
		html #master div.wpforms-container-full .wpforms-form input[type='submit'],
		html #master div.wpforms-container-full .wpforms-form button[type='submit'],
		html #master div.wpforms-container-full .wpforms-form .wpforms-page-button,
		html a.button.secondary,
		html button.secondary,
		html input[type='button'].secondary,
		html input[type='reset'].secondary,
		html input[type='submit'].secondary,
		html .button.secondary,
		html input[type='button'],
		html input[type='reset'],
		html input[type='submit'],
		html .button,
		html .message.secondary {
			border-color: $secondary_color;
			background-color: $secondary_color;
			color: $secondary_contrast_color;
		}

		html .above-footer-image #sb_instagram #sbi_load .sbi_follow_btn a:focus,
		html .above-footer-image #sb_instagram #sbi_load .sbi_follow_btn a:hover,
		html .above-footer-image #sb_instagram #sbi_load .sbi_load_btn:focus,
		html .above-footer-image #sb_instagram #sbi_load .sbi_load_btn:hover,
		html #master div.wpforms-container-full .wpforms-form input[type='submit']:focus,
		html #master div.wpforms-container-full .wpforms-form input[type='submit']:hover,
		html #master div.wpforms-container-full .wpforms-form button[type='submit']:focus,
		html #master div.wpforms-container-full .wpforms-form button[type='submit']:hover,
		html #master div.wpforms-container-full .wpforms-form .wpforms-page-button:focus,
		html #master div.wpforms-container-full .wpforms-form .wpforms-page-button:hover,
		html a.button.secondary:focus,
		html a.button.secondary:hover,
		html button.secondary:focus,
		html button.secondary:hover,
		html input[type='button'].secondary:focus,
		html input[type='button'].secondary:hover,
		html input[type='reset'].secondary:focus,
		html input[type='reset'].secondary:hover,
		html input[type='submit'].secondary:focus,
		html input[type='submit'].secondary:hover,
		html .button.secondary:focus,
		html .button.secondary:hover,
		html input:focus[type='button'],
		html input:hover[type='button'],
		html input:focus[type='reset'],
		html input:hover[type='reset'],
		html input:focus[type='submit'],
		html input:hover[type='submit'],
		html .button:focus,
		html .button:hover {
			border-color: $secondary_bright_color;
			background-color: $secondary_bright_color;
			color: $secondary_contrast_color;
		}

		html .message.secondary a {
			color: $secondary_contrast_color;
		}

		html .sidebar .widget_product_categories ul li a,
		html .sidebar .widget_pages ul li a,
		html .sidebar .widget_meta ul li a,
		html .sidebar .widget_categories ul li a,
		html .sidebar .widget_archive ul li a,
		html .sidebar .widget_nav_menu ul li a,
		html .sidebar .widget ul.menu li a {
		}

		html .sidebar .widget_product_categories ul li a:hover,
		html .sidebar .widget_product_categories ul li a:focus,
		html .sidebar .widget_pages ul li a:hover,
		html .sidebar .widget_pages ul li a:focus,
		html .sidebar .widget_meta ul li a:hover,
		html .sidebar .widget_meta ul li a:focus,
		html .sidebar .widget_categories ul li a:hover,
		html .sidebar .widget_categories ul li a:focus,
		html .sidebar .widget_archive ul li a:hover,
		html .sidebar .widget_archive ul li a:focus,
		html .sidebar .widget_nav_menu ul li a:hover,
		html .sidebar .widget_nav_menu ul li a:focus,
		html .sidebar .widget ul.menu li a:hover,
		html .sidebar .widget ul.menu li a:focus{
			border-color: $primary_bright_color;
			color: $primary_bright_color;
		}

		html .content .entry > .sticky {
			background-color: $primary_color;
			color: $primary_contrast_color;
		}

		html #genesis-content .wpforms-confirmation-container-full,
		html #genesis-content .mc4wp-form .mc4wp-response > div {
			border-color: $secondary_color;
		}

	";

	$css = sprintf(
		$css,
		$appearance['primary-color'],
		$appearance['primary-bright-color'],
		$appearance['primary-contrast-color'],
		$appearance['secondary-color'],
		$appearance['secondary-bright-color'],
		$appearance['secondary-contrast-color'],
		$appearance['bodytext-color'],
		$appearance['darktext-color'],
		$appearance['altbackground-color'],
		$appearance['third-color'],
		$appearance['third-bright-color'],
		$appearance['fourth-color'],
		$appearance['fourth-bright-color'],
		$appearance['fifth-color'],
		$appearance['fifth-bright-color'],
		$appearance['sixth-color'],
		$appearance['sixth-bright-color'],
		$appearance['seventh-color'],
		$appearance['seventh-bright-color'],
		$appearance['eighth-color'],
		$appearance['eighth-bright-color']
	);

	$css2 = "
		html .wp-custom-logo .site-container .title-area .custom-logo-link {
			max-width: ${'primary_color'}px;
		}

		html .wp-custom-logo .title-area .custom-logo-link img {
			padding-top: ${'primary_bright_color'}px;
			padding-bottom: ${'primary_contrast_color'}px;
		}
	";

	$css2 = sprintf(
		$css2,
		$appearance['logo-width'],
		$appearance['logo-top-spacing'],
		$appearance['logo-bottom-spacing']
	);

	$css = $css . $css2;

	if ( $css ) {
		$css = empower_pro_blocks_compact( $css );
	}

	return $css;
}
