<?php
/**
 * Empower Pro Blocks.
 *
 * This defines the helper functions for use in the Empower Pro Blocks Theme.
 *
 * @package Empower_Pro_Blocks
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/empower-pro-blocks/
 */

/**
 * Calculates if white or black would contrast more with the provided color.
 *
 * @since 1.0.0
 *
 * @param string $color A color in hex format.
 * @return string The hex code for the most contrasting color: dark grey or white.
 */
function empower_pro_blocks_color_contrast( $color ) {

	$hexcolor = str_replace( '#', '', $color );

	$red   = hexdec( substr( $hexcolor, 0, 2 ) );
	$green = hexdec( substr( $hexcolor, 2, 2 ) );
	$blue  = hexdec( substr( $hexcolor, 4, 2 ) );

	$luminosity = ( ( $red * 0.2726 ) + ( $green * 0.2152 ) + ( $blue * 0.0722 ) );
	// if ( $color == "#ffffff" ) {
		// pr($color);
		// pr($luminosity);
	// }

	return ( $luminosity > 100 ) ? '#222222' : '#ffffff';

}

/**
 * Generates a lighter or darker color from a starting color.
 * Used to generate complementary hover tints from user-chosen colors.
 *
 * @since 1.0.0
 *
 * @param string $hex_code A color in hex format.
 * @param int    $adjust_percent The amount to reduce or increase brightness by.
 * @return string Hex code for the adjusted color brightness.
 */
function empower_pro_blocks_color_brightness( $hex_code, $adjust_percent ) {

	$hex_code = ltrim( $hex_code, '#' );

	if ( strlen( $hex_code ) === 3 ) {
		$hex_code = $hex_code[0] . $hex_code[0] . $hex_code[1] . $hex_code[1] . $hex_code[2] . $hex_code[2];
	}

	$hex_code = array_map( 'hexdec', str_split( $hex_code, 2 ) );

	foreach ( $hex_code as & $color ) {
		$adjustable_limit = $adjust_percent < 0 ? $color : 255 - $color;
		$adjust_amount    = ceil( $adjustable_limit * $adjust_percent );

		$color = str_pad( dechex( $color + $adjust_amount ), 2, '0', STR_PAD_LEFT );
	}

	return '#' . implode( $hex_code );

}

/**
 * Convert hex to RGBA
 * Used to generate complementary drop shadows
 *
 * @since 1.0.0
 *
 * @param string $color A color in hex format.
 * @param int    $alpha The amount to reduce or increase brightness by.
 * @param bool   $array Whether to return an array. Used in images.php.
 * @return string|array RGBA code for the adjusted color brightness.
 */
function empower_pro_blocks_color_rgba( $color, $alpha, $array = false ) {

	$hexcolor = str_replace( '#', '', $color );

	$red   = hexdec( substr( $hexcolor, 0, 2 ) );
	$green = hexdec( substr( $hexcolor, 2, 2 ) );
	$blue  = hexdec( substr( $hexcolor, 4, 2 ) );

	if ( $array ) {
		return array(
			'r' => $red,
			'g' => $green,
			'b' => $blue,
			'a' => $alpha,
		);
	}

	return 'rgba(' . $red . ',' . $green . ',' . $blue . ',' . $alpha . ')';

}

/**
 * Calculates if white or black would contrast more with the provided color.
 *
 * @since 1.0.0
 *
 * @param string $color A color in hex format.
 * @return string The hex code for the most contrasting color: dark grey or white.
 */
function empower_pro_blocks_color_rgb( $color ) {

	$hexcolor = str_replace( '#', '', $color );

	$red   = hexdec( substr( $hexcolor, 0, 2 ) );
	$green = hexdec( substr( $hexcolor, 2, 2 ) );
	$blue  = hexdec( substr( $hexcolor, 4, 2 ) );

	return $red . ',' . $green . ',' . $blue;
}

add_filter( 'body_class', 'empower_pro_blocks_half_width_entry_class' );
/**
 * Defines the half width entries body class.
 *
 * @since 1.0.0
 *
 * @param array $classes Current classes.
 * @return array $classes Updated class array.
 */
