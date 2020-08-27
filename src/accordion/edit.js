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
		'empower-pro-blocks/accordion-item',
		{
			heading: "According Item 1", 
		},
	],
	[
		'empower-pro-blocks/accordion-item',
		{
			heading: "According Item 2", 
		},
	],
	[
		'empower-pro-blocks/accordion-item',
		{
			heading: "According Item 3", 
		},
	],
];

const ALLOWED_BLOCKS = [ 'empower-pro-blocks/accordion-item' ];

function AccordionEdit( {
	className,
} ) {

	const classes = classnames( className, 
		'wp-block-accordion-wrapper',
	);

	return (
		<>
			<div className={ classes }>
				<div className="wp-block-accordion__inner-wrap">
					<InnerBlocks 
						templateLock={ false }
						template={ INNER_BLOCKS_TEMPLATE }
						allowedBlocks={ ALLOWED_BLOCKS }
						renderAppender={
							() => <InnerBlocks.ButtonBlockAppender />
						}
						__experimentalTagName="div"
					/>
				</div>
			</div>
		</>
	);
}

export default AccordionEdit;
