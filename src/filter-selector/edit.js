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

function Filter2Edit( {
	attributes,
	setAttributes,
	hasInnerBlocks,
	isSelected,
	className,
	noticeUI,
	toggleSelection,
	noticeOperations,
	buttonBackgroundColor,
	setButtonBackgroundColor,
} ) {
	const {
		button1Text,
		button2Text,
		button3Text,
	} = attributes;

	const { removeAllNotices, createErrorNotice } = noticeOperations;

	const controls = (
		<>
			<InspectorControls>
				<PanelColorGradientSettings
					title={ __( 'Button Background Color' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: buttonBackgroundColor.color,
							onColorChange: setButtonBackgroundColor,
							disableCustomColors: true,
							label: __( 'Color' ),
						},
					] }
				>
				</PanelColorGradientSettings>
			</InspectorControls>
		</>
	);

	const classes = classnames( className, 
		'wp-block-filter2-wrapper',
	);
	
	const button1Classes = classnames(
		'button1',
		'wp-block-button__link',
		{ [ buttonBackgroundColor.class ]: buttonBackgroundColor.class, },
	)

	const button2Classes = classnames(
		'button1',
		'wp-block-button__link',
		{ [ buttonBackgroundColor.class ]: buttonBackgroundColor.class, },
	)

	const button3Classes = classnames(
		'button1',
		'wp-block-button__link',
		{ [ buttonBackgroundColor.class ]: buttonBackgroundColor.class, },
	)

	return (
		<>
			{ controls }
			<div className={ classes }>
				<div className="wp-block-filter2__inner-wrap">
					<div class="filtering wp-block-buttons" data-container=".filter-content" data-collapse="false">
						<div class="wp-block-button is-style-text" data-filter=".filter2-1">
							<RichText
								tagName="a"
								placeholder={ __( 'Button 1' ) }
								value={ button1Text }
								onChange={ ( value ) => setAttributes( { button1Text: value } ) }
								className={ button1Classes }
							/>
						</div>
						<div class="wp-block-button is-style-text" data-filter=".filter2-2">
							<RichText
								tagName="a"
								placeholder={ __( 'Button 2' ) }
								value={ button2Text }
								onChange={ ( value ) => setAttributes( { button2Text: value } ) }
								className={ button2Classes }
							/>
						</div>
						<div class="wp-block-button is-style-text" data-filter=".filter2-3">
							<RichText
								tagName="a"
								placeholder={ __( 'Button 3' ) }
								value={ button3Text }
								onChange={ ( value ) => setAttributes( { button3Text: value } ) }
								className={ button3Classes }
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default compose( [
	withNotices,
	withColors( { buttonBackgroundColor: 'background-color' } ),
] )( Filter2Edit );
