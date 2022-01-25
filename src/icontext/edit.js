/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * Internal dependencies
 */
import HeadingToolbar from "./heading-toolbar";

/**
 * WordPress dependencies
 */
// import { useCallback, useEffect, useRef, useState } from '@wordpress/element';
import { useCallback, Fragment } from "@wordpress/element";
import {
	PanelBody,
	PanelRow,
	Button,
	RangeControl,
	ToggleControl,
	SelectControl,
	withNotices,
} from "@wordpress/components";

import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import EPIcon from "../../dist/blocks/Icon.json";
import renderSVG from "../../dist/blocks/renderIcon";

import { compose, withInstanceId } from "@wordpress/compose";
import { rawShortcut, displayShortcut } from "@wordpress/keycodes";
import {
	AlignmentToolbar,
	BlockVerticalAlignmentToolbar,
	BlockControls,
	FontSizePicker,
	InspectorControls,
	MediaUpload,
	withColors,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
	RichText,
	URLInput,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { withDispatch } from "@wordpress/data";

let svg_icons = Object.keys(EPIcon);

function IconTextBlock({
	attributes,
	setAttributes,
	isSelected,
	className,
	toggleSelection,
	headingColor,
	setHeadingColor,
	textColor,
	setTextColor,
	iconColor,
	setIconColor,
}) {
	const {
		icon,
		iconSize,
		topOffset,
		iconSpacing,
		marginBottom,
		headingMarginBottom,
		text,
		heading,
		fontSize,
		verticalAlignment,
		level,
		image,
		imageStyle,
		grayscale,
		imageIcon,
		linkUrl,
		linkTarget,
	} = attributes;

	const onVerticalAlignmentChange = (alignment) => {
		setAttributes({ verticalAlignment: alignment });
	};

	const onRemoveImage = () => {
		setAttributes({ image: null });
	};

	const onSelectImage = (media) => {
		if (!media || !media.url) {
			setAttributes({ image: null });
			return;
		}

		if (!media.type || "image" != media.type) {
			return;
		}

		setAttributes({ image: media });
	};

	const controls = (
		<>
			<BlockControls>
				<BlockVerticalAlignmentToolbar
					onChange={onVerticalAlignmentChange}
					value={verticalAlignment}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelColorGradientSettings
					title={__("Heading settings")}
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
					<RangeControl
						label={__("Margin Bottom")}
						value={headingMarginBottom}
						onChange={(value) =>
							setAttributes({
								headingMarginBottom: value,
							})
						}
						min={0}
						max={150}
						step={1}
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
					<FontSizePicker
						value={fontSize}
						onChange={(value) => {
							setAttributes({ fontSize: value });
						}}
					/>
					<RangeControl
						label={__("Margin Bottom")}
						value={marginBottom}
						onChange={(value) =>
							setAttributes({
								marginBottom: value,
							})
						}
						min={0}
						max={150}
						step={1}
					/>
				</PanelColorGradientSettings>
				<PanelBody title={__("Icon")} initialOpen={true}>
					<SelectControl
						label={__("Image / Icon")}
						value={imageIcon}
						options={[
							{ value: "icon", label: __("Icon") },
							{ value: "image", label: __("Image") },
						]}
						onChange={(value) => setAttributes({ imageIcon: value })}
					/>
					{"icon" === imageIcon && (
						<Fragment>
							<p className="">{__("Icon")}</p>
							<FontIconPicker
								icons={svg_icons}
								renderFunc={renderSVG}
								theme="default"
								value={icon}
								onChange={(value) => setAttributes({ icon: value })}
								isMulti={false}
								noSelectedPlaceholder={__("Select Icon")}
							/>
						</Fragment>
					)}
					{"image" === imageIcon && (
						<Fragment>
							<MediaUpload
								title={__("Select Image")}
								onSelect={onSelectImage}
								allowedTypes={["image"]}
								value={image}
								render={({ open }) => (
									<Button isDefault onClick={open}>
										{!image ? __("Select Image") : __("Replace image")}
									</Button>
								)}
							/>
							{image && (
								<Button
									isDefault
									className=""
									onClick={onRemoveImage}
									isLink
									isDestructive
								>
									{__("Remove Image")}
								</Button>
							)}
							<hr />
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
							<ToggleControl
								label={__("Grayscale")}
								onChange={(value) =>
									setAttributes(
										value ? { grayscale: true } : { grayscale: false }
									)
								}
								checked={grayscale === true}
							/>
							<hr />
						</Fragment>
					)}
					<RangeControl
						label={__("Icon Size")}
						value={iconSize}
						onChange={(value) =>
							setAttributes({
								iconSize: value,
							})
						}
						min={7}
						max={150}
						step={1}
					/>
					<RangeControl
						label={__("Icon Top Offset")}
						value={topOffset}
						onChange={(value) =>
							setAttributes({
								topOffset: value,
							})
						}
						min={-50}
						max={50}
						step={1}
					/>
					<RangeControl
						label={__("Icon Spacing")}
						value={iconSpacing}
						onChange={(value) =>
							setAttributes({
								iconSpacing: value,
							})
						}
						min={0}
						max={250}
						step={1}
					/>
				</PanelBody>
				{"icon" === imageIcon && (
					<PanelColorGradientSettings
						title={__("Icon Color")}
						initialOpen={true}
						settings={[
							{
								colorValue: iconColor.color,
								onColorChange: setIconColor,
								disableCustomColors: true,
								label: __("Color"),
							},
						]}
					></PanelColorGradientSettings>
				)}
				<PanelBody title={__("Link Settings")} initialOpen={true}>
					<URLInput
						value={linkUrl}
						className="url-input-inspector-field"
						placeholder="Paste URL"
						onChange={(value) => setAttributes({ linkUrl: value })}
						autoFocus={false}
						disableSuggestions={true}
					/>
					<ToggleControl
						label={__("Open in new tab")}
						onChange={(value) =>
							setAttributes(
								value ? { linkTarget: "_blank" } : { linkTarget: undefined }
							)
						}
						checked={linkTarget === "_blank"}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	const classes = classnames(className, "wp-block-icontext__outer-wrapper", {
		[`is-vertically-aligned-${verticalAlignment}`]: verticalAlignment,
	});

	const headingClasses = classnames("icon-heading", {
		[headingColor.class]: headingColor.class,
	});

	const iconClasses = classnames(
		"button-icon-before",
		grayscale ? "grayscale" : {},
		imageStyle ? "image-style-" + imageStyle : {},
		{ ["is-image-icon"]: "image" === imageIcon },
		{ [iconColor.class]: iconColor.class }
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

	const tagName = "h" + level;

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
				<RichText
					placeholder={__("Heading")}
					value={heading}
					onChange={(value) => setAttributes({ heading: value })}
					className={headingClasses}
					tagName={tagName}
					style={headingStyle}
				/>
				<RichText
					placeholder={__("Text")}
					value={text}
					onChange={(value) => setAttributes({ text: value })}
					tagName="p"
					className={classnames("icon-text", {
						["has-" + fontSize + "-font-size"]: fontSize,
						[textColor.class]: textColor.class,
						["has-text-color"]: textColor.class,
					})}
				/>
			</div>
		</div>
	);

	if (linkUrl) {
		let temp = <a class="icon-text-link">{content}</a>;
		content = temp;
	}

	return (
		<>
			{controls}
			<div style={containerStyle} className={classes}>
				{content}
			</div>
		</>
	);
}

const IconTextEdit = compose([
	withColors({
		headingColor: "heading-color",
		textColor: "text-color",
		iconColor: "icon-color",
	}),
])(IconTextBlock);

export default IconTextEdit;
