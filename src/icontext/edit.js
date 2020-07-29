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
	RichText,
	InspectorControls,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { withDispatch } from '@wordpress/data';

let svg_icons = Object.keys( EPIcon )

function IconTextEdit( {
	attributes,
	setAttributes,
	isSelected,
	className,
	noticeUI,
	toggleSelection,
	noticeOperations,
} ) {
	const {
		icon,
		iconSize,
		text,
	} = attributes;

	const { removeAllNotices, createErrorNotice } = noticeOperations;

	const controls = (
		<>
			<InspectorControls>
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
						max={ 30 }
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
						tagName="p"
						placeholder={ __( 'Text' ) }
						value={ text }
						onChange={ ( value ) => setAttributes( { text: value } ) }
						withoutInteractiveFormatting
						className="icon-text"
					/>
				</div>
			</div>
		</>
	);
}

export default compose( [
	withDispatch( ( dispatch ) => {
		const { toggleSelection } = dispatch( 'core/block-editor' );

		return {
			toggleSelection,
		};
	} ),
	withNotices,
	withInstanceId,
] )( IconTextEdit );
