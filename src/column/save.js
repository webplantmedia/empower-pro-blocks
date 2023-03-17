/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

export default function save() {
	const blockProps = useBlockProps.save({});

	const innerBlocksProps = useInnerBlocksProps.save({});

	return (
		<div {...blockProps}>
			<div {...innerBlocksProps} />
		</div>
	);
}
