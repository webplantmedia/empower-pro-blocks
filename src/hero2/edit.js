/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
// import { useCallback, useEffect, useRef, useState } from '@wordpress/element';
import { useCallback, Fragment } from '@wordpress/element';
import {
	PanelBody,
	Button,
	FocalPointPicker,
	PanelRow,
	RangeControl,
	ToggleControl,
	TextControl,
	TextareaControl,
	withNotices,
} from '@wordpress/components';

import { compose, withInstanceId } from '@wordpress/compose';
import { rawShortcut, displayShortcut } from '@wordpress/keycodes';
import {
	BlockControls,
	RichText,
	InspectorControls,
	MediaUpload,
	MediaReplaceFlow,
	withColors,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
	URLInput,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { withDispatch } from '@wordpress/data';
// import { cover as icon, link } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import {
	attributesFromMedia,
	attributesFromIconMedia,
	IMAGE_BACKGROUND_TYPE,
	VIDEO_BACKGROUND_TYPE,
	backgroundImageStyles,
	dimRatioToClass,
} from './shared';
import svgleftpill from '../../dist/svg/leftpill';
import svgrightpill from '../../dist/svg/rightpill';

/**
 * Module Constants
 */
const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

function HeroEdit( {
	attributes,
	setAttributes,
	isSelected,
	className,
	noticeUI,
	overlayColor,
	setOverlayColor,
	heroColor,
	setHeroColor,
	leftPillColor,
	setLeftPillColor,
	rightPillColor,
	setRightPillColor,
	toggleSelection,
	noticeOperations,
} ) {
	const {
		id,
		iconId,
		backgroundType,
		dimRatio,
		leftPillDimRatio,
		rightPillDimRatio,
		focalPoint,
		showContent,
		url,
		iconUrl,
		heading,
		text,
		button1Text,
		button2Text,
		button3Text,
		grayscale,
	} = attributes;

	const onSelectMedia = attributesFromMedia( setAttributes );
	const onSelectIconMedia = attributesFromIconMedia( setAttributes );

	const { removeAllNotices, createErrorNotice } = noticeOperations;

	const style = {
		...( backgroundType === IMAGE_BACKGROUND_TYPE
			? backgroundImageStyles( url )
			: {} ),
	};

	if ( focalPoint ) {
		style.backgroundPosition = `${ focalPoint.x * 100 }% ${ focalPoint.y * 100 }%`;
	}

	const controls = (
		<>
			<BlockControls>
				<MediaReplaceFlow
					mediaId={ id }
					mediaURL={ url }
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					accept="image/*,video/*"
					onSelect={ onSelectMedia }
					name="Background"
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
									Select Background Image	
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
										backgroundType: undefined,
										dimRatio: undefined,
										leftPillDimRatio: undefined,
										rightPillDimRatio: undefined,
										focalPoint: undefined,
									} )
								}
							>
								{ __( 'Clear Media' ) }
							</Button>
						</PanelRow>
					) }
					{ !! url && (
						<hr />
					) }
					{ !! url && (
						<ToggleControl
							label={ __( 'Grayscale' ) }
							onChange={ ( value ) => setAttributes( value ? { grayscale: true } : { grayscale: false } ) }
							checked={ grayscale === true }
						/>
					) }
					{ url && IMAGE_BACKGROUND_TYPE === backgroundType &&
						<FocalPointPicker
							label={ __( 'Focal point picker' ) }
							url={ url }
							value={ focalPoint }
							onChange={ ( value ) =>
								setAttributes( {
									focalPoint: value,
								} )
							}
						/>
					}
					{ url && VIDEO_BACKGROUND_TYPE === backgroundType && (
						<video autoPlay muted loop src={ url } />
					) }
				</PanelBody>
				<PanelBody title={ __( 'Hero Content' ) } >
					<ToggleControl
						label={ __( 'Show Content' ) }
						onChange={ ( value ) => setAttributes( value ? { showContent: true } : { showContent: false } ) }
						checked={ showContent === true }
					/>
				</PanelBody>
				{ showContent && (
					<PanelBody title={ __( 'Icon settings' ) } >
						<PanelRow>
							<MediaUpload
								id={ iconId }
								allowedTypes={ [ 'image' ] }
								onSelect={ onSelectIconMedia }
								render={ ( { open } ) => (
									<Button onClick={ open } isSecondary={ true }>
										Select Icon Image	
									</Button>
								) }
							/>
						</PanelRow>
						{ !! iconUrl && (
							<PanelRow>
								<Button
									isSecondary
									className=""
									onClick={ () =>
										setAttributes( {
											iconUrl: undefined,
											iconId: undefined,
										} )
									}
								>
									{ __( 'Clear Icon' ) }
								</Button>
							</PanelRow>
						) }
					</PanelBody>
				) }
				<PanelColorGradientSettings
					title={ __( 'Overlay' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: overlayColor.color,
							onColorChange: setOverlayColor,
							disableCustomColors: true,
							label: __( 'Color' ),
						},
					] }
				>
					{ !! url && (
						<RangeControl
							label={ __( 'Overlay Opacity' ) }
							value={ dimRatio }
							onChange={ ( value ) =>
								setAttributes( {
									dimRatio: value,
								} )
							}
							min={ 0 }
							max={ 100 }
							step={ 10 }
							required
						/>
					) }
				</PanelColorGradientSettings>
				{ showContent && (
					<PanelColorGradientSettings
						title={ __( 'Hero Color' ) }
						initialOpen={ true }
						settings={ [
							{
								colorValue: heroColor.color,
								onColorChange: setHeroColor,
								disableCustomColors: true,
								label: __( 'Color' ),
							},
						] }
					>
					</PanelColorGradientSettings>
				) }
				<PanelColorGradientSettings
					title={ __( 'Left Pill Color' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: leftPillColor.color,
							onColorChange: setLeftPillColor,
							disableCustomColors: true,
							label: __( 'Color' ),
						},
					] }
				>
					{ !! url && (
						<RangeControl
							label={ __( 'Opacity' ) }
							value={ leftPillDimRatio }
							onChange={ ( value ) =>
								setAttributes( {
									leftPillDimRatio: value,
								} )
							}
							min={ 10 }
							max={ 100 }
							step={ 10 }
							required
						/>
					) }
				</PanelColorGradientSettings>
				<PanelColorGradientSettings
					title={ __( 'Right Pill Color' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: rightPillColor.color,
							onColorChange: setRightPillColor,
							disableCustomColors: true,
							label: __( 'Color' ),
						},
					] }
				>
					{ !! url && (
						<RangeControl
							label={ __( 'Opacity' ) }
							value={ rightPillDimRatio }
							onChange={ ( value ) =>
								setAttributes( {
									rightPillDimRatio: value,
								} )
							}
							min={ 10 }
							max={ 100 }
							step={ 10 }
							required
						/>
					) }
				</PanelColorGradientSettings>
			</InspectorControls>
		</>
	);

	const classes = classnames( className, 
		'wp-block-hero2__outer-wrapper',
		showContent ? {} : 'hero-content-hidden',
		{ 
			[ heroColor.class ]: heroColor.class,
		}
	);

	const backgroundImageClasses = classnames(
		'wp-block-hero2__background-image',
		grayscale ? 'grayscale' : {}
	);

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
		url ? dimRatioToClass( leftPillDimRatio ) : {},
		{ [ leftPillColor.class ]: leftPillColor.class },
	);

	const rightPillClasses = classnames( 
		'top-right-background',
		'glide',
		'glide-right',
		'glide-down',
		url ? dimRatioToClass( rightPillDimRatio ) : {},
		{ [ rightPillColor.class ]: rightPillColor.class },
	);

	return (
		<>
			{ controls }
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
											<img src={ iconUrl } alt="" class="" />
										</figure>
									) }
									<div class="hero2-tags">
										<RichText
											tagName="span"
											placeholder={ __( 'Button 1' ) }
											value={ button1Text }
											onChange={ ( value ) => setAttributes( { button1Text: value } ) }
											withoutInteractiveFormatting
											className="button1"
											formattingControls={ [] }
										/>
										<RichText
											tagName="span"
											placeholder={ __( 'Button 2' ) }
											value={ button2Text }
											onChange={ ( value ) => setAttributes( { button2Text: value } ) }
											withoutInteractiveFormatting
											className="button2"
											formattingControls={ [] }
										/>
										<RichText
											tagName="span"
											placeholder={ __( 'Button 3' ) }
											value={ button3Text }
											onChange={ ( value ) => setAttributes( { button3Text: value } ) }
											withoutInteractiveFormatting
											className="button3"
											formattingControls={ [] }
										/>
									</div>
									<RichText
										tagName="h1"
										className="hero2-heading mb-20"
										placeholder={ __( 'Heading', 'empower-pro-blocks' ) }
										onChange={ ( value ) => setAttributes( { heading: value } ) }
										value={ heading }
										formattingControls={ [] }
									/>
									<RichText
										tagName="p"
										className="hero2-text"
										placeholder={ __( 'Text', 'empower-pro-blocks' ) }
										onChange={ ( value ) =>
											setAttributes( {
												text: value,
											} )
										}
										value={ text }
										formattingControls={ [] }
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
		</>
	);
}

export default compose( [
	withDispatch( ( dispatch ) => {
		const { toggleSelection } = dispatch( 'core/block-editor' );

		return {
			toggleSelection,
		};
	} ),
	withColors( { overlayColor: 'overlay-color', heroColor: 'hero2-color', leftPillColor: 'left-pill-color', rightPillColor: 'right-pill-color' } ),
	withNotices,
	withInstanceId,
] )( HeroEdit );
