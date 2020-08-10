/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	RichText,
	getFontSizeClass,
	getColorClassName,
} from '@wordpress/block-editor';

import renderSVG from "../../dist/blocks/renderIcon"

/**
 * Internal dependencies
 */
import svgleftpill from '../../dist/svg/leftpill';
import svgrightpill from '../../dist/svg/rightpill';

export default function save( { attributes } ) {
	const {
		url,
		heading,
		level,
		text,
		button1Text,
		fontSize,
		customFontSize,
		button1URL,
		button1LinkTarget,
		cardColor,
		cardStyle,
		textColor,
	} = attributes;

	const classes = classnames(
		'wp-block-card__outer-wrapper',
		'plain' === cardStyle ? 'is-plain-style' : {},
		getColorClassName( 'card-color', cardColor ),
	);

	const fontSizeClass = getFontSizeClass( fontSize );

	const pStyles = {
		fontSize: fontSizeClass ? undefined : customFontSize,
	};

	const textColorClassName = getColorClassName( 'text-color', textColor );

	const pClasses = classnames( 'card-text',
		textColorClassName, 
		{ [ "has-text-color" ]: textColorClassName },
		{ [ fontSizeClass ]: fontSizeClass, }
	);

	const tagName = 'h' + level;

	return (
		<div className={ classes }>
			<div className="card-content">
				<div className="wp-block-card__inner-content">
					{ url && (
						<div class="wp-block-image">
							<img src={url} />
						</div>
					) }
					<RichText.Content
						className="card-heading"
						value={ heading }
						tagName={ tagName }
					/>
					<RichText.Content
						tagName="p"
						value={ text }
						className={ pClasses }
						style={ pStyles }
					/>
					{ button1Text && (
						<div class="wp-block-buttons">
							<div class="wp-block-button is-style-text">
								<RichText.Content
									tagName="a"
									value={ button1Text }
									className="wp-block-button__link button1"
									value={ button1Text }
									href={ button1URL }
									target={ button1LinkTarget }
								/>
							</div>
						</div>
					) }
				</div>
			</div>
		</div>
	);
}
