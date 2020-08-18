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
		'empower-pro-blocks/container',
	],
	[
		'empower-pro-blocks/container',
	],
	[
		'empower-pro-blocks/container',
	],
];

const ALLOWED_BLOCKS = [ 'empower-pro-blocks/container' ];

function FilterContentEdit( {
	attributes,
	setAttributes,
	isSelected,
	className,
	noticeUI,
	toggleSelection,
	noticeOperations,
} ) {
	const {
	} = attributes;

	const { removeAllNotices, createErrorNotice } = noticeOperations;

	const controls = (
		<>
			<InspectorControls>
			</InspectorControls>
		</>
	);

	const classes = classnames( className, 
		'wp-block-filter-content-wrapper',
		'filter-content',
	);

	return (
		<>
			<div className={ classes }>
				<InnerBlocks 
					template={ INNER_BLOCKS_TEMPLATE }
					allowedBlocks={ ALLOWED_BLOCKS }
				/>
			</div>
		</>
	);
}

export default compose( [
	withNotices,
] )( FilterContentEdit );
