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
		iconUrl,
		heading,
		text,
		button1Text,
		button2Text,
		button3Text,
		grayscale,
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

	if ( focalPoint ) {
		style.backgroundPosition = `${ focalPoint.x * 100 }% ${ focalPoint.y * 100 }%`;
	}

	const classes = classnames(
		'wp-block-hero2__outer-wrapper',
		getColorClassName( 'hero2-color', heroColor ),
	);

	const backgroundImageClasses = classnames(
		'wp-block-hero2__background-image',
		grayscale ? 'grayscale' : {}
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

	return (
		<div className={ classes }>
			<div className="wp-block-hero2__inner-wrap">
				<div className="wp-block-hero2__inner-container">
					<div data-url={ url } style={ style } className={ backgroundImageClasses }>
						{ VIDEO_BACKGROUND_TYPE === backgroundType && (
							<video
								className="wp-block-hero2__video-background"
								autoPlay
								muted
								loop
								src={ url }
							/>
						) }
					</div>
					<div className={ overlayClasses }>
					</div>
					<div className="hero2-content">
						<div className="wp-block-hero2__inner-content">
							{ iconUrl && (
								<figure class="wp-block-image size-large">
									<img src={ iconUrl } alt="" class="" />
								</figure>
							) }
							<div class="hero2-tags">
								<RichText.Content
									tagName="span"
									value={ button1Text }
									className="button1"
								/>
								<RichText.Content
									tagName="span"
									value={ button2Text }
									className="button2"
								/>
								<RichText.Content
									tagName="span"
									value={ button3Text }
									className="button3"
								/>
							</div>
							<RichText.Content
								tagName="h1"
								className="hero2-heading mb-20"
								value={ heading }
							/>
							<RichText.Content
								tagName="p"
								className="hero2-text"
								value={ text }
							/>
						</div>
					</div>
					<div className={ leftPillClasses }>
						<svg x="0px" y="0px" width="631px" height="789px" viewBox="0 0 631 789">
							<path fill="#ED5652" d="M63.7,763.5C-2.9,718-20,627.2,25.4,560.5l339-496.8C409.9-2.9,500.7-20,567.3,25.5 c66.6,45.5,83.7,136.4,38.2,203l-339,496.8C221.1,791.9,130.3,809,63.7,763.5"/>
						</svg>
					</div>
				</div>
			</div>
			<div className={ rightPillClasses }>
				<svg x="0px" y="0px" width="573px" height="716px" viewBox="0 0 573 716">
					<path fill="#FF7226" d="M515.2,692.9c60.5-41.3,76-123.8,34.7-184.2L242.1,57.8c-41.3-60.5-123.8-76-184.2-34.7 c-60.5,41.3-76,123.8-34.7,184.2l307.8,450.8C372.2,718.6,454.7,734.2,515.2,692.9"/>
				</svg>
			</div>
		</div>
	);
}
