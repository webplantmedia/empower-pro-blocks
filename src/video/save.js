/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
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
		url,
		backgroundImageColor,
		topVideoImage,
		topVideoLogos,
		bottomVideoLogos,
		topHeight,
		topMobileHeight,
		bottomHeight,
		bottomMobileHeight,
	} = attributes;

	const style = {
	};

	const classes = classnames(
	);

	const backgroundClasses = classnames( 
		'background-image',
		getColorClassName( 'svg-fill-color', backgroundImageColor ),
	);

	const topHeightClassName = classnames( {
		[ 'mobile-height-' + topMobileHeight ]: topMobileHeight,
	} );

	const bottomHeightClassName = classnames( {
		[ 'mobile-height-' + bottomMobileHeight ]: bottomMobileHeight,
	} );

	const topVideoImageUrl = empower_pro_blocks.plugins_url + topVideoImage;
	const topVideoLogosUrl = empower_pro_blocks.plugins_url + topVideoLogos;
	const bottomVideoLogosUrl = empower_pro_blocks.plugins_url + bottomVideoLogos;

	return (
		<div className={ classes }>
			<div class="wp-block-group">
				<div class="wp-block-group__inner-container">
					<div className={ backgroundClasses }>
						<svg x="0px" y="0px" width="2731.4px" height="1515.4px" viewBox="0 0 2731.4 1515.4">
							<path d="M0,0c0,0,0,390.3,0,605.2C0,2067,396.3,1317,1278.8,1365.7c579.4,27.2,549.3-491.5,1242-734.3 c211-82,210.6-631.4,210.6-631.4L0,0z"/>
						</svg>
					</div>
					<div className={ topHeightClassName } style={ { height: topHeight } } aria-hidden />;
					<div class="wp-block-group block-wrap group-columns-2">
						<div class="wp-block-group__inner-container">
							<div class="wp-block-group white-form-fields">
								<div class="wp-block-group__inner-container">
									<InnerBlocks.Content />
								</div>
							</div>
							<div class="wp-block-group video-player">
								<div class="wp-block-group__inner-container">
									<figure class="wp-block-image size-full">
										<img src={ topVideoImageUrl } alt="" class="" />
									</figure>
									<figure class="wp-block-video">
										{ url && (
											<video
												className="wp-block-hero__video-background"
												autoPlay
												muted
												loop
												src={ url }
											/>
										) }
									</figure>
									<figure class="wp-block-image size-large video-logos">
										<img src={ topVideoLogosUrl } alt="" class="" />
									</figure>
									<figure class="wp-block-image size-large video-logos-bottom">
										<img src={ bottomVideoLogosUrl } alt="" class="" />
									</figure>
								</div>
							</div>
						</div>
					</div>
					<div className={ bottomHeightClassName } style={ { height: bottomHeight } } aria-hidden />;
				</div>
			</div>
		</div>
	);
}
