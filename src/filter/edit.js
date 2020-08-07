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
						<div data-filter=".our-mission">
							<span class="plus"></span>
							<RichText
								tagName="span"
								placeholder={ __( 'Button 1' ) }
								value={ button1Text }
								onChange={ ( value ) => setAttributes( { button1Text: value } ) }
								withoutInteractiveFormatting
								className="button1"
								formattingControls={ [] }
							/>
						</div>
						<div data-filter=".our-vision">
							<span class="plus"></span>
							<RichText
								tagName="span"
								placeholder={ __( 'Button 2' ) }
								value={ button2Text }
								onChange={ ( value ) => setAttributes( { button2Text: value } ) }
								withoutInteractiveFormatting
								className="button2"
								formattingControls={ [] }
							/>
						</div>
						<div data-filter=".our-values">
							<span class="plus"></span>
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
					</div>
					<div className="block-wrap">
						<InnerBlocks
							renderAppender={
								hasInnerBlocks
									? undefined
									: () => (
											<InnerBlocks.ButtonBlockAppender />
									  )
							}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default compose( [
	withNotices,
] )( FilterEdit );
