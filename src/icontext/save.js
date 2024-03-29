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
		headingMarginBottom,
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
		linkUrl,
		linkTarget,
	} = attributes;

	const classes = classnames("wp-block-icontext__outer-wrapper", {
		[`is-vertically-aligned-${verticalAlignment}`]: verticalAlignment,
	});

	const headingClasses = classnames(
		"icon-heading",
		getColorClassName("heading-color", headingColor)
	);

	const iconClasses = classnames(
		"button-icon-before",
		grayscale ? "grayscale" : {},
		imageStyle ? "image-style-" + imageStyle : {},
		{ ["is-image-icon"]: "image" === imageIcon },
		getColorClassName("icon-color", iconColor)
	);

	const tagName = "h" + level;

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

	const headingStyle = {
		...(headingMarginBottom || headingMarginBottom === 0
			? { marginBottom: headingMarginBottom + "px" }
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

	let content = (
		<div className="wp-block-icontext__inner-wrap">
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
			<div class="wp-block-icontext__text-wrap">
				<RichText.Content
					tagName={tagName}
					value={heading}
					className={headingClasses}
					style={headingStyle}
				/>
				<RichText.Content
					tagName="p"
					value={text}
					className={className ? className : undefined}
				/>
			</div>
		</div>
	);

	if (linkUrl) {
		let temp = (
			<a
				class="icon-text-link"
				href={linkUrl}
				target={linkTarget && "_blank"}
				rel={linkTarget && "noopener noreferrer"}
			>
				{content}
			</a>
		);
		content = temp;
	}

	return (
		<div style={containerStyle} className={classes}>
			{content}
		</div>
	);
}
