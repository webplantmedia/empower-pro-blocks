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

export default function save( { attributes } ) {
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
		text,
		button1Text,
		button1URL,
		button1LinkTarget,
		button1Rel,
		button2Text,
		button2URL,
		button2LinkTarget,
		button2Rel,
		button3Text,
		button3URL,
		button3LinkTarget,
		button3Rel,
	} = attributes;
	const overlayColorClass = getColorClassName(
		'background-color',
		overlayColor
	);
	const gradientClass = __experimentalGetGradientClass( gradient );

	const style =
		backgroundType === IMAGE_BACKGROUND_TYPE
			? backgroundImageStyles( url )
			: {};
	if ( ! overlayColorClass ) {
		style.backgroundColor = customOverlayColor;
	}
	if ( focalPoint && ! hasParallax ) {
		style.backgroundPosition = `${ Math.round(
			focalPoint.x * 100
		) }% ${ Math.round( focalPoint.y * 100 ) }%`;
	}
	if ( customGradient && ! url ) {
		style.background = customGradient;
	}
	style.minHeight = minHeight || undefined;

	const classes = classnames(
		dimRatioToClass( dimRatio ),
		overlayColorClass,
		{
			'has-background-dim': dimRatio !== 0,
			'has-parallax': hasParallax,
			'has-background-gradient': gradient || customGradient,
			[ gradientClass ]: ! url && gradientClass,
		}
	);

	return (
		<div className={ classes } style={ style }>
			{ url && ( gradient || customGradient ) && dimRatio !== 0 && (
				<span
					aria-hidden="true"
					className={ classnames(
						'wp-block-hero__gradient-background',
						gradientClass
					) }
					style={
						customGradient
							? { background: customGradient }
							: undefined
					}
				/>
			) }
			{ VIDEO_BACKGROUND_TYPE === backgroundType && url && (
				<video
					className="wp-block-hero__video-background"
					autoPlay
					muted
					loop
					src={ url }
				/>
			) }
			<div className="wp-block-hero__inner-container">
				<div className="hero-content">
					{ heading && (
						<RichText.Content
							tagName="h1"
							className="hero-heading"
							value={ heading }
						/>
					) }
					{ text && (
						<RichText.Content
							tagName="p"
							className="hero-text"
							value={ text }
						/>
					) }
					<div class="wp-block-buttons">
						<div class="wp-block-button text">
							{ button1Text && (
								<RichText.Content
									tagName="a"
									className="wp-block-button__link button1"
									value={ button1Text }
									href={ button1URL }
									target={ button1LinkTarget }
								/>
							) }
						</div>
					</div>
					<div class="wp-block-buttons">
						<div class="wp-block-button text">
							{ button2Text && (
								<RichText.Content
									tagName="a"
									className="wp-block-button__link button2"
									value={ button2Text }
									href={ button2URL }
									target={ button2LinkTarget }
								/>
							) }
						</div>
					</div>
					<div class="wp-block-buttons">
						<div class="wp-block-button text">
							{ button3Text && (
								<RichText.Content
									tagName="a"
									className="wp-block-button__link button3"
									value={ button3Text }
									href={ button3URL }
									target={ button3LinkTarget }
								/>
							) }
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
