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
function empower_pro_blocks_featured_image()
{

	$featured_image = '';
	global $empower_pro_blocks_appearance;

	if (is_404() && !$empower_pro_blocks_appearance['page-image']) {
		return;
	}

	if (is_singular('post') && !$empower_pro_blocks_appearance['post-image']) {
		return;
	}

	if (is_singular('page') && !$empower_pro_blocks_appearance['page-image']) {
		return;
	}

	if (is_singular('portfolio') && !$empower_pro_blocks_appearance['portfolio-image']) {
		return;
	}

	if (is_singular('event') && !$empower_pro_blocks_appearance['event-image']) {
		return;
	}

	$image_id = empower_pro_blocks_get_post_thumbnail_id();
	$class    = '';

	if ($image_id) {
		$image_alt      = get_post_meta($image_id, '_wp_attachment_image_alt', true);
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

		$caption = wp_get_attachment_caption($image_id);
	}

	if ($featured_image && (is_singular(array('post', 'page', 'portfolio', 'event')) || is_404())) {
		if (!empty($caption)) {
			$caption = '<figcaption>' . $caption . '</figcaption>';
		}

		$html = '<div class="full-width-image' . $class . '">' . $featured_image . $caption . '</div>';
		echo wp_kses_post($html);
	}

	$button_html = genesis_get_custom_field('empower_pro_blocks_featured_button');

	if ($button_html) {
		echo wp_kses_post($button_html);
	}
}

/**
 * Adds featured image to single posts, pages, and portfolio items.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_featured_image_2()
{

	$featured_image = '';
	global $empower_pro_blocks_appearance;

	if (is_404() && !$empower_pro_blocks_appearance['page-image']) {
		return;
	}

	if (is_singular('post') && !$empower_pro_blocks_appearance['post-image']) {
		return;
	}

	if (is_singular('page') && !$empower_pro_blocks_appearance['page-image']) {
		return;
	}

	if (is_singular('portfolio') && !$empower_pro_blocks_appearance['portfolio-image']) {
		return;
	}

	if (is_singular('event') && !$empower_pro_blocks_appearance['event-image']) {
		return;
	}

	$image_id = empower_pro_blocks_get_post_thumbnail_id();
	$class    = '';

	if ($image_id) {
		$image_alt      = get_post_meta($image_id, '_wp_attachment_image_alt', true);
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

		// $caption = wp_get_attachment_caption( $image_id );
	}

	if ($featured_image && (is_singular(array('post', 'page', 'portfolio', 'event')) || is_404())) {
		// if ( ! empty( $caption ) ) {
		// $caption = '<figcaption>' . $caption . '</figcaption>';
		// }

		$html = '<div class="featured-image-2' . $class . '">' . $featured_image . '</div>';
		echo wp_kses_post($html);
	}
}

// Move post image above post title.
remove_action('genesis_entry_content', 'genesis_do_post_image', 8);
add_action('genesis_entry_header', 'empower_pro_blocks_do_post_image', 1);
/**
 * Echo the post image on archive pages.
 *
 * If this an archive page and the option is set to show thumbnail, then it gets the image size as per the theme
 * setting, wraps it in the post permalink and echoes it.
 *
 * @since 1.1.0
 */
function empower_pro_blocks_do_post_image()
{
	$post_format = get_post_format();

	if (!is_singular() && genesis_get_option('content_archive_thumbnail')) {
		if (in_array($post_format, array('audio', 'video'))) {
			$media = $content = apply_filters('the_content', empower_pro_blocks_get_first_paragraph(get_the_content()));
		} else {
			$img = genesis_get_image(
				[
					'format'  => 'html',
					'size'    => genesis_get_option('image_size'),
					'context' => 'archive',
					'attr'    => genesis_parse_attr('entry-image', []),
				]
			);
		}

		if (!empty($img)) {
			genesis_markup(
				[
					'open'    => '<a %s>',
					'close'   => '</a>',
					'content' => $img,
					'context' => 'entry-image-link',
				]
			);
		}

		if (!empty($media)) {
			genesis_markup(
				[
					'open'    => '<div %s>',
					'close'   => '</div>',
					'content' => $media,
					'context' => 'entry-media-link',
				]
			);
		}
	}
}

remove_filter('genesis_attr_entry-image-link', 'genesis_attributes_entry_image_link');
add_filter('genesis_attr_entry-image-link', 'empower_pro_blocks_attributes_entry_image_link');
/**
 * Add attributes for entry title link.
 *
 * @since 2.6.0
 *
 * @param array $attributes Existing attributes for entry title element.
 * @return array Amended attributes for entry title element.
 */
function empower_pro_blocks_attributes_entry_image_link($attributes)
{

	$post_format = get_post_format();

	$target = '_self';
	if ($post_format == "link") {
		$permalink = empower_pro_blocks_get_link_url();
		$target = "_blank";
	} else {
		$permalink = get_permalink();
	}

	$attributes['href']        = $permalink;
	$attributes['aria-hidden'] = 'true';
	$attributes['tabindex']    = '-1';
	$attributes['class']       = 'entry-image-link';
	$attributes['target']      = $target;

	return $attributes;
}

add_filter('genesis_get_image', 'empower_pro_blocks_wrap_featured_images', 10, 2);
add_filter('genesis_markup_entry-image-link_content', 'empower_pro_blocks_wrap_featured_images', 10, 2);
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
function empower_pro_blocks_wrap_featured_images($output, $args)
{

	if (strpos($output, '<img') === false) {
		return $output;
	}

	$is_archive_thumbnail   = 'entry-image-link' === $args['context'];
	$is_post_or_page_widget = in_array($args['context'], array('featured-post-widget', 'featured-page-widget'), true);

	if ($is_archive_thumbnail || $is_post_or_page_widget) {
		$output = sprintf('<div class="empower-pro-blocks-featured-image">%s</div>', $output);
	}

	return $output;
}
