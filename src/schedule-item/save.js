/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	RichText,
	getColorClassName,
} from '@wordpress/block-editor';

import renderSVG from "../../dist/blocks/renderIcon"

export default function save( { attributes } ) {
	const {
		icon,
		iconSize,
		topOffset,
		marginBottom,
		text,
		info,
		heading,
		verticalAlignment,
		textColor,
		iconColor,
		image,
		imageStyle,
		grayscale,
		highlight,
		imageIcon,
	} = attributes;

	const itemColorClassName = getColorClassName( 'item-color', textColor );

	const classes = classnames(
		'wp-block-schedule-item__outer-wrapper',
		{ [ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment },
		highlight ? 'schedule-highlight' : {},
		itemColorClassName, 
	);

	const headingClasses = classnames(
		'icon-heading',
	);

	const subHeadingClass = classnames( 'icon-text',
	);

	const iconClasses = classnames(
		'button-icon-before',
		grayscale ? 'grayscale' : {},
		imageStyle ? 'image-style-' + imageStyle : {}, 
		{ [ 'is-image-icon' ]: 'image' === imageIcon },
		getColorClassName( 'icon-color', iconColor ),
	);

	const containerStyle = {
		...( marginBottom || marginBottom === 0 ? { paddingBottom: marginBottom+"px" } : {} ),
	};

	const iconInnerStyle = {
		...( iconSize ? { width: iconSize+"px" } : {} ),
		...( imageStyle ? { height: iconSize+"px" } : {} ),
		...( topOffset ? { marginTop: topOffset+"px" } : {} ),
	};

	return (
		<div style={ containerStyle } className={ classes }>
			<div className="wp-block-schedule-item__inner-wrap">
				<div class={ iconClasses }>
					{ "icon" === imageIcon && icon && (
						<div class="button-icon-inner" style={ iconInnerStyle }>{ renderSVG(icon) }</div>
					) }
					{ "image" === imageIcon && image && (
						<div class="button-icon-inner" style={ iconInnerStyle }><img src={image.url} /></div>
					) }
				</div>
				<div class="wp-block-schedule-item__text-wrap">
					<RichText.Content
						tagName="span"
						value={ heading }
						className={ headingClasses }
					/>
					<span class="icon-text-wrapper">
						<RichText.Content
							tagName="span"
							value={ text }
							className={ subHeadingClass }
						/>
					</span>
					<RichText.Content
						tagName="span"
						value={ info }
						className="icon-info"
					/>
				</div>
			</div>
		</div>
	);
}