function empower_pro_blocks_half_width_entry_class( $classes ) {

	$site_layout     = genesis_site_layout();
	$content_archive = genesis_get_option( 'content_archive' );

	if ( is_home() || is_date() || is_category() || is_tag() || is_author() || is_search() || genesis_is_blog_template() ) {
		if ( 'full' === $content_archive ) {
			$classes[] = 'full-width-entries';
		} elseif ( 'full-width-content' !== $site_layout ) { // Displaying sidebar.
			$classes[] = 'half-width-entries';
		} else {
			$classes[] = 'half-width-entries';
		}
	} elseif ( is_post_type_archive( 'portfolio' ) ) {
		$classes[] = 'third-width-entries';
	} elseif ( is_tax( 'doc_tag' ) ) {
		$classes[] = 'half-width-entries';
	} elseif ( is_post_type_archive( 'event' ) ) {
		$classes[] = 'half-width-entries';
	}

	if ( has_nav_menu( 'mobile-cta' ) ) {
		$classes[] = 'has-mobile-cta';
	}

	return $classes;

}

add_filter( 'genesis_attr_entry', 'empower_pro_blocks_entry_class', 10, 3 );
/**
 * Adds alignment post class.
 *
 * @since 1.0.0
 *
 * @param array $attributes Existing attributes for entry element.
 * @param array $context The widget.
 * @param array $args The attribute arguments.
 * @return array Amended attributes for entry element.
 */
function empower_pro_blocks_entry_class( $attributes, $context, $args ) {

	$alignment = genesis_get_option( 'image_alignment' );
	$thumbnail = genesis_get_option( 'content_archive_thumbnail' );
	$size      = genesis_get_option( 'image_size' );

	if ( ! empty( $alignment ) && ! empty( $thumbnail ) && ! isset( $args['params']['is_widget'] ) && ( is_home() || is_category() || is_tag() || is_author() || is_search() || genesis_is_blog_template() ) ) {
		$attributes['class'] = $attributes['class'] . ' entry-image-' . $alignment . '';
	}

	if ( ! empty( $size ) && ! empty( $thumbnail ) && ! isset( $args['params']['is_widget'] ) && ( is_home() || is_category() || is_tag() || is_author() || is_search() || genesis_is_blog_template() ) ) {
		$attributes['class'] = $attributes['class'] . ' entry-image-' . $size . '';
	}

	return $attributes;

}

/**
 * Check if post has a thumbnail or fallback thumbnail.
 *
 * Like `has_post_thumbnail()` but returns true if the post has a featured
 * image or an attached image, mirroring the behavior of `genesis_get_image()`.
 *
 * @since 1.0.0
 *
 * @param int    $post_id Optional. The post ID.
 * @param string $size Optional. The thumbnail size.
 * @return bool Whether the post has an image attached.
 */
function empower_pro_blocks_has_post_thumbnail( $post_id = null, $size = 'full' ) {

	if ( is_404() ) {
		return false;
	}

	$featured_image_url = genesis_get_image(
		array(
			'post_id'  => $post_id,
			'format'   => 'url',
			'size'     => $size,
			'fallback' => false,
		)
	);

	return (bool) $featured_image_url;

}

/**
 * Get post thumbnail ID or fallback image ID.
 *
 * Like `get_post_thumbnail_id()` but returns the ID of the first-attached
 * image if the post has no featured image, mirroring the behavior of
 * `genesis_get_image()`.
 *
 * @since 1.0.0
 *
 * @param int $post_id Optional. The post ID.
 * @return int|string The thumbnail ID or an empty string.
 */
function empower_pro_blocks_get_post_thumbnail_id( $post_id = null ) {

	if ( is_404() ) {
		return '';
	}

	$featured_image_url = genesis_get_image(
		array(
			'post_id'  => $post_id,
			'format'   => 'url',
			'fallback' => false,
		)
	);

	if ( $featured_image_url ) {
		return attachment_url_to_postid( $featured_image_url );
	}

	return '';

}

/**
 * Query WeDocs activation
 *
 * @since 1.01
 *
 * @return bool
 */
