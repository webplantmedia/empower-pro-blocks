/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
	getColorClassName,
	RichText,
	__experimentalGetGradientClass,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import {
	IMAGE_BACKGROUND_TYPE,
	VIDEO_BACKGROUND_TYPE,
	backgroundImageStyles,
	dimRatioToClass,
} from './shared';

export default function save({ attributes }) {
	const {
		backgroundType,
		gradient,
		customGradient,
		customOverlayColor,
		dimRatio,
		focalPoint,
		hasParallax,
		overlayColor,
		url,
		minHeight,
		heading,
		preheading,
		text,
		capAlignment,
		capContent,
		capText,
		styleButton,
		button1Text,
		button1URL,
		button1LinkTarget,
		button1Rel
	} = attributes;
	const overlayColorClass = getColorClassName(
		'background-color',
		overlayColor
	);
	const gradientClass = __experimentalGetGradientClass(gradient);

	const style =
		backgroundType === IMAGE_BACKGROUND_TYPE
			? backgroundImageStyles(url)
			: {};
	if (!overlayColorClass) {
		style.backgroundColor = customOverlayColor;
	}
	if (focalPoint && !hasParallax) {
		style.backgroundPosition = `${Math.round(
			focalPoint.x * 100
		)}% ${Math.round(focalPoint.y * 100)}%`;
	}
	if (customGradient && !url) {
		style.background = customGradient;
	}
	style.minHeight = minHeight || undefined;

	const classes = classnames(
		dimRatioToClass(dimRatio),
		overlayColorClass,
		{
			'has-background-dim': dimRatio !== 0,
			'has-parallax': hasParallax,
			'has-background-gradient': gradient || customGradient,
			[gradientClass]: !url && gradientClass,
		},
		"hero-intro",
		"align-wide"
	);
	
	return (
		<div className={{ classes }, "wp-block-cover hero-intro"} style={style}>
			{url && (gradient || customGradient) && dimRatio !== 0 && (
				<span
					aria-hidden="true"
					className={classnames(
						'wp-block-cover__gradient-background',
						gradientClass
					)}
					style={
						customGradient
							? { background: customGradient }
							: undefined
					}
				/>
			)}
			{VIDEO_BACKGROUND_TYPE === backgroundType && url && (
				<video
					className="wp-block-cover__video-background"
					autoPlay
					muted
					loop
					src={url}
				/>
			)}
			{IMAGE_BACKGROUND_TYPE === backgroundType && url && (
				<image
					className="wp-block-cover__video-background no-x-margin"
					autoPlay
					muted
					loop
					src={url}
				/>
			)}
			<div className="wp-block-cover__inner-container hero-intro">
				<div className="hero-intro">

					<div className="hero-content">
						{preheading && (
							<RichText.Content
								tagName="h4"
								className="hero-text has-text-align-center h4"
								value={preheading}
							/>
						)}
						{heading && (
							<RichText.Content
								tagName="h1"
								className="hero-heading has-text-align-center typewriter " 
								value={heading}
							/>
						)}
						{text && (
							<RichText.Content
								tagName="p"
								className="hero-text has-text-align-center"
								value={text}
							/>
						)}
						<div class="button-wrapper wp-block-button widthFull has-text-align-center" style={styleButton}>
							{button1Text && (
								<RichText.Content
									tagName="a"
									className="wp-block-button__link button1"
									value={button1Text}
									href={button1URL}
									target={button1LinkTarget}
									rel={button1Rel}
								/>
							)}
						</div>
						<div className={capAlignment}>
							{capText && (
								<RichText.Content
									tagName="p"
									className={capContent}
									value={capText}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
