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
		leftPillTop,
		rightPillTop,
		drawLineTop,
		slant,
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

	const className = classnames( {
		[ 'display-' + slant + '-slant' ]: slant !== "",
	} );

	const innerClasses = classnames(
		"wp-block-background__inner-container",
	);

	const backgroundClasses = classnames(
		backgroundClass, 
		"wp-block-background__color-container",
	);

	const topHeightClassName = classnames( {
		[ 'mobile-height-' + topMobileHeight ]: topMobileHeight !== '',
	} );

	const bottomHeightClassName = classnames( {
		[ 'mobile-height-' + bottomMobileHeight ]: bottomMobileHeight !== '',
	} );

	const leftPillStyle = {
		...( leftPillTop || leftPillTop === 0 ? { top: leftPillTop+"px" } : {} ),
	};

	const rightPillStyle = {
		...( rightPillTop || rightPillTop === 0 ? { top: rightPillTop+"px" } : {} ),
	};

	const drawLineStyle = {
		...( drawLineTop || drawLineTop === 0 ? { top: drawLineTop+"px" } : {} ),
	};

	return (
		<div className={ className }>
			{ drawLine && (
				<div className="wp-block-group draw-line" style={ drawLineStyle }>
					<figure class="wp-block-image size-full">
						{ svgline }
					</figure>
				</div>
			) }
			{ leftPillColor && (
				<div className={ leftPillClasses } style={ leftPillStyle }>
					{ svgrightpill }
				</div>
			) }
			{ rightPillColor && (
				<div className={ rightPillClasses } style={ rightPillStyle }>
					{ svgrightpill }
				</div>
			) }
			<div className={ backgroundClasses } />
			<div className={ innerClasses }>
				<div className={ topHeightClassName } style={ { height: topHeight } } aria-hidden />
				<div className="block-wrap">
					<InnerBlocks.Content />
				</div>
				<div className={ bottomHeightClassName } style={ { height: bottomHeight } } aria-hidden />
			</div>
		</div>
	);
}
