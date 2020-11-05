<?php
// Adds support for after entry widget.
add_theme_support( 'genesis-after-entry-widget-area' );

// Removes header right widget area.
unregister_sidebar( 'header-right' );

// Removes secondary sidebar.
unregister_sidebar( 'sidebar-alt' );

// Removes site layouts.
if ( function_exists( 'genesis_unregister_layout' ) ) {
	genesis_unregister_layout( 'content-sidebar-sidebar' );
	genesis_unregister_layout( 'sidebar-content-sidebar' );
	genesis_unregister_layout( 'sidebar-sidebar-content' );
}

// Removes output of primary navigation right extras.
remove_filter( 'genesis_nav_items', 'genesis_nav_right', 10, 2 );
remove_filter( 'wp_nav_menu_items', 'genesis_nav_right', 10, 2 );

if ( function_exists( 'genesis_register_sidebar' ) ) {
	genesis_register_sidebar(
		array(
			'id'          => 'social-icons',
			'name'        => __( 'Social Icons', 'empower-pro-blocks' ),
			'description' => __( 'Drag the Simple Social Icons to display social icons in your site.', 'empower-pro-blocks' ),
		)
	);
}

// Repositions primary navigation menu.
remove_action( 'genesis_after_header', 'genesis_do_nav' );
add_action( 'genesis_header', 'genesis_do_nav', 12 );

remove_action( 'genesis_entry_content', 'genesis_do_post_content' );
add_action( 'genesis_entry_content', 'empower_pro_blocks_do_post_content' );

/**
 * Echo the post content.
 *
 * On single posts or pages it echoes the full content, and optionally the trackback string if enabled. On single pages,
 * also adds the edit link after the content.
 *
 * Elsewhere it displays either the excerpt, limited content, or full content.
 *
 * Applies the `genesis_edit_post_link` filter.
 *
 * @since 1.1.0
 */
function empower_pro_blocks_do_post_content() {
	global $post;

	if ( ! is_single() ) {
		$post_format = get_post_format();

		$target = '_self';
		if ( in_array( $post_format, array( 'link' ) ) ) {
			$permalink = empower_pro_blocks_get_link_url();
			$target = "_blank";

			if ( has_excerpt() ) {
				$excerpt = wpautop( $post->post_excerpt );
				echo $excerpt;
			}

			$more = sprintf( '<p class="more-link-wrapper"><a href="%s" class="more-link" target="%s">%s &#x2192;</a></p>', $permalink, $target, genesis_a11y_more_link( __( 'Read Article', 'empower-pro-blocks' ) ) );

			echo $more;

			return;
		}
	}

	if ( is_singular() ) {
		the_content();

		if ( is_single() && 'open' === get_option( 'default_ping_status' ) && post_type_supports( get_post_type(), 'trackbacks' ) ) {
			echo '<!--';
			trackback_rdf();
			echo '-->' . "\n";
		}

		if ( is_page() && apply_filters( 'genesis_edit_post_link', true ) ) {
			edit_post_link( __( '(Edit)', 'genesis' ), '', '' );
		}

		return;
	}

	if ( 'excerpts' === genesis_get_option( 'content_archive' ) ) {
		the_excerpt();
		return;
	}

	/**
	 * Filters the more text used with the_content_limit() and the_content.
	 *
	 * @since 2.7.0
	 *
	 * @param string $more_text The more text after going through genesis_a11y_more_link().
	 */
	$more_text = apply_filters( 'genesis_more_text', genesis_a11y_more_link( __( '[Read more...]', 'genesis' ) ) );

	if ( genesis_get_option( 'content_archive_limit' ) ) {
		the_content_limit( (int) genesis_get_option( 'content_archive_limit' ), $more_text );
		return;
	}

	the_content( $more_text );
}

remove_filter( 'genesis_attr_body', 'genesis_attributes_body' );
add_filter( 'genesis_attr_body', 'empower_pro_blocks_attributes_body' );
/**
 * Add attributes for entry title link.
 *
 * @since 2.6.0
 *
 * @param array $attributes Existing attributes for entry title element.
 * @return array Amended attributes for entry title element.
 */
function empower_pro_blocks_attributes_body( $attributes ) {

	$attributes['id'] = "master";
	$attributes['class'] = implode( ' ', get_body_class() );

	return $attributes;

}
