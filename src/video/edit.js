/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
// import { useCallback, useEffect, useRef, useState } from '@wordpress/element';
import { useCallback, Fragment } from "@wordpress/element";
import {
	PanelBody,
	Button,
	PanelRow,
	RangeControl,
	TextControl,
	withNotices,
} from "@wordpress/components";

import FontIconPicker from "@fonticonpicker/react-fonticonpicker";
import EPIcon from "../../dist/blocks/Icon.json";
import renderSVG from "../../dist/blocks/renderIcon";

import { compose, withInstanceId } from "@wordpress/compose";
import { rawShortcut, displayShortcut } from "@wordpress/keycodes";
import {
	BlockControls,
	RichText,
	InspectorControls,
	MediaUpload,
	MediaReplaceFlow,
	InnerBlocks,
	withColors,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { withDispatch } from "@wordpress/data";
// import { cover as icon, link } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import {
	attributesFromMedia,
	IMAGE_BACKGROUND_TYPE,
	VIDEO_BACKGROUND_TYPE,
	backgroundImageStyles,
	dimRatioToClass,
} from "./shared";
import svgbackground from "../../dist/svg/background";

/**
 * Module Constants
 */
const ALLOWED_MEDIA_TYPES = ["video"];

const INNER_BLOCKS_TEMPLATE = [
	[
		"core/heading",
		{
			content:
				"Join over 40 leading global organizations utilizing our solutions today",
			level: 3,
			textColor: "white",
			className: "mb-0",
		},
	],
	[
		"empower-pro-blocks/spacer",
		{
			height: 40,
			mobileHeight: 20,
		},
	],
	[
		"core/shortcode",
		{
			text: '[wpforms id="71" title="false" description="false"]',
		},
	],
];

const MIN_SPACER_HEIGHT = 0;
const MAX_SPACER_HEIGHT = 500;

