<?php
/**
 * Plugin Name:     Empower Pro Blocks
 * Description:     Custom blocks for Leadership Pro theme.
 * Version:         0.1.1
 * Author:          Web Plant Media
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     wpm-epb
 *
 * @package         wpm-epb
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function wpm_epb_empower_pro_blocks_block_init() {
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
		'wpm-epb-empower-pro-blocks-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'build/editor.css';
	wp_register_style(
		'wpm-epb-empower-pro-blocks-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style.css';
	wp_register_style(
		'wpm-epb-empower-pro-blocks-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'wpm-epb/empower-pro-blocks', array(
		'editor_script' => 'wpm-epb-empower-pro-blocks-block-editor',
		'editor_style'  => 'wpm-epb-empower-pro-blocks-block-editor',
		'style'         => 'wpm-epb-empower-pro-blocks-block',
	) );
}
add_action( 'init', 'wpm_epb_empower_pro_blocks_block_init' );

require_once plugin_dir_path( __FILE__ ) . 'lib/functions.php';
require_once plugin_dir_path( __FILE__ ) . 'lib/customize.php';
require_once plugin_dir_path( __FILE__ ) . 'lib/class-upgrade.php';
