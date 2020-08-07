/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
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
import {
	InnerBlocks,
	withColors,
	InspectorControls,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import {
	dimRatioToClass,
} from './shared';

const MIN_SPACER_HEIGHT = 0;
const MAX_SPACER_HEIGHT = 500;

function BackgroundEdit( {
	attributes,
	setAttributes,
	hasInnerBlocks,
	backgroundColor,
	setBackgroundColor,
	leftPillColor,
	setLeftPillColor,
	rightPillColor,
	setRightPillColor,
	className,
} ) {

	const {
		leftPillDimRatio,
		rightPillDimRatio,
		topHeight,
		topMobileHeight,
		bottomHeight,
		bottomMobileHeight,
	} = attributes;

	const updateTopHeight = ( value ) => {
		setAttributes( {
			topHeight: value,
		} );
	};
	const updateTopMobileHeight = ( value ) => {
		setAttributes( {
			topMobileHeight: value,
		} );
	};
	const updateBottomHeight = ( value ) => {
		setAttributes( {
			bottomHeight: value,
		} );
	};
	const updateBottomMobileHeight = ( value ) => {
		setAttributes( {
			bottomMobileHeight: value,
		} );
	};

	const controls = (
		<>
			<InspectorControls>
				<PanelColorGradientSettings
					title={ __( 'Background' ) }
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
					title={ __( 'Left Pill Color' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: leftPillColor.color,
							onColorChange: setLeftPillColor,
							disableCustomColors: true,
							label: __( 'Color' ),
						},
					] }
				>
					<RangeControl
						label={ __( 'Opacity' ) }
						value={ leftPillDimRatio }
						onChange={ ( value ) =>
							setAttributes( {
								leftPillDimRatio: value,
							} )
						}
						min={ 10 }
						max={ 100 }
						step={ 10 }
						required
					/>
				</PanelColorGradientSettings>
				<PanelColorGradientSettings
					title={ __( 'Right Pill Color' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: rightPillColor.color,
							onColorChange: setRightPillColor,
							disableCustomColors: true,
							label: __( 'Color' ),
						},
					] }
				>
					<RangeControl
						label={ __( 'Opacity' ) }
						value={ rightPillDimRatio }
						onChange={ ( value ) =>
							setAttributes( {
								rightPillDimRatio: value,
							} )
						}
						min={ 10 }
						max={ 100 }
						step={ 10 }
						required
					/>
				</PanelColorGradientSettings>
				<PanelBody title={ __( 'Top Spacing' ) }>
					<RangeControl
						label={ __( 'Height in pixels' ) }
						min={ MIN_SPACER_HEIGHT }
						max={ Math.max( MAX_SPACER_HEIGHT, topHeight ) }
						separatorType={ 'none' }
						value={ topHeight }
						onChange={ updateTopHeight }
						step={ 10 }
					/>
					<RangeControl
						label={ __( 'Mobile height in pixels' ) }
						min={ MIN_SPACER_HEIGHT }
						max={ Math.max( MAX_SPACER_HEIGHT, topMobileHeight ) }
						separatorType={ 'none' }
						value={ topMobileHeight }
						onChange={ updateTopMobileHeight }
						step={ 10 }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Bottom Spacing' ) }>
					<RangeControl
						label={ __( 'Height in pixels' ) }
						min={ MIN_SPACER_HEIGHT }
						max={ Math.max( MAX_SPACER_HEIGHT, bottomHeight ) }
						separatorType={ 'none' }
						value={ bottomHeight }
						onChange={ updateBottomHeight }
						step={ 10 }
					/>
					<RangeControl
						label={ __( 'Mobile height in pixels' ) }
						min={ MIN_SPACER_HEIGHT }
						max={ Math.max( MAX_SPACER_HEIGHT, bottomMobileHeight ) }
						separatorType={ 'none' }
						value={ bottomMobileHeight }
						onChange={ updateBottomMobileHeight }
						step={ 10 }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	const classes = classnames( className, 
		{ [ backgroundColor.class ]: backgroundColor.class, }
	);

	const leftPillClasses = classnames( 
		'below-fold-background-2',
		dimRatioToClass( leftPillDimRatio ),
		{ [ leftPillColor.class ]: leftPillColor.class },
	);

	const rightPillClasses = classnames( 
		'below-fold-background',
		dimRatioToClass( rightPillDimRatio ),
		{ [ rightPillColor.class ]: rightPillColor.class },
	);

	const topHeightClassName = classnames( {
		[ 'mobile-height-' + topMobileHeight ]: topMobileHeight !== '',
	} );

	const bottomHeightClassName = classnames( {
		[ 'mobile-height-' + bottomMobileHeight ]: bottomMobileHeight !== '',
	} );

	return (
		<>
			{ controls }
			<div className={ classes }>
				<div className="wp-block-background__inner-container">
					<div className={ topHeightClassName } style={ { height: topHeight } } aria-hidden />
					<div className="block-wrap">
						<InnerBlocks
							renderAppender={
								hasInnerBlocks
									? undefined
									: () => (
											<InnerBlocks.ButtonBlockAppender />
									  )
							}
						/>
					</div>
					<div className={ bottomHeightClassName } style={ { height: bottomHeight } } aria-hidden />
				</div>
				{ leftPillColor.class && (
					<div className={ leftPillClasses }>
						<svg x="0px" y="0px" width="573px" height="716px" viewBox="0 0 573 716">
							<path fill="#FF7226" d="M515.2,692.9c60.5-41.3,76-123.8,34.7-184.2L242.1,57.8c-41.3-60.5-123.8-76-184.2-34.7 c-60.5,41.3-76,123.8-34.7,184.2l307.8,450.8C372.2,718.6,454.7,734.2,515.2,692.9"/>
						</svg>
					</div>
				) }
				{ rightPillColor.class && (
					<div className={ rightPillClasses }>
						<svg x="0px" y="0px" width="573px" height="716px" viewBox="0 0 573 716">
							<path fill="#FF7226" d="M515.2,692.9c60.5-41.3,76-123.8,34.7-184.2L242.1,57.8c-41.3-60.5-123.8-76-184.2-34.7 c-60.5,41.3-76,123.8-34.7,184.2l307.8,450.8C372.2,718.6,454.7,734.2,515.2,692.9"/>
						</svg>
					</div>
				) }
			</div>
		</>
	);
}

export default compose( [
	withSelect( ( select, { clientId } ) => {
		const { getBlock } = select( 'core/block-editor' );

		const block = getBlock( clientId );

		return {
			hasInnerBlocks: !! ( block && block.innerBlocks.length ),
		};
	} ),
	withColors( { backgroundColor: 'background-color', leftPillColor: 'svg-fill-color', rightPillColor: 'svg-fill-color' } ),
] )( BackgroundEdit );
