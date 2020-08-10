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
	isDefault: false,
} );
registerBlockStyle( 'core/quote' , {
	name: 'green-quote',
	label: __( 'Green' ),
	isDefault: false,
} );
registerBlockStyle( 'core/quote' , {
	name: 'yellow-quote',
	label: __( 'Yellow' ),
	isDefault: false,
} );
registerBlockStyle( 'core/quote' , {
	name: 'blue-quote',
	label: __( 'Blue' ),
	isDefault: false,
} );
registerBlockStyle( 'core/quote' , {
	name: 'burgundy-quote',
	label: __( 'Burgundy' ),
	isDefault: false,
} );
registerBlockStyle( 'core/quote' , {
	name: 'white-quote',
	label: __( 'White' ),
	isDefault: false,
} );
registerBlockStyle( 'core/quote' , {
	name: 'hide-quote',
	label: __( 'Hide Quote' ),
	isDefault: false,
} );
registerBlockStyle( 'core/gallery' , {
	name: 'brands',
	label: __( 'Brands' ),
	isDefault: false,
} );
registerBlockStyle( 'core/gallery' , {
	name: 'profiles',
	label: __( 'Profiles' ),
	isDefault: false,
} );
registerBlockStyle( 'core/button' , {
	name: 'text',
	label: __( 'Text' ),
	isDefault: true,
} );
