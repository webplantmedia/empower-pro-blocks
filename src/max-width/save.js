/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
export default function save( { attributes } ) {
	const {
		maxWidth
	} = attributes;

	const classes = classnames(
		'wp-block-max-width__wrapper',
	);

	const style = {
		...( maxWidth ? { maxWidth: maxWidth+"px" } : {} ),
	};

	return (
		<div className={ classes } style={ style }>
			<div className="wp-block-max-width__inner" style={ style }>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
