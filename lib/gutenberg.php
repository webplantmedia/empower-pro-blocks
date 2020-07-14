<?php
/**
 * Gutenberg theme support.
 *
 * @package Leadership Pro
 * @author  Web Plant Media
 * @license GPL-2.0-or-later
 * @link    https://webplantmedia.com/
 */

add_action( 'wp_enqueue_scripts', 'leadership_pro_enqueue_gutenberg_frontend_styles' );
/**
 * Enqueues Gutenberg front-end styles.
 *
 * @since 1.1.0
 */
function leadership_pro_enqueue_gutenberg_frontend_styles() {


}

// Add support for editor styles.
add_theme_support( 'editor-styles' );

// Enqueue editor styles.
add_editor_style( '/css/style-editor.css' );

// Adds support for block alignments.
add_theme_support( 'align-wide' );

// Make media embeds responsive.
add_theme_support( 'responsive-embeds' );

// Disable custom fonts.
/* add_theme_support('disable-custom-font-sizes'); */

// Get appearance config array.
global $leadership_pro_appearance;
$leadership_pro_appearance = genesis_get_config( 'appearance' );

// Adds support for editor font sizes.
add_theme_support( 'editor-font-sizes', $leadership_pro_appearance['editor-font-sizes'] );

// Adds support for editor color palette.
add_theme_support( 'editor-color-palette', $leadership_pro_appearance['editor-color-palette'] );

// Add inline style for gutenberg blocks.
require_once get_stylesheet_directory() . '/css/gutenberg-inline-styles.php';
require_once get_stylesheet_directory() . '/css/gutenberg-inline-button-styles.php';

add_action( 'after_setup_theme', 'leadership_pro_content_width', 0 );
/**
 * Set content width to match the “wide” Gutenberg block width.
 */
function leadership_pro_content_width() {
	global $leadership_pro_appearance;

	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- See https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/924
	$GLOBALS['content_width'] = apply_filters( 'leadership_pro_content_width', $leadership_pro_appearance['content-width'] );
}

add_action( 'enqueue_block_editor_assets', 'leadership_pro_custom_gutenberg_admin_css' );
/**
 * Output back-end inline styles for link state.
 *
 * Causes the custom color to apply to elements with the Gutenberg editor.
 * The custom color is set in the Customizer in the Colors panel.
 *
 * @since 1.1.0
 */
function leadership_pro_custom_gutenberg_admin_css() {
	global $leadership_pro_appearance;

	wp_enqueue_style(
		'leadership-pro-gutenberg-fonts',
		$leadership_pro_appearance['fonts-url'],
		array(),
		CHILD_THEME_VERSION
	);

	wp_enqueue_style( 'ionicons', $leadership_pro_appearance['icons-url'], array(), CHILD_THEME_VERSION );

	$css = leadership_pro_get_gutenberg_css( $leadership_pro_appearance );
	$css .= leadership_pro_get_gutenberg_button_css( $leadership_pro_appearance );

	wp_add_inline_style( 'leadership-pro-gutenberg-fonts', $css );

}

add_action( 'wp_enqueue_scripts', 'leadership_pro_custom_gutenberg_css' );
/**
 * Output front-end inline styles for `editor-color-palette` colors.
 *
 * These colors can be changed in the Customizer, so CSS is set dynamically.
 *
 * @since 1.1.0
 */
function leadership_pro_custom_gutenberg_css() {
	global $leadership_pro_appearance;

	wp_enqueue_style(
		'leadership-pro-gutenberg',
		get_stylesheet_directory_uri() . '/css/style-blocks.css',
		array( 'leadership-pro-main' ),
		CHILD_THEME_VERSION
	);

	$css = leadership_pro_get_gutenberg_css( $leadership_pro_appearance );
	$css .= leadership_pro_get_gutenberg_button_css( $leadership_pro_appearance );

	wp_add_inline_style( 'leadership-pro-main', $css );
}
