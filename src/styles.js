/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import '@wordpress/core-data';
import '@wordpress/block-editor';
import {
	registerBlockStyle,
	registerBlockType,
} from '@wordpress/blocks';

registerBlockStyle( 'core/quote' , {
	name: 'purple-quote',
	label: __( 'Purple' ),
} );
registerBlockStyle( 'core/quote' , {
	name: 'green-quote',
	label: __( 'Green' ),
} );
registerBlockStyle( 'core/quote' , {
	name: 'yellow-quote',
	label: __( 'Yellow' ),
} );
registerBlockStyle( 'core/quote' , {
	name: 'blue-quote',
	label: __( 'Blue' ),
} );
registerBlockStyle( 'core/quote' , {
	name: 'burgundy-quote',
	label: __( 'Burgundy' ),
} );
registerBlockStyle( 'core/quote' , {
	name: 'white-quote',
	label: __( 'White' ),
} );
registerBlockStyle( 'core/quote' , {
	name: 'hide-quote',
	label: __( 'Hide Quote' ),
} );
registerBlockStyle( 'core/gallery' , {
	name: 'brands',
	label: __( 'Brands' ),
} );
