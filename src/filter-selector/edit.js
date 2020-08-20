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
	SelectControl,
	withNotices,
} from '@wordpress/components';

import { compose } from '@wordpress/compose';
import {
	BlockControls,
	RichText,
	InspectorControls,
	MediaUpload,
	MediaReplaceFlow,
	withColors,
	InnerBlocks,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
	URLInput,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

function FilterSelectorEdit( {
	attributes,
	setAttributes,
	hasInnerBlocks,
	isSelected,
	className,
	noticeUI,
	toggleSelection,
	noticeOperations,
	button1BackgroundColor,
	setButton1BackgroundColor,
	button2BackgroundColor,
	setButton2BackgroundColor,
	button3BackgroundColor,
	setButton3BackgroundColor,
	button4BackgroundColor,
	setButton4BackgroundColor,
} ) {
	const {
		button1Text,
		button2Text,
		button3Text,
		button4Text,
		buttons,
	} = attributes;

	const { removeAllNotices, createErrorNotice } = noticeOperations;

	const controls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Buttons' ) } initialOpen={ true }>
					<RangeControl
						label={ __( 'Number' ) }
						value={ buttons }
						onChange={ ( value ) =>
							setAttributes( {
								buttons: value,
							} )
						}
						min={ 3 }
						max={ 4 }
						step={ 1 }
					/>
				</PanelBody>
				<PanelColorGradientSettings
					title={ __( 'Button 1 Background Color' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: button1BackgroundColor.color,
							onColorChange: setButton1BackgroundColor,
							disableCustomColors: true,
							label: __( 'Color' ),
						},
					] }
				>
				</PanelColorGradientSettings>
				<PanelColorGradientSettings
					title={ __( 'Button 2 Background Color' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: button2BackgroundColor.color,
							onColorChange: setButton2BackgroundColor,
							disableCustomColors: true,
							label: __( 'Color' ),
						},
					] }
				>
				</PanelColorGradientSettings>
				{ buttons > 2 && (
					<PanelColorGradientSettings
						title={ __( 'Button 3 Background Color' ) }
						initialOpen={ true }
						settings={ [
							{
								colorValue: button3BackgroundColor.color,
								onColorChange: setButton3BackgroundColor,
								disableCustomColors: true,
								label: __( 'Color' ),
							},
						] }
					>
					</PanelColorGradientSettings>
				) }
				{ buttons > 3 && (
					<PanelColorGradientSettings
						title={ __( 'Button 4 Background Color' ) }
						initialOpen={ true }
						settings={ [
							{
								colorValue: button4BackgroundColor.color,
								onColorChange: setButton4BackgroundColor,
								disableCustomColors: true,
								label: __( 'Color' ),
							},
						] }
					>
					</PanelColorGradientSettings>
				) }
			</InspectorControls>
		</>
	);

	const classes = classnames( className, 
		'wp-block-filter-selector-wrapper',
	);
	
	const button1Classes = classnames(
		'button1',
		'wp-block-button__link',
		{ [ button1BackgroundColor.class ]: button1BackgroundColor.class, },
	)

	const button2Classes = classnames(
		'button1',
		'wp-block-button__link',
		{ [ button2BackgroundColor.class ]: button2BackgroundColor.class, },
	)

	const button3Classes = classnames(
		'button1',
		'wp-block-button__link',
		{ [ button3BackgroundColor.class ]: button3BackgroundColor.class, },
	)

	const button4Classes = classnames(
		'button1',
		'wp-block-button__link',
		{ [ button4BackgroundColor.class ]: button4BackgroundColor.class, },
	)

	return (
		<>
			{ controls }
			<div className={ classes }>
				<div className="wp-block-filter-selector__inner-wrap">
					<div class="filtering wp-block-buttons item-selected" data-container=".filter-content" data-collapse="false">
						<div class="wp-block-button is-style-text active" data-filter=".filter-selector-1">
							<RichText
								tagName="a"
								placeholder={ __( 'Button 1' ) }
								value={ button1Text }
								onChange={ ( value ) => setAttributes( { button1Text: value } ) }
								className={ button1Classes }
							/>
						</div>
						<div class="wp-block-button is-style-text" data-filter=".filter-selector-2">
							<RichText
								tagName="a"
								placeholder={ __( 'Button 2' ) }
								value={ button2Text }
								onChange={ ( value ) => setAttributes( { button2Text: value } ) }
								className={ button2Classes }
							/>
						</div>
						{ buttons > 2 && (
						<div class="wp-block-button is-style-text" data-filter=".filter-selector-3">
							<RichText
								tagName="a"
								placeholder={ __( 'Button 3' ) }
								value={ button3Text }
								onChange={ ( value ) => setAttributes( { button3Text: value } ) }
								className={ button3Classes }
							/>
						</div>
						) }
						{ buttons > 3 && (
							<div class="wp-block-button is-style-text" data-filter=".filter-selector-4">
								<RichText
									tagName="a"
									placeholder={ __( 'Button 4' ) }
									value={ button4Text }
									onChange={ ( value ) => setAttributes( { button4Text: value } ) }
									className={ button4Classes }
								/>
							</div>
						) }
					</div>
				</div>
			</div>
		</>
	);
}

export default compose( [
	withNotices,
	withColors( { button1BackgroundColor: 'background-color', button2BackgroundColor: 'background-color', button3BackgroundColor: 'background-color', button4BackgroundColor: 'background-color' } ),
] )( FilterSelectorEdit );
