/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
	BlockControls,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

function ColumnEdit( {
	setAttributes,
	clientId,
	className,
} ) {
	const wrapperClasses = classnames( className,
		'empower-pro-blocks-column',
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
				<InnerBlocks
					templateLock={ false }
					renderAppender={
						hasChildBlocks
							? undefined
							: () => <InnerBlocks.ButtonBlockAppender />
					}
					__experimentalTagName="div"
				/>
			</div>
		</>
	);
}

export default ColumnEdit;
