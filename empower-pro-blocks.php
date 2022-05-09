<?php

/**
 * Plugin Name:     Empower Pro Blocks
 * Description:     Custom blocks for Empower Pro Blocks theme.
 * Version:         1.1.91
 * Author:          Web Plant Media
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     empower-pro-blocks
 *
 * @package         empower-pro-blocks
 */

define('EMPOWER_PRO_BLOCKS_DIR', plugin_dir_path(__FILE__));
define('EMPOWER_PRO_BLOCKS_URL', plugin_dir_url(__FILE__));

function empower_pro_blocks_defines()
{
	$plugin_data = get_file_data(__FILE__, array('Version' => 'Version'), false);
	$plugin_version = $plugin_data['Version'];

	define('EMPOWER_PRO_BLOCKS_VERSION', $plugin_version);
}
add_action('init', 'empower_pro_blocks_defines');

global $empower_pro_blocks_defaults;
global $empower_pro_blocks_appearance;

add_action('after_setup_theme', 'empower_pro_blocks_defaults', 0);

/**
 * Defaults
 *
 * @since 1.01
 *
 * @return void
 */
function empower_pro_blocks_defaults()
{
	global $empower_pro_blocks_defaults;

	$empower_pro_blocks_defaults = empower_pro_blocks_get_config('defaults');
}

add_action('wp', 'empower_pro_blocks_appearance', 0);
function empower_pro_blocks_appearance()
{
	global $empower_pro_blocks_appearance;

	$empower_pro_blocks_appearance = empower_pro_blocks_get_config('appearance');
}

require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/helper-functions.php';
require_once EMPOWER_PRO_BLOCKS_DIR . 'functions.php';
require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/customize.php';
require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/class-empower-pro-blocks-upgrade.php';

require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/theme-defaults.php';
require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/admin/dashboard.php';
require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/shortcodes.php';

// Includes Customizer CSS.
require_once EMPOWER_PRO_BLOCKS_DIR . 'css/theme-vars-styles.php';
require_once EMPOWER_PRO_BLOCKS_DIR . 'css/theme-inline-styles.php';
require_once EMPOWER_PRO_BLOCKS_DIR . 'css/gutenberg-inline-styles.php';


add_action('after_setup_theme', 'empower_pro_blocks_gutenberg_support');
/**
 * Adds Gutenberg opt-in features and styling.
 *
 * Allows plugins to remove support if required.
 *
 * @since 1.1.0
 */
function empower_pro_blocks_gutenberg_support()
{
	// Add inline style for gutenberg blocks.
	require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/gutenberg.php';
	require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/headings.php';
}

if (empower_pro_blocks_is_woocommerce_activated()) {

	// Adds WooCommerce support.
	require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/woocommerce/woocommerce-setup.php';

	// Includes the Customizer CSS for the WooCommerce plugin.
	require_once EMPOWER_PRO_BLOCKS_DIR . 'css/woocommerce-inline-styles.php';

	// Includes notice to install Genesis Connect for WooCommerce.
	require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/woocommerce/woocommerce-notice.php';
}

if (empower_pro_blocks_is_soliloquy_activated()) {

	// Load soliloquy functions.
	require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/soliloquy/soliloquy-setup.php';
}

require_once EMPOWER_PRO_BLOCKS_DIR . 'lib/site-elements.php';

add_action('wp_head', 'empower_pro_blocks_load_images');
/**
 * Adjusts featured images.
 *
 * Defer loading until wp_head so that `get_theme_mod()` works for live previews in the Customizer.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_load_images()
{

	require_once EMPOWER_PRO_BLOCKS_DIR . '/lib/images.php';
}

add_action('init', 'empower_pro_blocks_init');
/**
 * Load theme specific functions
 *
 * @since 1.0.0
 */
function empower_pro_blocks_init()
{

	require_once EMPOWER_PRO_BLOCKS_DIR . '/lib/theme-functions.php';
}
