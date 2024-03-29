/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
	useBlockProps,
	getColorClassName,
} from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import { dimRatioToClass } from "./shared";
import svgline from "../../dist/svg/line";
import svgrightpill from "../../dist/svg/rightpill";
import svgbackground from "../../dist/svg/background";

export default function save({ attributes }) {
	const {
		topHeight,
		topMobileHeight,
		bottomHeight,
		bottomMobileHeight,
		rightPillColor,
		leftPillColor,
		leftPillDimRatio,
		rightPillDimRatio,
		drawLine,
		leftPillTop,
		rightPillTop,
		drawLineTop,
		slant,
		slantBackgroundColor,
		backgroundColor,
	} = attributes;

	const rightPillClasses = classnames(
		"below-fold-background",
		dimRatioToClass(rightPillDimRatio),
		getColorClassName("svg-fill-color", rightPillColor)
	);
	const leftPillClasses = classnames(
		"below-fold-background-2",
		dimRatioToClass(leftPillDimRatio),
		getColorClassName("svg-fill-color", leftPillColor)
	);

	const classes = classnames(
		{
			["has-" +
			slantBackgroundColor +
			"-background-color"]: slantBackgroundColor,
			["has-background-color"]: slantBackgroundColor,
		},
		slant ? "display-" + slant + "-slant" : {}
	);

	const blockProps = useBlockProps.save({
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
		<div {...blockProps}>
			{drawLine && (
				<div className="wp-block-group draw-line" style={drawLineStyle}>
					<figure class="wp-block-image size-full">{svgline}</figure>
				</div>
			)}
			{leftPillColor && (
				<div className={leftPillClasses} style={leftPillStyle}>
					{svgrightpill}
				</div>
			)}
			{rightPillColor && (
				<div className={rightPillClasses} style={rightPillStyle}>
					{svgrightpill}
				</div>
			)}
			<div className={backgroundClasses}>
				{slant === "bottom-curve" && svgbackground}
			</div>
			<div className={innerClasses}>
				<div
					className={topHeightClassName}
					style={{ height: topHeight }}
					aria-hidden
				/>
				<div className="block-wrap">
					<InnerBlocks.Content />
				</div>
				<div
					className={bottomHeightClassName}
					style={{ height: bottomHeight }}
					aria-hidden
				/>
			</div>
		</div>
	);
}
