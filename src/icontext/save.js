/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	RichText,
} from '@wordpress/block-editor';

import renderSVG from "../../dist/blocks/renderIcon"

export default function save( { attributes } ) {
	const {
		icon,
		iconSize,
		text,
	} = attributes;

	const classes = classnames(
		'wp-block-icontext__outer-wrapper',
	);

	const iconStyle = {
		...( iconSize ? { width: iconSize+"px" } : {} ),
	};

	return (
		<div className={ classes }>
			<div className="wp-block-icontext__inner-wrap">
				{ icon && (
					<div style={ iconStyle } class="button-icon-before">{ renderSVG(icon) }</div>
				) }
				<RichText.Content
					tagName="p"
					value={ text }
					className="icon-text"
				/>
			</div>
		</div>
	);
}
