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
		icon,
		iconSize,
		topOffset,
		iconSpacing,
		marginBottom,
		text,
		fontSize,
		level,
		heading,
		verticalAlignment,
		headingColor,
		textColor,
		iconColor,
		image,
		imageStyle,
		grayscale,
		imageIcon,
		customFontSize,
	} = attributes;

	const classes = classnames(
		'wp-block-icontext__outer-wrapper',
		{ [ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment },
	);

	const headingClasses = classnames(
		'icon-heading',
		getColorClassName( 'heading-color', headingColor ),
	);

	const iconClasses = classnames(
		'button-icon-before',
		grayscale ? 'grayscale' : {},
		imageStyle ? 'image-style-' + imageStyle : {}, 
		{ [ 'is-image-icon' ]: 'image' === imageIcon },
		getColorClassName( 'icon-color', iconColor ),
	);

	const tagName = 'h' + level;

	const iconStyle = {
		...( iconSpacing || iconSpacing === 0 ? { flexBasis: iconSpacing+"px" } : {} ),
	};

	const containerStyle = {
		...( marginBottom || marginBottom === 0 ? { marginBottom: marginBottom+"px" } : {} ),
	};

	const iconInnerStyle = {
		...( iconSize ? { width: iconSize+"px" } : {} ),
		...( imageStyle ? { height: iconSize+"px" } : {} ),
		...( topOffset ? { marginTop: topOffset+"px" } : {} ),
	};

	const fontSizeClass = getFontSizeClass( fontSize );

	const styles = {
		fontSize: fontSizeClass ? undefined : customFontSize,
	};

	const textColorClassName = getColorClassName( 'text-color', textColor );

	const className = classnames( 'icon-text',
		textColorClassName, 
		{ [ "has-text-color" ]: textColorClassName },
		{ [ fontSizeClass ]: fontSizeClass, }
	);

	return (
		<div style={ containerStyle } className={ classes }>
			<div className="wp-block-icontext__inner-wrap">
				{ "icon" === imageIcon && icon && (
					<div style={ iconStyle } class={ iconClasses }>
						<div class="button-icon-inner" style={ iconInnerStyle }>{ renderSVG(icon) }</div>
					</div>
				) }
				{ "image" === imageIcon && image && (
					<div style={ iconStyle } class={ iconClasses }>
						<div class="button-icon-inner" style={ iconInnerStyle }><img src={image.url} /></div>
					</div>
				) }
				<div class="wp-block-icontext__text-wrap">
					<RichText.Content
						tagName={ tagName }
						value={ heading }
						className={ headingClasses }
					/>
					<RichText.Content
						tagName="p"
						value={ text }
						className={ className ? className : undefined }
						style={ styles }
					/>
				</div>
			</div>
		</div>
	);
}
