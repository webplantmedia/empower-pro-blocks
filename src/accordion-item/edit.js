/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import HeadingToolbar from './heading-toolbar';

/**
 * WordPress dependencies
 */
// import { useCallback, useEffect, useRef, useState } from '@wordpress/element';
import { useCallback, Fragment } from '@wordpress/element';
import {
	PanelBody,
	PanelRow,
	Button,
	RangeControl,
	ToggleControl,
	TextControl,
	SelectControl,
	withNotices,
} from '@wordpress/components';

import { compose, withInstanceId } from '@wordpress/compose';
import { rawShortcut, displayShortcut } from '@wordpress/keycodes';
import {
	AlignmentToolbar,
	BlockVerticalAlignmentToolbar,
	BlockControls,
	FontSizePicker,
	InspectorControls,
	InnerBlocks,
	withFontSizes,
	MediaUpload,
	withColors,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
	RichText,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { withDispatch } from '@wordpress/data';

function AccordionItemBlock( {
	attributes,
	setAttributes,
	isSelected,
	className,
	toggleSelection,
	headingColor,
	setHeadingColor,
} ) {
	const {
		marginBottom,
		heading,
		headingType,
		accordionOpen,
	} = attributes;

	const controls = (
		<>
			<InspectorControls>
				<PanelColorGradientSettings
					title={ __( 'Heading settings' ) }
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
					<SelectControl
						label={ __( "Heading Type" ) }
						value={ headingType }
						options={ [
							{ value: "", label: __( "p" ) },
							{ value: "h2", label: __( "h2" ) },
							{ value: "h3", label: __( "h3" ) },
							{ value: "h4", label: __( "h4" ) },
						] }
						onChange={ ( value ) => setAttributes( { headingType: value } ) }
					/>
					<TextControl
						label={ __( 'Heading Text' ) }
						value={ heading }
						onChange={ ( value ) => setAttributes( { heading: value } ) }
					/>
				</PanelColorGradientSettings>
				<PanelBody title={ __( 'Display' ) } initialOpen={ true }>
					<RangeControl
						label={ __( 'Margin Bottom' ) }
						value={ marginBottom }
						onChange={ ( value ) =>
							setAttributes( {
								marginBottom: value,
							} )
						}
						min={ 0 }
						max={ 150 }
						step={ 1 }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	const classes = classnames( className, 
		'wp-block-accordion-item__outer-wrapper',
	);

	const headingClasses = classnames( 
		'wp-block-accordion-item__title',
		headingColor.class ? 'has-text-color' : {},
		{ [ headingColor.class ]: headingColor.class, },
		headingType ? headingType : "p-type",
	);

	const containerStyle = {
		...( marginBottom || marginBottom === 0 ? { marginBottom: marginBottom+"px" } : {} ),
	};

	return (
		<>
			{ controls }
			<div style={ containerStyle } className={ classes }>
				<div className="wp-block-accordion-item__inner-wrap">
					<details open={ accordionOpen }>
						<summary className={ headingClasses }>
							{ heading }
						</summary>
						<div className="wp-block-accordion-item__text">
							<InnerBlocks
								templateLock={ false }
								renderAppender={
									() => <InnerBlocks.ButtonBlockAppender />
								}
								__experimentalTagName="div"
							/>
						</div>
					</details>
				</div>
			</div>
		</>
	);
}

const AccordionItemEdit = compose( [
	withColors( { headingColor: 'text-color' } ),
] )( AccordionItemBlock );

export default AccordionItemEdit;
