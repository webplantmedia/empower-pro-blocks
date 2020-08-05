/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ResizableBox, RangeControl } from '@wordpress/components';
import { compose, withInstanceId } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';

const MIN_SPACER_HEIGHT = 0;
const MAX_SPACER_HEIGHT = 500;

const RSpacerEdit = ( {
	attributes,
	isSelected,
	setAttributes,
	onResizeStart,
	onResizeStop,
} ) => {
	const { height, mobileHeight } = attributes;
	const updateHeight = ( value ) => {
		setAttributes( {
			height: value,
		} );
	};
	const updateMobileHeight = ( value ) => {
		setAttributes( {
			mobileHeight: value,
		} );
	};

	return (
		<>
			<ResizableBox
				className={ classnames(
					'block-library-spacer__resize-container',
					{
						'is-selected': isSelected,
						[ 'mobile-height-' + attributes.mobileHeight ]: attributes.mobileHeight,
					}
				) }
				size={ {
					height,
				} }
				minHeight={ 20 }
				enable={ {
					top: false,
					right: false,
					bottom: true,
					left: false,
					topRight: false,
					bottomRight: false,
					bottomLeft: false,
					topLeft: false,
				} }
				isSelected={ isSelected }
				onResizeStart={ onResizeStart }
				onResizeStop={ ( event, direction, elt, delta ) => {
					onResizeStop();
					const spacerHeight = Math.min(
						parseInt( height + delta.height, 10 ),
						MAX_SPACER_HEIGHT
					);
					updateHeight( spacerHeight );
				} }
			/>
			<InspectorControls>
				<PanelBody title={ __( 'Responsive spacer settings' ) }>
					<RangeControl
						label={ __( 'Height in pixels' ) }
						min={ MIN_SPACER_HEIGHT }
						max={ Math.max( MAX_SPACER_HEIGHT, height ) }
						separatorType={ 'none' }
						value={ height }
						onChange={ updateHeight }
						step={ 10 }
					/>
					<RangeControl
						label={ __( 'Mobile height in pixels' ) }
						min={ MIN_SPACER_HEIGHT }
						max={ Math.max( MAX_SPACER_HEIGHT, height ) }
						separatorType={ 'none' }
						value={ mobileHeight }
						onChange={ updateMobileHeight }
						step={ 10 }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};

export default compose( [
	withDispatch( ( dispatch ) => {
		const { toggleSelection } = dispatch( 'core/block-editor' );

		return {
			onResizeStart: () => toggleSelection( false ),
			onResizeStop: () => toggleSelection( true ),
		};
	} ),
	withInstanceId,
] )( RSpacerEdit );
