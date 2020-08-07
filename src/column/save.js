/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const wrapperClasses = classnames(
		'empower-pro-blocks-column',
	);

	return (
		<div className={ wrapperClasses }>
			<InnerBlocks.Content />
		</div>
	);
}
