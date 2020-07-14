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
	$dir = plugin_dir_path( __FILE__ );

	define( 'EMPOWER_PRO_BLOCKS_VERSION', $plugin_version );
	define( 'EMPOWER_PRO_BLOCKS_DIR', $dir );

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

	$css = empower_pro_blocks_get_css( $empower_pro_blocks_appearance );
	$css .= empower_pro_blocks_get_gutenberg_css( $empower_pro_blocks_appearance );
	$css .= empower_pro_blocks_get_gutenberg_button_css( $empower_pro_blocks_appearance );

	wp_add_inline_style( 'empower-pro-blocks', $css );

	wp_enqueue_style( 'empower-pro-blocks-main', $dir . 'build/theme.css', array(), EMPOWER_PRO_BLOCKS_VERSION );

	wp_enqueue_style( 'empower-pro-blocks-fonts', $appearance['fonts-url'], array(), EMPOWER_PRO_BLOCKS_VERSION );

	if ( ! has_custom_logo() || is_customize_preview() ) {
		wp_enqueue_style( 'empower-pro-blocks-title-font', $appearance['title-font-url'], array(), EMPOWER_PRO_BLOCKS_VERSION );
	}

	/* wp_enqueue_style( 'dashicons' ); */

	wp_enqueue_style( 'icons', $appearance['icons-url'], array(), EMPOWER_PRO_BLOCKS_VERSION );
	wp_enqueue_script( 'icons-js', $appearance['icons-js-url'], array(), EMPOWER_PRO_BLOCKS_VERSION, true );

	wp_enqueue_script( 'empower-pro-blocks-theme-js', $dir . 'js/theme.js', array( 'jquery' ), EMPOWER_PRO_BLOCKS_VERSION, true );

	wp_enqueue_script( 'empower-pro-blocks-scroll-js', $dir . 'js/scroll.js', array( 'jquery' ), EMPOWER_PRO_BLOCKS_VERSION, true );

	wp_enqueue_script( 'empower-pro-blocks-typewriter-js', $dir . 'js/typewriter.js', array( 'jquery' ), EMPOWER_PRO_BLOCKS_VERSION, true );

	wp_enqueue_script( 'empower-pro-blocks-dropdown-menu-js', $dir . 'js/dropdown-menu.js', array( 'jquery' ), EMPOWER_PRO_BLOCKS_VERSION, true );

}
add_action( 'init', 'empower_pro_blocks_block_init' );

add_action( 'wp_enqueue_scripts', 'empower_pro_blocks_enqueue_scripts_styles', 9 );
/**
 * Enqueues scripts and styles.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_enqueue_scripts_styles() {

	$appearance = genesis_get_config( 'appearance' );

}


require_once EMPOWER_PRO_BLOCKS_DIR . 'functions.php';
require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/customize.php';
require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/class-empower-pro-blocks-upgrade.php';

// Includes Customizer CSS.
require_once EMPOWER_PRO_BLOCKS_DIR . 'css/theme-inline-styles.php';


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
	require_once EMPOWER_PRO_BLOCKS_DIR . 'css/gutenberg-inline-styles.php';
	require_once EMPOWER_PRO_BLOCKS_DIR . 'css/gutenberg-inline-button-styles.php';
	require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/gutenberg.php';
}

require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/shortcodes.php';

if ( empower_pro_blocks_is_woocommerce_activated() ) {

	// Adds WooCommerce support.
	require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/woocommerce/woocommerce-setup.php';

	// Includes the Customizer CSS for the WooCommerce plugin.
	require_once EMPOWER_PRO_BLOCKS_DIR . 'css/woocommerce-inline-styles.php';

	// Includes notice to install Genesis Connect for WooCommerce.
	require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/woocommerce/woocommerce-notice.php';

}

if ( empower_pro_blocks_is_soliloquy_activated() ) {

	// Load soliloquy functions.
	require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/soliloquy/soliloquy-setup.php';

}
