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
	SelectControl,
	TextControl,
} from '@wordpress/components';

import { compose, withInstanceId } from '@wordpress/compose';
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
} ) {
	const {
		id,
		url,
		heading,
		level,
		text,
		cardStyle,
		button1Text,
		button1URL,
		button1LinkTarget,
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
						<hr />
					) }
				</PanelBody>
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
						] }
						onChange={ ( value ) => setAttributes( { cardStyle: value } ) }
					/>
				</PanelBody>
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
			</InspectorControls>
		</>
	);

	const classes = classnames( className, 
		'wp-block-card__outer-wrapper',
		'plain' === cardStyle ? 'is-plain-style' : {},
		{
			[ cardColor.class ]: cardColor.class,
		}
	);

	const pClasses = classnames( 'card-text', {
		[ fontSize.class ]: fontSize.class,
		[ textColor.class ]: textColor.class,
		[ 'has-text-color' ]: textColor.class,
	} );

	const pStyles = {
		fontSize: fontSize.size
			? fontSize.size + 'px'
			: undefined,
	};

	return (
		<>
			{ controls }
			<div className={ classes }>
				<div className="card-content">
					<div className="wp-block-card__inner-content">
						{ url && (
							<div class="wp-block-image">
								<img src={url} />
							</div>
						) }
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
	withFontSizes( 'fontSize' ),
	withColors( { cardColor: 'card-color', textColor: 'text-color' } ),
] )( CardEdit );
