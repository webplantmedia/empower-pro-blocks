<?php

/**
 * Empower Pro Blocks.
 *
 * Move page headings and titles.
 *
 * @package Empower_Pro_Blocks
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/empower-pro-blocks/
 */

/**
 * Opens the empower-pro-blocks title section.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_header_title_wrap()
{
	genesis_markup(
		array(
			'open'    => '<div %s><div class="wrap"><div class="inner-container">',
			'context' => 'empower-pro-blocks-page-title',
		)
	);
}

/**
 * Closes the empower-pro-blocks title section.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_header_title_end_wrap()
{
	genesis_markup(
		array(
			'close'   => '</div></div></div>',
			'context' => 'empower-pro-blocks-page-title',
		)
	);
}

add_filter('genesis_attr_empower-pro-blocks-page-title', 'empower_pro_blocks_add_header_attributes');
/**
 * Adds custom attributes for the empower-pro-blocks header wrap.
 *
 * @since 1.0.0
 *
 * @param array $attributes The element attributes.
 * @return array $attributes The element attributes.
 */
function empower_pro_blocks_add_header_attributes($attributes)
{

	$attributes['id'] = 'empower-pro-blocks-page-title';
	return $attributes;
}

add_filter('genesis_attr_entry', 'empower_pro_blocks_entry_attributes', 10, 3);
/**
 * Add itemref attribute to link entry-title.
 *
 * @since  1.0.0
 *
 * @param array $attributes Existing attributes for entry element.
 * @param array $context Current element being filtered.
 * @param array $args The attribute arguments.
 * @return array Amended attributes for entry element.
 */
function empower_pro_blocks_entry_attributes($attributes, $context, $args)
{

	if (is_singular() && !isset($args['params']['is_widget'])) {
		$attributes['itemref'] = 'empower-pro-blocks-page-title';
	}
	return $attributes;
}

/**
 * Adds featured image body class.
 *
 * @since 1.0.0
 *
 * @param array $classes Original body classes.
 * @return array Modified body classes.
 */
function empower_pro_blocks_has_featured_image($classes)
{

	global $empower_pro_blocks_appearance;

	if (!empower_pro_blocks_has_post_thumbnail()) {
		return $classes;
	}

	$page_template = get_page_template();

	if (is_singular('post') && $empower_pro_blocks_appearance['post-image']) {
		$classes[] = 'has-featured-image';
	}

	if ((is_singular('page') || is_404()) && $empower_pro_blocks_appearance['page-image']) {
		$classes[] = 'has-featured-image';
	}

	if (is_singular('portfolio') && $empower_pro_blocks_appearance['portfolio-image']) {
		$classes[] = 'has-featured-image';
	}

	if (is_singular('event') && $empower_pro_blocks_appearance['event-image']) {
		$classes[] = 'has-featured-image';
	}

	if (is_page_template('page_blog.php') || is_archive() || is_home()) {
		$classes[] = 'has-featured-images'; // Note plural for archives.
	}

	return $classes;
}


