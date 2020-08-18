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
		button1BackgroundColor,
		button2BackgroundColor,
		button3BackgroundColor,
	} = attributes;

	const classes = classnames(
		'wp-block-filter2-wrapper',
	);

	const button1Classes = classnames(
		'button1',
		'wp-block-button__link',
		getColorClassName( 'background-color', button1BackgroundColor ),
	)

	const button2Classes = classnames(
		'button2',
		'wp-block-button__link',
		getColorClassName( 'background-color', button2BackgroundColor ),
	)

	const button3Classes = classnames(
		'button3',
		'wp-block-button__link',
		getColorClassName( 'background-color', button3BackgroundColor ),
	)

	return (
		<div className={ classes }>
			<div className="wp-block-filter2__inner-wrap">
				<div class="filtering wp-block-buttons item-selected" data-container=".filter-content" data-collapse="false">
					<div class="wp-block-button is-style-text active" data-filter=".filter2-1">
						<RichText.Content
							tagName="a"
							value={ button1Text }
							className={ button1Classes }
						/>
					</div>
					<div class="wp-block-button is-style-text" data-filter=".filter2-2">
						<RichText.Content
							tagName="a"
							value={ button2Text }
							className={ button2Classes }
						/>
					</div>
					<div class="wp-block-button is-style-text" data-filter=".filter2-3">
						<RichText.Content
							tagName="a"
							value={ button3Text }
							className={ button3Classes }
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
