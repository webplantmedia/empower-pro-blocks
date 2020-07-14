<?php
/**
 * Plugin Name:     Empower Pro Blocks
 * Description:     Custom blocks for Empower Pro Blocks theme.
 * Version:         0.1.1
 * Author:          Web Plant Media
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     empower-pro-blocks
 *
 * @package         empower-pro-blocks
 */

function empower_pro_blocks_defines() {
	$plugin_data = get_file_data(__FILE__, array('Version' => 'Version'), false);
	$plugin_version = $plugin_data['Version'];

	define( 'EMPOWER_PRO_BLOCKS_VERSION', $plugin_version );

}
add_action( 'init', 'empower_pro_blocks_defines' );

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function empower_pro_blocks_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "wpm-epb/empower-pro-blocks" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'empower-pro-blocks-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'build/editor.css';
	wp_register_style(
		'empower-pro-blocks-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style.css';
	wp_register_style(
		'empower-pro-blocks',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'wpm-epb/empower-pro-blocks', array(
		'editor_script' => 'empower-pro-blocks-editor',
		'editor_style'  => 'empower-pro-blocks-editor',
		'style'         => 'empower-pro-blocks',
	) );
}
add_action( 'init', 'empower_pro_blocks_block_init' );

require_once plugin_dir_path( __FILE__ ) . 'functions.php';
require_once plugin_dir_path( __FILE__ ) . 'lib/customize.php';
require_once plugin_dir_path( __FILE__ ) . 'lib/class-empower-pro-blocks-upgrade.php';

add_action( 'after_setup_theme', 'empower_pro_blocks_gutenberg_support' );
/**
 * Adds Gutenberg opt-in features and styling.
 *
 * Allows plugins to remove support if required.
 *
 * @since 1.1.0
 */
function empower_pro_blocks_gutenberg_support() {
	// Add inline style for gutenberg blocks.
	require_once plugin_dir_path( __FILE__ ) . 'css/gutenberg-inline-styles.php';
	require_once plugin_dir_path( __FILE__ ) . 'css/gutenberg-inline-button-styles.php';
	require_once plugin_dir_path( __FILE__ ) . 'lib/gutenberg.php';
}

require_once plugin_dir_path( __FILE__ ) . 'lib/shortcodes.php';
