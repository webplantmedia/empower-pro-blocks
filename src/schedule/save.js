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
		button1TextSub,
		button2Text,
		button2TextSub,
		button3Text,
		button3TextSub,
		headerColor,
	} = attributes;

	const classes = classnames(
		'wp-block-schedule-wrapper',
		getColorClassName( 'header-color', headerColor ),
	);

	return (
		<div className={ classes }>
			<div className="wp-block-schedule__inner-wrap">
				<div class="schedule-table" data-container=".the-schedule">
					<div class="column-box" data-schedule=".schedule1">
						<div class="column-title">
							<RichText.Content
								tagName="span"
								value={ button1Text }
								className="button1 span-title"
							/>
							<RichText.Content
								tagName="span"
								value={ button1TextSub }
								className="button1sub span-text"
							/>
						</div>
						<div class="column-text">
							<InnerBlocks.Content />
						</div>
					</div>
					<div class="column-box" data-schedule=".schedule2">
						<div class="column-title">
							<RichText.Content
								tagName="span"
								value={ button2Text }
								className="button2 span-title"
							/>
							<RichText.Content
								tagName="span"
								value={ button2TextSub }
								className="button2sub span-text"
							/>
						</div>
						<div class="column-text">
							<InnerBlocks.Content />
						</div>
					</div>
					<div class="column-box" data-schedule=".schedule3">
						<div class="column-title">
							<RichText.Content
								tagName="span"
								value={ button3Text }
								className="button3 span-title"
							/>
							<RichText.Content
								tagName="span"
								value={ button3TextSub }
								className="button3sub span-text"
							/>
						</div>
						<div class="column-text">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
