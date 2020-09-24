<?php
/**
 * Change default arguments for the dropdown menu script
 *
 * @since 2.2.3
 *
 * @return string URL of superfish arguemnt js file.
 */
function empower_pro_blocks_superfish_args_url() {

	return EMPOWER_PRO_BLOCKS_URL . 'js/superfish.args.js';

}
add_filter( 'genesis_superfish_args_url', 'empower_pro_blocks_superfish_args_url', 99 );


// Adds image sizes.
add_image_size( 'header-image', 1600, 420, true );
add_image_size( 'featured-image', 1600, 880, true );
add_image_size( 'portfolio', 510, 650, true );

add_action( 'genesis_before_while', 'empower_pro_blocks_genesis_before_while', 99 );
/**
 * Insert a parent div container over the blog loop function.
 * This is needed to apply advanced Grid CSS on the blog and archive pages.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_genesis_before_while() {
	echo '<div class="genesis-loop-container">';
}

add_action( 'genesis_after_endwhile', 'empower_pro_blocks_genesis_after_endwhile', 1 );
/**
 * Close parent div container. See comment in function above.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_genesis_after_endwhile() {
	echo '</div>';
}

// Add menu search support by default.
add_theme_support( 'empower-pro-blocks-menu-search' );

// Registers the responsive menus.
if ( function_exists( 'genesis_register_responsive_menus' ) ) {
	genesis_register_responsive_menus( empower_pro_blocks_get_config( 'responsive-menus' ) );
}

// add_action( 'wp_enqueue_scripts', 'empower_pro_blocks_enqueue_scripts_styles', 9 );
/**
 * Enqueues scripts and styles.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_enqueue_scripts_styles() {

	$appearance = empower_pro_blocks_get_config( 'appearance' );

	wp_enqueue_style( 'empower-pro-blocks-main', get_stylesheet_directory_uri() . '/css/style-theme.css', array(), CHILD_THEME_VERSION );

	wp_enqueue_style( 'empower-pro-blocks-fonts', $appearance['fonts-url'], array(), CHILD_THEME_VERSION );

	$css = empower_pro_blocks_get_css( $appearance );

	wp_add_inline_style( 'empower-pro-blocks-main', $css );

	if ( ! has_custom_logo() || is_customize_preview() ) {
		wp_enqueue_style( 'empower-pro-blocks-title-font', $appearance['title-font-url'], array(), CHILD_THEME_VERSION );
	}

	/* wp_enqueue_style( 'dashicons' ); */

	wp_enqueue_style( 'icons', $appearance['icons-url'], array(), CHILD_THEME_VERSION );
	wp_enqueue_script( 'icons-js', $appearance['icons-js-url'], array(), CHILD_THEME_VERSION, true );

	wp_enqueue_script( 'empower-pro-blocks-theme-js', CHILD_URL . '/js/theme.js', array( 'jquery' ), CHILD_THEME_VERSION, true );

	wp_enqueue_script( 'empower-pro-blocks-scroll-js', CHILD_URL . '/js/scroll.js', array( 'jquery' ), CHILD_THEME_VERSION, true );

	wp_enqueue_script( 'empower-pro-blocks-typewriter-js', CHILD_URL . '/js/typewriter.js', array( 'jquery' ), CHILD_THEME_VERSION, true );

	wp_enqueue_script( 'empower-pro-blocks-dropdown-menu-js', CHILD_URL . '/js/dropdown-menu.js', array( 'jquery' ), CHILD_THEME_VERSION, true );
}

add_action( 'after_setup_theme', 'empower_pro_blocks_theme_support', 9 );
/**
 * Add desired theme supports.
 *
 * See config file at `config/theme-supports.php`.
 *
 * @since 3.0.0
 */
function empower_pro_blocks_theme_support() {
	$theme_supports = empower_pro_blocks_get_config( 'theme-supports' );
	foreach ( $theme_supports as $feature => $args ) {
		add_theme_support( $feature, $args );
	}
}

// Adds viewport meta tag for mobile browsers.
add_theme_support( 'genesis-responsive-viewport' );

