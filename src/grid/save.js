/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { 
		columns,
		spacing,
		rspacing,
	} = attributes;

	const classes = classnames(
		columns ? 'grid-columns-' + columns : {},
		spacing || spacing === 0 ? 'grid-gap-' + spacing : {},
		rspacing || rspacing === 0 ? 'r-grid-gap-' + rspacing : {},
	);

	return (
		<div className={ classes }>
			<div className="wp-block-grid__inner-container">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