add_action('genesis_meta', 'empower_pro_blocks_move_page_headers');
/**
 * Moves page title above content wrap.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_move_page_headers()
{

	add_action('genesis_before_content_sidebar_wrap', 'empower_pro_blocks_header_title_wrap', 1);
	add_action('genesis_before_content_sidebar_wrap', 'empower_pro_blocks_header_title_end_wrap', 18);

	if ((is_page() || is_single()) && !is_page_template('page_blog.php')) {
		remove_action('genesis_entry_header', 'genesis_entry_header_markup_open', 5);
		remove_action('genesis_entry_header', 'genesis_entry_header_markup_close', 15);
		remove_action('genesis_entry_header', 'genesis_do_post_title');
		remove_action('genesis_entry_header', 'genesis_post_info', 12);

		add_action('genesis_before_content_sidebar_wrap', 'genesis_post_info', 4);
		add_action('genesis_before_content_sidebar_wrap', 'genesis_entry_header_markup_open', 5);
		add_action('genesis_before_content_sidebar_wrap', 'genesis_entry_header_markup_close', 15);
		add_action('genesis_before_content_sidebar_wrap', 'genesis_do_post_title');
		add_action('genesis_before_content_sidebar_wrap', 'empower_pro_blocks_featured_image', 16);

		// Adds has-featured-image body class.
		add_filter('body_class', 'empower_pro_blocks_has_featured_image', 10, 1);
	} else {
		remove_action('genesis_entry_header', 'genesis_post_info', 12);
		add_action('genesis_entry_header', 'genesis_post_info', 8);
	}

	if (is_singular('product') || is_singular('books')) {
		remove_action('genesis_before_content_sidebar_wrap', 'genesis_post_info', 4);
	}

	if (is_singular('books')) {
		add_action('genesis_before_content_sidebar_wrap', 'genesis_author_pro_do_by_line');
	}

	if (is_404()) {
		add_action('genesis_before_content_sidebar_wrap', 'empower_pro_blocks_featured_image', 16);
		add_filter('body_class', 'empower_pro_blocks_has_featured_image', 10, 1);
	}

	$is_woocommerce_shop = class_exists('WooCommerce') && is_post_type_archive('product');

	if (is_search()) {
		remove_action('genesis_before_loop', 'genesis_do_search_title');

		if (!$is_woocommerce_shop) {
			add_action('genesis_before_content_sidebar_wrap', 'genesis_do_search_title');
		}
	}

	if ($is_woocommerce_shop) {
		add_filter('woocommerce_show_page_title', '__return_false');
		add_action('genesis_before_content_sidebar_wrap', 'empower_pro_blocks_woocommerce_title');
	}
}

add_action('genesis_before_while', 'empower_pro_blocks_remove_author_pro_header');
/**
 * Remove duplicate title markup on book singles.
 *
 * Removes the extra title added by Genesis Author Pro to the
 * `genesis_before_entry_content` hook.
 *
 * Have to hook to `genesis_before_while` because Author Pro hooks titles in
 * `genesis_loop()`. Removing earlier would have no effect.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_remove_author_pro_header()
{

	if (!is_singular('books')) {
		return;
	}

	remove_action('genesis_before_entry_content', 'genesis_entry_header_markup_open', 5);
	remove_action('genesis_before_entry_content', 'genesis_do_post_title');
	remove_action('genesis_before_entry_content', 'genesis_author_pro_do_by_line', 12);
	remove_action('genesis_before_entry_content', 'genesis_entry_header_markup_close', 15);
}

/**
 * Output WooCommerce title.
 *
 * Used in `empower_pro_blocks_move_page_headers()` to move the shop title.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_woocommerce_title()
{

	echo '<h1 class="woocommerce-products-header__title page-title">';
	woocommerce_page_title();
	echo '</h1>';
}

add_action('genesis_loop', 'empower_pro_blocks_remove_404_title');
/**
 * Removes default 404 entry title.
 *
 * @since  1.0.0
 */
function empower_pro_blocks_remove_404_title()
{

	if (!is_404()) {
		return;
	}
	add_filter('genesis_markup_entry-title_open', '__return_false');
	add_filter('genesis_markup_entry-title_close', '__return_false');
	add_filter('genesis_404_entry_title', '__return_false');
}

add_action('genesis_before_content_sidebar_wrap', 'empower_pro_blocks_404_title');
/**
 * Outputs 404 entry title in new position.
 *
 * @since  1.0.0
 */
function empower_pro_blocks_404_title()
{

	if (!is_404()) {
		return;
	}
	genesis_markup(
		array(
			'open'    => '<h1 %s>',
			'close'   => '</h1>',
			'content' => apply_filters('empower_pro_blocks_404_entry_title', __('404 Page Not Found', 'empower-pro-blocks')),
			'context' => 'entry-title',
		)
	);
}

