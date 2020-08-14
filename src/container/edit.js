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
	SelectControl,
} from '@wordpress/components';

import { compose, withInstanceId } from '@wordpress/compose';
import {
	InspectorControls,
	withColors,
	InnerBlocks,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';


/**
 * Module Constants
 */
const ALLOWED_MEDIA_TYPES = [ 'image' ];

function ContainerEdit( {
	attributes,
	setAttributes,
	isSelected,
	className,
	containerColor,
	setContainerColor,
	backgroundColor,
	setBackgroundColor,
} ) {
	const {
		containerStyle,
	} = attributes;

	const controls = (
		<>
			<InspectorControls>
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
					title={ __( 'Container Color' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: containerColor.color,
							onColorChange: setContainerColor,
							disableCustomColors: true,
							label: __( 'Color' ),
						},
					] }
				>
				</PanelColorGradientSettings>
				<PanelBody title={ __( 'Container Style' ) } initialOpen={ true }>
					<SelectControl
						label={ __( "Style" ) }
						value={ containerStyle }
						options={ [
							{ value: "", label: __( "Default" ) },
						] }
						onChange={ ( value ) => setAttributes( { containerStyle: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	const classes = classnames( className, 
		'wp-block-container__outer-wrapper',
		'plain' === containerStyle ? 'is-plain-style' : {},
		{
			[ containerColor.class ]: containerColor.class,
		}
	);

	const innerClasses = classnames( 'wp-block-container__inner-content', {
		[ backgroundColor.class ]: backgroundColor.class,
		[ 'has-background-color' ]: backgroundColor.class,
	} );

	return (
		<>
			{ controls }
			<div className={ classes }>
				<div className="container-content">
					<div className={ innerClasses }>
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

export default compose( [
	withColors( { containerColor: 'container-color', backgroundColor: 'background-color' } ),
] )( ContainerEdit );
