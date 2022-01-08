<?php

/**
 * Empower Pro Blocks.
 *
 * Adds front-end inline styles for the custom Gutenberg color palette.
 *
 * @package Empower Pro Blocks
 * @author  Web Plant Media
 * @license GPL-2.0-or-later
 * @link    https://webplantmedia.com/
 */

/**
 * Display Gutenberg CSS.
 *
 * @since 1.01
 *
 * @return string
 */
function empower_pro_blocks_get_gutenberg_css($appearance)
{
	$css = '';

	$primary_color = '%1$s';
	$primary_bright_color = '%2$s';
	$primary_contrast_color = '%3$s';

	$secondary_color = '%4$s';
	$secondary_bright_color = '%5$s';
	$secondary_contrast_color = '%6$s';

	$third_color = '%7$s';
	$third_bright_color = '%8$s';
	$third_contrast_color = '%9$s';

	$fourth_color = '%10$s';
	$fourth_bright_color = '%11$s';
	$fourth_contrast_color = '%12$s';

	$fifth_color = '%13$s';
	$fifth_bright_color = '%14$s';
	$fifth_contrast_color = '%15$s';

	$sixth_color = '%16$s';
	$sixth_bright_color = '%17$s';
	$sixth_contrast_color = '%18$s';

	$seventh_color = '%19$s';
	$seventh_bright_color = '%20$s';
	$seventh_contrast_color = '%21$s';

	$eighth_color = '%22$s';
	$eighth_bright_color = '%23$s';
	$eighth_contrast_color = '%24$s';

	$text_color = '%25$s';
	$text_bright_color = '%26$s';
	$text_contrast_color = '%27$s';

	$darktext_color = '%28$s';
	$darktext_bright_color = '%29$s';
	$darktext_contrast_color = '%30$s';

	$altbackground_color = '%31$s';
	$altbackground_bright_color = '%32$s';
	$altbackground_contrast_color = '%33$s';

	$border_color = '%34$s';
	$border_bright_color = '%35$s';
	$border_contrast_color = '%36$s';

	$white_color = '%37$s';
	$white_bright_color = '%38$s';
	$white_contrast_color = '%39$s';

	$css .= "
		html .ab-block-post-grid .ab-post-grid-items .ab-block-post-grid-more-link,
		html .ab-block-post-grid .ab-block-post-grid-link.ab-text-link {
			border-color: $primary_color !important;
		}

		html .ab-block-post-grid .ab-post-grid-items .ab-block-post-grid-more-link:hover,
		html .ab-block-post-grid .ab-post-grid-items .ab-block-post-grid-more-link:focus,
		html .ab-post-grid-items .ab-block-post-grid-text h2 a:hover,
		html .ab-post-grid-items .ab-block-post-grid-text h2 a:focus,
		html .ab-block-post-grid .ab-block-post-grid-link.ab-text-link:focus,
		html .ab-block-post-grid .ab-block-post-grid-link.ab-text-link:hover {
			border-color: $primary_bright_color !important;
			color: $primary_bright_color !important;
		}

		html p.has-primary-background-color {
			border-color: transparent;
			background-color: $primary_color;
			color: $primary_contrast_color;
		}

		html p.has-primary-background-color.has-secondary-color {
			background-color: $primary_color;
			color: $secondary_color;
		}

		html p.has-secondary-background-color.has-primary-color {
			background-color: $secondary_color;
			color: $primary_color;
		}

		html p.has-secondary-background-color {
			border-color: transparent;
			background-color: $secondary_color;
			color: $secondary_contrast_color;
		}

		html .ab-block-accordion .ab-accordion-title {
			color: $secondary_color !important;
		}

		html .wc-block-grid .wc-block-grid__products .wc-block-grid__product-price,
		html .sidebar .widget.featuredpost .entry-title a:focus,
		html .sidebar .widget.featuredpost .entry-title a:hover,
		html .entry-title a:focus,
		html .entry-title a:hover,
		html .h4 a:focus,
		html .h4 a:hover,
		html h4 a:focus,
		html h4 a:hover {
			color: $primary_color !important;
		}

		html .entry-content .wp-block-pullquote.is-style-solid-color {
			background-color: $primary_color;
		}

		html .wc-block-grid .wc-block-grid__products .wc-block-grid__product .wc-block-grid__product-onsale::before {
			border-top-color: $primary_color !important;
			border-bottom-color: $primary_color !important;
		}

		html .wc-block-grid .wc-block-grid__products .wc-block-grid__product .wc-block-grid__product-onsale {
			background-color: $primary_color;
			border-color: $primary_color;
			color: $primary_contrast_color;
		}

		html .ab-block-container.hover-icons > .ab-container-inside > .ab-container-content .ab-container-content a,
		html .ab-block-container.hover-icons > .ab-container-inside > .ab-container-content .ab-container-content i::before,
		html .wp-block-columns .wp-block-column > i::before,
		html ul.highlight li:before,
		html .wp-block-columns.showcase ul li:before,
		html .wp-block-media-text ul li:before {
			color: $secondary_color;
		}

		html .ab-block-container.hover-icons > .ab-container-inside > .ab-container-content .ab-container-content p a:hover,
		html .ab-block-container.hover-icons > .ab-container-inside > .ab-container-content .ab-container-content a:hover i::before {
			color: $secondary_bright_color;
		}

		html .sticky-scroll .scroll-highlight.ab-block-container,
		html .sticky-scroll .scroll-highlight.ab-block-container::after {
		}

		html table.wp-block-table tr td i {
			color: $secondary_color;
		}

		html table.wp-block-table tr td.highlight i {
			color: $primary_color;
		}

		html table.wp-block-table.pricing-guide.responsive-show thead tr td.sub-title,
		html table.wp-block-table.pricing-guide thead tr td.sub-title {
			background-color: $secondary_color;
			border-color: $secondary_bright_color;
			color: $secondary_contrast_color;
		}

		html table.wp-block-table thead tr:first-child td.highlight {
		}

		html .wp-block-atomic-blocks-ab-columns.schedule h4 {
			background-color: $secondary_color;
			border-color: $secondary_bright_color;
			color: #fff;
		}

		html .wp-block-atomic-blocks-ab-columns.schedule p.important > em,
		html .wp-block-atomic-blocks-ab-columns.schedule p.important > em strong,
		html .wp-block-atomic-blocks-ab-columns.schedule p.important > strong em {
			background-color: $secondary_color;
			color: #fff;
		}

		html .wp-block-atomic-blocks-ab-columns.schedule p.important strong {
			color: $secondary_color;
		}

		html .wp-block-atomic-blocks-ab-columns.schedule p.important::before {
			color: $primary_color;
		}

		html .wp-block-atomic-blocks-ab-columns.schedule p.important:hover::before {
			color: $primary_bright_color;
		}

		html table.wp-block-table.responsive-show.program-guide thead tr td.price,
		html table.wp-block-table.program-guide thead tr td.price,
		html .wp-block-atomic-blocks-ab-columns.schedule p::before,
		html table.wp-block-table.responsive-show.pricing-guide thead tr td.price,
		html table.wp-block-table.pricing-guide thead tr td.price {
			color: $secondary_color;
		}

		html table.wp-block-table.responsive-show.program-guide tbody tr td.price.highlight,
		html table.wp-block-table.program-guide thead tr td.price.highlight,
		html table.wp-block-table.responsive-show.pricing-guide tbody tr td.price.highlight,
		html table.wp-block-table.pricing-guide thead tr td.price.highlight {
			color: $primary_color;
		}

		html .wp-block-atomic-blocks-ab-columns.schedule p:hover::before {
			color: $secondary_bright_color;
		}

		html .empower-pro-blocks-page-title .full-width-image figcaption::after,
		html .footer-cta-image .widget-wrap figcaption.wp-caption-text::after,
		html .sticky-scroll .wp-block-image.caption figcaption::after,
		html .wp-block-cover p.caption::after,
		html .sticky-scroll .scroll-content .ab-container-inside::after {
			background-color: $primary_color;
		}

		html .sticky-scroll .scroll-content {
			border-color: $primary_color;
		}

		html .has-text-color.has-primary-color {
			color: $primary_color;
		}

		html .has-text-color.has-secondary-color {
			color: $secondary_color;
		}

		html .has-white-color {
			color: #fff;
		}

		html .has-primary-background-color {
			background-color: $primary_color;
		}

		html .has-secondary-background-color {
			background-color: $secondary_color;
		}

		html .has-alternate-background-background-color {
			background-color: $altbackground_color;
		}
		html .hero-content > .wp-block-group__inner-container {
			border-color: $secondary_color !important;
		}
	";

	$css = sprintf(
		$css,
		$appearance['vars']['primary-color'],
		$appearance['vars']['primary-color-bright'],
		$appearance['vars']['primary-color-contrast'],

		$appearance['vars']['secondary-color'],
		$appearance['vars']['secondary-color-bright'],
		$appearance['vars']['secondary-color-contrast'],

		$appearance['vars']['third-color'],
		$appearance['vars']['third-color-bright'],
		$appearance['vars']['third-color-contrast'],

		$appearance['vars']['fourth-color'],
		$appearance['vars']['fourth-color-bright'],
		$appearance['vars']['fourth-color-contrast'],

		$appearance['vars']['fifth-color'],
		$appearance['vars']['fifth-color-bright'],
		$appearance['vars']['fifth-color-contrast'],

		$appearance['vars']['sixth-color'],
		$appearance['vars']['sixth-color-bright'],
		$appearance['vars']['sixth-color-contrast'],

		$appearance['vars']['seventh-color'],
		$appearance['vars']['seventh-color-bright'],
		$appearance['vars']['seventh-color-contrast'],

		$appearance['vars']['eighth-color'],
		$appearance['vars']['eighth-color-bright'],
		$appearance['vars']['eighth-color-contrast'],

		$appearance['vars']['text-color'],
		$appearance['vars']['text-color-bright'],
		$appearance['vars']['text-color-contrast'],

		$appearance['vars']['darktext-color'],
		$appearance['vars']['darktext-color-bright'],
		$appearance['vars']['darktext-color-contrast'],

		$appearance['vars']['altbackground-color'],
		$appearance['vars']['altbackground-color-bright'],
		$appearance['vars']['altbackground-color-contrast'],

		$appearance['vars']['border-color'],
		$appearance['vars']['border-color-bright'],
		$appearance['vars']['border-color-contrast'],

		$appearance['vars']['white-color'],
		$appearance['vars']['white-color-bright'],
		$appearance['vars']['white-color-contrast'],
	);

	$css = empower_pro_blocks_compact($css);

	return $css;
}
