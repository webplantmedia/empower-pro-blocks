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
		heroHeading,
		heroText,
		heroButton1Text,
		heroButton1URL,
		heroButton1LinkTarget,
		heroButton2Text,
		heroButton2URL,
		heroButton2LinkTarget,
		heroButton3Text,
		heroButton3URL,
		heroButton3LinkTarget,
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
						'wp-block-cover__gradient-background',
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
					className="wp-block-cover__video-background"
					autoPlay
					muted
					loop
					src={ url }
				/>
			) }
			<div className="wp-block-cover__inner-container">
				<div className="hero-content">
					{ heroHeading && (
						<RichText.Content
							tagName="h1"
							className="hero-heading"
							value={ heroHeading }
						/>
					) }
					{ heroText && (
						<RichText.Content
							tagName="p"
							className="hero-text"
							value={ heroText }
						/>
					) }
					<div class="button-wrapper">
						{ heroButton1Text && (
							<RichText.Content
								tagName="a"
								className="wp-block-button__link text"
								value={ heroButton1Text }
								href={ heroButton1URL }
								target={ heroButton1LinkTarget }
							/>
						) }
					</div>
					<div class="button-wrapper">
						{ heroButton2Text && (
							<RichText.Content
								tagName="a"
								className="wp-block-button__link text"
								value={ heroButton2Text }
								href={ heroButton2URL }
								target={ heroButton2LinkTarget }
							/>
						) }
					</div>
					<div class="button-wrapper">
						{ heroButton3Text && (
							<RichText.Content
								tagName="a"
								className="wp-block-button__link text"
								value={ heroButton3Text }
								href={ heroButton3URL }
								target={ heroButton3LinkTarget }
							/>
						) }
					</div>
				</div>
			</div>
		</div>
	);
}
