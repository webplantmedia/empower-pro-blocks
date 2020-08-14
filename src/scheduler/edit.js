/**
 * External dependencies
 */
import classnames from 'classnames';

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

/**
 * WordPress dependencies
 */
import { compose } from '@wordpress/compose';
import {
	RichText,
	MediaUpload,
	MediaReplaceFlow,
	withColors,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
	URLInput,
	InnerBlocks,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const ALLOWED_BLOCKS = [ 'core/paragraph' ];

function SchedulerEdit( {
	attributes,
	setAttributes,
	clientId,
	className,
	headerColor,
	setHeaderColor,
} ) {
	const {
		text,
		textSub,
	} = attributes;

	const controls = (
		<>
			<InspectorControls>
				<PanelColorGradientSettings
					title={ __( 'Header' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: headerColor.color,
							onColorChange: setHeaderColor,
							disableCustomColors: true,
							label: __( 'Color' ),
						},
					] }
				>
				</PanelColorGradientSettings>
			</InspectorControls>
		</>
	);

	const wrapperClasses = classnames( className,
		'empower-pro-blocks-scheduler',
		{ [ headerColor.class ]: headerColor.class, }
	);

	const { hasChildBlocks, rootClientId } = useSelect(
		( select ) => {
			const { getBlockOrder, getBlockRootClientId } = select(
				'core/block-editor'
			);

			return {
				hasChildBlocks: getBlockOrder( clientId ).length > 0,
				rootClientId: getBlockRootClientId( clientId ),
			};
		},
		[ clientId ]
	);

	return (
		<>
			<div className={ wrapperClasses }>
				<div class="column-title">
					<RichText
						tagName="span"
						placeholder={ __( 'Title' ) }
						value={ text }
						onChange={ ( value ) => setAttributes( { text: value } ) }
						withoutInteractiveFormatting
						className="span-title"
						formattingControls={ [] }
					/>
					<RichText
						tagName="span"
						placeholder={ __( 'Sub Title' ) }
						value={ textSub }
						onChange={ ( value ) => setAttributes( { textSub: value } ) }
						withoutInteractiveFormatting
						className="span-text"
						formattingControls={ [] }
					/>
				</div>
				<div class="column-data">
					<InnerBlocks
						templateLock={ false }
						allowedBlocks={ ALLOWED_BLOCKS }
						renderAppender={
							() => <InnerBlocks.ButtonBlockAppender />
						}
						__experimentalTagName="div"
					/>
				</div>
			</div>
		</>
	);
}

export default compose( [
	withColors( { headerColor: 'header-color' } ),
	withNotices,
] )( SchedulerEdit );
