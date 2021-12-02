/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { cover as icon } from "@wordpress/icons";

/**
 * Internal dependencies
 */
import edit from "./edit";
import metadata from "./block.json";
import save from "./save";

const { name } = metadata;

export { metadata, name };

export const settings = {
	title: __("Hero2"),
	icon,
	supports: {
		align: ["full"],
		html: false,
		anchor: true,
	},
	save,
	edit,
};
