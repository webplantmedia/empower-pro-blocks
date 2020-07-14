<?php
/**
 * Empower Pro Blocks.
 *
 * This action helps with the onbaording process for the Soliloquy slider.
 *
 * @package Empower_Pro_Blocks
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/empower-pro-blocks/
 */

add_filter( 'soliloquy_pre_data', 'empower_pro_blocks_soliloquy_disable_mobile', 10, 2 );
/**
 * Disable auto slide if on mobile.
 *
 * @since 1.01
 *
 * @param array $data array of config options from soliloquy.
 * @param int   $slider_id ID of slider.
 * @return array
 */
function empower_pro_blocks_soliloquy_disable_mobile( $data, $slider_id ) {
	// If on a mobile device, disable auto slide.
	if ( wp_is_mobile() ) {
		$data['config']['duration'] = 999999;
	}

	return $data;
}
