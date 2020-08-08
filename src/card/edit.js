/**
 * External dependencies
 */
import classnames from 'classnames';


/**
 * Internal dependencies
 */
import HeadingToolbar from '../../dist/blocks/heading-toolbar';

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
	withFontSizes,
	FontSizePicker,
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
import svgleftpill from '../../dist/svg/leftpill';
import svgrightpill from '../../dist/svg/rightpill';

/**
 * Module Constants
 */
const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

let svg_icons = Object.keys( EPIcon )

function CardEdit( {
	attributes,
	setAttributes,
	isSelected,
	className,
	noticeUI,
	overlayColor,
	setOverlayColor,
	cardColor,
	setCardColor,
	leftPillColor,
	setLeftPillColor,
	rightPillColor,
	setRightPillColor,
	toggleSelection,
	noticeOperations,
	fontSize,
	setFontSize,
	textColor,
	setTextColor,
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
		level,
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

	const tagName = 'h' + level;

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
					title={ __( 'Card Color' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: cardColor.color,
							onColorChange: setCardColor,
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
					<HeadingToolbar
						isCollapsed={ false }
						minLevel={ 2 }
						maxLevel={ 7 }
						selectedLevel={ level }
						onChange={ ( value ) =>
							setAttributes( { level: value } )
						}
					/>
				</PanelBody>
				<PanelColorGradientSettings
					title={ __( 'Text Settings' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: textColor.color,
							onColorChange: setTextColor,
							disableCustomColors: true,
							label: __( 'Color' ),
						},
					] }
				>
					<FontSizePicker
						value={ fontSize.size }
						onChange={ setFontSize }
					/>
				</PanelColorGradientSettings>
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
		'wp-block-card__outer-wrapper',
		{ 
			[ cardColor.class ]: cardColor.class,
		}
	);

	return (
		<>
			{ controls }
			<div className={ classes }>
				<div className="card-content">
					<div className="wp-block-card__inner-content">
						<RichText
							className="card-heading"
							placeholder={ __( 'Heading', 'empower-pro-blocks' ) }
							onChange={ ( value ) =>
								setAttributes( {
									heading: value,
								} )
							}
							value={ heading }
							formattingControls={ [] }
							tagName={ tagName }
						/>
						<RichText
							tagName="p"
							className="card-text"
							placeholder={ __( 'Text', 'empower-pro-blocks' ) }
							onChange={ ( value ) =>
								setAttributes( {
									text: value,
								} )
							}
							value={ text }
							className={ classnames( {
								[ fontSize.class ]: fontSize.class,
								[ textColor.class ]: textColor.class,
								[ 'has-text-color' ]: textColor.class,
							} ) }
							style={ {
								fontSize: fontSize.size
									? fontSize.size + 'px'
									: undefined,
							} }
						/>
						<div class="wp-block-buttons">
							<div class="wp-block-button is-style-text">
								<RichText
									placeholder={ __( 'Button 1' ) }
									value={ button1Text }
									onChange={ ( value ) => setAttributes( { button1Text: value } ) }
									withoutInteractiveFormatting
									className="wp-block-button__link button1"
									formattingControls={ [] }
								/>
							</div>
						</div>
					</div>
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
	withFontSizes( 'fontSize' ),
	withColors( { overlayColor: 'overlay-color', cardColor: 'card-color', textColor: 'text-color', leftPillColor: 'left-pill-color', rightPillColor: 'right-pill-color' } ),
	withNotices,
	withInstanceId,
] )( CardEdit );