// Add theme support for selective refresh for widgets.
add_theme_support( 'customize-selective-refresh-widgets' );

// Displays custom logo in site title area.
add_action( 'genesis_site_title', 'the_custom_logo', 0 );

// add_filter( 'get_custom_logo', 'empower_pro_blocks_add_sticky_logo', 10, 2 );
/**
 * Add sticky logo to site-header.
 *
 * @since 1.0.0
 *
 * @param string $html logo markup.
 * @param string $blog_id Return blog ID.
 * @return array $html
 */
function empower_pro_blocks_add_sticky_logo( $html, $blog_id ) {
	$appearance     = empower_pro_blocks_get_config( 'appearance' );
	$custom_logo_id = $appearance['logo-sticky'];

	// We have a logo. Logo is go.
	if ( $custom_logo_id ) {
		$custom_logo_attr = array(
			'class' => 'custom-logo sticky-logo',
		);

		/*
		 * If the logo alt attribute is empty, get the site title and explicitly
		 * pass it to the attributes used by wp_get_attachment_image().
		 */
		$image_alt = get_post_meta( $custom_logo_id, '_wp_attachment_image_alt', true );
		if ( empty( $image_alt ) ) {
			$custom_logo_attr['alt'] = get_bloginfo( 'name', 'display' );
		}

		/*
		 * If the alt attribute is not empty, there's no need to explicitly pass
		 * it because wp_get_attachment_image() already adds the alt attribute.
		 */
		$html .= sprintf(
			'<a href="%1$s" class="custom-logo-link sticky-logo-link" rel="home">%2$s</a>',
			esc_url( home_url( '/' ) ),
			wp_get_attachment_image( $custom_logo_id, 'full', false, $custom_logo_attr )
		);
	} elseif ( is_customize_preview() ) {
		// If no logo is set but we're in the Customizer, leave a placeholder (needed for the live preview).
		$html .= sprintf(
			'<a href="%1$s" class="custom-logo-link sticky-logo-link" style="display:none;"><img class="custom-logo sticky-logo"/></a>',
			esc_url( home_url( '/' ) )
		);
	}

	return $html;

}

add_filter( 'genesis_customizer_theme_settings_config', 'empower_pro_blocks_remove_customizer_settings' );
/**
 * Removes output of genesis header settings in the Customizer.
 *
 * @since 1.0.0
 *
 * @param array $config Original Customizer items.
 * @return array Filtered Customizer items.
 */
function empower_pro_blocks_remove_customizer_settings( $config ) {

	unset( $config['genesis']['sections']['genesis_header'] );
	return $config;

}

add_action( 'genesis_theme_settings_metaboxes', 'empower_pro_blocks_remove_genesis_metaboxes' );
/**
 * Removes navigation meta box.
 *
 * @since 1.0.0
 *
 * @param string $_genesis_theme_settings_pagehook The page hook name.
 */
function empower_pro_blocks_remove_genesis_metaboxes( $_genesis_theme_settings_pagehook ) {

	remove_meta_box( 'genesis-theme-settings-nav', $_genesis_theme_settings_pagehook, 'main' );

}

add_filter( 'genesis_attr_site-header', 'empower_pro_blocks_add_class' );
// Add extra class to content
function empower_pro_blocks_add_class( $attributes ) {
	$attributes['class'] = $attributes['class']. ' globalNav noDropdownTransition';
	// $attributes['class'] = $attributes['class']. ' globalNav overlayActive dropdownActive';
	return $attributes;
}

add_filter( 'nav_menu_link_attributes', 'empower_pro_blocks_menu_atts', 10, 3 );
function empower_pro_blocks_menu_atts( $atts, $item, $args ) {
	// inspect $item
	if ( 'primary' === $args->theme_location ) {
		$href = $atts['href'];
		if (substr($href, 0, 1) === '#') {
			$data_dropdown = ltrim( $href, '#' );
			$atts['data-dropdown'] = $data_dropdown;
			$class = 'hasDropdown';
			if ( isset( $atts['class'] ) ) {
				$class = " " . $atts['class'];
			}
			$atts['class'] = $class;
		}
	}

	return $atts;
}

