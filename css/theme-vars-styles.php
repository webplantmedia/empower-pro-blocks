<?php
/**
 * Empower Pro Blocks.
 *
 * This file adds the required CSS to the front end to the Empower Pro Blocks Theme.
 *
 * @package empower_pro_blocks
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/
 */

/**
 * Checks the settings for the link color and accent color.
 * If any of these value are set the appropriate CSS is output.
 *
 * @since 1.0.0
 */
function empower_pro_blocks_css_vars() {

	global $empower_pro_blocks_appearance;

	$css = ':root {';

	foreach ( $empower_pro_blocks_appearance as $k => $v ) {
		if ( $v === '' ) {
			continue; }

		if ( is_array( $v ) ) {
			foreach ( $v as $kk => $vv ) {
				// if ( $vv === '' ) { continue; }

				if ( is_array( $vv ) ) {
					if ( $k === 'editor-color-palette' ) {
						$css .= empower_pro_blocks_css_line( $vv['slug'], $vv['color'], $k );
					} elseif ( $k === 'editor-font-sizes' ) {
						$css .= empower_pro_blocks_css_line( $vv['slug'], $vv['size'], $k );
					}
				} else {
					if ( $k === 'vars' ) {
						$css .= empower_pro_blocks_css_line( $kk, $vv, $k );
					}
				}
			}
		} else {
			switch ( $k ) {
				case 'content-width':
				case 'content-width-wide':
				case 'logo-width':
				case 'logo-mobile-width':
				case 'logo-top-spacing':
				case 'logo-bottom-spacing':
				case 'logo-mobile-top-spacing':
				case 'logo-mobile-bottom-spacing':
					$css .= empower_pro_blocks_css_line( $k, $v . 'px' );
					break;
			}
		}
	}

	$css .= '}';

	$css = empower_pro_blocks_compact( $css );

	return $css;
}

function empower_pro_blocks_css_line( $key, $value, $parent_key = false ) {

	if ( '' === $value ) {
		return '';
	}

	$key        = strtolower( str_replace( '_', '-', $key ) );
	$parent_key = strtolower( str_replace( '_', '-', $parent_key ) );

	if ( $parent_key ) {
		return '--epb-' . $parent_key . '-' . $key . ':' . $value . ';';
	} else {
		return '--epb-' . $key . ':' . $value . ';';
	}
}

/**
 * Checks the settings for the link color and accent color.
 * If any of these value are set the appropriate CSS is output.
 *
 * @since 1.0.0
 */
/*function empower_pro_blocks_css_vars() {

	global $empower_pro_blocks_appearance;

	$css = ':root {';

	foreach ( $empower_pro_blocks_appearance as $k => $v ) {
		if ( $v === '' ) { continue; }

		if ( is_array( $v ) ) {
			foreach( $v as $kk => $vv ) {
				if ( $vv === '' ) { continue; }

				if ( is_array( $vv ) ) {
					$value = false;
					if ( array_key_exists( 'color', $vv ) && ! empty ( $vv['color'] ) ) {
						$value = $vv['color'];
					}
					else if ( array_key_exists( 'size', $vv ) && ! empty ( $vv['size'] ) ) {
						$value = $vv['size'];
					}
					$css .= empower_pro_blocks_css_line( $vv['slug'], $value, $k );
				}
				else {
					$css .= empower_pro_blocks_css_line( $kk, $vv, $k );
				}
			}
		}
		else {
			$css .= empower_pro_blocks_css_line( $k, $v );
		}
	}

	$css .= '}';

	$css = empower_pro_blocks_compact( $css );

	return $css;
}*/

/*function empower_pro_blocks_css_line( $key, $value, $parent_key = false ) {
	$store = false;

	if ( preg_match( "/spacing|width|radius|size/", $key ) || $parent_key == 'editor-font-sizes' ) {
		$store = true;
		$value = $value . 'px';
	}
	else if ( preg_match( "/color/", $key ) || $parent_key == 'editor-color-palette' ) {
		$store = true;
	}

	if ( ! $store ) {
		return '';
	}

	$key = strtolower( str_replace( '_', '-', $key ) );
	$parent_key = strtolower( str_replace( '_', '-', $parent_key ) );

	if ( $parent_key ) {
		return '--epb-' . $parent_key . '-' . $key . ':' . $value . ';';
	}
	else {
		return '--epb-' . $key . ':' . $value . ';';
	}
}*/

add_action( 'wp_enqueue_scripts', 'empower_pro_blocks_theme_vars_css' );
function empower_pro_blocks_theme_vars_css() {
	$css = empower_pro_blocks_css_vars();

	$handle = 'empower-pro-blocks-main';
	wp_add_inline_style( $handle, $css );

}

add_action( 'enqueue_block_editor_assets', 'empower_pro_blocks_theme_vars_admin_css' );
function empower_pro_blocks_theme_vars_admin_css() {
	add_action('admin_head', 'empower_pro_blocks_inject_theme_vars_admin_css');
}

function empower_pro_blocks_inject_theme_vars_admin_css() {
	$css = empower_pro_blocks_css_vars();
	echo '<style type="text/css">'.$css.'</style>';
}
