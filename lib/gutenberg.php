<?php
/**
 * Gutenberg theme support.
 *
 * @package Empower Pro Blocks
 * @author  Web Plant Media
 * @license GPL-2.0-or-later
 * @link    https://webplantmedia.com/
 */

add_action( 'wp_enqueue_scripts', 'empower_pro_blocks_enqueue_gutenberg_frontend_styles' );
/**
 * Enqueues Gutenberg front-end styles.
 *
 * @since 1.1.0
 */
function empower_pro_blocks_enqueue_gutenberg_frontend_styles() {


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
global $empower_pro_blocks_appearance;

// Adds support for editor font sizes.
add_theme_support( 'editor-font-sizes', $empower_pro_blocks_appearance['editor-font-sizes'] );

// Adds support for editor color palette.
add_theme_support( 'editor-color-palette', $empower_pro_blocks_appearance['editor-color-palette'] );

add_action( 'after_setup_theme', 'empower_pro_blocks_content_width', 0 );
/**
 * Set content width to match the “wide” Gutenberg block width.
 */
function empower_pro_blocks_content_width() {
	global $empower_pro_blocks_appearance;

	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound -- See https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/924
	$GLOBALS['content_width'] = apply_filters( 'empower_pro_blocks_content_width', $empower_pro_blocks_appearance['content-width'] );
}

add_action( 'enqueue_block_editor_assets', 'empower_pro_blocks_custom_gutenberg_admin_css' );
/**
 * Output back-end inline styles for link state.
 *
 * Causes the custom color to apply to elements with the Gutenberg editor.
 * The custom color is set in the Customizer in the Colors panel.
 *
 * @since 1.1.0
 */
function empower_pro_blocks_custom_gutenberg_admin_css() {
	global $empower_pro_blocks_appearance;

	wp_enqueue_style(
		'empower-pro-blocks-gutenberg-fonts',
		$empower_pro_blocks_appearance['fonts-url'],
		array(),
		EMPOWER_PRO_BLOCKS_VERSION
	);

	wp_enqueue_style( 'ionicons', $empower_pro_blocks_appearance['icons-url'], array(), EMPOWER_PRO_BLOCKS_VERSION );

	$css = empower_pro_blocks_get_gutenberg_css( $empower_pro_blocks_appearance );
	$css .= empower_pro_blocks_get_gutenberg_button_css( $empower_pro_blocks_appearance );

	wp_add_inline_style( 'empower-pro-blocks-gutenberg-fonts', $css );

}

add_action( 'wp_enqueue_scripts', 'empower_pro_blocks_custom_gutenberg_css' );
/**
 * Output front-end inline styles for `editor-color-palette` colors.
 *
 * These colors can be changed in the Customizer, so CSS is set dynamically.
 *
 * @since 1.1.0
 */
function empower_pro_blocks_custom_gutenberg_css() {
	global $empower_pro_blocks_appearance;

	wp_enqueue_style(
		'empower-pro-blocks-gutenberg',
		get_stylesheet_directory_uri() . '/css/style-blocks.css',
		array( 'empower-pro-blocks-main' ),
		EMPOWER_PRO_BLOCKS_VERSION
	);

	$css = empower_pro_blocks_get_gutenberg_css( $empower_pro_blocks_appearance );
	$css .= empower_pro_blocks_get_gutenberg_button_css( $empower_pro_blocks_appearance );

	wp_add_inline_style( 'empower-pro-blocks-main', $css );
}
