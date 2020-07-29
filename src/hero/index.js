/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { cover as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';

const { name } = metadata;

export { metadata, name };

export const settings = {
	title: __( 'Hero' ),
	description: __(
		'Add an image or video with a text overlay — great for headers.'
	),
	icon,
	category: 'abilitie-blocks',
	supports: {
		align: ["full"],
		html: false,
	},
	save,
	edit,
};