add_action( 'genesis_header', 'empower_pro_blocks_site_header_background', 1 );
function empower_pro_blocks_site_header_background() {
	$html = '';

	$html .= '<div id="site-header-background" class="site-header-background">';
	$html .= '</div>';

	echo $html;
}

add_action( 'genesis_header', 'empower_pro_blocks_do_nav_submenu', 12 );
/**
 * Reduces the secondary navigation menu to one level depth.
 *
 * @since 1.0.0
 *
 * @param array $args The WP navigation menu arguments.
 * @return array The modified menu arguments.
 */
function empower_pro_blocks_do_nav_submenu() {
	$appearance = empower_pro_blocks_get_config( 'appearance' );

	$id = $appearance['mega_menu'];

	if ( ! $id ) {
		return;
	}

	$post = get_post( $id );

	if ( ! $post ) {
		return;
	}

	$html = '';

	$html .= '<div id="dropdown-root" class="dropdownRoot">';
		$html .= '<div class="dropdownBackground" style="transform: translateX(452px) scaleX(0.707692) scaleY(1.1075);">';
			$html .= '<div class="alternateBackground" style="transform: translateY(255.53px);"></div>';
		$html .= '</div>';
		$html .= '<div class="dropdownArrow" style="transform: translateX(636px) rotate(45deg);"></div>';
		$html .= '<div class="dropdownContainer" style="transform: translateX(452px); width: 368px; height: 443px;">';

		$content = $post->post_content;
		$content = do_blocks( $content );
		$content = do_shortcode( $content );
		$html .= $content;

		$html .= '</div>';
	$html .= '</div>';

	echo $html;
}

add_action( 'genesis_header', 'empower_pro_blocks_do_mobile_menu', 12 );
/**
 * Reduces the secondary navigation menu to one level depth.
 *
 * @since 1.0.0
 *
 * @param array $args The WP navigation menu arguments.
 * @return array The modified menu arguments.
 */
function empower_pro_blocks_do_mobile_menu() {
	$appearance = empower_pro_blocks_get_config( 'appearance' );

	$mobile_menu_id = $appearance['mobile_menu'];

	if ( ! $mobile_menu_id ) {
		return;
	}

	$post = get_post( $mobile_menu_id );

	if ( ! $post ) {
		return;
	}

	$html = '';

	$html .= '<div class="navSection mobile">';
		$html .= '<button class="menu-toggle burger-menu" aria-expanded="false" aria-pressed="false" id="genesis-mobile-nav-primary"><span class="flex-wrap"><span class="line-1"></span><span class="line-2"></span><span class="line-3"></span></span></button>';
		$html .= '<div class="popup">';
		  $html .= '<div class="popupContainer">';

			$content = $post->post_content;
			$content = do_blocks( $content );
			$content = do_shortcode( $content );
			$html .= $content;

		  $html .= '</div>';
		$html .= '</div>';
	$html .= '</div>';


	echo $html;
}

// Repositions the secondary navigation menu.
remove_action( 'genesis_after_header', 'genesis_do_subnav' );
add_action( 'genesis_footer', 'genesis_do_subnav', 5 );

add_filter( 'wp_nav_menu_args', 'empower_pro_blocks_secondary_menu_args' );
/**
 * Reduces the secondary navigation menu to one level depth.
 *
 * @since 1.0.0
 *
 * @param array $args The WP navigation menu arguments.
 * @return array The modified menu arguments.
 */
function empower_pro_blocks_secondary_menu_args( $args ) {

	if ( 'primary' === $args['theme_location'] ) {
		$args['depth'] = 1;
	}

	if ( 'secondary' === $args['theme_location'] ) {
		$args['depth'] = 1;
	}

	if ( 'tertiary' === $args['theme_location'] ) {
		$args['depth'] = 1;
	}

	if ( 'mobile-cta' === $args['theme_location'] ) {
		$args['depth'] = 1;
	}

	return $args;

}

