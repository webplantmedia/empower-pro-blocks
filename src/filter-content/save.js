/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
	} = attributes;

	const classes = classnames(
		'wp-block-filter-content-wrapper',
		'filter-content',
	);

	return (
		<div className={ classes }>
			<InnerBlocks.Content />
		</div>
	);
}
