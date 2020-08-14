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

const ALLOWED_BLOCKS = [ 'empower-pro-blocks/schedule-item' ];

function dimRatioToClass( ratio ) {
	if ( ratio === 0 ) {
		return 'has-background-dim-value-0';
	}

	return ! ratio
		? null
		: 'has-background-dim-value-' + 10 * Math.round( ratio / 10 );
}

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
		dimRatio,
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
					<RangeControl
						label={ __( 'Opacity' ) }
						value={ dimRatio }
						onChange={ ( value ) =>
							setAttributes( {
								dimRatio: value,
							} )
						}
						min={ 0 }
						max={ 100 }
						step={ 10 }
						required
					/>
				</PanelColorGradientSettings>
			</InspectorControls>
		</>
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

	const wrapperClasses = classnames( className,
		'empower-pro-blocks-scheduler',
		{ [ headerColor.class ]: headerColor.class, },
	);

	const bgClasses = classnames( 
		'dim-bg',
		dimRatioToClass( dimRatio ), 
	);

	return (
		<>
			{ controls }
			<div className={ wrapperClasses }>
				<div class="column-title">
					<div className={ bgClasses } />
					<RichText
						tagName="span"
						placeholder={ __( 'Title' ) }
						value={ text }
						onChange={ ( value ) => setAttributes( { text: value } ) }
						className="span-title"
					/>
					<RichText
						tagName="span"
						placeholder={ __( 'Sub Title' ) }
						value={ textSub }
						onChange={ ( value ) => setAttributes( { textSub: value } ) }
						className="span-text"
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
