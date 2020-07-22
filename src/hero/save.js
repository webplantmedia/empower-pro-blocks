/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	RichText,
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
		dimRatio,
		focalPoint,
		hasParallax,
		url,
		heading,
		text,
		typewriterSearch,
		typewriterReplace,
		button1Text,
		button1URL,
		button1LinkTarget,
		button2Text,
		button2URL,
		button2LinkTarget,
		button3Icon,
		button3Text,
		button3URL,
		button3LinkTarget,
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

	const classes = classnames( {
		'has-parallax': hasParallax,
		[ heroColor.class ]: heroColor.class,
	} );

	const overlayClasses = classnames( 
		'overlay-color', 
		url ? dimRatioToClass( dimRatio ) : {}, 
		{ [ overlayColor.class ]: overlayColor.class, }
	);

	const leftPillClasses = classnames( 
		'above-fold-background',
		'glide',
		'glide-left',
		'glide-down',
		{ [ leftPillColor.class ]: leftPillColor.class },
	);

	const rightPillClasses = classnames( 
		'top-right-background',
		'glide',
		'glide-right',
		'glide-down',
		{ [ rightPillColor.class ]: rightPillColor.class },
	);


	return (
		<div className="wp-block-hero__outer-wrapper">
			<div className={ classes }>
				<div className="wp-block-hero__inner-container">
					<div data-url={ url } style={ style } className="wp-block-hero__background-image">
						{ IMAGE_BACKGROUND_TYPE === backgroundType && (
							// Used only to programmatically check if the image is dark or not
							<img
								aria-hidden
								alt=""
								style={ {
									display: 'none',
								} }
								src={ url }
							/>
						) }
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
							<div class="gray-bottom-bar">
								<div class="wp-block-buttons">
									<div class="wp-block-button text icon">
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
											<RichText.Content
												value={ button3Icon }
												className="button3-icon"
											/>
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
