/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { formatListBullets as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';

const { name } = metadata;

export { metadata, name };

export const settings = {
	title: __( 'Icon Text' ),
	icon,
	category: 'abilitie-blocks',
	supports: {
		html: false,
	},
	save,
	edit,
};
