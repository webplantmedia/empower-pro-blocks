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
		level,
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
		'accordion-heading', 
		{ [ headingColor.class ]: headingColor.class, }
	);

	const containerStyle = {
		...( marginBottom || marginBottom === 0 ? { marginBottom: marginBottom+"px" } : {} ),
	};

	const tagName = 'h' + level;

	return (
		<>
			{ controls }
			<div style={ containerStyle } className={ classes }>
				<div className="wp-block-accordion-item__inner-wrap">
					<div class="wp-block-accordion-item__heading-wrap">
						<RichText
							placeholder={ __( 'Heading' ) }
							value={ heading }
							onChange={ ( value ) => setAttributes( { heading: value } ) }
							className={ headingClasses }
							tagName={ tagName }
						/>
					</div>
					<div class="wp-block-accordion-item__text-wrap">
						<InnerBlocks
							templateLock={ false }
							renderAppender={
								() => <InnerBlocks.ButtonBlockAppender />
							}
							__experimentalTagName="div"
						/>
					</div>
				</div>
			</div>
		</>
	);
}

const AccordionItemEdit = compose( [
	withColors( { headingColor: 'heading-color' } ),
] )( AccordionItemBlock );

export default AccordionItemEdit;
