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
			<div class="column-title">
				<RichText.Content
					tagName="span"
					value={ text }
					className="span-title"
				/>
				<RichText.Content
					tagName="span"
					value={ textSub }
					className="span-text"
				/>
			</div>
			<div class="column-data">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
