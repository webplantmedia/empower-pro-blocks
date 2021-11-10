<?php
/**
 * Empower Pro appearance settings.
 *
 * @package empower_pro_blocks
 * @author  Web Plant Media
 * @license GPL-2.0-or-later
 * @link    https://webplantmedia.com/product/empower-pro-blocks/
 */

global $empower_pro_blocks_defaults;

$appearance = array();

foreach ( $empower_pro_blocks_defaults as $key => $value ) {
	$key_underscore = str_replace( '-', '_', $key );

	if ( 'css-vars' == $key ) {
		$appearance[ $key ] = get_option( 'empower_pro_blocks_' . $key_underscore, trim( $value ) );
		$appearance['vars'] = empower_pro_blocks_sanitize_vars( $appearance[ $key ] );
	}
	else {
		$appearance[ $key ] = get_option( 'empower_pro_blocks_' . $key_underscore, $value );
	}
}

return $appearance;
