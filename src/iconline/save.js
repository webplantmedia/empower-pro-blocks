/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { RichText, getColorClassName } from "@wordpress/block-editor";

import renderSVG from "../../dist/blocks/renderIcon";

export default function save({ attributes }) {
	const {
		icon,
		iconSize,
		topOffset,
		iconSpacing,
		marginBottom,
		text,
		fontSize,
		verticalAlignment,
		textColor,
		iconColor,
		image,
		imageStyle,
		grayscale,
		imageIcon,
		customFontSize,
	} = attributes;

	const classes = classnames("wp-block-iconline__outer-wrapper", {
		[`is-vertically-aligned-${verticalAlignment}`]: verticalAlignment,
	});

	const iconClasses = classnames(
		"button-icon-before",
		grayscale ? "grayscale" : {},
		imageStyle ? "image-style-" + imageStyle : {},
		{ ["is-image-icon"]: "image" === imageIcon },
		getColorClassName("icon-color", iconColor)
	);

	const iconStyle = {
		...(iconSpacing || iconSpacing === 0
			? { flexBasis: iconSpacing + "px" }
			: {}),
	};

	const containerStyle = {
		...(marginBottom || marginBottom === 0
			? { marginBottom: marginBottom + "px" }
			: {}),
	};

	const iconInnerStyle = {
		...(iconSize ? { width: iconSize + "px" } : {}),
		...(imageStyle ? { height: iconSize + "px" } : {}),
		...(topOffset ? { marginTop: topOffset + "px" } : {}),
	};

	const textColorClassName = getColorClassName("text-color", textColor);

	const className = classnames("icon-text", textColorClassName, {
		["has-text-color"]: textColorClassName,
		["has-" + fontSize + "-font-size"]: fontSize,
	});

	return (
		<div style={containerStyle} className={classes}>
			<div className="wp-block-iconline__inner-wrap">
				{"icon" === imageIcon && icon && (
					<div style={iconStyle} class={iconClasses}>
						<div class="button-icon-inner" style={iconInnerStyle}>
							{renderSVG(icon)}
						</div>
					</div>
				)}
				{"image" === imageIcon && image && (
					<div style={iconStyle} class={iconClasses}>
						<div class="button-icon-inner" style={iconInnerStyle}>
							<img src={image.url} />
						</div>
					</div>
				)}
				<div class="wp-block-iconline__text-wrap">
					<RichText.Content
						tagName="p"
						value={text}
						className={className ? className : undefined}
					/>
				</div>
			</div>
		</div>
	);
}
