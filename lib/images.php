<?php
/**
 * Empower Pro Blocks.
 *
 * Adjust featured images.
 *
 * @package Empower_Pro_Blocks
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/empower-pro-blocks/
 */

/**
 * Adds featured image to single posts, pages, and portfolio items.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_featured_image() {

	$featured_image = '';
	$appearance     = genesis_get_config( 'appearance' );

	if ( is_404() && ! $appearance['page-image'] ) {
		return;
	}

	if ( is_singular( 'post' ) && ! $appearance['post-image'] ) {
		return;
	}

	if ( is_singular( 'page' ) && ! $appearance['page-image'] ) {
		return;
	}

	if ( is_singular( 'portfolio' ) && ! $appearance['portfolio-image'] ) {
		return;
	}

	if ( is_singular( 'event' ) && ! $appearance['event-image'] ) {
		return;
	}

	$image_id = empower_pro_blocks_get_post_thumbnail_id();
	$class    = '';

	if ( $image_id ) {
		$image_alt      = get_post_meta( $image_id, '_wp_attachment_image_alt', true );
		$featured_image = genesis_get_image(
			array(
				'format'  => 'html',
				'size'    => 'full-size',
				'context' => '',
				'attr'    => array(
					'alt'   => $image_alt,
					'class' => 'empower-pro-blocks-single-image post-image',
				),
			)
		);

		$caption = wp_get_attachment_caption( $image_id );
	}

	if ( $featured_image && ( is_singular( array( 'post', 'page', 'portfolio', 'event' ) ) || is_404() ) ) {
		if ( ! empty( $caption ) ) {
			$caption = '<figcaption>' . $caption . '</figcaption>';
		}

		$html = '<div class="full-width-image' . $class . '">' . $featured_image . $caption . '</div>';
		echo wp_kses_post( $html );
	}

	$button_html = genesis_get_custom_field( 'empower_pro_blocks_featured_button' );

	if ( $button_html ) {
		echo wp_kses_post( $button_html );
	}

}

/**
 * Adds featured image body class.
 *
 * @since 1.0.0
 *
 * @param array $classes Original body classes.
 * @return array Modified body classes.
 */
function empower_pro_blocks_has_featured_image( $classes ) {

	$appearance = genesis_get_config( 'appearance' );

	if ( ! empower_pro_blocks_has_post_thumbnail() ) {
		return $classes;
	}

	if ( is_singular( 'post' ) && $appearance['post-image'] ) {
		$classes[] = 'has-featured-image';
	}

	if ( ( is_singular( 'page' ) || is_404() ) && $appearance['page-image'] ) {
		$classes[] = 'has-featured-image';
	}

	if ( is_singular( 'portfolio' ) && $appearance['portfolio-image'] ) {
		$classes[] = 'has-featured-image';
	}

	if ( is_singular( 'event' ) && $appearance['event-image'] ) {
		$classes[] = 'has-featured-image';
	}

	if ( is_page_template( 'page_blog.php' ) || is_archive() || is_home() ) {
		$classes[] = 'has-featured-images'; // Note plural for archives.
	}

	return $classes;

}

// Move post image above post title.
remove_action( 'genesis_entry_content', 'genesis_do_post_image', 8 );
add_action( 'genesis_entry_header', 'genesis_do_post_image', 1 );

add_filter( 'genesis_get_image', 'empower_pro_blocks_wrap_featured_images', 10, 2 );
add_filter( 'genesis_markup_entry-image-link_content', 'empower_pro_blocks_wrap_featured_images', 10, 2 );
/**
 * Adds a wrapper to featured images output by Genesis Featured Post,
 * Genesis Featured Page, and Genesis Portfolio widgets, as well as
 * entry image links such as those used on archives.
 *
 * The wrapper is used to target images to style with a CSS filter.
 *
 * @since 1.0.0
 *
 * @param string $output The original HTML image output.
 * @param array  $args The arguments passed to genesis_get_image.
 * @return string The new HTML output including the wrapper div.
 */
function empower_pro_blocks_wrap_featured_images( $output, $args ) {

	if ( strpos( $output, '<img' ) === false ) {
		return $output;
	}

	$is_archive_thumbnail   = 'entry-image-link' === $args['context'];
	$is_post_or_page_widget = in_array( $args['context'], array( 'featured-post-widget', 'featured-page-widget' ), true );

	if ( $is_archive_thumbnail || $is_post_or_page_widget ) {
		$output = sprintf( '<div class="empower-pro-blocks-featured-image">%s</div>', $output );
	}

	return $output;

}
