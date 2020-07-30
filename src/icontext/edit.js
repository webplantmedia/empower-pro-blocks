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
	RangeControl,
	withNotices,
} from '@wordpress/components';

import FontIconPicker from "@fonticonpicker/react-fonticonpicker"
import EPIcon from "../../dist/blocks/Icon.json"
import renderSVG from "../../dist/blocks/renderIcon"

import { compose, withInstanceId } from '@wordpress/compose';
import { rawShortcut, displayShortcut } from '@wordpress/keycodes';
import {
	AlignmentToolbar,
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
	} = attributes;

	const controls = (
		<>
			<InspectorControls>
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
	);

	const iconStyle = {
		...( iconSize ? { width: iconSize+"px" } : {} ),
		...( topOffset ? { marginTop: topOffset+"px" } : {} ),
		...( iconSpacing ? { paddingRight: iconSpacing+"px" } : {} ),
	};

	return (
		<>
			{ controls }
			<div className={ classes }>
				<div className="wp-block-icontext__inner-wrap">
					{ icon && (
						<div style={ iconStyle } class="button-icon-before">{ renderSVG(icon) }</div>
					) }
					<RichText
						placeholder={ __( 'Text' ) }
						value={ text }
						onChange={ ( value ) => setAttributes( { text: value } ) }
						withoutInteractiveFormatting
						className="icon-text"
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
		</>
	);
}

const IconTextEdit = compose( [ withFontSizes( 'fontSize' ) ] )(
	IconTextBlock
);

export default IconTextEdit;