function empower_pro_blocks_is_wedocs_activated() {
	return class_exists( 'WeDocs' ) ? true : false;
}

/**
 * Query WeDocs is home page.
 *
 * @since 1.01
 *
 * @return bool
 */
function empower_pro_blocks_is_wedocs_home_page() {
	if ( function_exists( 'wedocs_get_option' ) ) {
		$docs_home = intval( wedocs_get_option( 'docs_home', 'wedocs_settings' ) );
		$post_id   = intval( get_the_ID() );
		if ( $docs_home === $post_id ) {
			return true;
		}
	}

	return false;
}

/**
 * Locate and require a config file.
 *
 * First, search child theme for the config. If config file doesn't exist in the child,
 * search the parent for the config file.
 *
 * @since 2.8.0
 *
 * @param string $config The config file to look for (not including .php file extension).
 * @return array The config data.
 */
function empower_pro_blocks_get_config( $config ) {

	$child_file  = sprintf( '%sconfig/%s.php', EMPOWER_PRO_BLOCKS_DIR, $config );

	$data = [];

	if ( is_readable( $child_file ) ) {
		$data = require $child_file;
	}

	return (array) $data;

}

/**
 * Compact css.
 *
 * @since 1.01
 *
 * @param string $input Text to compact.
 * @return $input
 */
function empower_pro_blocks_compact( $input ) {
	$input = str_replace( array( "\r", "\n", "\t" ), '', $input );

	return $input;
}

/**
 * Query WooCommerce activation
 *
 * @since 1.01
 *
 * @return bool
 */
function empower_pro_blocks_is_woocommerce_activated() {
	return class_exists( 'woocommerce' ) ? true : false;
}

/**
 * Query Soliloquy activation
 *
 * @since 1.01
 *
 * @return bool
 */
function empower_pro_blocks_is_soliloquy_activated() {
	return class_exists( 'Soliloquy_Lite' ) ? true : false;
}

function empower_pro_blocks_get_link_url() {
    $content = get_the_content();
    $has_url = get_url_in_content( $content );

    return ( $has_url ) ? $has_url : get_permalink();
}

function empower_pro_blocks_get_first_paragraph( $content ) {
	$pieces = explode( "\n\n", $content );

	if ( ! empty( $pieces ) && array_key_exists( 0, $pieces ) ) {
		return trim( $pieces[0] );
	}

	return $content;
}

function empower_pro_blocks_css_vars_to_array( $css_vars ) {
	$arr = array();
	$a = explode( "\n", $css_vars );
	foreach ( $a as $v ) {
		$line = explode( ":", $v );
		if ( sizeof( $line ) == 2 ) {
			$key = trim( ltrim( $line[0], "$" ) );
			$value = trim( rtrim( trim( $line[1] ), ";" ) );
			$arr[ $key ] = $value;
		}
	}

	return $arr;
}

function empower_pro_blocks_parse_css_vars( $css_vars, $default ) {
	$css_vars = empower_pro_blocks_sanitize_css_vars( $css_vars );

	$new_css_vars = array();
	foreach ( $css_vars as $key => $value ) {
		$new_css_vars[ $key ] = $value;
	}

	return $new_css_vars;
}

function empower_pro_blocks_sanitize_vars( $vars ) {
	$defaults = empower_pro_blocks_get_config( 'defaults' );

	$default = $defaults['css-vars'];
	$vars = empower_pro_blocks_css_vars_to_array( $vars );
	$default = empower_pro_blocks_css_vars_to_array( $default );

	$new_vars = array();
	foreach ( $default as $key => $value ) {
		if ( array_key_exists( $key, $vars ) ) {
			$new_vars[ $key ] = $vars[ $key ];
			unset( $vars[ $key ] );
		}
		else {
			$new_vars[ $key ] = $value;
		}
	}

	return $new_vars;
}

function empower_pro_blocks_sanitize_css_vars( $css_vars ) {
	$new_vars = empower_pro_blocks_sanitize_vars( $css_vars );

	$txt = '';
	foreach ($new_vars as $key => $value) {
		$txt .= $key . ': ' . $value . ";\n";
	}

	return trim( $txt );
}
