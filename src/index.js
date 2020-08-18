/**
 * WordPress dependencies
 */
import '@wordpress/core-data';
import '@wordpress/block-editor';
import {
	registerBlockType,
	unstable__bootstrapServerSideBlockDefinitions,
} from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import * as styles from './styles.js';
import * as hero from './hero';
import * as hero2 from './hero2';
import * as icontext from './icontext';
import * as iconline from './iconline';
import * as spacer from './spacer';
import * as video from './video';
import * as background from './background';
import * as filter from './filter';
import * as column from './column';
import * as grid from './grid';
import * as card from './card';
import * as profile from './profile';
import * as footer from './footer';
import * as schedule from './schedule';
import * as scheduler from './scheduler';
import * as scheduleItem from './schedule-item';
import * as container from './container';
import * as maxWidth from './max-width';
import * as filterSelector from './filter-selector';

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
	const { settings, metadata, name } = block;
	if ( metadata ) {
		unstable__bootstrapServerSideBlockDefinitions( { [ name ]: metadata } );
	}
	registerBlockType( name, settings );
};

[
	// Common blocks are grouped at the top to prioritize their display
	// in various contexts — like the inserter and auto-complete components.
	// Register all remaining core blocks.
	hero,
	hero2,
	icontext,
	iconline,
	spacer,
	video,
	background,
	filter,
	column,
	grid,
	card,
	profile,
	footer,
	schedule,
	scheduler,
	scheduleItem,
	container,
	maxWidth,
	filterSelector,
].forEach( registerBlock );
