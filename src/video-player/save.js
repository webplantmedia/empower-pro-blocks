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
		topVideoImage,
	} = attributes;

	const classes = classnames(
		'wp-block-group',
		'video-player',
	);
	const topVideoImageUrl = empower_pro_blocks.plugins_url + topVideoImage;

	return (
		<div className={ classes }>
			<div class="wp-block-video-player__inner-container">
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
			</div>
		</div>
	);
}
