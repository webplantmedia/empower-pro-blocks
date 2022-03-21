/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import {
	RichText,
	getFontSizeClass,
	getColorClassName,
} from "@wordpress/block-editor";

import renderSVG from "../../dist/blocks/renderIcon";

/**
 * Internal dependencies
 */
import svgleftpill from "../../dist/svg/leftpill";
import svgrightpill from "../../dist/svg/rightpill";

export default function save({ attributes }) {
	const {
		url,
		heading,
		level,
		text,
		button1Text,
		fontSize,
		customFontSize,
		button1URL,
		button1LinkTarget,
		cardColor,
		cardStyle,
		imageStyle,
		imageHeight,
		textColor,
		headingColor,
		backgroundColor,
		duration,
		align,
	} = attributes;

	const classes = classnames(
		"wp-block-card__outer-wrapper",
		cardStyle ? "is-" + cardStyle + "-style" : {},
		getColorClassName("card-color", cardColor)
	);

	const fontSizeClass = getFontSizeClass(fontSize);

	const pStyles = {
		fontSize: fontSizeClass ? undefined : customFontSize,
	};

	const headingColorClassName = getColorClassName("text-color", headingColor);

	const hClasses = classnames(
		"card-heading",
		headingColorClassName,
		{ ["has-text-color"]: headingColorClassName },
		{ [`has-text-align-${align}`]: align }
	);

	const textColorClassName = getColorClassName("text-color", textColor);

	const pClasses = classnames(
		"card-text",
		textColorClassName,
		{ ["has-text-color"]: textColorClassName },
		{ [fontSizeClass]: fontSizeClass },
		{ [`has-text-align-${align}`]: align }
	);

	const tagName = "h" + level;

	const imageStyleRules = {
		...(imageStyle && imageHeight ? { width: imageHeight + "px" } : {}),
		...(imageStyle && imageHeight ? { height: imageHeight + "px" } : {}),
	};

	const imageStyleInnerRules = {
		...(!imageStyle && imageHeight ? { maxHeight: imageHeight + "px" } : {}),
	};

	const imageClasses = classnames(
		"wp-block-image",
		imageStyle ? "image-style-" + imageStyle : {},
		imageHeight ? "custom-height" : {}
	);

	const backgroundColorClassName = getColorClassName(
		"background-color",
		backgroundColor
	);

	const innerClasses = classnames(
		"wp-block-card__inner-content",
		backgroundColorClassName,
		{ ["has-background-color"]: backgroundColorClassName }
	);

	let durationContent = "";
	if (duration == 1) {
		durationContent = (
			<div class="card-duration">
				<i class="colored icon ion-ios-time"></i>
				<i class="icon ion-ios-time"></i>
				<i class="icon ion-ios-time"></i>
			</div>
		);
	} else if (duration == 2) {
		durationContent = (
			<div class="card-duration">
				<i class="colored icon ion-ios-time"></i>
				<i class="colored icon ion-ios-time"></i>
				<i class="icon ion-ios-time"></i>
			</div>
		);
	} else if (duration == 3) {
		durationContent = (
			<div class="card-duration">
				<i class="colored icon ion-ios-time"></i>
				<i class="colored icon ion-ios-time"></i>
				<i class="colored icon ion-ios-time"></i>
			</div>
		);
	}

	return (
		<div className={classes}>
			<div className="card-content">
				<div className={innerClasses}>
					{url && (
						<div style={imageStyleRules} class={imageClasses}>
							<img src={url} style={imageStyleInnerRules} />
						</div>
					)}
					<RichText.Content
						className={hClasses}
						value={heading}
						tagName={tagName}
					/>
					<RichText.Content
						tagName="p"
						value={text}
						className={pClasses}
						style={pStyles}
					/>
					{durationContent}
					{button1Text && (
						<div class="wp-block-buttons">
							<div class="wp-block-button is-style-text">
								<RichText.Content
									tagName="a"
									value={button1Text}
									className="wp-block-button__link button1"
									value={button1Text}
									href={button1URL}
									target={button1LinkTarget}
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
