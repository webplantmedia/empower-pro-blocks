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
		spacingRow,
		rspacingRow,
		verticalAlignment,
	} = attributes;

	const classes = classnames(
		columns ? 'grid-columns-' + columns : {},
		{ [ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment },
		spacing || spacing === 0 ? 'grid-gap-' + spacing : {},
		rspacing || rspacing === 0 ? 'r-grid-gap-' + rspacing : {},
		spacingRow || spacingRow === 0 ? 'grid-row-gap-' + spacingRow : {},
		rspacingRow || rspacingRow === 0 ? 'r-grid-row-gap-' + rspacingRow : {},
	);

	return (
		<div className={ classes }>
			<div className="wp-block-grid__inner-container">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
