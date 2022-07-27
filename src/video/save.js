/**
 * External dependencies
 */
import classnames from "classnames";

/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
	RichText,
	getColorClassName,
} from "@wordpress/block-editor";

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
import svgbackground from "../../dist/svg/background";

export default function save({ attributes }) {
	const {
		url,
		backgroundImageColor,
		topVideoImage,
		topVideoLogos,
		bottomVideoLogos,
		topHeight,
		topMobileHeight,
		bottomHeight,
		bottomMobileHeight,
		mobileColumnSpacing,
	} = attributes;

	const style = {};

	const classes = classnames();

	const backgroundClasses = classnames(
		"background-image",
		getColorClassName("svg-fill-color", backgroundImageColor)
	);

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
									<InnerBlocks.Content />
								</div>
							</div>
							<div class={columnTwoClassName}>
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
	);
}
