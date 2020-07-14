<?php
/**
 * Leadership Pro.
 *
 * This defines the shortcodes functions for use in the Leadership Pro Theme.
 *
 * @package Leadership_Pro
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/leadership-pro/
 */

/**
 * Display recent posts with shortcode.
 *
 * @since  0.9.4
 */
function leadership_pro_shortcode( $atts, $content ) {
	$args = shortcode_atts( leadership_pro_get_default_args(), $atts );
	return leadership_pro_get_recent_posts( $args );
}
add_shortcode( 'leadership_pro_blog', 'leadership_pro_shortcode' );

/**
 * Display list of tags for widget.
 *
 * @since  0.9.9.1
 */
function leadership_pro_tags_list() {

	// Arguments
	$args = array(
		'number' => 99
	);

	// Allow dev to filter the arguments
	$args = apply_filters( 'leadership_pro_tags_list_args', $args );

	// Get the tags
	$tags = get_terms( 'post_tag', $args );

	return $tags;
}

/**
 * Display list of categories for widget.
 *
 * @since  0.9.9.1
 */
function leadership_pro_cats_list() {

	// Arguments
	$args = array(
		'number' => 99
	);

	// Allow dev to filter the arguments
	$args = apply_filters( 'leadership_pro_cats_list_args', $args );

	// Get the cats
	$cats = get_terms( 'category', $args );

	return $cats;
}

/**
 * Sets up the default arguments.
 *
 * @since  0.9.4
 */
function leadership_pro_get_default_args() {

	$defaults = array(
		'title'             => esc_attr__( 'Recent Posts', 'leadership-pro' ),
		'title_url'         => '',

		'limit'            => 3,
		'offset'           => 0,
		'order'            => 'DESC',
		'orderby'          => 'date',
		'cat'              => array(),
		'tag'              => array(),
		'taxonomy'         => '',
		'post_type'        => array( 'post' ),
		'post_status'      => 'publish',
		'ignore_sticky'    => 1,
		'exclude_current'  => 1,

		'excerpt'          => false,
		'length'           => 10,
		'thumb'            => true,
		'thumb_height'     => 45,
		'thumb_width'      => 45,
		'thumb_default'    => '',
		'thumb_align'      => 'blog-alignleft',
		'date'             => true,
		'date_relative'    => false,
		'date_modified'    => false,
		'readmore'         => true,
		'readmore_text'    => __( 'Read More', 'recent-posts-widget-extended' ),
		'comment_count'    => true,

		'styles_default'   => true,
		'css'              => '',
		'cssID'            => '',
		'css_class'        => '',
		'before'           => '',
		'after'            => ''
	);

	// Allow plugins/themes developer to filter the default arguments.
	return apply_filters( 'leadership_pro_default_args', $defaults );

}

/**
 * Outputs the recent posts.
 *
 * @since  0.9.4
 */
function leadership_pro_recent_posts( $args = array() ) {
	echo leadership_pro_get_recent_posts( $args );
}

/**
 * Generates the posts markup.
 *
 * @since  0.9.4
 * @param  array  $args
 * @return string|array The HTML for the random posts.
 */
