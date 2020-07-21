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
function empower_pro_blocks_get_gutenberg_css( $appearance ) {
	$css = '';

	$primary_color = '%1$s';
	$primary_bright_color = '%2$s';
	$primary_contrast_color = '%3$s';
	$secondary_color = '%4$s';
	$secondary_bright_color = '%5$s';
	$secondary_contrast_color = '%6$s';
	$dark_text_color = '%7$s';
	$alt_background_color = '%8$s';
	$third_color = '%9$s';
	$third_bright_color = '%10$s';
	$fourth_color = '%11$s';
	$fourth_bright_color = '%12$s';
	$fifth_color = '%13$s';
	$fifth_bright_color = '%14$s';
	$sixth_color = '%15$s';
	$sixth_bright_color = '%16$s';
	$seventh_color = '%17$s';
	$seventh_bright_color = '%18$s';
	$eighth_color = '%19$s';
	$eighth_bright_color = '%20$s';

	$colors = array( 'primary', 'secondary', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth' );

	foreach ( $colors as $color ) {
		$css .= "
			html .wp-block-group.callout.has-$color-background-color {
				border-color: ${ $color . '_color' };
			}
			html .wp-block-group.callout.has-$color-background-color {
				border-color: ${ $color . '_color' };
			}
			html .has-$color-background-color {
				background-color: ${ $color . '_color' } !important;
			}
			html .has-text-color.has-$color-color {
				color: ${ $color . '_color' };
			}
			html .has-text-color.has-$color-color:hover,
			html .has-text-hover-color.has-$color-color:hover {
				color: ${ $color . '_bright_color' };
			}
			html .our-programs.color-scheme-$color .program-guide tbody td i {
				background-color: ${ $color . '_color' } !important;
				color: ${ $color . '_color' } !important;
			}
			html .table-player.color-scheme-$color::before {
				background-color: ${ $color . '_color' } !important;
			}
			html .table-player .color-scheme-$color {
				border-color: ${ $color . '_color' } !important;
			}
			html .table-player .color-scheme-$color .pill {
				background-color: ${ $color . '_color' } !important;
			}
			html .table-player .color-scheme-$color span {
				color: ${ $color . '_color' } !important;
			}
			html .table-player .color-scheme-$color span:hover {
				color: ${ $color . '_bright_color' } !important;
			}
			html .table-player .active.color-scheme-$color {
				background-color: ${ $color . '_color' } !important;
				color: #fff !important;
			}
			html .table-player .active.color-scheme-$color span {
				color: #fff !important;
			}
			html .table-player .active.color-scheme-$color .pill {
				background-color: #fff !important;
			}
			html .hero-content.has-$color-background-color > .wp-block-group__inner-container {
				border-color: ${ $color . '_color' } !important;
			}
			html .hex.has-$color-background-color .blocks-gallery-item::after {
				background-color: ${ $color . '_color' } !important;
			}
			html .hex.has-$color-background-color .hex-list li::marker {
				color: ${ $color . '_color' } !important;
			}
			html .hex.has-$color-background-color .hex-list li.hover,
			html .hex.has-$color-background-color .hex-list li:hover {
				color: ${ $color . '_color' } !important;
			}
			html ul.has-$color-color > li::before {
				color: ${ $color . '_color' } !important;
			}
			html ul.has-$color-color > li::marker {
				color: ${ $color . '_color' } !important;
			}

		";
	}

	$css .= "

		html .ab-block-post-grid .ab-post-grid-items .ab-block-post-grid-more-link,
		html .ab-block-post-grid .ab-block-post-grid-link.ab-text-link {
			border-color: $primary_color !important;
			color: $primary_color !important;
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
			background-color: $alt_background_color;
		}
		html .hero-content > .wp-block-group__inner-container {
			border-color: $secondary_color !important;
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
		$appearance['dark-text-color'],
		$appearance['alt-background-color'],
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

	$css = empower_pro_blocks_compact( $css );

	return $css;
}