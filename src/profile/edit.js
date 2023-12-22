/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * Internal dependencies
 */
import HeadingToolbar from "../../dist/blocks/heading-toolbar";

/**
 * WordPress dependencies
 */
// import { useCallback, useEffect, useRef, useState } from '@wordpress/element';
import { useCallback, Fragment } from "@wordpress/element";
import {
	PanelBody,
	Button,
	PanelRow,
	ToggleControl,
	RangeControl,
	SelectControl,
	TextControl,
} from "@wordpress/components";

import { compose, withInstanceId } from "@wordpress/compose";
import {
	BlockControls,
	RichText,
	InspectorControls,
	MediaUpload,
	MediaReplaceFlow,
	withColors,
	withFontSizes,
	FontSizePicker,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
	URLInput,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

/**
 * Module Constants
 */
const ALLOWED_MEDIA_TYPES = ["image"];

function ProfileEdit({
	attributes,
	setAttributes,
	isSelected,
	className,
	profileColor,
	setProfileColor,
	fontSize,
	setFontSize,
	textColor,
	setTextColor,
	headingColor,
	setHeadingColor,
}) {
	const {
		id,
		url,
		heading,
		level,
		text,
		profileStyle,
		imageStyle,
		imageHeight,
	} = attributes;

	const tagName = "h" + level;

	const controls = (
		<>
			<BlockControls>
				<MediaReplaceFlow
					mediaId={id}
					mediaURL={url}
					allowedTypes={ALLOWED_MEDIA_TYPES}
					accept="image/*"
					onSelect={(media) =>
						setAttributes({
							url: media.url,
							id: media.id,
						})
					}
					name="Icon"
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__("Icon settings")}>
					<PanelRow>
						<MediaUpload
							id={id}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							onSelect={(media) =>
								setAttributes({
									url: media.url,
									id: media.id,
								})
							}
							render={({ open }) => (
								<Button onClick={open} isSecondary={true}>
									Select Icon Image
								</Button>
							)}
						/>
					</PanelRow>
					{!!url && (
						<PanelRow>
							<Button
								isSecondary
								className=""
								onClick={() =>
									setAttributes({
										url: undefined,
										id: undefined,
									})
								}
							>
								{__("Clear Media")}
							</Button>
						</PanelRow>
					)}
					{!!url && (
						<Fragment>
							<hr />
							<RangeControl
								label={__("Icon Size")}
								value={imageHeight}
								onChange={(value) =>
									setAttributes({
										imageHeight: value,
									})
								}
								min={60}
								max={300}
								step={1}
							/>
							<SelectControl
								label={__("Image Style")}
								value={imageStyle}
								options={[
									{ value: "", label: __("None") },
									{ value: "circle", label: __("Circle") },
									{ value: "hex", label: __("Hex") },
								]}
								onChange={(value) => setAttributes({ imageStyle: value })}
							/>
						</Fragment>
					)}
				</PanelBody>
				<PanelColorGradientSettings
					title={__("Profile Color")}
					initialOpen={true}
					settings={[
						{
							colorValue: profileColor.color,
							onColorChange: setProfileColor,
							disableCustomColors: true,
							label: __("Color"),
						},
					]}
				></PanelColorGradientSettings>
				<PanelBody title={__("Profile Style")} initialOpen={true}>
					<SelectControl
						label={__("Style")}
						value={profileStyle}
						options={[{ value: "", label: __("Default") }]}
						onChange={(value) => setAttributes({ profileStyle: value })}
					/>
				</PanelBody>
				<PanelColorGradientSettings
					title={__("Heading")}
					initialOpen={true}
					settings={[
						{
							colorValue: headingColor.color,
							onColorChange: setHeadingColor,
							disableCustomColors: true,
							label: __("Color"),
						},
					]}
				>
					<HeadingToolbar
						isCollapsed={false}
						minLevel={2}
						maxLevel={7}
						selectedLevel={level}
						onChange={(value) => setAttributes({ level: value })}
					/>
				</PanelColorGradientSettings>
				<PanelColorGradientSettings
					title={__("Text Settings")}
					initialOpen={true}
					settings={[
						{
							colorValue: textColor.color,
							onColorChange: setTextColor,
							disableCustomColors: true,
							label: __("Color"),
						},
					]}
				>
					<FontSizePicker value={fontSize.size} onChange={setFontSize} />
				</PanelColorGradientSettings>
			</InspectorControls>
		</>
	);

	const classes = classnames(
		className,
		"wp-block-profile__outer-wrapper",
		"plain" === profileStyle ? "is-plain-style" : {},
		{
			[profileColor.class]: profileColor.class,
		}
	);

	const hClasses = classnames("profile-heading", {
		[headingColor.class]: headingColor.class,
		["has-text-color"]: headingColor.class,
	});

	const pClasses = classnames("profile-text", {
		[fontSize.class]: fontSize.class,
		[textColor.class]: textColor.class,
		["has-text-color"]: textColor.class,
	});

	const pStyles = {
		fontSize: fontSize.size ? fontSize.size + "px" : undefined,
	};

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

	const innerClasses = classnames("wp-block-profile__inner-content", {});

	return (
		<>
			{controls}
			<div className={classes}>
				<div className="profile-content">
					<div className={innerClasses}>
						{url && (
							<div style={imageStyleRules} class={imageClasses}>
								<img src={url} style={imageStyleInnerRules} />
							</div>
						)}
						<RichText
							className={hClasses}
							placeholder={__("Heading", "empower-pro-blocks")}
							onChange={(value) =>
								setAttributes({
									heading: value,
								})
							}
							value={heading}
							tagName={tagName}
						/>
						<RichText
							tagName="p"
							placeholder={__("Text", "empower-pro-blocks")}
							onChange={(value) =>
								setAttributes({
									text: value,
								})
							}
							value={text}
							className={pClasses}
							style={pStyles}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default compose([
	withFontSizes("fontSize"),
	withColors({
		profileColor: "profile-color",
		headingColor: "text-color",
		textColor: "text-color",
	}),
])(ProfileEdit);
