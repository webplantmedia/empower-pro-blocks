<?php
/**
 * Leadership Pro.
 *
 * This file adds the default theme settings to the Leadership Pro Theme.
 *
 * @package Leadership_Pro
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/leadership-pro/
 */

add_filter( 'simple_social_default_styles', 'leadership_pro_social_default_styles' );
/**
 * Set Simple Social Icon defaults.
 *
 * @since 1.0.0
 *
 * @param array $defaults Social style defaults.
 * @return array Modified social style defaults.
 */
function leadership_pro_social_default_styles( $defaults ) {

	$appearance = empower_pro_blocks_get_config( 'appearance' );
	$args       = $appearance['simple-social-icons-settings'];

	return wp_parse_args( $args, $defaults );

}
