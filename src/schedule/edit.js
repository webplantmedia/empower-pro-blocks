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

const INNER_BLOCKS_TEMPLATE = [
	[
		'empower-pro-blocks/scheduler',
		{
		},
	],
];

function ScheduleEdit( {
	attributes,
	setAttributes,
	hasInnerBlocks,
	isSelected,
	className,
	noticeUI,
	toggleSelection,
	noticeOperations,
	headerColor,
	setHeaderColor,
} ) {
	const {
		button1Text,
		button1TextSub,
		button2Text,
		button2TextSub,
		button3Text,
		button3TextSub,
	} = attributes;

	const { removeAllNotices, createErrorNotice } = noticeOperations;

	const controls = (
		<>
			<InspectorControls>
				<PanelColorGradientSettings
					title={ __( 'Header' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: headerColor.color,
							onColorChange: setHeaderColor,
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
		'wp-block-schedule-wrapper',
		{ [ headerColor.class ]: headerColor.class, }
	);

	return (
		<>
			{ controls }
			<div className={ classes }>
				<div className="wp-block-schedule__inner-wrap">
					<div class="schedule-table" data-container=".the-schedule">
						<div class="column-box" data-schedule=".schedule1">
							<div class="column-title">
								<RichText
									tagName="span"
									placeholder={ __( 'Title' ) }
									value={ button1Text }
									onChange={ ( value ) => setAttributes( { button1Text: value } ) }
									withoutInteractiveFormatting
									className="button1 span-title"
									formattingControls={ [] }
								/>
								<RichText
									tagName="span"
									placeholder={ __( 'Sub Title' ) }
									value={ button1TextSub }
									onChange={ ( value ) => setAttributes( { button1TextSub: value } ) }
									withoutInteractiveFormatting
									className="button1sub span-text"
									formattingControls={ [] }
								/>
							</div>
							<div class="column-text">
								<InnerBlocks 
									renderAppender={
										() => <InnerBlocks.ButtonBlockAppender />
									}
									templateLock="all"
									template={ INNER_BLOCKS_TEMPLATE }
								/>
							</div>
						</div>
						<div class="column-box" data-schedule=".schedule2">
							<div class="column-title">
								<RichText
									tagName="span"
									placeholder={ __( 'Title' ) }
									value={ button2Text }
									onChange={ ( value ) => setAttributes( { button2Text: value } ) }
									withoutInteractiveFormatting
									className="button2 span-title"
									formattingControls={ [] }
								/>
								<RichText
									tagName="span"
									placeholder={ __( 'Sub Title' ) }
									value={ button2TextSub }
									onChange={ ( value ) => setAttributes( { button2TextSub: value } ) }
									withoutInteractiveFormatting
									className="button2sub span-text"
									formattingControls={ [] }
								/>
							</div>
							<div class="column-text">
								<InnerBlocks 
									renderAppender={
										() => <InnerBlocks.ButtonBlockAppender />
									}
									templateLock="all"
									template={ INNER_BLOCKS_TEMPLATE }
								/>
							</div>
						</div>
						<div class="column-box" data-schedule=".schedule3">
							<div class="column-title">
								<RichText
									tagName="span"
									placeholder={ __( 'Title' ) }
									value={ button3Text }
									onChange={ ( value ) => setAttributes( { button3TextSub: value } ) }
									withoutInteractiveFormatting
									className="button3 span-title"
									formattingControls={ [] }
								/>
								<RichText
									tagName="span"
									placeholder={ __( 'Sub Title' ) }
									value={ button3TextSub }
									onChange={ ( value ) => setAttributes( { button3Text: value } ) }
									withoutInteractiveFormatting
									className="button3sub span-text"
									formattingControls={ [] }
								/>
							</div>
							<div class="column-text">
								<InnerBlocks 
									renderAppender={
										() => <InnerBlocks.ButtonBlockAppender />
									}
									templateLock="all"
									template={ INNER_BLOCKS_TEMPLATE }
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
	withColors( { headerColor: 'header-color' } ),
	withNotices,
] )( ScheduleEdit );
