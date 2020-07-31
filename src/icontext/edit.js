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
	MediaUpload,
	withColors,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
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
	headingColor,
	setHeadingColor,
	iconColor,
	setIconColor,
} ) {
	const {
		icon,
		iconSize,
		topOffset,
		iconSpacing,
		marginBottom,
		text,
		heading,
		hasHeading,
		verticalAlignment,
		level,
		image,
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
				{ hasHeading && (
					<PanelColorGradientSettings
						title={ __( 'Heading' ) }
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
					</PanelColorGradientSettings>
				) }
				<PanelBody title={ __( 'Text settings' ) }>
					<FontSizePicker
						value={ fontSize.size }
						onChange={ setFontSize }
					/>
				</PanelBody>
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
						</Fragment>
					}
					<hr />
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
					<RangeControl
						label={ __( 'Icon Spacing' ) }
						value={ iconSpacing }
						onChange={ ( value ) =>
							setAttributes( {
								iconSpacing: value,
							} )
						}
						min={ 0 }
						max={ 250 }
						step={ 1 }
					/>
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
		'wp-block-icontext__outer-wrapper',
		{ [ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment },
	);

	const headingClasses = classnames( 
		'icon-heading', 
		{ [ headingColor.class ]: headingColor.class, }
	);

	const iconClasses = classnames( 
		'button-icon-before', 
		{ [ 'is-image-icon' ]: 'image' === imageIcon },
		{ [ iconColor.class ]: iconColor.class, }
	);

	const iconStyle = {
		...( iconSpacing || iconSpacing === 0 ? { flexBasis: iconSpacing+"px" } : {} ),
	};

	const containerStyle = {
		...( marginBottom || marginBottom === 0 ? { marginBottom: marginBottom+"px" } : {} ),
	};

	const iconInnerStyle = {
		...( iconSize ? { width: iconSize+"px" } : {} ),
		...( topOffset ? { marginTop: topOffset+"px" } : {} ),
	};

	const tagName = 'h' + level;

	return (
		<>
			{ controls }
			<div style={ containerStyle } className={ classes }>
				<div className="wp-block-icontext__inner-wrap">

					{ "icon" === imageIcon && icon && (
						<div style={ iconStyle } class={ iconClasses }>
							<div class="button-icon-inner" style={ iconInnerStyle }>{ renderSVG(icon) }</div>
						</div>
					) }
					{ "image" === imageIcon && image && (
						<div style={ iconStyle } class={ iconClasses }>
							<div class="button-icon-inner" style={ iconInnerStyle }><img src={image.url} /></div>
						</div>
					) }
					<div class="wp-block-icontext__text-wrap">
						{ hasHeading && (
							<RichText
								placeholder={ __( 'Start writing' ) }
								value={ heading }
								onChange={ ( value ) => setAttributes( { heading: value } ) }
								className={ headingClasses }
								tagName={ tagName }
							/>
						) }
						<RichText
							placeholder={ __( 'Start writing' ) }
							value={ text }
							onChange={ ( value ) => setAttributes( { text: value } ) }
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

const IconTextEdit = compose( [
	withFontSizes( 'fontSize' ),
	withColors( { headingColor: 'heading-color', iconColor: 'icon-color' } ),
] )( IconTextBlock );

export default IconTextEdit;
