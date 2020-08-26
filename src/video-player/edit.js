/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	PanelBody,
	Button,
	PanelRow,
	RangeControl,
	TextControl,
	withNotices,
} from '@wordpress/components';

import { rawShortcut, displayShortcut } from '@wordpress/keycodes';
import {
	BlockControls,
	RichText,
	InspectorControls,
	MediaUpload,
	MediaReplaceFlow,
	InnerBlocks,
	withColors,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { withDispatch } from '@wordpress/data';
// import { cover as icon, link } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import {
	attributesFromMedia,
	IMAGE_BACKGROUND_TYPE,
	VIDEO_BACKGROUND_TYPE,
	backgroundImageStyles,
	dimRatioToClass,
} from './shared';

/**
 * Module Constants
 */
const ALLOWED_MEDIA_TYPES = [ 'video' ];

function VideoPlayerEdit( {
	attributes,
	setAttributes,
	isSelected,
	className,
	toggleSelection,
} ) {
	const {
		id,
		url,
		topVideoImage,
	} = attributes;

	const onSelectMedia = attributesFromMedia( setAttributes );

	const controls = (
		<>
			<BlockControls>
				<MediaReplaceFlow
					mediaId={ id }
					mediaURL={ url }
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					accept="video/*"
					onSelect={ onSelectMedia }
					name="Video"
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Media settings' ) } >
					<PanelRow>
						<MediaUpload
							id={ id }
							allowedTypes={ ALLOWED_MEDIA_TYPES }
							onSelect={ onSelectMedia }
							render={ ( { open } ) => (
								<Button onClick={ open } isSecondary={ true }>
									Select Video	
								</Button>
							) }
						/>
					</PanelRow>
					{ !! url && (
						<PanelRow>
							<Button
								isSecondary
								className=""
								onClick={ () =>
									setAttributes( {
										url: undefined,
										id: undefined,
									} )
								}
							>
								{ __( 'Clear Media' ) }
							</Button>
						</PanelRow>
					) }
				</PanelBody>
			</InspectorControls>
		</>
	);

	const classes = classnames( className, 
		'wp-block-group',
		'video-player',
	);

	const topVideoImageUrl = empower_pro_blocks.plugins_url + topVideoImage;

	return (
		<>
			{ controls }
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
		</>
	);
}

export default VideoPlayerEdit;
