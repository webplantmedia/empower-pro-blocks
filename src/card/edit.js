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
	PanelRow,
	ToggleControl,
	RangeControl,
	SelectControl,
	TextControl,
} from '@wordpress/components';

import { compose, withInstanceId } from '@wordpress/compose';
import {
	AlignmentToolbar,
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


/**
 * Module Constants
 */
const ALLOWED_MEDIA_TYPES = [ 'image' ];

function CardEdit( {
	attributes,
	setAttributes,
	isSelected,
	className,
	cardColor,
	setCardColor,
	fontSize,
	setFontSize,
	textColor,
	setTextColor,
	headingColor,
	setHeadingColor,
	backgroundColor,
	setBackgroundColor,
} ) {
	const {
		id,
		url,
		heading,
		level,
		text,
		cardStyle,
		imageStyle,
		imageHeight,
		button1Text,
		button1URL,
		button1LinkTarget,
		align,
	} = attributes;

	const tagName = 'h' + level;

	const controls = (
		<>
			<BlockControls>
				<MediaReplaceFlow
					mediaId={ id }
					mediaURL={ url }
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					accept="image/*"
					onSelect={ ( media ) => 
						setAttributes( {
							url: media.url,
							id: media.id,
						} )
					}
					name="Icon"
				/>
				<AlignmentToolbar
					value={ align }
					onChange={ ( value ) =>
						setAttributes( { align: value } )
					}
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Icon settings' ) } >
					<PanelRow>
						<MediaUpload
							id={ id }
							allowedTypes={ ALLOWED_MEDIA_TYPES }
							onSelect={ ( media ) => 
								setAttributes( {
									url: media.url,
									id: media.id,
								} )
							}
							render={ ( { open } ) => (
								<Button onClick={ open } isSecondary={ true }>
									Select Icon Image	
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
					{ !! url && (
						<Fragment>
							<hr />
							<RangeControl
								label={ __( 'Icon Size' ) }
								value={ imageHeight }
								onChange={ ( value ) =>
									setAttributes( {
										imageHeight: value,
									} )
								}
								min={ 60 }
								max={ 300 }
								step={ 1 }
							/>
							<SelectControl
								label={ __( "Image Style" ) }
								value={ imageStyle }
								options={ [
									{ value: "", label: __( "None" ) },
									{ value: "circle", label: __( "Circle" ) },
									{ value: "hex", label: __( "Hex" ) },
								] }
								onChange={ ( value ) => setAttributes( { imageStyle: value } ) }
							/>
						</Fragment>
					) }
				</PanelBody>
				<PanelColorGradientSettings
					title={ __( 'Background Color' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: backgroundColor.color,
							onColorChange: setBackgroundColor,
							disableCustomColors: true,
							label: __( 'Color' ),
						},
					] }
				>
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
				<PanelBody title={ __( 'Card Style' ) } initialOpen={ true }>
					<SelectControl
						label={ __( "Style" ) }
						value={ cardStyle }
						options={ [
							{ value: "", label: __( "Default" ) },
							{ value: "plain", label: __( "Plain" ) },
							{ value: "border", label: __( "Border" ) },
						] }
						onChange={ ( value ) => setAttributes( { cardStyle: value } ) }
					/>
				</PanelBody>
				<PanelColorGradientSettings
					title={ __( 'Heading' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: headingColor.color,
							onColorChange: setHeadingColor,
							disableCustomColors: true,
							label: __( 'Color' ),
						},
					] }
				>
					<HeadingToolbar
						isCollapsed={ false }
						minLevel={ 2 }
						maxLevel={ 7 }
						selectedLevel={ level }
						onChange={ ( value ) =>
							setAttributes( { level: value } )
						}
					/>
				</PanelColorGradientSettings>
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
			</InspectorControls>
		</>
	);

	const classes = classnames( className, 
		'wp-block-card__outer-wrapper',
		cardStyle ? 'is-' + cardStyle + '-style' : {},
		{
			[ cardColor.class ]: cardColor.class,
		}
	);

	const hClasses = classnames( 'card-heading', {
		[ headingColor.class ]: headingColor.class,
		[ 'has-text-color' ]: headingColor.class,
		[ `has-text-align-${ align }` ]: align,
	} );

	const pClasses = classnames( 'card-text', {
		[ fontSize.class ]: fontSize.class,
		[ textColor.class ]: textColor.class,
		[ 'has-text-color' ]: textColor.class,
		[ `has-text-align-${ align }` ]: align,
	} );

	const pStyles = {
		fontSize: fontSize.size
			? fontSize.size + 'px'
			: undefined,
	};

	const imageStyleRules = {
		...( imageStyle && imageHeight ? { width: imageHeight+"px" } : {} ),
		...( imageStyle && imageHeight ? { height: imageHeight+"px" } : {} ),
	};

	const imageStyleInnerRules = {
		...( ! imageStyle && imageHeight ? { maxHeight: imageHeight+"px" } : {} ),
	};

	const imageClasses = classnames( 
		'wp-block-image', 
		imageStyle ? 'image-style-' + imageStyle : {}, 
		imageHeight ? 'custom-height' : {}, 
	);

	const innerClasses = classnames( 'wp-block-card__inner-content', {
		[ backgroundColor.class ]: backgroundColor.class,
		[ 'has-background-color' ]: backgroundColor.class,
	} );

	return (
		<>
			{ controls }
			<div className={ classes }>
				<div className="card-content">
					<div className={ innerClasses }>
						{ url && (
							<div style={ imageStyleRules } class={ imageClasses }>
								<img src={url} style={ imageStyleInnerRules }/>
							</div>
						) }
						<RichText
							className={ hClasses }
							placeholder={ __( 'Heading', 'empower-pro-blocks' ) }
							onChange={ ( value ) =>
								setAttributes( {
									heading: value,
								} )
							}
							value={ heading }
							tagName={ tagName }
						/>
						<RichText
							tagName="p"
							placeholder={ __( 'Text', 'empower-pro-blocks' ) }
							onChange={ ( value ) =>
								setAttributes( {
									text: value,
								} )
							}
							value={ text }
							className={ pClasses }
							style={ pStyles }
						/>
						<div class="wp-block-buttons">
							<div class="wp-block-button is-style-text">
								<RichText
									placeholder={ __( 'Button 1' ) }
									value={ button1Text }
									onChange={ ( value ) => setAttributes( { button1Text: value } ) }
									className="wp-block-button__link button1"
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
	withFontSizes( 'fontSize' ),
	withColors( { cardColor: 'card-color', headingColor: 'text-color', textColor: 'text-color', backgroundColor: 'background-color' } ),
] )( CardEdit );