function leadership_pro_get_recent_posts( $args = array() ) {

	// Set up a default, empty variable.
	$html = '';

	// Merge the input arguments and the defaults.
	$args = wp_parse_args( $args, leadership_pro_get_default_args() );

	// Extract the array to allow easy use of variables.
	extract( $args );

	// Allow devs to hook in stuff before the loop.
	do_action( 'leadership_pro_before_loop' );

	// If the default style is disabled then use the custom css if it's not empty.
	if ( $args['styles_default'] === false && ! empty( $args['css'] ) ) {
		echo '<style>' . $args['css'] . '</style>';
	}

	// Get the posts query.
	$posts = leadership_pro_get_posts( $args );

	if ( $posts->have_posts() ) :

		// Recent posts wrapper
		$html = '<div ' . ( ! empty( $args['cssID'] ) ? 'id="' . sanitize_html_class( $args['cssID'] ) . '"' : '' ) . ' class="blog-shortcode blog-three-columns ' . ( ! empty( $args['css_class'] ) ? '' . sanitize_html_class( $args['css_class'] ) . '' : '' ) . '">';

			$html .= '<div class="blog-shortcode-loop-container">';

				while ( $posts->have_posts() ) : $posts->the_post();

					// Thumbnails
					$thumb_id = get_post_thumbnail_id(); // Get the featured image id.
					$img_url  = wp_get_attachment_url( $thumb_id ); // Get img URL.

					// Start recent posts markup.
					$html .= '<article class="'.join( ' ', get_post_class() ).'">';

						if ( $args['thumb'] ) :

							// Check if post has post thumbnail.
							if ( has_post_thumbnail() ) :
								$html .= '<a class="entry-image-link" href="' . esc_url( get_permalink() ) . '"  rel="bookmark">';
									$html .= '<div class="leadership-pro-featured-image">';
									if ( $img_url ) :
										$html .= '<img class="' . esc_attr( $args['thumb_align'] ) . ' post-image entry-image" src="' . esc_url( $img_url ) . '" alt="' . esc_attr( get_the_title() ) . '">';
									else :
										$html .= get_the_post_thumbnail( get_the_ID(),
											array( $args['thumb_width'], $args['thumb_height'] ),
											array(
												'class' => $args['thumb_align'] . ' post-image entry-image',
												'alt'   => esc_attr( get_the_title() )
											)
										);
									endif;
									$html .= '</div>';
								$html .= '</a>';

							// Display default image.
							elseif ( ! empty( $args['thumb_default'] ) ) :
								$html .= '<a class="entry-image-link" href="' . esc_url( get_permalink() ) . '"  rel="bookmark">';
									$html .= '<div class="leadership-pro-featured-image">';
										$html .= sprintf( '<img class="%1$s blog-thumb blog-default-thumb" src="%2$s" alt="%3$s" width="%4$s" height="%5$s">',
											esc_attr( $args['thumb_align'] ),
											esc_url( $args['thumb_default'] ),
											esc_attr( get_the_title() ),
											(int) $args['thumb_width'],
											(int) $args['thumb_height']
										);
									$html .= '</div>';
								$html .= '</a>';
							endif;

						endif;

						$html .= '<header class="entry-header">';

							$meta = '';
							if ( $args['date'] ) :
								$date = get_the_date();
								if ( $args['date_relative'] ) :
									$date = sprintf( __( '%s ago', 'recent-posts-widget-extended' ), human_time_diff( get_the_date( 'U' ), current_time( 'timestamp' ) ) );
								endif;
								$meta .= '<time class="entry-time" datetime="' . esc_html( get_the_date( 'c' ) ) . '">' . esc_html( $date ) . '</time> ';
							elseif ( $args['date_modified'] ) : // if both date functions are provided, we use date to be backwards compatible
								$date = get_the_modified_date();
								if ( $args['date_relative'] ) :
									$date = sprintf( __( '%s ago', 'recent-posts-widget-extended' ), human_time_diff( get_the_modified_date( 'U' ), current_time( 'timestamp' ) ) );
								endif;
								$meta .= '<time class="entry-time modfied" datetime="' . esc_html( get_the_modified_date( 'c' ) ) . '">' . esc_html( $date ) . '</time>';
							endif;

							if ( $args['comment_count'] ) :
								if ( get_comments_number() == 0 ) {
									$comments = __( 'No Comments', 'recent-posts-widget-extended' );
								} elseif ( get_comments_number() > 1 ) {
									$comments = sprintf( __( '%s Comments', 'recent-posts-widget-extended' ), get_comments_number() );
								} else {
									$comments = __( '1 Comment', 'recent-posts-widget-extended' );
								}
								$meta .= '<span class="entry-comments-link">';
								$meta .= '<a class="blog-comment comment-count" href="' . get_comments_link() . '">' . $comments . '</a>';
								$meta .= '</span>';
							endif;

							if ( ! empty( $meta ) ) {
								$html .= '<p class="entry-meta">';
								$html .= $meta;
								$html .= '</p>';
							}

							$html .= '<h2 class="entry-title"><a class="entry-title-link" href="' . esc_url( get_permalink() ) . '" title="' . sprintf( esc_attr__( 'Permalink to %s', 'recent-posts-widget-extended' ), the_title_attribute( 'echo=0' ) ) . '" rel="bookmark">' . esc_attr( get_the_title() ) . '</a></h2>';
						$html .= '</header>';

							if ( $args['excerpt'] ) :
								$html .= '<div class="entry-content">';
								$html .= '<p>'.wp_trim_words( apply_filters( 'leadership_pro_excerpt', get_the_excerpt() ), $args['length'], '&hellip;' ).'</p>';
								$html .= '</div>';
							endif;

							if ( $args['readmore'] ) :
								$html .= '<div class="entry-read-more">';
								$html .= '<a href="' . esc_url( get_permalink() ) . '" class="more-link">' . $args['readmore_text'] . '</a>';
								$html .= '</div>';
							endif;

					$html .= '</article>';

				endwhile;

			$html .= '</div>';

		$html .= '</div>';

	endif;

	// Restore original Post Data.
	wp_reset_postdata();

	// Allow devs to hook in stuff after the loop.
	do_action( 'leadership_pro_after_loop' );

	// Return the  posts markup.
	return wp_kses_post( $args['before'] ) . apply_filters( 'leadership_pro_markup', $html ) . wp_kses_post( $args['after'] );

}

