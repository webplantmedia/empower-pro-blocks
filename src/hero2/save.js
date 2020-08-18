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
import svgleftpill from '../../dist/svg/leftpill';
import svgrightpill from '../../dist/svg/rightpill';

export default function save( { attributes } ) {
	const {
		backgroundType,
		focalPoint,
		url,
		iconUrl,
		iconHeight,
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
		showContent,
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

	const iconStyle = {
		...( iconHeight ? { height: iconHeight + "px", maxHeight: iconHeight + "px" } : {} ),
	};

	const classes = classnames(
		'wp-block-hero2__outer-wrapper',
		getColorClassName( 'hero2-color', heroColor ),
		showContent ? {} : 'hero-content-hidden',
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
					{ showContent && (
						<div className="hero2-content">
							<div className="wp-block-hero2__inner-content">
								{ iconUrl && (
									<figure class="wp-block-image size-large">
										<img src={ iconUrl } style={ iconStyle } alt="" class="" />
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
					) }
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
