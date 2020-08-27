/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	RichText,
	getFontSizeClass,
	getColorClassName,
} from '@wordpress/block-editor';

import renderSVG from "../../dist/blocks/renderIcon"

export default function save( { attributes } ) {
	const {
		marginBottom,
		level,
		heading,
		headingColor,
	} = attributes;

	const classes = classnames(
		'wp-block-accordion-item__outer-wrapper',
	);

	const headingClasses = classnames(
		'accordion-heading', 
		getColorClassName( 'heading-color', headingColor ),
	);

	const tagName = 'h' + level;

	const containerStyle = {
		...( marginBottom || marginBottom === 0 ? { marginBottom: marginBottom+"px" } : {} ),
	};

	const fontSizeClass = getFontSizeClass( fontSize );

	return (
		<div style={ containerStyle } className={ classes }>
			<div className="wp-block-accordion-item__inner-wrap">
				<div class="wp-block-accordion-item__heading-wrap">
					<RichText.Content
						tagName={ tagName }
						value={ heading }
						className={ headingClasses }
					/>
				</div>
				<div class="wp-block-accordion-item__text-wrap">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
