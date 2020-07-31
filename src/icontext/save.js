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
		text,
		fontSize,
		hasHeading,
		level,
		heading,
		verticalAlignment,
		headingColor,
		iconColor,
		image,
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
		{ [ 'is-image-icon' ]: 'image' === imageIcon },
		getColorClassName( 'icon-color', iconColor ),
	);

	const tagName = 'h' + level;

	const iconStyle = {
		...( iconSize ? { width: iconSize+"px" } : {} ),
		...( topOffset ? { marginTop: topOffset+"px" } : {} ),
		...( iconSpacing ? { paddingRight: iconSpacing+"px" } : {} ),
	};

	const fontSizeClass = getFontSizeClass( fontSize );

	const styles = {
		fontSize: fontSizeClass ? undefined : customFontSize,
	};

	const className = classnames( 'icon-text', {
		[ fontSizeClass ]: fontSizeClass,
	} );

	return (
		<div className={ classes }>
			<div className="wp-block-icontext__inner-wrap">
				{ "icon" === imageIcon && icon && (
					<div style={ iconStyle } class={ iconClasses }>{ renderSVG(icon) }</div>
				) }
				{ "image" === imageIcon && image && (
					<div style={ iconStyle } class={ iconClasses }>
						<img src={image.url} />
					</div>
				) }
				<div class="wp-block-icontext__text-wrap">
					{ hasHeading && (
						<RichText.Content
							tagName={ tagName }
							value={ heading }
							className={ headingClasses }
							style={ styles }
						/>
					) }
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