add_filter( 'genesis_skip_links_output', 'empower_pro_blocks_skip_links_output' );
/**
 * Removes skip link for primary navigation and adds skip link for footer widgets.
 *
 * @since 1.0.0
 *
 * @param array $links The list of skip links.
 * @return array $links The modified list of skip links.
 */
function empower_pro_blocks_skip_links_output( $links ) {

	unset( $links['genesis-nav-primary'] );
	unset( $links['genesis-content'] );

	$links['empower-pro-blocks-page-title'] = __( 'Skip to content', 'empower-pro-blocks' );

	if ( is_active_sidebar( 'empower-pro-blocks-footer' ) ) {
		$links['footer'] = __( 'Skip to footer', 'empower-pro-blocks' );
	}

	return $links;

}

add_filter( 'genesis_author_box_gravatar_size', 'empower_pro_blocks_author_box_gravatar' );
/**
 * Modifies the size of the Gravatar in the author box.
 *
 * @since 1.0.0
 *
 * @param int $size Current Gravatar size.
 * @return int New size.
 */
function empower_pro_blocks_author_box_gravatar( $size ) {

	return 84;

}

add_filter( 'genesis_comment_list_args', 'empower_pro_blocks_comments_gravatar' );
/**
 * Modifies the size of the Gravatar in the entry comments.
 *
 * @since 1.0.0
 *
 * @param array $args The comment list arguments.
 * @return array Arguments with new avatar size.
 */
function empower_pro_blocks_comments_gravatar( $args ) {

	$args['avatar_size'] = 45;
	return $args;

}

add_filter( 'genesis_more_text', 'empower_pro_blocks_more_text', 10, 1 );
/**
 * Modifies the generic more link markup for posts.
 *
 * @since 1.0.0
 *
 * @param string $text The current text.
 * @return string The new more link HTML.
 */
function empower_pro_blocks_more_text( $text ) {

	return sprintf( '%s &#x2192;', genesis_a11y_more_link( __( 'Continue Reading', 'empower-pro-blocks' ) ) );

}

add_filter( 'excerpt_more', 'empower_pro_blocks_excerpt_more', 10, 1 );
/**
 * Modifies the generic more link markup for posts.
 *
 * @since 1.0.0
 *
 * @param string $more The current $more HTML.
 * @return string The new $more link HTML.
 */
function empower_pro_blocks_excerpt_more( $more ) {

	if ( is_page_template( 'page_blog.php' ) || is_home() || is_archive() || is_search() ) {
		$more = sprintf( '...<p class="more-link-wrapper"><a href="%s" class="more-link">%s &#x2192;</a></p>', get_the_permalink(), genesis_a11y_more_link( __( 'Continue Reading', 'empower-pro-blocks' ) ) );
	}

	return $more;

}

add_filter( 'wp_trim_excerpt', 'empower_pro_blocks_wp_trim_excerpt', 10, 2 );
/**
 * Add read more to user entered excerpt.
 *
 * @since 1.0.0
 *
 * @param string $text The current full HTML.
 * @param string $raw_text the original raw HTML.
 * @return string The new HTML.
 */
function empower_pro_blocks_wp_trim_excerpt( $text, $raw_text ) {

	if ( '' !== $raw_text ) {
		$more = sprintf( '<p class="more-link-wrapper"><a href="%s" class="more-link">%s &#x2192;</a></p>', get_the_permalink(), genesis_a11y_more_link( __( 'Continue Reading', 'empower-pro-blocks' ) ) );
		$text = $text . $more;
	}

	return $text;

}

add_filter( 'genesis_post_info', 'empower_pro_blocks_modify_post_info' );
/**
 * Modifies the meta information in the entry header.
 *
 * @since 1.0.0
 *
 * @param string $post_info Current post info.
 * @return string New post info.
 */
