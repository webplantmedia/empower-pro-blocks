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
		'empower-pro-blocks/column',
		{
			className: "filter1",
		},
	],
	[
		'empower-pro-blocks/column',
		{
			className: "filter2",
		},
	],
	[
		'empower-pro-blocks/column',
		{
			className: "filter3",
		},
	],
];

function FilterEdit( {
	attributes,
	setAttributes,
	hasInnerBlocks,
	isSelected,
	className,
	noticeUI,
	toggleSelection,
	noticeOperations,
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
			</InspectorControls>
		</>
	);

	const classes = classnames( className, 
		'wp-block-filter-wrapper',
	);

	return (
		<>
			{ controls }
			<div className={ classes }>
				<div className="wp-block-filter__inner-wrap">
					<div class="filtering" data-container=".our-statements">
						<div data-filter=".filter1">
							<span class="plus"></span>
							<RichText
								tagName="span"
								placeholder={ __( 'Button 1' ) }
								value={ button1Text }
								onChange={ ( value ) => setAttributes( { button1Text: value } ) }
								className="button1"
							/>
						</div>
						<div data-filter=".filter2">
							<span class="plus"></span>
							<RichText
								tagName="span"
								placeholder={ __( 'Button 2' ) }
								value={ button2Text }
								onChange={ ( value ) => setAttributes( { button2Text: value } ) }
								className="button2"
							/>
						</div>
						<div data-filter=".filter3">
							<span class="plus"></span>
							<RichText
								tagName="span"
								placeholder={ __( 'Button 3' ) }
								value={ button3Text }
								onChange={ ( value ) => setAttributes( { button3Text: value } ) }
								className="button3"
							/>
						</div>
					</div>
					<div className="wp-block-group our-statements">
						<div className="wp-block-group__inner-container">
							<InnerBlocks 
								template={ INNER_BLOCKS_TEMPLATE }
								templateLock="insert"
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
] )( FilterEdit );
