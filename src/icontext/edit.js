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
	RangeControl,
	ToggleControl,
	withNotices,
} from '@wordpress/components';

import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import EPIcon from "../../dist/blocks/Icon.json"
import renderSVG from "../../dist/blocks/renderIcon"

import { compose, withInstanceId } from '@wordpress/compose';
import { rawShortcut, displayShortcut } from '@wordpress/keycodes';
import {
	AlignmentToolbar,
	BlockVerticalAlignmentToolbar,
	BlockControls,
	FontSizePicker,
	InspectorControls,
	withFontSizes,
	RichText,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { withDispatch } from '@wordpress/data';

let svg_icons = Object.keys( EPIcon )

function IconTextBlock( {
	attributes,
	setAttributes,
	isSelected,
	className,
	toggleSelection,
	fontSize,
	setFontSize,
} ) {
	const {
		icon,
		iconSize,
		topOffset,
		iconSpacing,
		text,
		heading,
		hasHeading,
		verticalAlignment,
		level,
	} = attributes;

	const onVerticalAlignmentChange = ( alignment ) => {
		setAttributes( { verticalAlignment: alignment } );
	};

	const controls = (
		<>
			<BlockControls>
				<BlockVerticalAlignmentToolbar
					onChange={ onVerticalAlignmentChange }
					value={ verticalAlignment }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Heading settings' ) }>
					<ToggleControl
						label={ __( 'Display heading' ) }
						onChange={ ( value ) => setAttributes( value ? { hasHeading: true } : { hasHeading: false } ) }
						checked={ hasHeading === true }
					/>
					{ hasHeading && (
						<HeadingToolbar
							isCollapsed={ false }
							minLevel={ 2 }
							maxLevel={ 7 }
							selectedLevel={ level }
							onChange={ ( value ) =>
								setAttributes( { level: value } )
							}
						/>
					) }
				</PanelBody>
				<PanelBody title={ __( 'Text settings' ) }>
					<FontSizePicker
						value={ fontSize.size }
						onChange={ setFontSize }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Icon Text' ) } initialOpen={ true }>
					<Fragment>
						<p className="">{__( "Icon" )}</p>
						<FontIconPicker
							icons={svg_icons}
							renderFunc= {renderSVG}
							theme="default"
							value={icon}
							onChange={ ( value ) => setAttributes( { icon: value } ) }
							isMulti={false}
							noSelectedPlaceholder= { __( "Select Icon" ) }
						/>
					</Fragment>
					<RangeControl
						label={ __( 'Icon Size' ) }
						value={ iconSize }
						onChange={ ( value ) =>
							setAttributes( {
								iconSize: value,
							} )
						}
						min={ 7 }
						max={ 50 }
						step={ 1 }
					/>
					<RangeControl
						label={ __( 'Icon Top Offset' ) }
						value={ topOffset }
						onChange={ ( value ) =>
							setAttributes( {
								topOffset: value,
							} )
						}
						min={ -30 }
						max={ 30 }
						step={ 1 }
					/>
					<RangeControl
						label={ __( 'Icon Spacing' ) }
						value={ iconSpacing }
						onChange={ ( value ) =>
							setAttributes( {
								iconSpacing: value,
							} )
						}
						min={ 0 }
						max={ 40 }
						step={ 1 }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	const classes = classnames( className, 
		'wp-block-icontext__outer-wrapper',
		{ [ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment },
	);

	const iconStyle = {
		...( iconSize ? { width: iconSize+"px" } : {} ),
		...( topOffset ? { marginTop: topOffset+"px" } : {} ),
		...( iconSpacing ? { paddingRight: iconSpacing+"px" } : {} ),
	};

	const tagName = 'h' + level;

	return (
		<>
			{ controls }
			<div className={ classes }>
				<div className="wp-block-icontext__inner-wrap">
					{ icon && (
						<div style={ iconStyle } class="button-icon-before">{ renderSVG(icon) }</div>
					) }
					<div class="wp-block-icontext__text-wrap">
						{ hasHeading && (
							<RichText
								placeholder={ __( 'Start writing' ) }
								value={ heading }
								onChange={ ( value ) => setAttributes( { heading: value } ) }
								withoutInteractiveFormatting
								className="icon-heading"
								tagName={ tagName }
							/>
						) }
						<RichText
							placeholder={ __( 'Start writing' ) }
							value={ text }
							onChange={ ( value ) => setAttributes( { text: value } ) }
							withoutInteractiveFormatting
							tagName="p"
							className={ classnames( 'icon-text', {
								[ fontSize.class ]: fontSize.class,
							} ) }
							style={ {
								fontSize: fontSize.size
									? fontSize.size + 'px'
									: undefined,
							} }
						/>
					</div>
				</div>
			</div>
		</>
	);
}

const IconTextEdit = compose( [ withFontSizes( 'fontSize' ) ] )(
	IconTextBlock
);

export default IconTextEdit;
