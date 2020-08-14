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

export default function save( { attributes } ) {
	const classes = classnames(
		'wp-block-schedule-wrapper',
	);

	return (
		<div className={ classes }>
			<div className="wp-block-schedule__inner-wrap">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
