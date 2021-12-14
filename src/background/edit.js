/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { withSelect } from "@wordpress/data";
import { compose } from "@wordpress/compose";
import {
	PanelBody,
	Button,
	FocalPointPicker,
	PanelRow,
	RangeControl,
	ToggleControl,
	TextControl,
	TextareaControl,
	SelectControl,
	withNotices,
} from "@wordpress/components";
import {
	InnerBlocks,
	withColors,
	InspectorControls,
	useBlockProps,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { useRef } from "@wordpress/element";

/**
 * Internal dependencies
 */
import { dimRatioToClass } from "./shared";
import svgline from "../../dist/svg/line";
import svgrightpill from "../../dist/svg/rightpill";
import svgbackground from "../../dist/svg/background";

const MIN_SPACER_HEIGHT = 0;
const MAX_SPACER_HEIGHT = 500;

function BackgroundEdit({
	attributes,
	setAttributes,
	hasInnerBlocks,
	slantBackgroundColor,
	setSlantBackgroundColor,
	setBackgroundColor,
	leftPillColor,
	setLeftPillColor,
	rightPillColor,
	setRightPillColor,
	className,
}) {
	const {
		leftPillDimRatio,
		rightPillDimRatio,
		topHeight,
		topMobileHeight,
		bottomHeight,
		bottomMobileHeight,
		drawLine,
		leftPillTop,
		rightPillTop,
		drawLineTop,
		backgroundColor,
		slant,
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

	const controls = (
		<>
			<InspectorControls>
				<PanelBody title={__("Draw Line Animation")} initialOpen={true}>
					<ToggleControl
						label={__("Display")}
						onChange={(value) =>
							setAttributes(value ? { drawLine: true } : { drawLine: false })
						}
						checked={drawLine === true}
					/>
					<RangeControl
						label={__("Top Position")}
						value={drawLineTop}
						onChange={(value) =>
							setAttributes({
								drawLineTop: value,
							})
						}
						min={-1500}
						max={1500}
						step={10}
					/>
				</PanelBody>
				<PanelBody title={__("Slants")} initialOpen={true}>
					<SelectControl
						label={__("Display")}
						value={slant}
						options={[
							{ value: "", label: __("None") },
							{ value: "top", label: __("Top Slant") },
							{ value: "top-crop", label: __("Top Slant (Crop)") },
							{ value: "bottom", label: __("Bottom Slant") },
							{ value: "bottom-crop", label: __("Bottom Slant (Crop)") },
							{ value: "bottom-curve", label: __("Bottom Curve") },
						]}
						onChange={(value) => setAttributes({ slant: value })}
					/>
				</PanelBody>
				{(slant === "top" || slant === "bottom") && (
					<PanelColorGradientSettings
						title={__("Slant Background")}
						initialOpen={true}
						settings={[
							{
								colorValue: slantBackgroundColor.color,
								onColorChange: setSlantBackgroundColor,
								disableCustomColors: true,
								label: __("Color"),
							},
						]}
					></PanelColorGradientSettings>
				)}
				<PanelColorGradientSettings
					title={__("Left Pill")}
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
					<RangeControl
						label={__("Top Position")}
						value={leftPillTop}
						onChange={(value) =>
							setAttributes({
								leftPillTop: value,
							})
						}
						min={-1500}
						max={1500}
						step={10}
					/>
				</PanelColorGradientSettings>
				<PanelColorGradientSettings
					title={__("Right Pill")}
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
					<RangeControl
						label={__("Top Position")}
						value={rightPillTop}
						onChange={(value) =>
							setAttributes({
								rightPillTop: value,
							})
						}
						min={-1500}
						max={1500}
						step={10}
					/>
				</PanelColorGradientSettings>
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
			</InspectorControls>
		</>
	);

	const classes = classnames(
		className,
		{ [slantBackgroundColor.class]: slantBackgroundColor.class },
		{ ["has-background-color"]: slantBackgroundColor.class },
		slant ? "display-" + slant + "-slant" : {}
	);

	const blockProps = useBlockProps({
		className: classes,
	});

	const innerClasses = classnames("wp-block-background__inner-container");

	const backgroundClasses = classnames(
		"wp-block-background__color-container",
		backgroundColor && slant != "bottom-curve" ? "has-background-color" : {},
		backgroundColor && slant != "bottom-curve"
			? "has-" + backgroundColor + "-background-color"
			: {},
		backgroundColor && slant == "bottom-curve"
			? "has-" + backgroundColor + "-svg-fill-color"
			: {}
	);

	const leftPillClasses = classnames(
		"below-fold-background-2",
		dimRatioToClass(leftPillDimRatio),
		{ [leftPillColor.class]: leftPillColor.class }
	);

	const rightPillClasses = classnames(
		"below-fold-background",
		dimRatioToClass(rightPillDimRatio),
		{ [rightPillColor.class]: rightPillColor.class }
	);

	const topHeightClassName = classnames({
		["mobile-height-" + topMobileHeight]: topMobileHeight !== "",
	});

	const bottomHeightClassName = classnames({
		["mobile-height-" + bottomMobileHeight]: bottomMobileHeight !== "",
	});

	const leftPillStyle = {
		...(leftPillTop || leftPillTop === 0 ? { top: leftPillTop + "px" } : {}),
	};

	const rightPillStyle = {
		...(rightPillTop || rightPillTop === 0 ? { top: rightPillTop + "px" } : {}),
	};

	const drawLineStyle = {
		...(drawLineTop || drawLineTop === 0 ? { top: drawLineTop + "px" } : {}),
	};

	return (
		<>
			{controls}
			<div {...blockProps}>
				{drawLine && (
					<div className="wp-block-group draw-line" style={drawLineStyle}>
						<figure class="wp-block-image size-full">{svgline}</figure>
					</div>
				)}
				{leftPillColor.class && (
					<div className={leftPillClasses} style={leftPillStyle}>
						{svgrightpill}
					</div>
				)}
				{rightPillColor.class && (
					<div className={rightPillClasses} style={rightPillStyle}>
						{svgrightpill}
					</div>
				)}
				<div className={backgroundClasses}>
					{slant == "bottom-curve" && svgbackground}
				</div>
				<div className={innerClasses}>
					<div
						className={topHeightClassName}
						style={{ height: topHeight }}
						aria-hidden
					/>
					<div className="block-wrap">
						<InnerBlocks
							renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
						/>
					</div>
					<div
						className={bottomHeightClassName}
						style={{ height: bottomHeight }}
						aria-hidden
					/>
				</div>
			</div>
		</>
	);
}

export default compose([
	withSelect((select, { clientId }) => {
		const { getBlock } = select("core/block-editor");

		const block = getBlock(clientId);

		return {
			hasInnerBlocks: !!(block && block.innerBlocks.length),
		};
	}),
	withColors({
		slantBackgroundColor: "slant-background-color",
		leftPillColor: "svg-fill-color",
		rightPillColor: "svg-fill-color",
	}),
])(BackgroundEdit);
