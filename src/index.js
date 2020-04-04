/**
 * WordPress dependencies
 */
import '@wordpress/core-data';
import '@wordpress/block-editor';
import {
	registerBlockType,
} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import * as hero from './hero';

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */
const registerBlock = ( block ) => {
	if ( ! block ) {
		return;
	}
	const { metadata, settings, name } = block;
	if ( metadata ) {
		settings.category = metadata.category;
	}
	registerBlockType( name, settings );
};

[
	// Common blocks are grouped at the top to prioritize their display
	// in various contexts — like the inserter and auto-complete components.
	// Register all remaining core blocks.
	hero,
].forEach( registerBlock );
