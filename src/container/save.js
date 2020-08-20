/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	InnerBlocks,
	getColorClassName,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
export default function save( { attributes } ) {
	const {
		containerColor,
		containerStyle,
		containerSize,
		backgroundColor,
	} = attributes;

	const classes = classnames(
		'wp-block-container__outer-wrapper',
		'plain' === containerStyle ? 'is-plain-style' : {},
		'small' === containerSize ? 'is-small-size' : {},
		getColorClassName( 'container-color', containerColor ),
	);

	const backgroundColorClassName = getColorClassName( 'background-color', backgroundColor );
	console.log(backgroundColorClassName);

	const innerClasses = classnames(
		'wp-block-container__inner-content',
		{ [ backgroundColorClassName ]: backgroundColorClassName }, 
		{ [ "has-background-color" ]: backgroundColorClassName },
	);

	return (
		<div className={ classes }>
			<div className="container-content">
				<div className={ innerClasses }>
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
