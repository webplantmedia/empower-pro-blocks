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
	FocalPointPicker,
	PanelRow,
	RangeControl,
	ToggleControl,
	TextControl,
	TextareaControl,
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
	withColors,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
	URLInput,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { withDispatch } from "@wordpress/data";
// import { cover as icon, link } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import {
	attributesFromMedia,
	attributesFromMedia2,
	attributesFromMedia3,
	attributesFromMedia4,
	attributesFromMedia5,
	attributesFromMedia6,
	IMAGE_BACKGROUND_TYPE,
	VIDEO_BACKGROUND_TYPE,
	backgroundImageStyles,
	dimRatioToClass,
} from "./shared";
import svgleftpill from "../../dist/svg/leftpill";
import svgrightpill from "../../dist/svg/rightpill";

/**
 * Module Constants
 */
const ALLOWED_MEDIA_TYPES = ["image", "video"];

let svg_icons = Object.keys(EPIcon);

function HeroEdit({
	attributes,
	setAttributes,
	isSelected,
	className,
	noticeUI,
	overlayColor,
	setOverlayColor,
	heroColor,
	setHeroColor,
	leftPillColor,
	setLeftPillColor,
	rightPillColor,
	setRightPillColor,
	toggleSelection,
	noticeOperations,
}) {
	const {
		id,
		id2,
		id3,
		backgroundType,
		dimRatio,
		leftPillDimRatio,
		rightPillDimRatio,
		focalPoint,
		focalPoint2,
		focalPoint3,
		url,
		url2,
		url3,
		button2IconId,
		button2IconUrl,
		button3IconId,
		button3IconUrl,
		button4IconId,
		button4IconUrl,
		heading,
		text,
		typewriterSearch,
		typewriterReplace,
		button2Icon,
		button2IconSize,
		button2TopText,
		button2Text,
		button2URL,
		button2LinkTarget,
		button3Icon,
		button3IconSize,
		button3TopText,
		button3Text,
		button3URL,
		button3LinkTarget,
		button4Icon,
		button4IconSize,
		button4TopText,
		button4Text,
		button4URL,
		button4LinkTarget,
	} = attributes;
	const onSelectMedia = attributesFromMedia(setAttributes);
	const onSelectMedia2 = attributesFromMedia2(setAttributes);
	const onSelectMedia3 = attributesFromMedia3(setAttributes);
	const onSelectMedia4 = attributesFromMedia4(setAttributes);
	const onSelectMedia5 = attributesFromMedia5(setAttributes);
	const onSelectMedia6 = attributesFromMedia6(setAttributes);

	const { removeAllNotices, createErrorNotice } = noticeOperations;

	const style = {
		...(backgroundType === IMAGE_BACKGROUND_TYPE
			? backgroundImageStyles(url)
			: {}),
	};

	const style2 = {
		...(url2 ? backgroundImageStyles(url2) : {}),
	};

	const style3 = {
		...(url3 ? backgroundImageStyles(url3) : {}),
	};

	if (focalPoint) {
		style.backgroundPosition = `${focalPoint.x * 100}% ${focalPoint.y * 100}%`;
	}
	if (focalPoint2) {
		style2.backgroundPosition = `${focalPoint2.x * 100}% ${
			focalPoint2.y * 100
		}%`;
	}
	if (focalPoint3) {
		style3.backgroundPosition = `${focalPoint3.x * 100}% ${
			focalPoint3.y * 100
		}%`;
	}

	const replaceHeading = (h, ts, tr) => {
		let newHeading = h.replace(/<span.*?>|<\/span>/g, "");
		let newTR = tr.replace(/(\r\n|\n|\r)/gm, "|");
		newHeading = newHeading.replace(
			ts,
			'<span class="typewriter" data-replace="' + newTR + '">' + ts + "</span>"
		);

		return newHeading;
	};

	const updateHeading = (h, ts, tr, setAttributes) => {
		const newHeading = replaceHeading(h, ts, tr);

		setAttributes({
			typewriterSearch: ts,
			typewriterReplace: tr,
			heading: newHeading,
		});
	};

	const onTypewriterSearchChange = useCallback(
		(typewriterSearch) => {
			updateHeading(
				heading,
				typewriterSearch,
				typewriterReplace,
				setAttributes
			);
		},
		[heading, typewriterReplace, setAttributes]
	);

	const onTypewriterReplaceChange = useCallback(
		(typewriterReplace) => {
			updateHeading(
				heading,
				typewriterSearch,
				typewriterReplace,
				setAttributes
			);
		},
		[heading, typewriterSearch, setAttributes]
	);

	const onHeadingChange = useCallback(
		(heading) => {
			updateHeading(
				heading,
				typewriterSearch,
				typewriterReplace,
				setAttributes
			);
		},
		[typewriterSearch, typewriterReplace, setAttributes]
	);

	const controls = (
		<>
			<BlockControls>
				<MediaReplaceFlow
					mediaId={id}
					mediaURL={url}
					allowedTypes={ALLOWED_MEDIA_TYPES}
					accept="image/*,video/*"
					onSelect={onSelectMedia}
					name="Slide 1"
				/>
				<MediaReplaceFlow
					mediaId={id2}
					mediaURL={url2}
					allowedTypes={["image"]}
					accept="image/*"
					onSelect={onSelectMedia2}
					name="Slide 2"
				/>
				<MediaReplaceFlow
					mediaId={id3}
					mediaURL={url3}
					allowedTypes={["image"]}
					accept="image/*"
					onSelect={onSelectMedia3}
					name="Slide 3"
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={__("Image or Video")}>
					<PanelRow>
						<MediaUpload
							id={id}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							onSelect={onSelectMedia}
							render={({ open }) => (
								<Button onClick={open} isSecondary={true}>
									Select Background Image
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
										backgroundType: undefined,
										dimRatio: undefined,
										leftPillDimRatio: undefined,
										rightPillDimRatio: undefined,
										focalPoint: undefined,
									})
								}
							>
								{__("Clear Media")}
							</Button>
						</PanelRow>
					)}
					{!!url && <hr />}
					{url && IMAGE_BACKGROUND_TYPE === backgroundType && (
						<FocalPointPicker
							label={__("Focal point picker")}
							url={url}
							value={focalPoint}
							onChange={(value) =>
								setAttributes({
									focalPoint: value,
								})
							}
						/>
					)}
					{url && VIDEO_BACKGROUND_TYPE === backgroundType && (
						<video autoPlay muted loop src={url} />
					)}
				</PanelBody>
				<PanelBody title={__("Image 2 Slide")} initialOpen={true}>
					<PanelRow>
						<MediaUpload
							id={id2}
							allowedTypes={["image"]}
							onSelect={onSelectMedia2}
							render={({ open }) => (
								<Button onClick={open} isSecondary={true}>
									Select Background Image
								</Button>
							)}
						/>
					</PanelRow>
					{!!url2 && (
						<PanelRow>
							<Button
								isSecondary
								className=""
								onClick={() =>
									setAttributes({
										url2: undefined,
										id2: undefined,
									})
								}
							>
								{__("Clear Media")}
							</Button>
						</PanelRow>
					)}
					{!!url2 && <hr />}
					{url2 && (
						<FocalPointPicker
							label={__("Focal point picker")}
							url={url2}
							value={focalPoint2}
							onChange={(value) =>
								setAttributes({
									focalPoint2: value,
								})
							}
						/>
					)}
				</PanelBody>
				<PanelBody title={__("Image 3 Slide")} initialOpen={true}>
					<PanelRow>
						<MediaUpload
							id={id3}
							allowedTypes={["image"]}
							onSelect={onSelectMedia3}
							render={({ open }) => (
								<Button onClick={open} isSecondary={true}>
									Select Background Image
								</Button>
							)}
						/>
					</PanelRow>
					{!!url3 && (
						<PanelRow>
							<Button
								isSecondary
								className=""
								onClick={() =>
									setAttributes({
										url3: undefined,
										id3: undefined,
									})
								}
							>
								{__("Clear Media")}
							</Button>
						</PanelRow>
					)}
					{!!url3 && <hr />}
					{url3 && (
						<FocalPointPicker
							label={__("Focal point picker")}
							url={url3}
							value={focalPoint3}
							onChange={(value) =>
								setAttributes({
									focalPoint3: value,
								})
							}
						/>
					)}
				</PanelBody>
				<PanelColorGradientSettings
					title={__("Overlay")}
					initialOpen={true}
					settings={[
						{
							colorValue: overlayColor.color,
							onColorChange: setOverlayColor,
							disableCustomColors: true,
							label: __("Color"),
						},
					]}
				>
					{!!url && (
						<RangeControl
							label={__("Overlay Opacity")}
							value={dimRatio}
							onChange={(value) =>
								setAttributes({
									dimRatio: value,
								})
							}
							min={0}
							max={100}
							step={10}
							required
						/>
					)}
				</PanelColorGradientSettings>
				<PanelColorGradientSettings
					title={__("Hero Color")}
					initialOpen={true}
					settings={[
						{
							colorValue: heroColor.color,
							onColorChange: setHeroColor,
							disableCustomColors: true,
							label: __("Color"),
						},
					]}
				></PanelColorGradientSettings>
				<PanelColorGradientSettings
					title={__("Left Pill Color")}
					initialOpen={true}
					settings={[
						{
							colorValue: leftPillColor.color,
							onColorChange: setLeftPillColor,
							disableCustomColors: true,
							label: __("Color"),
						},
					]}
				>
					{!!url && (
						<RangeControl
							label={__("Opacity")}
							value={leftPillDimRatio}
							onChange={(value) =>
								setAttributes({
									leftPillDimRatio: value,
								})
							}
							min={10}
							max={100}
							step={10}
							required
						/>
					)}
				</PanelColorGradientSettings>
				<PanelColorGradientSettings
					title={__("Right Pill Color")}
					initialOpen={true}
					settings={[
						{
							colorValue: rightPillColor.color,
							onColorChange: setRightPillColor,
							disableCustomColors: true,
							label: __("Color"),
						},
					]}
				>
					{!!url && (
						<RangeControl
							label={__("Opacity")}
							value={rightPillDimRatio}
							onChange={(value) =>
								setAttributes({
									rightPillDimRatio: value,
								})
							}
							min={10}
							max={100}
							step={10}
							required
						/>
					)}
				</PanelColorGradientSettings>
				<PanelBody title={__("Heading")} initialOpen={true}>
					<TextControl
						label={__("Typewriter Search")}
						help="phrase to search and replace with a typewriter effect."
						value={typewriterSearch}
						onChange={onTypewriterSearchChange}
					/>
					<TextareaControl
						label={__("Typewriter Replace")}
						help="Put each replacement phrase on its own line."
						value={typewriterReplace}
						onChange={onTypewriterReplaceChange}
					/>
				</PanelBody>
				<PanelBody title={__("Secondary Button 1")} initialOpen={true}>
					<Fragment>
						<MediaUpload
							id={button2IconId}
							allowedTypes={["image"]}
							onSelect={onSelectMedia4}
							render={({ open }) => (
								<Button onClick={open} isSecondary={true}>
									Select Icon Image
								</Button>
							)}
						/>
						{!!button2IconUrl && (
							<PanelRow>
								<Button
									isSecondary
									className=""
									onClick={() =>
										setAttributes({
											button2IconId: undefined,
											button2IconUrl: undefined,
										})
									}
								>
									{__("Clear Icon")}
								</Button>
							</PanelRow>
						)}
						<hr />
					</Fragment>
					<RangeControl
						label={__("Icon Size")}
						value={button2IconSize}
						onChange={(value) =>
							setAttributes({
								button2IconSize: value,
							})
						}
						min={7}
						max={30}
						step={1}
					/>
					<TextControl
						label={__("Top")}
						value={button2TopText}
						onChange={(value) => setAttributes({ button2TopText: value })}
					/>
					<TextControl
						label={__("Text")}
						value={button2Text}
						onChange={(value) => setAttributes({ button2Text: value })}
					/>
					<URLInput
						value={button2URL}
						className="url-input-inspector-field"
						onChange={(value) => setAttributes({ button2URL: value })}
						autoFocus={false}
					/>
					<ToggleControl
						label={__("Open in new tab")}
						onChange={(value) =>
							setAttributes(
								value
									? { button2LinkTarget: "_blank" }
									: { button2LinkTarget: undefined }
							)
						}
						checked={button2LinkTarget === "_blank"}
					/>
				</PanelBody>
				<PanelBody title={__("Secondary Button 2")} initialOpen={true}>
					<Fragment>
						<MediaUpload
							id={button3IconId}
							allowedTypes={["image"]}
							onSelect={onSelectMedia5}
							render={({ open }) => (
								<Button onClick={open} isSecondary={true}>
									Select Icon Image
								</Button>
							)}
						/>
						{!!button3IconUrl && (
							<PanelRow>
								<Button
									isSecondary
									className=""
									onClick={() =>
										setAttributes({
											button3IconId: undefined,
											button3IconUrl: undefined,
										})
									}
								>
									{__("Clear Icon")}
								</Button>
							</PanelRow>
						)}
						<hr />
					</Fragment>
					<RangeControl
						label={__("Icon Size")}
						value={button3IconSize}
						onChange={(value) =>
							setAttributes({
								button3IconSize: value,
							})
						}
						min={7}
						max={30}
						step={1}
					/>
					<TextControl
						label={__("Text")}
						value={button3Text}
						onChange={(value) => setAttributes({ button3Text: value })}
					/>
					<URLInput
						value={button3URL}
						className="url-input-inspector-field"
						onChange={(value) => setAttributes({ button3URL: value })}
						autoFocus={false}
					/>
					<ToggleControl
						label={__("Open in new tab")}
						onChange={(value) =>
							setAttributes(
								value
									? { button3LinkTarget: "_blank" }
									: { button3LinkTarget: undefined }
							)
						}
						checked={button3LinkTarget === "_blank"}
					/>
				</PanelBody>
				<PanelBody title={__("Secondary Button 3")} initialOpen={true}>
					<Fragment>
						<MediaUpload
							id={button4IconId}
							allowedTypes={["image"]}
							onSelect={onSelectMedia6}
							render={({ open }) => (
								<Button onClick={open} isSecondary={true}>
									Select Icon Image
								</Button>
							)}
						/>
						{!!button4IconUrl && (
							<PanelRow>
								<Button
									isSecondary
									className=""
									onClick={() =>
										setAttributes({
											button4IconId: undefined,
											button4IconUrl: undefined,
										})
									}
								>
									{__("Clear Icon")}
								</Button>
							</PanelRow>
						)}
						<hr />
					</Fragment>
					<RangeControl
						label={__("Icon Size")}
						value={button4IconSize}
						onChange={(value) =>
							setAttributes({
								button4IconSize: value,
							})
						}
						min={7}
						max={30}
						step={1}
					/>
					<TextControl
						label={__("Text")}
						value={button4Text}
						onChange={(value) => setAttributes({ button4Text: value })}
					/>
					<URLInput
						value={button4URL}
						className="url-input-inspector-field"
						onChange={(value) => setAttributes({ button4URL: value })}
						autoFocus={false}
					/>
					<ToggleControl
						label={__("Open in new tab")}
						onChange={(value) =>
							setAttributes(
								value
									? { button4LinkTarget: "_blank" }
									: { button4LinkTarget: undefined }
							)
						}
						checked={button4LinkTarget === "_blank"}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	const classes = classnames(className, "wp-block-hero3__outer-wrapper", {
		[heroColor.class]: heroColor.class,
	});

	const overlayClasses = classnames(
		"overlay-color",
		url ? dimRatioToClass(dimRatio) : {},
		{ [overlayColor.class]: overlayColor.class }
	);

	const leftPillClasses = classnames(
		"above-fold-background",
		"glide",
		"glide-left",
		"glide-down",
		url ? dimRatioToClass(leftPillDimRatio) : {},
		{ [leftPillColor.class]: leftPillColor.class }
	);

	const rightPillClasses = classnames(
		"top-right-background",
		"glide",
		"glide-right",
		"glide-down",
		url ? dimRatioToClass(rightPillDimRatio) : {},
		{ [rightPillColor.class]: rightPillColor.class }
	);

	const button2Style = {
		...(button2IconSize ? { width: button2IconSize + "px" } : {}),
	};
	const button3Style = {
		...(button3IconSize ? { width: button3IconSize + "px" } : {}),
	};

	const button4Style = {
		...(button4IconSize ? { width: button4IconSize + "px" } : {}),
	};

	const slideInit = url2 || url3 ? true : false;

	return (
		<>
			{controls}
			<div className={classes}>
				<div className="wp-block-hero3__inner-wrap">
					<div className="wp-block-hero3__inner-container">
						{slideInit && (
							<div class="slider">
								{url && (
									<div
										data-url={url}
										style={style}
										className="slide wp-block-hero3__background-image"
									>
										{VIDEO_BACKGROUND_TYPE === backgroundType && (
											<video
												className="wp-block-hero3__video-background"
												autoPlay
												muted
												loop
												src={url}
											/>
										)}
									</div>
								)}
								{url2 && (
									<div
										data-url={url2}
										style={style2}
										className="slide wp-block-hero3__background-image"
									></div>
								)}
								{url3 && (
									<div
										data-url={url3}
										style={style3}
										className="slide wp-block-hero3__background-image"
									></div>
								)}
							</div>
						)}
						{slideInit && (
							<div class="slider-controls">
								<a class="arrow-left" href="javascript:void(0);"></a>
								<div class="dots-wrapper"></div>
								<a class="arrow-right" href="javascript:void(0);"></a>
							</div>
						)}
						{!slideInit && (
							<div
								data-url={url}
								style={style}
								className="wp-block-hero3__background-image"
							>
								{VIDEO_BACKGROUND_TYPE === backgroundType && (
									<video
										className="wp-block-hero3__video-background"
										autoPlay
										muted
										loop
										src={url}
									/>
								)}
							</div>
						)}
						<div className={overlayClasses}></div>
						<div className="hero-content">
							<div className="wp-block-hero3__inner-content">
								<RichText
									tagName="h1"
									className="hero-heading typewriter"
									placeholder={__("Heading", "empower-pro-blocks")}
									onChange={onHeadingChange}
									value={heading}
									withoutInteractiveFormatting
								/>
								<RichText
									tagName="p"
									className="hero-text"
									placeholder={__("Text", "empower-pro-blocks")}
									onChange={(value) =>
										setAttributes({
											text: value,
										})
									}
									value={text}
								/>
								<div class="gray-bottom-bar">
									<div class="wp-block-buttons">
										<div class="button-group-2">
											<RichText
												placeholder={__("Text")}
												value={button2TopText}
												onChange={(value) =>
													setAttributes({ button2TopText: value })
												}
												className="button2TopText button-top-text"
												withoutInteractiveFormatting
											/>
											<div class="wp-block-button is-style-text icon">
												{button2IconUrl && (
													<div style={button2Style} class="button-icon">
														<img src={button2IconUrl} />
													</div>
												)}
												<RichText
													placeholder={__("Button 2")}
													value={button2Text}
													onChange={(value) =>
														setAttributes({ button2Text: value })
													}
													className="wp-block-button__link button2"
													withoutInteractiveFormatting
												/>
											</div>
										</div>
										<div class="button-group-3">
											<RichText
												placeholder={__("Text")}
												value={button3TopText}
												onChange={(value) =>
													setAttributes({ button3TopText: value })
												}
												className="button3TopText button-top-text"
												withoutInteractiveFormatting
											/>
											<div class="wp-block-button is-style-text icon">
												{button3IconUrl && (
													<div style={button3Style} class="button-icon">
														<img src={button3IconUrl} />
													</div>
												)}
												<RichText
													placeholder={__("Button 3")}
													value={button3Text}
													onChange={(value) =>
														setAttributes({ button3Text: value })
													}
													className="wp-block-button__link button3"
													withoutInteractiveFormatting
												/>
											</div>
										</div>
										<div class="button-group-4">
											<RichText
												placeholder={__("Text")}
												value={button4TopText}
												onChange={(value) =>
													setAttributes({ button4TopText: value })
												}
												className="button4TopText button-top-text"
												withoutInteractiveFormatting
											/>
											<div class="wp-block-button is-style-text icon">
												{button4IconUrl && (
													<div style={button4Style} class="button-icon">
														<img src={button4IconUrl} />
													</div>
												)}
												<RichText
													placeholder={__("Button 4")}
													value={button4Text}
													onChange={(value) =>
														setAttributes({ button4Text: value })
													}
													className="wp-block-button__link button4"
													withoutInteractiveFormatting
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={leftPillClasses}>{svgleftpill}</div>
					</div>
				</div>
				<div className={rightPillClasses}>{svgrightpill}</div>
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
	withColors({
		overlayColor: "overlay-color",
		heroColor: "hero3-color",
		leftPillColor: "left-pill-color",
		rightPillColor: "right-pill-color",
	}),
	withNotices,
	withInstanceId,
])(HeroEdit);
