/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	RichText,
	getColorClassName,
	InnerBlocks,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		text,
		textSub,
		headerColor,
	} = attributes;

	const wrapperClasses = classnames(
		'empower-pro-blocks-scheduler',
		getColorClassName( 'header-color', headerColor ),
	);

	return (
		<div className={ wrapperClasses }>
			<InnerBlocks.Content />
		</div>
	);
}
