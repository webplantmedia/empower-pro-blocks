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
		drawLine,
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
				<PanelBody title={ __( 'Draw Line Animation' ) } initialOpen={ true }>
					<ToggleControl
						label={ __( 'Display' ) }
						onChange={ ( value ) => setAttributes( value ? { drawLine: true } : { drawLine: false } ) }
						checked={ drawLine === true }
					/>
				</PanelBody>
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
				{ drawLine && (
					<div className="wp-block-group draw-line">
						<figure class="wp-block-image size-full">
							<svg version="1.1" x="0px" y="0px" width="1583px" height="561.8px" viewBox="0 0 1583 561.8">
								<path fill="#292933" class="st0" d="M614.9,546.5c-24.6,0-52.9-31.6-80.3-62.3c-8.5-9.5-17.3-19.3-25.8-28.1c-0.4-0.4-0.4-1,0-1.4 c0.4-0.4,1-0.4,1.4,0c8.6,8.8,17.4,18.6,25.8,28.1c29,32.5,59,66.1,83.8,61.1c19.8-4,34.4-17.4,44.4-41 c40.5-114.7,92.1-209.2,153.5-281c53.2-62.2,115.7-109.6,185.8-140.7c129.3-57.5,264.7-52.8,373.5-49c94.1,3.3,168.5,5.9,204.2-32 c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4c-36.3,38.5-111.1,35.9-205.7,32.6c-108.6-3.8-243.8-8.5-372.7,48.8 c-70.8,31.5-131.3,77.3-185.1,140.2c-61.2,71.6-112.7,166-153.1,280.4c-10.3,24.3-25.3,38-45.8,42.2 C618.5,546.3,616.7,546.5,614.9,546.5z M1.4,561.7c87.2-34.7,138.3-22.6,179.3-12.9c24,5.7,44.7,10.6,67.7,5.4 c25-5.6,50.3-23,79.8-54.8c1.1-1.2,2.2-2.4,3.3-3.6l0.7-0.8c0.4-0.4,0.3-1-0.1-1.4c-0.4-0.4-1-0.3-1.4,0.1l-0.7,0.8 c-1.1,1.2-2.2,2.4-3.3,3.6c-63.4,68.2-97.8,60-145.6,48.7c-41.3-9.8-92.7-21.9-180.5,13c-0.5,0.2-0.8,0.8-0.6,1.3 c0.2,0.4,0.5,0.6,0.9,0.6C1.1,561.8,1.2,561.8,1.4,561.7z M339.5,486.8c0.5-0.6,1.1-1.3,1.6-1.9l0.8-0.9c0.4-0.4,0.3-1.1-0.1-1.4 c-0.4-0.4-1.1-0.3-1.4,0.1l-0.8,0.9c-0.5,0.6-1.1,1.3-1.6,1.9c-0.4,0.4-0.3,1,0.1,1.4c0.2,0.2,0.4,0.2,0.7,0.2 C339,487.1,339.3,487,339.5,486.8z M345.8,479.3l8.5-10.2c0.4-0.4,0.3-1.1-0.1-1.4c-0.4-0.4-1.1-0.3-1.4,0.1l-8.5,10.2 c-0.4,0.4-0.3,1.1,0.1,1.4c0.2,0.2,0.4,0.2,0.6,0.2C345.3,479.7,345.6,479.6,345.8,479.3z M364.4,457.1c22.9-26.6,43-44.6,67.2-45.8 c19-1,39.1,8.7,61.4,29.7c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4c-22.7-21.4-43.2-31.3-62.9-30.3c-24.8,1.3-45.4,19.5-68.6,46.5 c-0.4,0.4-0.3,1.1,0.1,1.4c0.2,0.2,0.4,0.2,0.7,0.2C363.9,457.4,364.2,457.3,364.4,457.1z M504.7,450.5c0.4-0.4,0.4-1,0-1.4 c-0.9-0.8-1.7-1.7-2.6-2.5c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4c0.9,0.8,1.7,1.6,2.6,2.5c0.2,0.2,0.4,0.3,0.7,0.3 C504.3,450.8,504.5,450.7,504.7,450.5z"/>
							</svg>
						</figure>
					</div>
				) }
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
