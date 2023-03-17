/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { useInnerBlocksProps, useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

function ColumnEdit() {
	const blockProps = useBlockProps({});

	const innerBlocksProps = useInnerBlocksProps(
		{},
		{
			templateLock: false,
		}
	);

	return (
		<>
			<div {...blockProps}>
				<div {...innerBlocksProps} />
			</div>
		</>
	);
}

export default ColumnEdit;
