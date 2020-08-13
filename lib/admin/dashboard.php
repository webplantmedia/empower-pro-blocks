<?php
/**
 * Leadership Pro.
 *
 * This file adds an admin page for help links..
 *
 * @package Leadership_Pro
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/leadership-pro/
 */

add_action( 'wp_dashboard_setup', 'leadership_pro_dashboard_widgets' );
/**
 * Display dashboard widgets.
 *
 * @since 1.01
 *
 * @return void
 */
function leadership_pro_dashboard_widgets() {
	global $wp_meta_boxes;

	wp_add_dashboard_widget( 'leadership_pro_help_widget', 'Leadership Pro Child Theme - Version&nbsp;' . EMPOWER_PRO_BLOCKS_VERSION, 'leadership_pro_dashboard_widget' );
}

/**
 * Display dashboard widget.
 *
 * @since 1.01
 *
 * @return void
 */
function leadership_pro_dashboard_widget() {
	leadership_pro_dashboard_static_articles();
	leadership_pro_dashboard_static_services();
}

/**
 * Display articles.
 *
 * @since 1.01
 *
 * @return void
 */
function leadership_pro_dashboard_static_articles() {
	$articles = leadership_pro_dashboard_get_articles();
	$first    = true;
	?>

	<?php foreach ( $articles as $article ) : ?>

		<div>
			<span class="dashicons dashicons-media-default" style="color:#82878c;float:left;"></span>
			<p style="overflow:hidden;padding-left:10px;">
				<?php /* Translators: this string is the title. */ ?>
				<a target="_blank" href="<?php echo esc_attr( $article['link'] ); ?>"><?php echo wp_kses_post( sprintf( __( 'Leadership Pro - %s', 'leadership-pro' ), $article['title'] ) ); ?></a>
			</p>
		</div>

	<?php endforeach; ?>


	<?php
}

/**
 * Display services.
 *
 * @since 1.01
 *
 * @return void
 */
function leadership_pro_dashboard_static_services() {
	$services = leadership_pro_dashboard_get_services();
	$first    = true;
	?>

	<p style="border-top:1px solid #eee;padding-top:1em;">

	<?php foreach ( $services as $service ) : ?>

		<?php if ( isset( $service['short'] ) && ! empty( $service['short'] ) ) : ?> 

			<?php if ( ! $first ) : ?> 
				<span style="color:#ddd;">&#124;</span>
			<?php endif; ?>

			<a href="<?php echo esc_attr( $service['link'] ); ?>" target="_blank"><?php echo esc_html( $service['short'] ); ?>
				<span class="screen-reader-text">(opens in a new window)</span>
				<span aria-hidden="true" class="dashicons dashicons-external"></span>
			</a>

			<?php $first = false; ?>

		<?php endif; ?>

	<?php endforeach; ?>

	</p>

	<?php
}

/**
 * Store service text in array for reuse. Used in theme inc/theme-info.php
 *
 * @since 1.01
 *
 * @return array
 */
function leadership_pro_dashboard_get_articles() {
	$articles = array(
		array(
			'title'       => esc_html__( 'Import Sample Content', 'leadership-pro' ),
			'link'        => 'https://webplantmedia.com/docs/leadership-pro/first-steps/import-sample-content-optional/',
			'description' => esc_html__( 'For your convenience, we are utilizing Genesis onboarding feature, which will create several pages like how you see on our demo site.', 'leadership-pro' ),
		),
		array(
			'title'       => esc_html__( 'Set Up Your Homepage Slider', 'leadership-pro' ),
			'link'        => 'https://webplantmedia.com/docs/leadership-pro/first-steps/set-up-your-homepage-slider/',
			'description' => esc_html__( 'Genesis\' onboarding feature doesn\'t support the import of the Soliloquy Slider. So you have to create your slider manually. Fortunately, the Soliloquy slider makes this very easy to do. Here is how.', 'leadership-pro' ),
		),
		array(
			'title'       => esc_html__( 'Set Up Instagram Footer', 'leadership-pro' ),
			'link'        => 'https://webplantmedia.com/docs/leadership-pro/first-steps/set-up-instagram-footer/',
			'description' => esc_html__( 'The Instagram plugin is activated and the footer widget is placed. However, you need to connect your Instagram account to your Instagram plugin. Here is how to do it.', 'leadership-pro' ),
		),
		array(
			'title'       => esc_html__( 'Resize Large Image Files', 'leadership-pro' ),
			'link'        => 'https://webplantmedia.com/docs/leadership-pro/first-steps/resize-large-image-files/',
			'description' => esc_html__( 'After installing the Genesis Framework and Leadership Pro child theme, we highly recommend doing some image cleanup. Chances are you have probably uploaded very large resolution images to your WordPress website. Working with very large images can have multiple negative effects both to your WordPress website and also the speed of your site.', 'leadership-pro' ),
		),
		array(
			'title'       => esc_html__( 'Regenerate Thumbnails', 'leadership-pro' ),
			'link'        => 'https://webplantmedia.com/docs/leadership-pro/first-steps/regenerate-thumbnails/',
			'description' => esc_html__( 'We highly recommend regenerating the thumbnails on your site. This will ensure that all image sizes that are defined in the theme are available in your site.', 'leadership-pro' ),
		),
	);

	return $articles;
}

