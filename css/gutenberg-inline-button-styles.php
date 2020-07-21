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
function empower_pro_blocks_get_gutenberg_button_css( $appearance ) {
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
			html .wp-block-button.text .wp-block-button__link.has-$color-background-color {
				border-color: ${ $color . '_color' };
				background-color: transparent !important;
			}

			html .wp-block-button.text .wp-block-button__link.has-$color-background-color:hover {
				color: ${ $color . '_bright_color' };
				background-color: transparent !important;
			}

			html .wp-block-button.text .wp-block-button__link.has-$color-background-color::after {
				background-color: ${ $color . '_color' } !important;
			}

			html .wp-block-button.text .wp-block-button__link.has-$color-background-color:hover::after {
				background-color: ${ $color . '_bright_color' } !important;
			}
			html .has-$color-color .hero-tags span,
				color: ${ $color . '_color' } !important;
			}
			html .has-$color-color .hero-tags span::after,
				background-color: ${ $color . '_color' } !important;
			}
			html .wp-block-button.active .wp-block-button__link.has-$color-background-color {
				color: ${ $color . '_color' } !important;
			}
		";
	}

	$css .= "

		html .wp-block-button:not(.text) .wp-block-button__link:not(.has-background):not(.has-text-color) {
			border-color: $primary_color;
			background-color: $primary_color;
			color: $primary_contrast_color;
		}

		html .wp-block-button:not(.text) .wp-block-button__link:not(.has-background):not(.has-text-color):hover,
		html .wp-block-button:not(.text) .wp-block-button__link:not(.has-background):not(.has-text-color):focus {
			border-color: $primary_bright_color;
			background-color: $primary_bright_color;
			color: $primary_contrast_color;
		}

		html .wp-block-button .wp-block-button__link.has-secondary-background-color {
			border-color: $secondary_color;
			background-color: $secondary_color;
			color: $secondary_contrast_color;
		}

		html .wp-block-button .wp-block-button__link.has-secondary-background-color:hover,
		html .wp-block-button .wp-block-button__link.has-secondary-background-color:focus {
			border-color: $secondary_bright_color !important;
			background-color: $secondary_bright_color !important;
			color: $secondary_contrast_color;
		}

		html .wp-block-button .wp-block-button__link.has-primary-background-color {
			border-color: $primary_color;
			background-color: $primary_color;
			color: $primary_contrast_color;
		}

		html .wp-block-button .wp-block-button__link.has-primary-background-color:hover,
		html .wp-block-button .wp-block-button__link.has-primary-background-color:focus {
			border-color: $primary_bright_color !important;
			background-color: $primary_bright_color !important;
			color: $primary_contrast_color;
		}

		html .wp-block-button.is-style-outline .wp-block-button__link.has-secondary-background-color,
		html .wp-block-button.is-style-outline .wp-block-button__link.has-primary-background-color,
		html .wp-block-button.is-style-outline .wp-block-button__link {
			background-color: transparent !important;
		}

		html .wp-block-button.is-style-outline .wp-block-button__link.has-primary-background-color,
		html .wp-block-button.is-style-outline .wp-block-button__link {
			border-color: $primary_color;
			color: $primary_color;
		}

		html .wp-block-button.is-style-outline .wp-block-button__link.has-primary-background-color:hover,
		html .wp-block-button.is-style-outline .wp-block-button__link:hover {
			border-color: $primary_bright_color;
			color: $primary_bright_color;
		}

		html .wp-block-button.is-style-outline .wp-block-button__link.has-secondary-background-color {
			border-color: $secondary_color;
			color: $secondary_color;
		}

		html .wp-block-button.is-style-outline .wp-block-button__link.has-secondary-background-color:hover {
			border-color: $secondary_bright_color;
			color: $secondary_bright_color;
		}

		html .wp-block-button.text.icon i {
			color: $primary_color;
		}

		html .wp-block-button.text .wp-block-button__link {
			background-color: transparent !important;
		}

		html .wp-block-button.text .wp-block-button__link:hover {
			color: $primary_bright_color;
		}

		html .wp-block-button.text .wp-block-button__link::after {
			background-color: $primary_color !important;
		}

		html .wp-block-button.text .wp-block-button__link:hover::after {
			background-color: $primary_bright_color !important;
		}

		html .wp-block-button .wp-block-button__link.has-primary-background-color.has-secondary-color {
			color: $secondary_color;
		}

		html .wp-block-button .wp-block-button__link.has-secondary-background-color.has-primary-color {
			color: $primary_color;
		}

		html .wp-block-button:not(.is-style-outline) .wp-block-button__link.has-background {
			border-color: transparent;
		}

		html .has-white-background-color,
		html .wp-block-button .wp-block-button__link.has-white-background-color {
			background-color: #fff !important;
			color: $dark_text_color !important;
		}

		html .has-dark-text-color,
		html .wp-block-button .wp-block-button__link.has-dark-text-color {
			color: $dark_text_color;
		}

		html .wp-block-button .wp-block-button__link:focus,
		html .wp-block-button .wp-block-button__link:hover {
			color: $secondary_bright_color;
		}

		html .wp-block-button.link .wp-block-button__link {
			color: $secondary_color;
		}
		html .hero-links .wp-block-button::after {
			background-color: $secondary_color !important;
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

	$css = empower_pro_blocks_compact( $css );

	return $css;
}
