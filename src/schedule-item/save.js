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

	const classes = classnames(
		'wp-block-schedule-item__outer-wrapper',
		{ [ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment },
	);

	const headingClasses = classnames(
		'icon-heading',
	);

	const iconClasses = classnames(
		'button-icon-before',
		grayscale ? 'grayscale' : {},
		highlight ? 'highlight' : {},
		imageStyle ? 'image-style-' + imageStyle : {}, 
		{ [ 'is-image-icon' ]: 'image' === imageIcon },
		getColorClassName( 'icon-color', iconColor ),
	);

	const containerStyle = {
		...( marginBottom || marginBottom === 0 ? { marginBottom: marginBottom+"px" } : {} ),
	};

	const iconInnerStyle = {
		...( iconSize ? { width: iconSize+"px" } : {} ),
		...( imageStyle ? { height: iconSize+"px" } : {} ),
		...( topOffset ? { marginTop: topOffset+"px" } : {} ),
	};

	const textColorClassName = getColorClassName( 'text-color', textColor );

	const subHeadingClass = classnames( 'icon-text',
		textColorClassName, 
		{ [ "has-text-color" ]: textColorClassName },
	);

	return (
		<div style={ containerStyle } className={ classes }>
			<div className="wp-block-schedule-item__inner-wrap">
				{ "icon" === imageIcon && icon && (
					<div class={ iconClasses }>
						<div class="button-icon-inner" style={ iconInnerStyle }>{ renderSVG(icon) }</div>
					</div>
				) }
				{ "image" === imageIcon && image && (
					<div class={ iconClasses }>
						<div class="button-icon-inner" style={ iconInnerStyle }><img src={image.url} /></div>
					</div>
				) }
				<div class="wp-block-schedule-item__text-wrap">
					<RichText.Content
						tagName="span"
						value={ heading }
						className={ headingClasses }
					/>
					<RichText.Content
						tagName="span"
						value={ text }
						className={ subHeadingClass }
					/>
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
