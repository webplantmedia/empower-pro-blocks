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
	SelectControl,
	RangeControl,
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

function MaxWidthEdit( {
	attributes,
	setAttributes,
	isSelected,
	className,
} ) {
	const {
		maxWidth,
	} = attributes;

	const controls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Max Width' ) } initialOpen={ true }>
					<RangeControl
						label={ __( 'Spacing' ) }
						value={ maxWidth }
						onChange={ ( value ) =>
							setAttributes( {
								maxWidth: value,
							} )
						}
						min={ 300 }
						max={ 1200 }
						step={ 10 }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	const classes = classnames( className, 
		'wp-block-max-width__wrapper',
	);

	const style = {
		...( maxWidth ? { maxWidth: maxWidth+"px" } : {} ),
	};

	return (
		<>
			{ controls }
			<div className={ classes } style={ style }>
				<InnerBlocks
					templateLock={ false }
					renderAppender={
						() => <InnerBlocks.ButtonBlockAppender />
					}
					__experimentalTagName="div"
				/>
			</div>
		</>
	);
}

export default MaxWidthEdit;
