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
import { useRef } from '@wordpress/element';

function BackgroundEdit( {
	hasInnerBlocks,
	backgroundColor,
	setBackgroundColor,
	className,
} ) {

	const {
		backgroundColor,
		leftPillDimRatio,
		rightPillDimRatio,
	} = attributes;
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
			</InspectorControls>
		</>
	);

	return (
		<>
			<div className={ className }>
				<div className="wp-block-background__inner-container">
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
	withColors( { backgroundColor: 'background-color', leftPillColor: 'left-pill-color', rightPillColor: 'right-pill-color' } ),
] )( BackgroundEdit );
