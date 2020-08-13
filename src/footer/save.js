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
		columns ? 'footer-columns-' + columns : {},
		{ [ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment },
		spacing || spacing === 0 ? 'footer-gap-' + spacing : {},
		rspacing || rspacing === 0 ? 'r-footer-gap-' + rspacing : {},
		spacingRow || spacingRow === 0 ? 'footer-row-gap-' + spacingRow : {},
		rspacingRow || rspacingRow === 0 ? 'r-footer-row-gap-' + rspacingRow : {},
	);

	return (
		<div className={ classes }>
			<div className="wp-block-footer__inner-container">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
