/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { cover as icon } from '@wordpress/icons';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import {
    RichText,
    AlignmentToolbar,
    BlockControls,
    BlockAlignmentToolbar,
	__experimentalUseGradient,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
	__experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
const { name } = metadata;

export { metadata, name };

export const settings = {
	title: __( 'Bonus' ),
	description: __(
		'Add an image or video with a text overlay — great for headers.'
	),
	icon,
	supports: {
		align: true,
		html: false,
	},
	example: {
		attributes: {
			customOverlayColor: '#065174',
			dimRatio: 40,
			url: 'https://s.w.org/images/core/5.3/Windbuchencom.jpg',
		},
		innerBlocks: [
			{
				name: 'core/paragraph',
				attributes: {
					customFontSize: 48,
					content: __( '<strong>Snow Patrol</strong>' ),
					align: 'center',
				},
			},
		],
	},
	edit: props => {
		const {
			attributes: { textAlignment, blockAlignment, message },
			className, setAttributes } = props;

		return (
		  <div className={ className } >
			  <BlockControls>
				  <BlockAlignmentToolbar
					  value={ blockAlignment }
					  onChange={ blockAlignment => setAttributes( { blockAlignment } ) }
				  />
				  <AlignmentToolbar
					  value={ textAlignment }
					  onChange={ textAlignment => setAttributes( { textAlignment } ) }
				  />
			  </BlockControls>
			  <RichText
				  tagName="div"
				  multiline="p"
				  placeholder={ __( 'Enter your message here..', 'jsforwpblocks' ) }
				  value={ message }
				  style={ { textAlign: textAlignment } }
				  onChange={ message => setAttributes( { message } ) }
			  />
		  </div>
		);
	  },
	  save: props => {
		const { blockAlignment, textAlignment, message } = props.attributes;
		return (
		  <div
			className={classnames(
				`align${blockAlignment}`,
				'message-body',
			)}
			style={ { textAlign: textAlignment } }
		  >
			{ message }
		  </div>
		);
	  },
};