/**
 * Store service text in array for reuse. Used in theme inc/theme-info.php
 *
 * @since 1.01
 *
 * @return array
 */
function leadership_pro_dashboard_get_services() {
	$services = array(
		array(
			'short'       => esc_html__( 'Demo Site', 'leadership-pro' ),
			'title'       => esc_html__( 'Leadership Pro Demo Site', 'leadership-pro' ),
			'link'        => 'https://demo.webplantmedia.com/leadership-pro/',
			'description' => esc_html__( 'Visit the demo site to see how your site is suppose to look.', 'leadership-pro' ),
		),
		array(
			'short'       => esc_html__( 'Docs', 'leadership-pro' ),
			'title'       => esc_html__( 'All Theme Documentation', 'leadership-pro' ),
			'link'        => 'https://webplantmedia.com/docs/leadership-pro/',
			'description' => esc_html__( 'Every theme option and theme feature is well documented. Find out all the amazing features coded within your theme.', 'leadership-pro' ),
		),
		array(
			'short'       => esc_html__( 'Contact Us', 'leadership-pro' ),
			'title'       => esc_html__( 'Contact Theme Support Team', 'leadership-pro' ),
			'link'        => 'https://webplantmedia.com/support/',
			'description' => esc_html__( 'We are glad to quickly answer your theme related questions and to fix any bugs you report.', 'leadership-pro' ),
		),
		array(
			'short'       => esc_html__( 'Extended Support', 'leadership-pro' ),
			'title'       => esc_html__( 'Extended WordPress Support', 'leadership-pro' ),
			'link'        => 'https://webplantmedia.com/product/extended-wordpress-support/',
			'description' => esc_html__( 'If you are using one of our themes, and need WordPress support, a little CSS hack, or some custom debugging support for your WordPress site, then you can purchase extended WordPress support. We are WordPress experts, and will quickly and efficiently take care of your site problem or need.', 'leadership-pro' ),
		),
		array(
			'short'       => esc_html__( 'Theme Icons', 'leadership-pro' ),
			'title'       => esc_html__( 'Theme Icons', 'leadership-pro' ),
			'link'        => 'https://ionicons.com/v2/',
			'description' => esc_html__( 'Link to modern icons used in theme.', 'leadership-pro' ),
		),
	);

	return $services;
}

/**
 * Static feed to helpful posts for first time WordPress users.
 *
 * @since 1.01
 *
 * @return void
 */
function leadership_pro_dashboard_static_feed() {
	$blog = array(
		array(
			'title' => esc_html__( 'The Best Setup For Your Self Hosted WordPress Shopping Site and Blog', 'leadership-pro' ),
			'link'  => 'https://webplantmedia.com/the-best-setup-for-your-wordpress-shopping-site-and-blog/',
		),
		array(
			'title' => esc_html__( 'How to Transfer and Migrate Your Site Content from WordPress.com to a Self Hosted WordPress.org Site on Bluehost &#8211; Step By Step Instructions', 'leadership-pro' ),
			'link'  => 'https://webplantmedia.com/how-to-transfer-and-migrate-your-site-content-from-wordpress-com-to-a-self-hosted-wordpress-org-site-on-bluehost-step-by-step-instructions/',
		),
		array(
			'title' => esc_html__( 'WordPress.com vs WordPress.org: What is the Difference?', 'leadership-pro' ),
			'link'  => 'https://webplantmedia.com/wordpress-com-vs-wordpress-org-what-is-the-difference/',
		),
		array(
			'title' => esc_html__( 'The Best Managed WordPress Hosting for Your Small Business Site', 'leadership-pro' ),
			'link'  => 'https://webplantmedia.com/the-best-managed-wordpress-hosting-for-your-small-business-site/',
		),
	);
	?>

	<?php foreach ( $blog as $post ) : ?>
		<div>
			<span class="dashicons dashicons-thumbs-up" style="color:#82878c;float:left;"></span>
			<p style="overflow:hidden;padding-left:10px;">
				<a target="_blank" href="<?php echo esc_attr( $post['link'] ); ?>"><?php echo $post['title']; /* WPCS: XSS OK. Already escaped. */ ?></a>
			</p>
		</div>
	<?php endforeach; ?>

	<?php
}

add_action( 'admin_menu', 'leadership_pro_theme_info' );
/**
 * Add theme page for up-sell
 *
 * @since 1.01
 *
 * @return void
 */
function leadership_pro_theme_info() {
	add_theme_page( esc_html__( 'Leadership Pro Support', 'leadership-pro' ), esc_html__( 'Leadership Pro Support', 'leadership-pro' ), 'edit_theme_options', 'leadership-pro-support', 'leadership_pro_theme_page' );
}

/**
 * Load theme info page. Modified from core.
 *
 * @since 1.01
 *
 * @return void
 */
function leadership_pro_theme_page() {
	require CHILD_DIR . '/lib/admin/theme-info.php';
}
