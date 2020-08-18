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
		button4Text,
		button1BackgroundColor,
		button2BackgroundColor,
		button3BackgroundColor,
		button4BackgroundColor,
		buttons,
	} = attributes;

	const classes = classnames(
		'wp-block-filter-selector-wrapper',
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

	const button4Classes = classnames(
		'button4',
		'wp-block-button__link',
		getColorClassName( 'background-color', button4BackgroundColor ),
	)
	console.log(buttons);

	return (
		<div className={ classes }>
			<div className="wp-block-filter-selector__inner-wrap">
				<div class="filtering wp-block-buttons item-selected" data-container=".filter-content" data-collapse="false">
					<div class="wp-block-button is-style-text active" data-filter=".filter-selector-1">
						<RichText.Content
							tagName="a"
							value={ button1Text }
							className={ button1Classes }
						/>
					</div>
					<div class="wp-block-button is-style-text" data-filter=".filter-selector-2">
						<RichText.Content
							tagName="a"
							value={ button2Text }
							className={ button2Classes }
						/>
					</div>
					<div class="wp-block-button is-style-text" data-filter=".filter-selector-3">
						<RichText.Content
							tagName="a"
							value={ button3Text }
							className={ button3Classes }
						/>
					</div>
					{ buttons > 3 && (
						<div class="wp-block-button is-style-text" data-filter=".filter-selector-4">
							<RichText.Content
								tagName="a"
								value={ button4Text }
								className={ button4Classes }
							/>
						</div>
					) }
				</div>
			</div>
		</div>
	);
}
