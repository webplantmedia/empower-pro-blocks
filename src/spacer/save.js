/**
 * External dependencies
 */
import classnames from 'classnames';

export default function save( { attributes } ) {
	const className = classnames( {
		[ 'mobile-height-' + attributes.mobileHeight ]: attributes.mobileHeight !== '',
	} );

	return <div className={ className } style={ { height: attributes.height } } aria-hidden />;
}
