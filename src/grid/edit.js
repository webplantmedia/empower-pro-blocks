/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import {
	PanelBody,
	Button,
	FocalPointPicker,
	PanelRow,
	RangeControl,
	ToggleControl,
	TextControl,
	TextareaControl,
	SelectControl,
	withNotices,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	AlignmentToolbar,
	BlockVerticalAlignmentToolbar,
	InnerBlocks,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';

function GridEdit( { 
	attributes,
	setAttributes,
	className,
	clientId 
} ) {
	const {
		columns,
		spacing,
		rspacing,
		spacingRow,
		rspacingRow,
		verticalAlignment,
	} = attributes;

	const onVerticalAlignmentChange = ( alignment ) => {
		setAttributes( { verticalAlignment: alignment } );
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
				<PanelBody title={ __( 'Grid Settings' ) } initialOpen={ true }>
					<SelectControl
						label={ __( "Columns" ) }
						value={ columns }
						options={ [
							{ value: "", label: __( "2" ) },
							{ value: "3", label: __( "3" ) },
							{ value: "4", label: __( "4" ) },
							{ value: "7-3", label: __( "7/3" ) },
							{ value: "3-7", label: __( "3/7" ) },
							{ value: "6-4", label: __( "6/4" ) },
							{ value: "4-6", label: __( "4/6" ) },
							{ value: "25-35-20-20", label: __( "25/35/20/20" ) },
							{ value: "4--3--2--1", label: __( "4 > 3 > 2 > 1" ) },
							{ value: "3-7--3-7--1--1", label: __( "3/7 > 3/7 > 1 > 1" ) },
						] }
						onChange={ ( value ) => setAttributes( { columns: value } ) }
					/>
					<RangeControl
						label={ __( 'Grid Spacing' ) }
						value={ spacing }
						onChange={ ( value ) =>
							setAttributes( {
								spacing: value,
							} )
						}
						min={ 0 }
						max={ 100 }
						step={ 10 }
					/>
					<RangeControl
						label={ __( 'Grid Row Spacing' ) }
						value={ spacingRow }
						onChange={ ( value ) =>
							setAttributes( {
								spacingRow: value,
							} )
						}
						min={ 0 }
						max={ 100 }
						step={ 10 }
					/>
					<RangeControl
						label={ __( 'Responsive Grid Spacing' ) }
						value={ rspacing }
						onChange={ ( value ) =>
							setAttributes( {
								rspacing: value,
							} )
						}
						min={ 0 }
						max={ 100 }
						step={ 10 }
					/>
					<RangeControl
						label={ __( 'Responsive Grid Row Spacing' ) }
						value={ rspacingRow }
						onChange={ ( value ) =>
							setAttributes( {
								rspacingRow: value,
							} )
						}
						min={ 0 }
						max={ 100 }
						step={ 10 }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
	const hasInnerBlocks = useSelect(
		( select ) => {
			const { getBlock } = select( 'core/block-editor' );
			const block = getBlock( clientId );
			return !! ( block && block.innerBlocks.length );
		},
		[ clientId ]
	);

	const classes = classnames( className,
		columns ? 'grid-columns-' + columns : {},
		{ [ `is-vertically-aligned-${ verticalAlignment }` ]: verticalAlignment },
		spacing || spacing === 0 ? 'grid-gap-' + spacing : {},
		rspacing || rspacing === 0 ? 'r-grid-gap-' + rspacing : {},
		spacingRow || spacingRow === 0 ? 'grid-row-gap-' + spacingRow : {},
		rspacingRow || rspacingRow === 0 ? 'r-grid-row-gap-' + rspacingRow : {},
	);

	return (
		<>
			{ controls }
			<div className={ classes }>
				<InnerBlocks
					renderAppender={
						hasInnerBlocks
							? undefined
							: () => <InnerBlocks.ButtonBlockAppender />
					}
					__experimentalTagName="div"
					__experimentalPassedProps={ {
						className: 'wp-block-grid__inner-container',
					} }
				/>
			</div>
		</>
	);
}

export default GridEdit;