add_action('genesis_after_loop', 'empower_pro_blocks_remove_404_title_filters');
/**
 * Removes 404 entry-title filters.
 *
 * Prevents title wrapper tag removal if featured posts used in widget
 * areas below the 404 title.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_remove_404_title_filters()
{

	remove_filter('genesis_markup_entry-title_open', '__return_false');
	remove_filter('genesis_markup_entry-title_close', '__return_false');
}

add_action('be_title_toggle_remove', 'empower_pro_blocks_integrate_genesis_title_toggle');
/**
 * Integrates with Genesis Title Toggle.
 *
 * Removes Breakthrough title-related elements when titles are turned off.
 *
 * @since 1.0.0
 *
 * @see https://wordpress.org/plugins/genesis-title-toggle/
 * @see https://www.billerickson.net/code/genesis-title-toggle-theme-integration
 */
function empower_pro_blocks_integrate_genesis_title_toggle()
{

	remove_action('genesis_before_content_sidebar_wrap', 'empower_pro_blocks_header_title_wrap', 1);
	remove_action('genesis_before_content_sidebar_wrap', 'empower_pro_blocks_header_title_end_wrap', 18);
	remove_action('genesis_before_content_sidebar_wrap', 'genesis_entry_header_markup_open', 5);
	remove_action('genesis_before_content_sidebar_wrap', 'genesis_do_post_title');
	remove_action('genesis_before_content_sidebar_wrap', 'genesis_entry_header_markup_close', 15);
	add_filter('genesis_skip_links_output', 'empower_pro_blocks_adjust_skip_links');
	remove_filter('genesis_attr_entry', 'empower_pro_blocks_entry_attributes');
}

/**
 * Remove Breakthrough title skip link, add default “skip to content” link.
 *
 * @since 1.0.0
 *
 * @param array $links The list of skip links.
 * @return array $links The modified list of skip links.
 */
function empower_pro_blocks_adjust_skip_links($links)
{

	unset($links['empower-pro-blocks-page-title']);
	array_unshift($links, array('genesis-content' => __('Skip to content', 'empower-pro-blocks')));

	return $links;
}

// Moves titles outside content-sidebar-wrap.
remove_action('genesis_before_loop', 'genesis_do_cpt_archive_title_description');
remove_action('genesis_before_loop', 'genesis_do_posts_page_heading');
remove_action('genesis_before_loop', 'genesis_do_date_archive_title');
remove_action('genesis_before_loop', 'genesis_do_taxonomy_title_description', 15);
remove_action('genesis_before_loop', 'genesis_do_author_title_description', 15);
remove_action('genesis_before_loop', 'genesis_do_blog_template_heading');

add_action('genesis_before_content_sidebar_wrap', 'genesis_do_cpt_archive_title_description');
add_action('genesis_before_content_sidebar_wrap', 'genesis_do_posts_page_heading', 15);
add_action('genesis_before_content_sidebar_wrap', 'genesis_do_date_archive_title');
add_action('genesis_before_content_sidebar_wrap', 'genesis_do_taxonomy_title_description', 17);
add_action('genesis_before_content_sidebar_wrap', 'genesis_do_author_title_description', 17);
add_action('genesis_before_content_sidebar_wrap', 'genesis_do_blog_template_heading', 15);

remove_filter('genesis_attr_entry-title-link', 'genesis_attributes_entry_title_link');
add_filter('genesis_attr_entry-title-link', 'empower_pro_blocks_attributes_entry_title_link');
/**
 * Add attributes for entry title link.
 *
 * @since 2.6.0
 *
 * @param array $attributes Existing attributes for entry title element.
 * @return array Amended attributes for entry title element.
 */
function empower_pro_blocks_attributes_entry_title_link($attributes)
{

	$post_format = get_post_format();

	$target = '_self';
	if ($post_format == "link") {
		$permalink = empower_pro_blocks_get_link_url();
		$target = "_blank";
	} else {
		$permalink = get_permalink();
	}

	$attributes['rel']  = 'bookmark';
	$attributes['href'] = $permalink;
	$attributes['target'] = $target;

	return $attributes;
}
