<?php
/**
 * Calculates if white or black would contrast more with the provided color.
 *
 * @since 1.0.0
 *
 * @param string $color A color in hex format.
 * @return string The hex code for the most contrasting color: dark grey or white.
 */
function empower_pro_blocks_color_contrast( $color ) {

	$hexcolor = str_replace( '#', '', $color );

	$red   = hexdec( substr( $hexcolor, 0, 2 ) );
	$green = hexdec( substr( $hexcolor, 2, 2 ) );
	$blue  = hexdec( substr( $hexcolor, 4, 2 ) );

	$luminosity = ( ( $red * 0.1726 ) + ( $green * 0.1152 ) + ( $blue * 0.0722 ) );

	return ( $luminosity > 100 ) ? '#222222' : '#ffffff';

}

/**
 * Generates a lighter or darker color from a starting color.
 * Used to generate complementary hover tints from user-chosen colors.
 *
 * @since 1.0.0
 *
 * @param string $hex_code A color in hex format.
 * @param int    $adjust_percent The amount to reduce or increase brightness by.
 * @return string Hex code for the adjusted color brightness.
 */
function empower_pro_blocks_color_brightness( $hex_code, $adjust_percent ) {

	$hex_code = ltrim( $hex_code, '#' );

	if ( strlen( $hex_code ) === 3 ) {
		$hex_code = $hex_code[0] . $hex_code[0] . $hex_code[1] . $hex_code[1] . $hex_code[2] . $hex_code[2];
	}

	$hex_code = array_map( 'hexdec', str_split( $hex_code, 2 ) );

	foreach ( $hex_code as & $color ) {
		$adjustable_limit = $adjust_percent < 0 ? $color : 255 - $color;
		$adjust_amount    = ceil( $adjustable_limit * $adjust_percent );

		$color = str_pad( dechex( $color + $adjust_amount ), 2, '0', STR_PAD_LEFT );
	}

	return '#' . implode( $hex_code );

}

/**
 * Locate and require a config file.
 *
 * First, search child theme for the config. If config file doesn't exist in the child,
 * search the parent for the config file.
 *
 * @since 2.8.0
 *
 * @param string $config The config file to look for (not including .php file extension).
 * @return array The config data.
 */
function empower_pro_blocks_get_config( $config ) {

	$child_file  = sprintf( '%sconfig/%s.php', plugin_dir_path( __FILE__ ), $config );

	$data = [];

	if ( is_readable( $child_file ) ) {
		$data = require $child_file;
	}

	return (array) $data;

}

/**
 * Compact css.
 *
 * @since 1.01
 *
 * @param string $input Text to compact.
 * @return $input
 */
function empower_pro_blocks_compact( $input ) {
	$input = str_replace( array( "\r", "\n", "\t" ), '', $input );

	return $input;
}


global $empower_pro_blocks_appearance;
$empower_pro_blocks_appearance = empower_pro_blocks_get_config( 'appearance' );