function VideoEdit({
	attributes,
	setAttributes,
	isSelected,
	className,
	noticeUI,
	backgroundImageColor,
	setBackgroundImageColor,
	toggleSelection,
	noticeOperations,
}) {
	const {
		id,
		url,
		topVideoImage,
		topVideoLogos,
		bottomVideoLogos,
		topHeight,
		topMobileHeight,
		bottomHeight,
		bottomMobileHeight,
		mobileColumnSpacing,
	} = attributes;

	const updateTopHeight = (value) => {
		setAttributes({
			topHeight: value,
		});
	};
	const updateTopMobileHeight = (value) => {
		setAttributes({
			topMobileHeight: value,
		});
	};
	const updateBottomHeight = (value) => {
		setAttributes({
			bottomHeight: value,
		});
	};
	const updateBottomMobileHeight = (value) => {
		setAttributes({
			bottomMobileHeight: value,
		});
	};

	const updateMobileColumnSpacing = (value) => {
		setAttributes({
			mobileColumnSpacing: value,
		});
	};

	const onSelectMedia = attributesFromMedia(setAttributes);

	const { removeAllNotices, createErrorNotice } = noticeOperations;

	const style = {};

	const controls = (
		<>
			<BlockControls>
				<MediaReplaceFlow
					mediaId={id}
					mediaURL={url}
					allowedTypes={ALLOWED_MEDIA_TYPES}
					accept="video/*"
					onSelect={onSelectMedia}
					name="Video"
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__("Media settings")}>
					<PanelRow>
						<MediaUpload
							id={id}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							onSelect={onSelectMedia}
							render={({ open }) => (
								<Button onClick={open} isSecondary={true}>
									Select Video
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
				</PanelBody>
				<PanelColorGradientSettings
					title={__("Background Color")}
					initialOpen={true}
					settings={[
						{
							colorValue: backgroundImageColor.color,
							onColorChange: setBackgroundImageColor,
							disableCustomColors: true,
							label: __("Color"),
						},
					]}
				></PanelColorGradientSettings>
				<PanelBody title={__("Top Spacing")}>
					<RangeControl
						label={__("Height in pixels")}
						min={MIN_SPACER_HEIGHT}
						max={Math.max(MAX_SPACER_HEIGHT, topHeight)}
						separatorType={"none"}
						value={topHeight}
						onChange={updateTopHeight}
						step={10}
					/>
					<RangeControl
						label={__("Mobile height in pixels")}
						min={MIN_SPACER_HEIGHT}
						max={Math.max(MAX_SPACER_HEIGHT, topMobileHeight)}
						separatorType={"none"}
						value={topMobileHeight}
						onChange={updateTopMobileHeight}
						step={10}
					/>
				</PanelBody>
				<PanelBody title={__("Bottom Spacing")}>
					<RangeControl
						label={__("Height in pixels")}
						min={MIN_SPACER_HEIGHT}
						max={Math.max(MAX_SPACER_HEIGHT, bottomHeight)}
						separatorType={"none"}
						value={bottomHeight}
						onChange={updateBottomHeight}
						step={10}
					/>
					<RangeControl
						label={__("Mobile height in pixels")}
						min={MIN_SPACER_HEIGHT}
						max={Math.max(MAX_SPACER_HEIGHT, bottomMobileHeight)}
						separatorType={"none"}
						value={bottomMobileHeight}
						onChange={updateBottomMobileHeight}
						step={10}
					/>
				</PanelBody>
				<PanelBody title={__("Mobile Column Spacing")}>
					<RangeControl
						label={__("Spacing between video and text on mobile devices.")}
						min={MIN_SPACER_HEIGHT}
						max={Math.max(MAX_SPACER_HEIGHT, mobileColumnSpacing)}
						separatorType={"none"}
						value={mobileColumnSpacing}
						onChange={updateMobileColumnSpacing}
						step={10}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	const classes = classnames(className);

	const backgroundClasses = classnames("background-image", {
		[backgroundImageColor.class]: backgroundImageColor.class,
	});

	const topHeightClassName = classnames({
		["mobile-height-" + topMobileHeight]: topMobileHeight !== "",
	});

	const bottomHeightClassName = classnames({
		["mobile-height-" + bottomMobileHeight]: bottomMobileHeight !== "",
	});

	const columnOneClassName = classnames("wp-block-group", "white-form-fields", {
		["mb-" + mobileColumnSpacing]: mobileColumnSpacing !== "",
	});

	const columnTwoClassName = classnames("wp-block-group", "video-player", {
		["mb-" + mobileColumnSpacing]: mobileColumnSpacing !== "",
	});

	const topVideoImageUrl = empower_pro_blocks.plugins_url + topVideoImage;
	const topVideoLogosUrl = empower_pro_blocks.plugins_url + topVideoLogos;
	const bottomVideoLogosUrl = empower_pro_blocks.plugins_url + bottomVideoLogos;

	return (
		<>
			{controls}
			<div className={classes}>
				<div class="wp-block-group">
					<div class="wp-block-group__inner-container">
						<div className={backgroundClasses}>{svgbackground}</div>
						<div
							className={topHeightClassName}
							style={{ height: topHeight }}
							aria-hidden
						/>
						<div class="wp-block-group block-wrap group-columns-2">
							<div class="wp-block-group__inner-container">
								<div className={columnOneClassName}>
									<div class="wp-block-group__inner-container">
										<InnerBlocks template={INNER_BLOCKS_TEMPLATE} />
									</div>
								</div>
								<div className={columnTwoClassName}>
									<div class="wp-block-group__inner-container">
										<figure class="wp-block-image size-full">
											<img src={topVideoImageUrl} alt="" class="" />
										</figure>
										<figure class="wp-block-video">
											{url && (
												<video
													className="wp-block-hero__video-background"
													preload="none"
													autoPlay
													muted
													loop
													src={url}
												/>
											)}
										</figure>
										<div class="wp-block-image size-large video-logos">
											<img src={topVideoLogosUrl} alt="" class="" />
										</div>
										<div class="wp-block-image size-large video-logos-bottom">
											<img src={bottomVideoLogosUrl} alt="" class="" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className={bottomHeightClassName}
							style={{ height: bottomHeight }}
							aria-hidden
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default compose([
	withDispatch((dispatch) => {
		const { toggleSelection } = dispatch("core/block-editor");

		return {
			toggleSelection,
		};
	}),
	withColors({ backgroundImageColor: "svg-fill-color" }),
	withNotices,
	withInstanceId,
])(VideoEdit);
