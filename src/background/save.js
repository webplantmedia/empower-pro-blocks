/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { InnerBlocks, getColorClassName } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import {
	dimRatioToClass,
} from './shared';
import svgline from '../svg/line';
import svgrightpill from '../svg/rightpill';

export default function save( { attributes } ) {
	const {
		backgroundColor,
		topHeight,
		topMobileHeight,
		bottomHeight,
		bottomMobileHeight,
		rightPillColor,
		leftPillColor,
		leftPillDimRatio,
		rightPillDimRatio,
		drawLine,
	} = attributes;

	const backgroundClass = getColorClassName(
		'background-color',
		backgroundColor
	);
	const rightPillClasses = classnames( 
		'below-fold-background',
		dimRatioToClass( rightPillDimRatio ),
		getColorClassName( 'svg-fill-color', rightPillColor ),
	);
	const leftPillClasses = classnames( 
		'below-fold-background-2',
		dimRatioToClass( leftPillDimRatio ),
		getColorClassName( 'svg-fill-color', leftPillColor ),
	);
	const className = classnames( backgroundClass, {
		'has-background': backgroundColor,
	} );

	const topHeightClassName = classnames( {
		[ 'mobile-height-' + topMobileHeight ]: topMobileHeight !== '',
	} );

	const bottomHeightClassName = classnames( {
		[ 'mobile-height-' + bottomMobileHeight ]: bottomMobileHeight !== '',
	} );


	return (
		<div className={ className }>
			{ drawLine && (
				<div className="wp-block-group draw-line">
					<figure class="wp-block-image size-full">
						{ svgline }
					</figure>
				</div>
			) }
			<div className="wp-block-background__inner-container">
				<div className={ topHeightClassName } style={ { height: topHeight } } aria-hidden />
				<div className="block-wrap">
					<InnerBlocks.Content />
				</div>
				<div className={ bottomHeightClassName } style={ { height: bottomHeight } } aria-hidden />
				{ leftPillColor && (
					<div className={ leftPillClasses }>
						{ svgrightpill }
					</div>
				) }
				{ rightPillColor && (
					<div className={ rightPillClasses }>
						{ svgrightpill }
					</div>
				) }
			</div>
		</div>
	);
}
