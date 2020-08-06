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

import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import EPIcon from "../../dist/blocks/Icon.json"
import renderSVG from "../../dist/blocks/renderIcon"

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
	IMAGE_BACKGROUND_TYPE,
	VIDEO_BACKGROUND_TYPE,
	backgroundImageStyles,
	dimRatioToClass,
} from './shared';

/**
 * Module Constants
 */
const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

let svg_icons = Object.keys( EPIcon )

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
		backgroundType,
		dimRatio,
		leftPillDimRatio,
		rightPillDimRatio,
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
	} = attributes;
	const onSelectMedia = attributesFromMedia( setAttributes );

	const { removeAllNotices, createErrorNotice } = noticeOperations;

	const style = {
		...( backgroundType === IMAGE_BACKGROUND_TYPE
			? backgroundImageStyles( url )
			: {} ),
	};

	if ( focalPoint ) {
		style.backgroundPosition = `${ focalPoint.x * 100 }% ${ focalPoint.y *
			100 }%`;
	}

	const replaceHeading = (h, ts, tr) => {
		let newHeading = h.replace( /<span.*?>|<\/span>/g, '' );
		let newTR = tr.replace(/(\r\n|\n|\r)/gm,"|");
		newHeading = newHeading.replace( ts, '<span class="typewriter" data-replace="'+newTR+'">'+ts+'</span>' );

		return newHeading;
	}

	const updateHeading = (h, ts, tr, setAttributes ) => {
		const newHeading = replaceHeading( h, ts, tr );

		setAttributes( {
			typewriterSearch: ts,
			typewriterReplace: tr,
			heading: newHeading,
		} );
	};

	const onTypewriterSearchChange = useCallback(
		( typewriterSearch ) => {
			updateHeading( heading, typewriterSearch, typewriterReplace, setAttributes );
		},
		[ heading, typewriterReplace, setAttributes ]
	);

	const onTypewriterReplaceChange = useCallback(
		( typewriterReplace ) => {
			updateHeading( heading, typewriterSearch, typewriterReplace, setAttributes );
		},
		[ heading, typewriterSearch, setAttributes ]
	);

	const onHeadingChange = useCallback(
		( heading ) => {
			updateHeading( heading, typewriterSearch, typewriterReplace, setAttributes );
		},
		[ typewriterSearch, typewriterReplace, setAttributes ]
	);

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
				<PanelBody title={ __( 'Heading' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Typewriter Search' ) }
						help="phrase to search and replace with a typewriter effect."
						value={ typewriterSearch }
						onChange={ onTypewriterSearchChange }
					/>
					<TextareaControl
						label={ __( 'Typewriter Replace' ) }
						help="Put each replacement phrase on its own line."
						value={ typewriterReplace }
						onChange={ onTypewriterReplaceChange }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	const classes = classnames( className, 
		'wp-block-hero2__outer-wrapper',
		{ 
			[ heroColor.class ]: heroColor.class,
		}
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

	const button2Style = {
		...( button2IconSize ? { width: button2IconSize+"px" } : {} ),
	};
	const button3Style = {
		...( button3IconSize ? { width: button3IconSize+"px" } : {} ),
	};

	return (
		<>
			{ controls }
			<div className={ classes }>
				<div className="wp-block-hero2__inner-wrap">
					<div className="wp-block-hero2__inner-container">
						<div data-url={ url } style={ style } className="wp-block-hero2__background-image">
							{ VIDEO_BACKGROUND_TYPE === backgroundType && (
								<video
									className="wp-block-hero2__video-background"
									autoPlay
									muted
									loop
									src={ url }
								/>
							) }
							<div className={ overlayClasses }>
							</div>
						</div>
						<div className="hero2-content">
							<div className="wp-block-hero2__inner-content">
								<div class="hero2-tags">
									<RichText
										tagName="span"
										placeholder={ __( 'Button 1' ) }
										value={ button1Text }
										onChange={ ( value ) => setAttributes( { button1Text: value } ) }
										withoutInteractiveFormatting
										className=""
										formattingControls={ [] }
									/>
									<RichText
										tagName="span"
										placeholder={ __( 'Button 2' ) }
										value={ button2Text }
										onChange={ ( value ) => setAttributes( { button2Text: value } ) }
										withoutInteractiveFormatting
										className=""
										formattingControls={ [] }
									/>
									<RichText
										tagName="span"
										placeholder={ __( 'Button 3' ) }
										value={ button3Text }
										onChange={ ( value ) => setAttributes( { button3Text: value } ) }
										withoutInteractiveFormatting
										className=""
										formattingControls={ [] }
									/>
								</div>
								<RichText
									tagName="h1"
									className="hero2-heading typewriter"
									placeholder={ __( 'Heading', 'empower-pro-blocks' ) }
									onChange={ onHeadingChange }
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
