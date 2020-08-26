/**
 * External dependencies
 */
import classnames from 'classnames';

import { useCallback } from '@wordpress/element';
/**
 * WordPress dependencies
 */
import {
	PanelBody,
	Button,
	PanelRow,
	RangeControl,
	Disabled,
	TextControl,
	withNotices,
} from '@wordpress/components';

import VideoCommonSettings from './edit-common-settings';

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
		autoplay,
		controls,
		loop,
		muted,
		poster,
		preload,
		playsInline,
	} = attributes;

	const onSelectMedia = attributesFromMedia( setAttributes );

	const onSelectURL = useCallback(
		( newURL ) => {
			if ( newURL !== url ) {
				setAttributes( {
					url: newURL,
					id: undefined,
					backgroundType: undefined,
				} );
			}
		},
		[ url, setAttributes ]
	);


	const blockControls = (
		<>
			<BlockControls>
				<MediaReplaceFlow
					mediaId={ id }
					mediaURL={ url }
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					accept="video/*"
					onSelect={ onSelectMedia }
					onSelectURL={ onSelectURL }
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
				<PanelBody title={ __( 'Video settings' ) }>
					<VideoCommonSettings
						setAttributes={ setAttributes }
						attributes={ attributes }
					/>
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
			{ blockControls }
			<div className={ classes }>
				<div class="wp-block-video-player__inner-container">
					<figure class="wp-block-image size-full">
						<img src={ topVideoImageUrl } alt="" class="" />
					</figure>
					<figure class="wp-block-video">
						{ url && (
							<Disabled>
								<video
									className="wp-block-hero__video-background"
									controls={ controls }
									poster={ poster }
									src={ url }
								/>
							</Disabled>
						) }
					</figure>
				</div>
			</div>
		</>
	);
}

export default VideoPlayerEdit;
