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
		button1Text,
		button2Text,
		button3Text,
	} = attributes;

	const classes = classnames(
		'wp-block-filter-wrapper',
	);

	return (
		<div className={ classes }>
			<div className="wp-block-filter__inner-wrap">
				<div class="filtering" data-container=".our-statements">
					<div data-filter=".our-mission">
						<span class="plus"></span>
						<RichText.Content
							tagName="span"
							value={ button1Text }
							className="button1"
						/>
					</div>
					<div data-filter=".our-vision">
						<span class="plus"></span>
						<RichText.Content
							tagName="span"
							value={ button2Text }
							className="button2"
						/>
					</div>
					<div data-filter=".our-values">
						<span class="plus"></span>
						<RichText.Content
							tagName="span"
							value={ button3Text }
							className="button3"
						/>
					</div>
				</div>
				<div className="wp-block-group our-statements">
					<div className="wp-block-group__inner-container">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}