function empower_pro_blocks_modify_post_info( $post_info ) {

	global $post;

	setup_postdata( $post );
	$post_avatar = get_avatar( get_the_author_meta( 'email' ), 36 );
	$post_format = get_post_format();

	$byline = '';
	if ( $post_format != "link" ) {
		$byline = '<i class="byline">by</i> ';
	}

	if ( is_single() ) {
		$post_info = $post_avatar . $byline . '[post_author_posts_link] <i>on</i> [post_date after=""]  [post_comments] [post_edit]';
	} else {
		$post_info = $byline . '[post_author_posts_link] <i>on</i> [post_date]  [post_comments] [post_edit]';
	}

	return $post_info;

}

/**
 * Counts used widgets in given sidebar.
 *
 * @since 1.0.0
 *
 * @param string $id The sidebar ID.
 * @return int|void The number of widgets, or nothing.
 */
function empower_pro_blocks_count_widgets( $id ) {

	$sidebars_widgets = wp_get_sidebars_widgets();

	if ( isset( $sidebars_widgets[ $id ] ) ) {
		return count( $sidebars_widgets[ $id ] );
	}

}

/**
 * Gives class name based on widget count.
 *
 * @since 1.0.0
 *
 * @param string $id The widget ID.
 * @return string The class.
 */
function empower_pro_blocks_widget_area_class( $id ) {

	$count = empower_pro_blocks_count_widgets( $id );

	$class = '';

	if ( 1 === $count ) {
		$class .= ' widget-full';
	} elseif ( 0 === $count % 3 ) {
		$class .= ' widget-thirds';
	} elseif ( 0 === $count % 4 ) {
		$class .= ' widget-fourths';
	} elseif ( 1 === $count % 2 ) {
		$class .= ' widget-halves uneven';
	} else {
		$class .= ' widget-halves';
	}

	return $class;

}

/**
 * Outputs class names based on widget count.
 *
 * @since 1.0.0
 *
 * @param string $id The widget ID.
 * @return string The class.
 */
function empower_pro_blocks_cta_widget_area_class( $id ) {

	$count = empower_pro_blocks_count_widgets( $id );

	$class = '';

	if ( 1 >= $count ) {
		$class .= ' widget-full one-widget-full';
	} else {
		$class .= ' widget-full two-plus-widget-full';
	}

	return $class;

}

add_action( 'genesis_before_footer', 'empower_pro_blocks_footer_widgets' );
/**
 * Adds the flexible footer widget area.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_footer_widgets() {

	$appearance = empower_pro_blocks_get_config( 'appearance' );

	$id = $appearance['footer_menu'];

	if ( ! $id ) {
		return;
	}

	$post = get_post( $id );

	if ( ! $post ) {
		return;
	}

	$html = '';

	$html .= '<div id="footer" class="footer-widgets entry-content">';
		$html .= '<div class="wrap">';

		$content = $post->post_content;
		$content = do_blocks( $content );
		$content = do_shortcode( $content );
		$html .= $content;

		$html .= '</div>';
	$html .= '</div>';

	echo $html;

}

add_action( 'genesis_after_footer', 'empower_pro_blocks_popup' );
/**
 * Adds the flexible footer widget area.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_popup() {

	$appearance = empower_pro_blocks_get_config( 'appearance' );

	$id = $appearance['popup'];

	if ( ! $id ) {
		return;
	}

	$post = get_post( $id );

	if ( ! $post ) {
		return;
	}

	$html = '';

	$html .= '<div class="modal-overlay closed" id="modal-overlay">';
		$html .= '<div class="modal" id="modal">';
			$html .= '<button class="close-button" id="close-button">';
				$html .= '<svg viewBox="0 0 384 512" style="display:block;height:22px;width:22px"><path d="M231.6 256l130.1-130.1c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L192 216.4 61.9 86.3c-4.7-4.7-12.3-4.7-17 0l-22.6 22.6c-4.7 4.7-4.7 12.3 0 17L152.4 256 22.3 386.1c-4.7 4.7-4.7 12.3 0 17l22.6 22.6c4.7 4.7 12.3 4.7 17 0L192 295.6l130.1 130.1c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17L231.6 256z"></path></svg>';
			$html .= '</button>';
			$html .= '<div class="modal-inner">';

			$content = $post->post_content;
			$content = do_blocks( $content );
			$content = do_shortcode( $content );
			// $content = apply_filters('the_content', $content);
			// $content = str_replace(']]>', ']]&gt;', $content);
			$html .= $content;

			$html .= '</div>';
		$html .= '</div>';
	$html .= '</div>';

	echo $html;

}

add_action( 'genesis_meta', 'empower_pro_blocks_add_portfolio_breadcrumbs' );
/**
 * Add portfolio breadcrumbs.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_add_portfolio_breadcrumbs() {

	if ( is_post_type_archive( 'portfolio' ) || is_singular( 'portfolio' ) ) {
		add_action( 'genesis_before_loop', 'genesis_do_breadcrumbs', 11 );
	}

}

add_action( 'genesis_footer', 'empower_pro_blocks_social_icons', 14 );
/**
 * Wrap nav elements in div element.
 *
 * @since 1.0.0
 *
 * @return void
 */
