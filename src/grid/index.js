/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { group as icon } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';

const { name } = metadata;

export { metadata, name };

export const settings = {
	title: __( 'Grid' ),
	icon,
	description: __( 'A block that groups other blocks in a grid.' ),
	edit,
	save,
};
