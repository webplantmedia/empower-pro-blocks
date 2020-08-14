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
import { __ } from '@wordpress/i18n';

const INNER_BLOCKS_TEMPLATE = [
	[
		'empower-pro-blocks/scheduler',
		{
		},
	],
	[
		'empower-pro-blocks/scheduler',
		{
		},
	],
	[
		'empower-pro-blocks/scheduler',
		{
		},
	],
];

function ScheduleEdit( {
	className,
} ) {

	const classes = classnames( className, 
		'wp-block-schedule-wrapper',
	);

	return (
		<>
			<div className={ classes }>
				<div className="wp-block-schedule__inner-wrap">
					<InnerBlocks 
						templateLock="insert"
						template={ INNER_BLOCKS_TEMPLATE }
					/>
				</div>
			</div>
		</>
	);
}

export default ScheduleEdit;
