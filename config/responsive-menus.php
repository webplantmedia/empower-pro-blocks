<?php

/**
 * Empower Pro Blocks child theme.
 *
 * @package empower_pro_blocks
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/leadership-pro/
 */

$empower_pro_blocks_combine = array();

// if ( current_theme_supports( 'leadership-pro-shop-menu-cart' ) ) {
// $empower_pro_blocks_combine[] = '.cart-menu';
// }

// if ( current_theme_supports( 'leadership-pro-menu-search' ) ) {
// $empower_pro_blocks_combine[] = '.post-search-sub-menu';
// }

$empower_pro_blocks_combine[] = '.nav-primary';
$empower_pro_blocks_combine[] = '.nav-primary-cta';
// $empower_pro_blocks_combine[] = '.nav-tertiary';

/**
 * Empower Pro Blocks responsive menus settings. (Requires Genesis 3.0+.)
 */
return array(
	'script' => array(
		'mainMenu'            => '<span class="flex-wrap"><span class="line-1"></span><span class="line-2"></span><span class="line-3"></span></span>',
		'menuIconClass'       => 'burger-menu',
		'menuIconOpenedClass' => 'burger-menu-open',
		'subMenuIconClass'    => 'ion-ios-arrow-down',
		'menuClasses'         => array(
			'combine' => $empower_pro_blocks_combine,
		),
	),
	'extras' => array(
		'media_query_width' => '1023px',
	),
);
