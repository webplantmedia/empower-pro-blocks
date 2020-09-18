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
import svgleftpill from '../../dist/svg/leftpill';
import svgrightpill from '../../dist/svg/rightpill';

export default function save( { attributes } ) {
	const {
		backgroundType,
		focalPoint,
		focalPoint2,
		focalPoint3,
		url,
		url2,
		url3,
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
		rightPillColor,
		dimRatio,
		leftPillDimRatio,
		rightPillDimRatio,
	} = attributes;

	const style = {
		...( backgroundType === IMAGE_BACKGROUND_TYPE
			? backgroundImageStyles( url )
			: {} ),
	};
	const style2 = {
		...( url2 ? backgroundImageStyles( url2 ) : {} ),
	};
	const style3 = {
		...( url3 ? backgroundImageStyles( url3 ) : {} ),
	};

	if ( focalPoint ) {
		style.backgroundPosition = `${ focalPoint.x * 100 }% ${ focalPoint.y * 100 }%`;
	}
	if ( focalPoint2 ) {
		style2.backgroundPosition = `${ focalPoint2.x * 100 }% ${ focalPoint2.y * 100 }%`;
	}
	if ( focalPoint3 ) {
		style3.backgroundPosition = `${ focalPoint3.x * 100 }% ${ focalPoint3.y * 100 }%`;
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

	const rightPillClasses = classnames( 
		'top-right-background',
		'glide',
		'glide-right',
		'glide-down',
		url ? dimRatioToClass( rightPillDimRatio ) : {},
		getColorClassName( 'right-pill-color', rightPillColor ),
	);

	const button2Style = {
		...( button2IconSize ? { width: button2IconSize+"px" } : {} ),
	};
	const button3Style = {
		...( button3IconSize ? { width: button3IconSize+"px" } : {} ),
	};

	const slideInit = url2 || url3 ? true : false;

	return (
		<div className={ classes }>
			<div className="wp-block-hero__inner-wrap">
				<div className="wp-block-hero__inner-container">
					{ slideInit && (
						<div class="slider">
							{ url && (
								<div data-url={ url } style={ style } className="slide wp-block-hero__background-image">
									{ VIDEO_BACKGROUND_TYPE === backgroundType && (
										<video
											className="wp-block-hero__video-background"
											autoPlay
											muted
											loop
											src={ url }
										/>
									) }
								</div>
							) }
							{ url2 && (
								<div data-url={ url2 } style={ style2 } className="slide wp-block-hero__background-image">
								</div>
							) }
							{ url3 && (
								<div data-url={ url3 } style={ style3 } className="slide wp-block-hero__background-image">
								</div>
							) }
						</div>
					) }
					{ slideInit && (
						<div class="slider-controls">
							<a class="arrow-left" href="javascript:void(0);"></a>
							<div class="dots-wrapper"></div>
							<a class="arrow-right" href="javascript:void(0);"></a>
						</div>
					) }
					{ ! slideInit && (
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
						</div>
					) }
					<div className={ overlayClasses }>
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
								<div class="wp-block-button is-style-text">
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
									<div class="wp-block-button is-style-text icon">
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
									<div class="wp-block-button is-style-text icon">
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
					<div className={ leftPillClasses }>
						{ svgleftpill }
					</div>
				</div>
			</div>
			<div className={ rightPillClasses }>
				{ svgrightpill }
			</div>
		</div>
	);
}
