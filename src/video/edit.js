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
const ALLOWED_MEDIA_TYPES = [ 'video' ];

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
	backgroundImageColor,
	setBackgroundImageColor,
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
					accept="video/*"
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
					{ url && (
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
							colorValue: backgroundImageColor.color,
							onColorChange: setBackgroundImageColor,
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
				<PanelBody title={ __( 'Call to Action Button' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Text' ) }
						value={ button1Text }
						onChange={ ( value ) => setAttributes( { button1Text: value } ) }
					/>
					<URLInput
						value={ button1URL }
						className="url-input-inspector-field"
						onChange={ value => setAttributes( { button1URL: value } ) }
						autoFocus= { false }
					/>
					<ToggleControl
						label={ __( 'Open in new tab' ) }
						onChange={ ( value ) => setAttributes( value ? { button1LinkTarget: '_blank' } : { button1LinkTarget: undefined } ) }
						checked={ button1LinkTarget === '_blank' }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Secondary Button 1' ) } initialOpen={ true }>
					<Fragment>
						<p className="">{__( "Icon" )}</p>
						<FontIconPicker
							icons={svg_icons}
							renderFunc= {renderSVG}
							theme="default"
							value={button2Icon}
							onChange={ ( value ) => setAttributes( { button2Icon: value } ) }
							isMulti={false}
							noSelectedPlaceholder= { __( "Select Icon" ) }
						/>
					</Fragment>
					<RangeControl
						label={ __( 'Icon Size' ) }
						value={ button2IconSize }
						onChange={ ( value ) =>
							setAttributes( {
								button2IconSize: value,
							} )
						}
						min={ 7 }
						max={ 30 }
						step={ 1 }
					/>
					<TextControl
						label={ __( 'Text' ) }
						value={ button2Text }
						onChange={ ( value ) => setAttributes( { button2Text: value } ) }
					/>
					<URLInput
						value={ button2URL }
						className="url-input-inspector-field"
						onChange={ value => setAttributes( { button2URL: value } ) }
						autoFocus= { false }
					/>
					<ToggleControl
						label={ __( 'Open in new tab' ) }
						onChange={ ( value ) => setAttributes( value ? { button2LinkTarget: '_blank' } : { button2LinkTarget: undefined } ) }
						checked={ button2LinkTarget === '_blank' }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Secondary Button 2' ) } initialOpen={ true }>
					<Fragment>
						<p className="">{__( "Icon" )}</p>
						<FontIconPicker
							icons={svg_icons}
							renderFunc= {renderSVG}
							theme="default"
							value={button3Icon}
							onChange={ ( value ) => setAttributes( { button3Icon: value } ) }
							isMulti={false}
							noSelectedPlaceholder= { __( "Select Icon" ) }
						/>
					</Fragment>
					<RangeControl
						label={ __( 'Icon Size' ) }
						value={ button3IconSize }
						onChange={ ( value ) =>
							setAttributes( {
								button3IconSize: value,
							} )
						}
						min={ 7 }
						max={ 30 }
						step={ 1 }
					/>
					<TextControl
						label={ __( 'Text' ) }
						value={ button3Text }
						onChange={ ( value ) => setAttributes( { button3Text: value } ) }
					/>
					<URLInput
						value={ button3URL }
						className="url-input-inspector-field"
						onChange={ value => setAttributes( { button3URL: value } ) }
						autoFocus= { false }
					/>
					<ToggleControl
						label={ __( 'Open in new tab' ) }
						onChange={ ( value ) => setAttributes( value ? { button3LinkTarget: '_blank' } : { button3LinkTarget: undefined } ) }
						checked={ button3LinkTarget === '_blank' }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	const classes = classnames( className, 
		'wp-block-hero__outer-wrapper',
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

	const backgroundClasses = classnames( 
		'background-image',
		{ [ backgroundImageColor.class ]: backgroundImageColor.class },
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
				<div class="wp-block-group__inner-container">
					<div className={ backgroundClasses }>
						<svg x="0px" y="0px" width="2731.4px" height="1515.4px" viewBox="0 0 2731.4 1515.4">
							<path d="M0,0c0,0,0,390.3,0,605.2C0,2067,396.3,1317,1278.8,1365.7c579.4,27.2,549.3-491.5,1242-734.3 c211-82,210.6-631.4,210.6-631.4L0,0z"/>
						</svg>
					</div>
					<div class="wp-block-empower-pro-blocks-spacer mobile-height-100" style="height:200px" aria-hidden="true"></div>
					<div class="wp-block-group block-wrap group-columns-2">
						<div class="wp-block-group__inner-container">
							<div class="wp-block-group white-form-fields">
								<div class="wp-block-group__inner-container">
									<h3 class="has-text-align-left white-text mb-0">Join over 40 leading global organizations utilizing our solutions today</h3>
									<div class="wp-block-empower-pro-blocks-spacer mobile-height-200" style="height:200px" aria-hidden="true"></div>
								</div>
							</div>
							<div style="height:100px" aria-hidden="true" class="wp-block-spacer mobile-show"></div>
							<div class="wp-block-group video-player">
								<div class="wp-block-group__inner-container">
									<figure class="wp-block-image size-full">
										<img src="../browser-ui-top.svg" alt="" class="wp-image-73" />
									</figure>
									<figure class="wp-block-video">
										<video
											className="wp-block-hero__video-background"
											autoPlay
											muted
											loop
											src={ url }
										/>
									</figure>
									<figure class="wp-block-image size-large video-logos">
										<img src="../hero-video-logos1.svg" alt="" class="wp-image-62" />
									</figure>
									<figure class="wp-block-image size-large video-logos-bottom">
										<img src="../hero-video-logos-bottom.svg" alt="" class="wp-image-63" />
									</figure>
								</div>
							</div>
						</div>
					</div>
					<div class="wp-block-empower-pro-blocks-spacer mobile-height-140" style="height:300px" aria-hidden="true"></div>
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
	withColors( { overlayColor: 'overlay-color', heroColor: 'hero-color', leftPillColor: 'left-pill-color', backgroundImageColor: 'right-pill-color' } ),
	withNotices,
	withInstanceId,
] )( HeroEdit );
