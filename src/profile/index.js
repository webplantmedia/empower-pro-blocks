/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { tablet as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';

const { name } = metadata;

export { metadata, name };

export const settings = {
	title: __( 'Profile' ),
	icon,
	supports: {
		html: false,
	},
	save,
	edit,
};
