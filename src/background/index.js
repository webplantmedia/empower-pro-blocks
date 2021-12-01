/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { pullquote as icon } from "@wordpress/icons";

/**
 * Internal dependencies
 */
import edit from "./edit";
import metadata from "./block.json";
import save from "./save";

const { name, supports } = metadata;

export { metadata, name };

export const settings = {
	title: __("Background"),
	icon,
	save,
	edit,
	supports: supports,
};
