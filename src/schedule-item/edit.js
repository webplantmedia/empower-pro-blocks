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
	PanelRow,
	Button,
	RangeControl,
	ToggleControl,
	SelectControl,
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
	InspectorControls,
	MediaUpload,
	withColors,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
	RichText,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { withDispatch } from '@wordpress/data';

let svg_icons = Object.keys( EPIcon )

function ScheduleItemBlock( {
	attributes,
	setAttributes,
	isSelected,
	className,
	toggleSelection,
	textColor,
	setTextColor,
	iconColor,
	setIconColor,
} ) {
	const {
		icon,
		iconSize,
		topOffset,
		marginBottom,
		text,
		info,
		heading,
		verticalAlignment,
		image,
		imageStyle,
		grayscale,
		highlight,
		imageIcon,
	} = attributes;

	const onVerticalAlignmentChange = ( alignment ) => {
		setAttributes( { verticalAlignment: alignment } );
	};

	const onRemoveImage = () => {
		setAttributes( { image: null } )
	}

	const onSelectImage = ( media ) => {

		if ( ! media || ! media.url ) {
			setAttributes( { image: null } )
			return
		}

		if ( ! media.type || "image" != media.type ) {
			return
		}

		setAttributes( { image: media } )
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
				<PanelColorGradientSettings
					title={ __( 'Text Settings' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: textColor.color,
							onColorChange: setTextColor,
							disableCustomColors: true,
							label: __( 'Color' ),
						},
					] }
				>
					<ToggleControl
						label={ __( 'Highlight' ) }
						onChange={ ( value ) => setAttributes( value ? { highlight: true } : { highlight: false } ) }
						checked={ highlight === true }
					/>
					<hr />
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
				</PanelColorGradientSettings>
				<PanelBody title={ __( 'Icon' ) } initialOpen={ true }>
					<SelectControl
						label={ __( "Image / Icon" ) }
						value={ imageIcon }
						options={ [
							{ value: "icon", label: __( "Icon" ) },
							{ value: "image", label: __( "Image" ) },
						] }
						onChange={ ( value ) => setAttributes( { imageIcon: value } ) }
					/>
					{ "icon" === imageIcon &&
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
					}
					{ "image" === imageIcon &&
						<Fragment>
							<MediaUpload
								title={ __( "Select Image" ) }
								onSelect={ onSelectImage }
								allowedTypes={ [ "image" ] }
								value={ image }
								render={ ( { open } ) => (
									<Button isDefault onClick={ open }>
										{ ! image ? __( "Select Image" ) : __( "Replace image" ) }
									</Button>
								) }
							/>
							{ image &&
								( <Button isDefault className="" onClick={ onRemoveImage } isLink isDestructive>
									{ __( "Remove Image" ) }
								</Button> )
							}
							<hr />
							<SelectControl
								label={ __( "Image Style" ) }
								value={ imageStyle }
								options={ [
									{ value: "", label: __( "None" ) },
									{ value: "circle", label: __( "Circle" ) },
									{ value: "hex", label: __( "Hex" ) },
								] }
								onChange={ ( value ) => setAttributes( { imageStyle: value } ) }
							/>
							<ToggleControl
								label={ __( 'Grayscale' ) }
								onChange={ ( value ) => setAttributes( value ? { grayscale: true } : { grayscale: false } ) }
								checked={ grayscale === true }
							/>
							<hr />
						</Fragment>
					}
					<RangeControl
						label={ __( 'Icon Size' ) }
						value={ iconSize }
						onChange={ ( value ) =>
							setAttributes( {
								iconSize: value,
							} )
						}
						min={ 7 }
						max={ 150 }
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
						min={ -50 }
						max={ 50 }
						step={ 1 }
					/>
				</PanelBody>
				<PanelColorGradientSettings
					title={ __( 'Icon Color' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: iconColor.color,
							onColorChange: setIconColor,
							disableCustomColors: true,
							label: __( 'Color' ),
						},
					] }
				>
				</PanelColorGradientSettings>
			</InspectorControls>
		</>
	);

	const classes = classnames( className, 
		'wp-block-schedule-item__outer-wrapper',
		{ [ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment },
		highlight ? 'schedule-highlight' : {},
		{ [ textColor.class ]: textColor.class },
	);

	const headingClasses = classnames( 
		'icon-heading', {
	} );

	const subHeadingClasses = classnames( 
		'icon-text', {
	} );

	const iconClasses = classnames( 
		'button-icon-before', 
		grayscale ? 'grayscale' : {},
		imageStyle ? 'image-style-' + imageStyle : {}, 
		{ [ 'is-image-icon' ]: 'image' === imageIcon },
		{ [ iconColor.class ]: iconColor.class, }
	);

	const containerStyle = {
		...( marginBottom || marginBottom === 0 ? { paddingBottom: marginBottom+"px" } : {} ),
	};

	const iconInnerStyle = {
		...( iconSize ? { width: iconSize+"px" } : {} ),
		...( imageStyle ? { height: iconSize+"px" } : {} ),
		...( topOffset ? { marginTop: topOffset+"px" } : {} ),
	};

	return (
		<>
			{ controls }
			<div style={ containerStyle } className={ classes }>
				<div className="wp-block-schedule-item__inner-wrap">

					<div class={ iconClasses }>
						{ "icon" === imageIcon && icon && (
							<div class="button-icon-inner" style={ iconInnerStyle }>{ renderSVG(icon) }</div>
						) }
						{ "image" === imageIcon && image && (
							<div class="button-icon-inner" style={ iconInnerStyle }><img src={image.url} /></div>
						) }
					</div>
					<div class="wp-block-schedule-item__text-wrap">
						<RichText
							placeholder={ __( 'Heading' ) }
							value={ heading }
							onChange={ ( value ) => setAttributes( { heading: value } ) }
							className={ headingClasses }
							tagName="span"
							withoutInteractiveFormatting
						/>
						<span class="icon-text-wrapper">
							<RichText
								placeholder={ __( 'Text' ) }
								value={ text }
								onChange={ ( value ) => setAttributes( { text: value } ) }
								tagName="span"
								className={ subHeadingClasses }
								withoutInteractiveFormatting
							/>
						</span>
						<RichText
							placeholder={ __( 'Info' ) }
							value={ info }
							onChange={ ( value ) => setAttributes( { info: value } ) }
							tagName="span"
							className="icon-info"
							withoutInteractiveFormatting
						/>
					</div>
				</div>
			</div>
		</>
	);
}

const ScheduleItemEdit = compose( [
	withColors( { textColor: 'item-color', iconColor: 'icon-color' } ),
] )( ScheduleItemBlock );

export default ScheduleItemEdit;
