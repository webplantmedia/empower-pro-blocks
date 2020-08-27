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
		level,
		heading,
		headingColor,
		accordionOpen,
	} = attributes;

	const classes = classnames(
		'wp-block-accordion-item__outer-wrapper',
	);

	const headingClasses = classnames(
		'accordion-heading', 
		{ [ 'has-text-color' ]: headingColor, },
		getColorClassName( 'text-color', headingColor ),
	);

	const tagName = 'h' + level;

	const containerStyle = {
		...( marginBottom || marginBottom === 0 ? { marginBottom: marginBottom+"px" } : {} ),
	};

	return (
		<div style={ containerStyle } className={ classes }>
			<div className="wp-block-accordion-item__inner-wrap">
				<details open={ accordionOpen }>
					<summary className="wp-block-accordion-item__title">
						<RichText.Content
							tagName={ tagName }
							value={ heading }
							className={ headingClasses }
						/>
					</summary>
					<div className="wp-block-accordion-item__text">
						<InnerBlocks.Content />
					</div>
				</details>
			</div>
		</div>
	);
}
