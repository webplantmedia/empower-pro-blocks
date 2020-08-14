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

function dimRatioToClass( ratio ) {
	if ( ratio === 0 ) {
		return 'has-background-dim-value-0';
	}

	return ! ratio
		? null
		: 'has-background-dim-value-' + 10 * Math.round( ratio / 10 );
}

export default function save( { attributes } ) {
	const {
		text,
		textSub,
		dimRatio,
		headerColor,
	} = attributes;

	let headerColorClass = getColorClassName( 'header-color', headerColor );

	const wrapperClasses = classnames(
		'empower-pro-blocks-scheduler',
		headerColorClass,
	);

	const bgClasses = classnames( 
		'dim-bg',
		dimRatioToClass( dimRatio ), 
	);

	return (
		<div className={ wrapperClasses }>
			<div class="column-title">
				{ headerColorClass && (
					<div className={ bgClasses } />
				) }
				<RichText.Content
					tagName="span"
					value={ text }
					className="span-title"
				/>
				<RichText.Content
					tagName="span"
					value={ textSub }
					className="span-text"
				/>
			</div>
			<div class="column-data">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
