<?php

/**
 * Empower Pro Blocks.
 *
 * Adds front-end inline styles for the custom Gutenberg color palette.
 *
 * @package Empower Pro Blocks
 * @author  Web Plant Media
 * @license GPL-2.0-or-later
 * @link    https://webplantmedia.com/
 */

/**
 * Display Gutenberg CSS.
 *
 * @since 1.01
 *
 * @return string
 */
function empower_pro_blocks_get_gutenberg_button_css($appearance)
{
	$css = '';

	$primary_color = '%1$s';
	$primary_bright_color = '%2$s';
	$primary_contrast_color = '%3$s';
	$secondary_color = '%4$s';
	$secondary_bright_color = '%5$s';
	$secondary_contrast_color = '%6$s';
	$third_color = '%7$s';
	$third_bright_color = '%8$s';
	$third_contrast_color = '%9$s';
	$fourth_color = '%10$s';
	$fourth_bright_color = '%11$s';
	$fourth_contrast_color = '%12$s';
	$fifth_color = '%13$s';
	$fifth_bright_color = '%14$s';
	$fifth_contrast_color = '%15$s';
	$sixth_color = '%16$s';
	$sixth_bright_color = '%17$s';
	$sixth_contrast_color = '%18$s';
	$seventh_color = '%19$s';
	$seventh_bright_color = '%20$s';
	$seventh_contrast_color = '%21$s';
	$eighth_color = '%22$s';
	$eighth_bright_color = '%23$s';
	$eighth_contrast_color = '%24$s';
	$text_color = '%25$s';
	$text_bright_color = '%26$s';
	$text_contrast_color = '%27$s';
	$darktext_color = '%28$s';
	$darktext_bright_color = '%29$s';
	$darktext_contrast_color = '%30$s';
	$altbackground_color = '%31$s';
	$altbackground_bright_color = '%32$s';
	$altbackground_contrast_color = '%33$s';
	$border_color = '%34$s';
	$border_bright_color = '%35$s';
	$border_contrast_color = '%36$s';
	$white_color = '%37$s';
	$white_bright_color = '%38$s';
	$white_contrast_color = '%39$s';

	$css = sprintf(
		$css,
		$appearance['vars']['primary-color'],
		$appearance['vars']['primary-color-bright'],
		$appearance['vars']['primary-color-contrast'],

		$appearance['vars']['secondary-color'],
		$appearance['vars']['secondary-color-bright'],
		$appearance['vars']['secondary-color-contrast'],

		$appearance['vars']['third-color'],
		$appearance['vars']['third-color-bright'],
		$appearance['vars']['third-color-contrast'],

		$appearance['vars']['fourth-color'],
		$appearance['vars']['fourth-color-bright'],
		$appearance['vars']['fourth-color-contrast'],

		$appearance['vars']['fifth-color'],
		$appearance['vars']['fifth-color-bright'],
		$appearance['vars']['fifth-color-contrast'],

		$appearance['vars']['sixth-color'],
		$appearance['vars']['sixth-color-bright'],
		$appearance['vars']['sixth-color-contrast'],

		$appearance['vars']['seventh-color'],
		$appearance['vars']['seventh-color-bright'],
		$appearance['vars']['seventh-color-contrast'],

		$appearance['vars']['eighth-color'],
		$appearance['vars']['eighth-color-bright'],
		$appearance['vars']['eighth-color-contrast'],

		$appearance['vars']['text-color'],
		$appearance['vars']['text-color-bright'],
		$appearance['vars']['text-color-contrast'],

		$appearance['vars']['darktext-color'],
		$appearance['vars']['darktext-color-bright'],
		$appearance['vars']['darktext-color-contrast'],

		$appearance['vars']['altbackground-color'],
		$appearance['vars']['altbackground-color-bright'],
		$appearance['vars']['altbackground-color-contrast'],

		$appearance['vars']['border-color'],
		$appearance['vars']['border-color-bright'],
		$appearance['vars']['border-color-contrast'],

		$appearance['vars']['white-color'],
		$appearance['vars']['white-color-bright'],
		$appearance['vars']['white-color-contrast'],
	);

	$css = empower_pro_blocks_compact($css);

	return $css;
}