function empower_pro_blocks_social_icons() {

	$has_social = false;

	if ( is_active_sidebar( 'social-icons' ) ) {
		$has_social = true;
	}

	if ( $has_social ) {
		genesis_widget_area(
			'social-icons',
			array(
				'before' => '<div id="social-icons" class="social-icons"><div class="widget-area">',
				'after'  => '</div></div>',
			)
		);
	}
}

add_action( 'genesis_header', 'empower_pro_blocks_top_bar', 8 );
/**
 * Wrap nav elements in div element.
 *
 * @since 1.0.0
 *
 * @return void
 */
function empower_pro_blocks_top_bar() {

	$has_nav    = false;
	$has_social = false;

	// Do nothing if menu not supported.
	if ( has_nav_menu( 'tertiary' ) ) {
		$has_nav = true;
	}

	if ( $has_nav || $has_social ) {
		echo '<div class="top-header-bar">';

		if ( $has_nav ) {
			$class = 'menu genesis-nav-menu menu-tertiary';
			if ( genesis_superfish_enabled() ) {
				$class .= ' js-superfish';
			}

			echo '<div class="top-header-bar-inner inner-left">';

			genesis_nav_menu(
				array(
					'theme_location' => 'tertiary',
					'menu_class'     => $class,
				)
			);

			echo '</div>';
		}

		if ( $has_social ) {

			echo '<div class="top-header-bar-inner inner-right">';

			genesis_widget_area(
				'social-icons',
				array(
					'before' => '<div id="social-icons" class="social-icons"><div class="widget-area">',
					'after'  => '</div></div>',
				)
			);

			echo '</div>';
		}

		echo '</div>';
	}
}

add_action( 'genesis_header', 'empower_pro_blocks_add_menu_primary_cta', 13 );
/**
 * Wrap nav elements in div element.
 *
 * @since 1.0.0
 *
 * @return void
 */
function empower_pro_blocks_add_menu_primary_cta() {
	$has_nav = false;

	if ( has_nav_menu( 'primary-cta' ) ) {
		$has_nav = true;
	}

	if ( $has_nav ) {
		$class = 'menu genesis-nav-menu menu-primary-cta';
		if ( genesis_superfish_enabled() ) {
			$class .= ' js-superfish';
		}

		genesis_nav_menu(
			array(
				'theme_location' => 'primary-cta',
				'menu_class'     => $class,
			)
		);
	}
}

add_action( 'genesis_footer', 'empower_pro_blocks_mobile_cta', 11 );
/**
 * Display search before nav menu.
 *
 * @since 1.0.0
 *
 * @return void
 */
