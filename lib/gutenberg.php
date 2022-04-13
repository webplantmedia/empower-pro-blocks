<?php

/**
 * Gutenberg theme support.
 *
 * @package Empower Pro Blocks
 * @author  Web Plant Media
 * @license GPL-2.0-or-later
 * @link    https://webplantmedia.com/
 */

function empower_pro_blocks_category($categories, $post)
{
	return array_merge(
		array(
			array(
				'slug' => 'empower-pro-blocks',
				'title' => __('Empower Pro Blocks', 'empower-pro-blocks'),
			),
		),
		$categories,
	);
}
add_filter('block_categories', 'empower_pro_blocks_category', 10, 2);

// Add support for editor styles.
// add_theme_support( 'editor-styles' );

// Enqueue editor styles.
// add_editor_style( '/css/style-editor.css' );

// Adds support for block alignments.
add_theme_support('align-wide');

// Make media embeds responsive.
add_theme_support('responsive-embeds');

// Disable custom fonts.
/* add_theme_support('disable-custom-font-sizes'); */

add_action('admin_init', 'empower_pro_blocks_gutenberg_init', 0);
function empower_pro_blocks_gutenberg_init()
{
	global $empower_pro_blocks_appearance;

	$empower_pro_blocks_appearance = empower_pro_blocks_get_config('appearance');
}

// Adds support for editor font sizes.
// add_theme_support('editor-font-sizes', $empower_pro_blocks_appearance['editor-font-sizes']);

// Adds support for editor color palette.
// add_theme_support('editor-color-palette', $empower_pro_blocks_appearance['editor-color-palette']);

add_action('after_setup_theme', 'empower_pro_blocks_content_width', 0);
/**
 * Set content width to match the “wide” Gutenberg block width.
 */
function empower_pro_blocks_content_width()
{
	global $empower_pro_blocks_appearance;

	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- See https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/924
	$GLOBALS['content_width'] = apply_filters('empower_pro_blocks_content_width', $empower_pro_blocks_appearance['content-width']);
}

/**
 * Output back-end inline styles for link state.
 *
 * Causes the custom color to apply to elements with the Gutenberg editor.
 * The custom color is set in the Customizer in the Colors panel.
 *
 * @since 1.1.0
 */
function empower_pro_blocks_custom_gutenberg_admin_css()
{
	global $empower_pro_blocks_appearance;

	$script_asset_path = EMPOWER_PRO_BLOCKS_DIR . "/build/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "wpm-epb/empower-pro-blocks" block first.'
		);
	}

	$script_asset = require($script_asset_path);
	wp_enqueue_script('empower-pro-blocks-editor', EMPOWER_PRO_BLOCKS_URL . 'build/index.js', $script_asset['dependencies'], $script_asset['version']);
	wp_localize_script('empower-pro-blocks-editor', 'empower_pro_blocks', array(
		'plugins_url' => plugins_url('empower-pro-blocks', EMPOWER_PRO_BLOCKS_DIR),
	));
	wp_enqueue_style('empower-pro-blocks-editor', EMPOWER_PRO_BLOCKS_URL . 'css/editor.css', array(), filemtime(EMPOWER_PRO_BLOCKS_DIR . "css/editor.css"));
}
add_action('enqueue_block_editor_assets', 'empower_pro_blocks_custom_gutenberg_admin_css');

function empower_pro_blocks_custom_gutenberg_css()
{
	global $empower_pro_blocks_appearance;

	wp_enqueue_style('empower-pro-blocks-gutenberg-fonts', $empower_pro_blocks_appearance['fonts-url'], array(), null); // null allows google fonts to have multiple family args in url
	wp_enqueue_style('ionicons', $empower_pro_blocks_appearance['icons-url'], array(), null);
	wp_enqueue_script('ionicons', $empower_pro_blocks_appearance['icons-js-url'], array(), null, true);
	wp_enqueue_script('ionicons-esm', $empower_pro_blocks_appearance['icons-esm-js-url'], array(), null, true);

	wp_enqueue_style('empower-pro-blocks-main', EMPOWER_PRO_BLOCKS_URL . 'css/blocks.css', array(), filemtime(EMPOWER_PRO_BLOCKS_DIR . "css/blocks.css"));

	$css = empower_pro_blocks_get_gutenberg_css($empower_pro_blocks_appearance);

	wp_add_inline_style('empower-pro-blocks-main', $css);
}
add_action('enqueue_block_assets', 'empower_pro_blocks_custom_gutenberg_css');

function empower_pro_blocks_enqueue_scripts()
{
	global $empower_pro_blocks_appearance;

	wp_enqueue_style('empower-pro-blocks-theme', EMPOWER_PRO_BLOCKS_URL . 'css/theme.css', array(), filemtime(EMPOWER_PRO_BLOCKS_DIR . "css/theme.css"));

	$css = empower_pro_blocks_get_css($empower_pro_blocks_appearance);
	wp_add_inline_style('empower-pro-blocks-theme', $css);

	// if (!has_custom_logo() || is_customize_preview()) {
	// wp_enqueue_style('empower-pro-blocks-title-font', $empower_pro_blocks_appearance['title-font-url'], array(), EMPOWER_PRO_BLOCKS_VERSION);
	// }

	wp_enqueue_script('empower-pro-blocks-theme-js', EMPOWER_PRO_BLOCKS_URL . 'js/theme.js', array('jquery'), EMPOWER_PRO_BLOCKS_VERSION, true);

	wp_enqueue_script('empower-pro-blocks-scroll-js', EMPOWER_PRO_BLOCKS_URL . 'js/scroll.js', array('jquery'), EMPOWER_PRO_BLOCKS_VERSION, true);

	wp_enqueue_script('typewriter', EMPOWER_PRO_BLOCKS_URL . 'js/typewriter.js', array('jquery'), EMPOWER_PRO_BLOCKS_VERSION, true);

	wp_enqueue_script('empower-pro-blocks-slider-js', EMPOWER_PRO_BLOCKS_URL . 'js/slider.js', array('jquery'), EMPOWER_PRO_BLOCKS_VERSION, true);

	wp_enqueue_script('empower-pro-blocks-dropdown-menu-js', EMPOWER_PRO_BLOCKS_URL . 'js/dropdown-menu.js', array('jquery'), EMPOWER_PRO_BLOCKS_VERSION, true);

	wp_enqueue_style('ionicons', $empower_pro_blocks_appearance['icons-url'], array(), null);
	wp_enqueue_script('ionicons', $empower_pro_blocks_appearance['icons-js-url'], array(), null, true);
	wp_enqueue_script('ionicons-esm', $empower_pro_blocks_appearance['icons-esm-js-url'], array(), null, true);
}
add_action('wp_enqueue_scripts', 'empower_pro_blocks_enqueue_scripts');
