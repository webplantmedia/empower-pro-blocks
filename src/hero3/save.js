/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import { RichText, getColorClassName } from "@wordpress/block-editor";

import renderSVG from "../../dist/blocks/renderIcon";

/**
 * Internal dependencies
 */
import {
	IMAGE_BACKGROUND_TYPE,
	VIDEO_BACKGROUND_TYPE,
	backgroundImageStyles,
	dimRatioToClass,
} from "./shared";
import svgleftpill from "../../dist/svg/leftpill";
import svgrightpill from "../../dist/svg/rightpill";

export default function save({ attributes }) {
	const {
		backgroundType,
		focalPoint,
		focalPoint2,
		focalPoint3,
		url,
		url2,
		url3,
		button2IconUrl,
		button3IconUrl,
		button4IconUrl,
		heading,
		text,
		typewriterSearch,
		typewriterReplace,
		button2Icon,
		button2IconSize,
		button2Text,
		button2TopText,
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
		heroColor,
		overlayColor,
		leftPillColor,
		rightPillColor,
		dimRatio,
		leftPillDimRatio,
		rightPillDimRatio,
	} = attributes;

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

	const classes = classnames(
		"wp-block-hero3__outer-wrapper",
		getColorClassName("hero3-color", heroColor)
	);

	const overlayClasses = classnames(
		"overlay-color",
		url ? dimRatioToClass(dimRatio) : {},
		getColorClassName("overlay-color", overlayColor)
	);

	const leftPillClasses = classnames(
		"above-fold-background",
		"glide",
		"glide-left",
		"glide-down",
		url ? dimRatioToClass(leftPillDimRatio) : {},
		getColorClassName("left-pill-color", leftPillColor)
	);

	const rightPillClasses = classnames(
		"top-right-background",
		"glide",
		"glide-right",
		"glide-down",
		url ? dimRatioToClass(rightPillDimRatio) : {},
		getColorClassName("right-pill-color", rightPillColor)
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
							{heading && (
								<RichText.Content
									tagName="h1"
									className="hero-heading typewriter"
									value={heading}
								/>
							)}
							{text && (
								<RichText.Content
									tagName="p"
									className="hero-text"
									value={text}
								/>
							)}
							<div class="gray-bottom-bar">
								<div class="wp-block-buttons">
									<div class="button-group-2">
										<RichText.Content
											tagName="span"
											className="button2TopText button-top-text"
											value={button2TopText}
										/>
										<div class="wp-block-button is-style-text icon">
											{button2IconUrl && (
												<div style={button2Style} class="button-icon">
													<img src={button2IconUrl} />
												</div>
											)}
											{button2Text && (
												<RichText.Content
													tagName="a"
													className="wp-block-button__link button2"
													value={button2Text}
													href={button2URL}
													target={button2LinkTarget}
												/>
											)}
										</div>
									</div>
									<div class="button-group-3">
										<RichText.Content
											tagName="span"
											className="button3TopText button-top-text"
											value={button3TopText}
										/>
										<div class="wp-block-button is-style-text icon">
											{button3IconUrl && (
												<div style={button3Style} class="button-icon">
													<img src={button3IconUrl} />
												</div>
											)}
											{button3Text && (
												<RichText.Content
													tagName="a"
													className="wp-block-button__link button3"
													value={button3Text}
													href={button3URL}
													target={button3LinkTarget}
												/>
											)}
										</div>
									</div>
									<div class="button-group-4">
										<RichText.Content
											tagName="span"
											className="button4TopText button-top-text"
											value={button4TopText}
										/>
										<div class="wp-block-button is-style-text icon">
											{button4IconUrl && (
												<div style={button4Style} class="button-icon">
													<img src={button4IconUrl} />
												</div>
											)}
											{button4Text && (
												<RichText.Content
													tagName="a"
													className="wp-block-button__link button4"
													value={button4Text}
													href={button4URL}
													target={button4LinkTarget}
												/>
											)}
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
	);
}