function empower_pro_blocks_mobile_cta() {
	$button_text = genesis_get_custom_field( 'empower_pro_blocks_mobile_button_text' );

	if ( $button_text ) {
		$button_url = genesis_get_custom_field( 'empower_pro_blocks_mobile_button_url' );

		$html  = '<nav class="nav-mobile-cta nav-custom-mobile-cta">';
		$html .= '<ul id="menu-mobile-cta" class="menu genesis-nav-menu menu-mobile-cta anchor-scroll">';
		$html .= '<li id="custom-mobile-button-' . get_the_ID() . '" class="menu-item">';
		$html .= '<a href="' . esc_url( $button_url ) . '" itemprop="url">';
		$html .= '<span itemprop="name">' . wp_kses_post( $button_text ) . '</span>';
		$html .= '</a>';
		$html .= '</li>';
		$html .= '</ul>';
		$html .= '</nav>';

		echo $html;

		return;
	}

	if ( ! has_nav_menu( 'mobile-cta' ) ) {
		return;
	}

	genesis_nav_menu(
		array(
			'theme_location' => 'mobile-cta',
			'menu_class'     => 'menu genesis-nav-menu menu-mobile-cta anchor-scroll',
		)
	);
}

add_action( 'genesis_header', 'empower_pro_blocks_menu_search', 11 );
/**
 * Display search before nav menu.
 *
 * @since 1.0.0
 *
 * @return void
 */
function empower_pro_blocks_menu_search() {
	if ( ! current_theme_supports( 'empower-pro-blocks-menu-search' ) ) {
		return;
	}

	echo '<nav class="post-search-menu in-menu-bar"><ul class="search-menu">';

	echo '<li id="empower-pro-blocks-post-search-menu-item" class="post-search menu-item">';
	echo '<a class="post_search_link" href="#">';
	echo '<i class="ion-ios-search"></i>';
	echo '</a>';
	echo '</li>';

	echo '</ul></nav>';
}

add_action( 'genesis_header', 'empower_pro_blocks_woocommerce_menu_post_search_bar', 14 );
/**
 * Display post search bar.
 *
 * @since 1.0.0
 *
 * @return void
 */
function empower_pro_blocks_woocommerce_menu_post_search_bar() {
	if ( ! current_theme_supports( 'empower-pro-blocks-menu-search' ) ) {
		return;
	}

	echo '<nav id="post-search-dropdown" class="post-search-sub-menu"><ul id="genesis-nav-post-search" class="menu genesis-nav-menu"><li class="post-search-item">';
	echo '<div class="post_search_form_content">';

	$is_docs_home = empower_pro_blocks_is_wedocs_home_page();

	if ( class_exists( 'WeDocs_Search_Widget' ) && ( $is_docs_home || is_singular( 'docs' ) || ( is_search() && 'docs' === get_query_var( 'post_type' ) ) ) ) {
		the_widget( 'WeDocs_Search_Widget' );
	} elseif ( current_theme_supports( 'empower-pro-blocks-shop-menu-search' ) ) {
		if ( function_exists( 'get_product_search_form' ) ) {
			get_product_search_form();
		}
	} else {
		get_search_form();
	}

	echo '</div>';
	echo '</li></ul></nav>';
}

add_action( 'wp_loaded', 'empower_pro_blocks_check_features', 11 );
/**
 * Check WooCommerce gallery features.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_check_features() {
	$appearance = empower_pro_blocks_get_config( 'appearance' );

	if ( $appearance['hide-menu-search'] ) {
		remove_theme_support( 'empower-pro-blocks-menu-search' );
	}
}

/**
 * Remove edit post link.
 *
 * @since 1.0.0
 */
add_filter( 'genesis_edit_post_link', '__return_false' );

add_action( 'genesis_entry_header', 'empower_pro_blocks_sticky_label', 1 );
/**
 * Filter Genesis Post Titles to add a [NEW] label for posts that have been published within the last 90 days.
 *
 * @since 1.01
 *
 * @return void
 */
function empower_pro_blocks_sticky_label() {
	if ( 'post' === get_post_type() && is_sticky() ) {
		echo '<span class="sticky">' . wp_kses_post( __( 'Featured', 'empower-pro-blocks' ) ) . '</span>';
	}
}

global $empower_pro_blocks_appearance;
$empower_pro_blocks_appearance = empower_pro_blocks_get_config( 'appearance' );
