/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	RichText,
	getColorClassName,
} from '@wordpress/block-editor';

import renderSVG from "../../dist/blocks/renderIcon"

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
		focalPoint,
		url,
		heading,
		text,
		typewriterSearch,
		typewriterReplace,
		button1Text,
		button1URL,
		button1LinkTarget,
		button2Icon,
		button2IconSize,
		button2Text,
		button2URL,
		button2LinkTarget,
		button3Icon,
		button3IconSize,
		button3Text,
		button3URL,
		button3LinkTarget,
		heroColor,
		overlayColor,
		leftPillColor,
		backgroundImageColor,
		dimRatio,
		leftPillDimRatio,
		rightPillDimRatio,
	} = attributes;

	const style = {
		...( backgroundType === IMAGE_BACKGROUND_TYPE
			? backgroundImageStyles( url )
			: {} ),
	};

	if ( focalPoint ) {
		style.backgroundPosition = `${ focalPoint.x * 100 }% ${ focalPoint.y *
			100 }%`;
	}

	const classes = classnames(
		'wp-block-hero__outer-wrapper',
		getColorClassName( 'hero-color', heroColor ),
	);

	const overlayClasses = classnames( 
		'overlay-color', 
		url ? dimRatioToClass( dimRatio ) : {}, 
		getColorClassName( 'overlay-color', overlayColor ),
	);

	const leftPillClasses = classnames( 
		'above-fold-background',
		'glide',
		'glide-left',
		'glide-down',
		url ? dimRatioToClass( leftPillDimRatio ) : {},
		getColorClassName( 'left-pill-color', leftPillColor ),
	);

	const backgroundClasses = classnames( 
		'background-image',
		getColorClassName( 'right-pill-color', backgroundImageColor ),
	);

	const button2Style = {
		...( button2IconSize ? { width: button2IconSize+"px" } : {} ),
	};
	const button3Style = {
		...( button3IconSize ? { width: button3IconSize+"px" } : {} ),
	};

	return (
		<div className={ classes }>
			<div className={ backgroundClasses }>
				<svg x="0px" y="0px" width="2731.4px" height="1515.4px" viewBox="0 0 2731.4 1515.4">
					<path d="M0,0c0,0,0,390.3,0,605.2C0,2067,396.3,1317,1278.8,1365.7c579.4,27.2,549.3-491.5,1242-734.3 c211-82,210.6-631.4,210.6-631.4L0,0z"/>
				</svg>
			</div>
			<div className="wp-block-hero__inner-wrap">
				<div className="wp-block-hero__inner-container">
					<div data-url={ url } style={ style } className="wp-block-hero__background-image">
						{ VIDEO_BACKGROUND_TYPE === backgroundType && (
							<video
								className="wp-block-hero__video-background"
								autoPlay
								muted
								loop
								src={ url }
							/>
						) }
						<div className={ overlayClasses }>
						</div>
					</div>
					<div className="hero-content">
						<div className="wp-block-hero__inner-content">
							{ heading && (
								<RichText.Content
									tagName="h1"
									className="hero-heading typewriter"
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
							<div class="gray-bottom-bar">
								<div class="wp-block-buttons">
									<div class="wp-block-button text icon">
										{ button2Icon && (
											<div style={ button2Style } class="button-icon-before button2-icon">{ renderSVG(button2Icon) }</div>
										) }
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
									<div class="wp-block-button text icon">
										{ button3Icon && (
											<div style={ button3Style } class="button-icon-before button3-icon">{ renderSVG(button3Icon) }</div>
										) }
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
				</div>
			</div>
		</div>
	);
}