/**
 * The posts query.
 *
 * @since  0.0.1
 * @param  array  $args
 * @return array
 */
function leadership_pro_get_posts( $args = array() ) {

	// Query arguments.
	$query = array(
		'offset'              => $args['offset'],
		'posts_per_page'      => $args['limit'],
		'orderby'             => $args['orderby'],
		'order'               => $args['order'],
		'post_type'           => $args['post_type'],
		'post_status'         => $args['post_status'],
		'ignore_sticky_posts' => $args['ignore_sticky'],
	);

	// Exclude current post
	if ( $args['exclude_current'] ) {
		$query['post__not_in'] = array( get_the_ID() );
	}

	// Limit posts based on category.
	if ( ! empty( $args['cat'] ) ) {
		$query['category__in'] = $args['cat'];
	}

	// Limit posts based on post tag.
	if ( ! empty( $args['tag'] ) ) {
		$query['tag__in'] = $args['tag'];
	}

	/**
	 * Taxonomy query.
	 * Prop Miniloop plugin by Kailey Lampert.
	 */
	if ( ! empty( $args['taxonomy'] ) ) {

		parse_str( $args['taxonomy'], $taxes );

		$operator  = 'IN';
		$tax_query = array();
		foreach( array_keys( $taxes ) as $k => $slug ) {
			$ids = explode( ',', $taxes[$slug] );
			if ( count( $ids ) == 1 && $ids['0'] < 0 ) {
				// If there is only one id given, and it's negative
				// Let's treat it as 'posts not in'
				$ids['0'] = $ids['0'] * -1;
				$operator = 'NOT IN';
			}
			$tax_query[] = array(
				'taxonomy' => $slug,
				'field'    => 'id',
				'terms'    => $ids,
				'operator' => $operator
			);
		}

		$query['tax_query'] = $tax_query;

	}

	// Allow plugins/themes developer to filter the default query.
	$query = apply_filters( 'leadership_pro_default_query_arguments', $query );

	// Perform the query.
	$posts = new WP_Query( $query );

	return $posts;

}
