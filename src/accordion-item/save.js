/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	RichText,
	InnerBlocks,
	getColorClassName,
} from '@wordpress/block-editor';

import renderSVG from "../../dist/blocks/renderIcon"

export default function save( { attributes } ) {
	const {
		marginBottom,
		heading,
		headingColor,
		headingType,
		accordionOpen,
	} = attributes;

	const classes = classnames(
		'wp-block-accordion-item__outer-wrapper',
	);

	const headingColorClass = getColorClassName( 'text-color', headingColor );

	const headingClasses = classnames(
		'wp-block-accordion-item__title',
		headingColorClass ? 'has-text-color' : {},
		headingColorClass,
		headingType ? headingType : "p-type",
	);

	const containerStyle = {
		...( marginBottom || marginBottom === 0 ? { marginBottom: marginBottom+"px" } : {} ),
	};

	return (
		<div style={ containerStyle } className={ classes }>
			<div className="wp-block-accordion-item__inner-wrap">
				<details open={ accordionOpen }>
					<RichText.Content
						tagName="summary"
						value={ heading }
						className={ headingClasses }
					/>
					<div className="wp-block-accordion-item__text">
						<InnerBlocks.Content />
					</div>
				</details>
			</div>
		</div>
	);
}
