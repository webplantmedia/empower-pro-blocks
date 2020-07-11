/**
 * External dependencies
 */
import classnames from 'classnames';
import FastAverageColor from 'fast-average-color';
import tinycolor from 'tinycolor2';

/**
 * WordPress dependencies
 */
import { useCallback, useEffect, useRef, useState } from '@wordpress/element';
import {
	BaseControl,
	PanelBody,
	Button,
	FocalPointPicker,
	PanelRow,
	RangeControl,
	ResizableBox,
	ToggleControl,
	TextControl,
	withNotices,
	KeyboardShortcuts,
	ToolbarButton,
	ToolbarGroup,
	Popover,
} from '@wordpress/components';
import { compose, withInstanceId } from '@wordpress/compose';
import { rawShortcut, displayShortcut } from '@wordpress/keycodes';
import {
	BlockControls,
	BlockIcon,
	RichText,
	InnerBlocks,
	InspectorControls,
	MediaPlaceholder,
	MediaReplaceFlow,
	withColors,
	ColorPalette,
	__experimentalUseGradient,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings,
	__experimentalLinkControl as LinkControl,
	URLInput,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { withDispatch } from '@wordpress/data';
import { cover as icon, link } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import {
	attributesFromMedia,
	IMAGE_BACKGROUND_TYPE,
	VIDEO_BACKGROUND_TYPE,
	COVER_MIN_HEIGHT,
	backgroundImageStyles,
	dimRatioToClass,
} from './shared';

/**
 * Module Constants
 */
const NEW_TAB_REL = 'noreferrer noopener';
const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];
const INNER_BLOCKS_TEMPLATE = [
	[
		'core/heading',
		{
			level: 1,
			placeholder: __( 'Heading...' ),
		},
	],
	[
		'core/paragraph',
		{
			placeholder: __( 'Paragraph...' ),
		},
	],
	[
		'core/buttons',
		{
			className: 'testing',
		},
		[
			[
				'core/button',
				{
					text: __( 'Link 1' ),
					className: 'text',
				},
			],
		],
	],
];
const INNER_BLOCKS_BUTTONS_TEMPLATE = [
	[
		'core/buttons',
		{
			className: 'testing2',
		},
		[
			[
				'core/button',
				{
					text: __( 'Link 1' ),
					className: 'text',
				},
			],
			[
				'core/button',
				{
					text: __( 'Link 2' ),
					className: 'text',
				},
			],
		],
	],
];

function retrieveFastAverageColor() {
	if ( ! retrieveFastAverageColor.fastAverageColor ) {
		retrieveFastAverageColor.fastAverageColor = new FastAverageColor();
	}
	return retrieveFastAverageColor.fastAverageColor;
}

const RESIZABLE_BOX_ENABLE_OPTION = {
	top: false,
	right: false,
	bottom: true,
	left: false,
	topRight: false,
	bottomRight: false,
	bottomLeft: false,
	topLeft: false,
};

function ResizableCover( {
	className,
	children,
	onResizeStart,
	onResize,
	onResizeStop,
} ) {
	const [ isResizing, setIsResizing ] = useState( false );

	return (
		<ResizableBox
			className={ classnames( className, {
				'is-resizing': isResizing,
			} ) }
			enable={ RESIZABLE_BOX_ENABLE_OPTION }
			onResizeStart={ ( event, direction, elt ) => {
				onResizeStart( elt.clientHeight );
				onResize( elt.clientHeight );
			} }
			onResize={ ( event, direction, elt ) => {
				onResize( elt.clientHeight );
				if ( ! isResizing ) {
					setIsResizing( true );
				}
			} }
			onResizeStop={ ( event, direction, elt ) => {
				onResizeStop( elt.clientHeight );
				setIsResizing( false );
			} }
			minHeight={ COVER_MIN_HEIGHT }
		>
			{ children }
		</ResizableBox>
	);
}

/**
 * useCoverIsDark is a hook that returns a boolean variable specifying if the cover
 * background is dark or not.
 *
 * @param {?string} url          Url of the media background.
 * @param {?number} dimRatio     Transparency of the overlay color. If an image and
 *                               color are set, dimRatio is used to decide what is used
 *                               for background darkness checking purposes.
 * @param {?string} overlayColor String containing the overlay color value if one exists.
 * @param {?Object} elementRef   If a media background is set, elementRef should contain a reference to a
 *                               dom element that renders that media.
 *
 * @return {boolean} True if the cover background is considered "dark" and false otherwise.
 */
function useCoverIsDark( url, dimRatio = 50, overlayColor, elementRef ) {
	const [ isDark, setIsDark ] = useState( false );
	useEffect( () => {
		// If opacity is lower than 50 the dominant color is the image or video color,
		// so use that color for the dark mode computation.
		if ( url && dimRatio <= 50 && elementRef.current ) {
			retrieveFastAverageColor().getColorAsync(
				elementRef.current,
				( color ) => {
					setIsDark( color.isDark );
				}
			);
		}
	}, [ url, url && dimRatio <= 50 && elementRef.current, setIsDark ] );
	useEffect( () => {
		// If opacity is greater than 50 the dominant color is the overlay color,
		// so use that color for the dark mode computation.
		if ( dimRatio > 50 || ! url ) {
			if ( ! overlayColor ) {
				// If no overlay color exists the overlay color is black (isDark )
				setIsDark( true );
				return;
			}
			setIsDark( tinycolor( overlayColor ).isDark() );
		}
	}, [ overlayColor, dimRatio > 50 || ! url, setIsDark ] );
	useEffect( () => {
		if ( ! url && ! overlayColor ) {
			// Reset isDark
			setIsDark( false );
		}
	}, [ ! url && ! overlayColor, setIsDark ] );
	return isDark;
}

function CoverEdit( {
	attributes,
	setAttributes,
	isSelected,
	className,
	noticeUI,
	overlayColor,
	setOverlayColor,
	toggleSelection,
	noticeOperations,
} ) {
	const {
		id,
		backgroundType,
		dimRatio,
		focalPoint,
		hasParallax,
		minHeight,
		url,
		heading,
		text,
		button1Text,
		button1URL,
		button1LinkTarget,
		button2Text,
		button2URL,
		button2LinkTarget,
		button3Text,
		button3URL,
		button3LinkTarget,
	} = attributes;
	const {
		gradientClass,
		gradientValue,
		setGradient,
	} = __experimentalUseGradient();
	const onSelectMedia = attributesFromMedia( setAttributes );

	const toggleParallax = () => {
		setAttributes( {
			hasParallax: ! hasParallax,
			...( ! hasParallax ? { focalPoint: undefined } : {} ),
		} );
	};

	const isDarkElement = useRef();
	const isDark = useCoverIsDark(
		url,
		dimRatio,
		overlayColor.color,
		isDarkElement
	);

	const onToggleOpenInNewTab = useCallback(
		( key, value, rel ) => {
			const newLinkTarget = value ? '_blank' : undefined;

			let updatedRel = eval(rel);
			if ( newLinkTarget && ! eval(rel) ) {
				updatedRel = NEW_TAB_REL;
			} else if ( ! newLinkTarget && eval(rel) === NEW_TAB_REL ) {
				updatedRel = undefined;
			}

			setAttributes( {
				[key]: newLinkTarget,
				[rel]: updatedRel,
			} );
		},
		[ setAttributes ]
	);

	const [ temporaryMinHeight, setTemporaryMinHeight ] = useState( null );

	const { removeAllNotices, createErrorNotice } = noticeOperations;

	const style = {
		...( backgroundType === IMAGE_BACKGROUND_TYPE
			? backgroundImageStyles( url )
			: {} ),
		backgroundColor: overlayColor.color,
		minHeight: temporaryMinHeight || minHeight,
	};

	if ( gradientValue && ! url ) {
		style.background = gradientValue;
	}

	if ( focalPoint ) {
		style.backgroundPosition = `${ focalPoint.x * 100 }% ${ focalPoint.y *
			100 }%`;
	}

	const hasBackground = !! ( url || overlayColor.color || gradientValue );

	const opensInNewTab1 = button1LinkTarget === '_blank';

	const controls = (
		<>
			<BlockControls>
				{ hasBackground && (
					<MediaReplaceFlow
						mediaId={ id }
						mediaURL={ url }
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						accept="image/*,video/*"
						onSelect={ onSelectMedia }
					/>
				) }
			</BlockControls>
			<InspectorControls>
				{ !! url && (
					<PanelBody title={ __( 'Media settings' ) }>
						{ IMAGE_BACKGROUND_TYPE === backgroundType && (
							<ToggleControl
								label={ __( 'Fixed background' ) }
								checked={ hasParallax }
								onChange={ toggleParallax }
							/>
						) }
						{ IMAGE_BACKGROUND_TYPE === backgroundType &&
							! hasParallax && (
								<FocalPointPicker
									label={ __( 'Focal point picker' ) }
									url={ url }
									value={ focalPoint }
									onChange={ ( newFocalPoint ) =>
										setAttributes( {
											focalPoint: newFocalPoint,
										} )
									}
								/>
							) }
						{ VIDEO_BACKGROUND_TYPE === backgroundType && (
							<video autoPlay muted loop src={ url } />
						) }
						<PanelRow>
							<Button
								isSecondary
								isSmall
								className="block-library-cover__reset-button"
								onClick={ () =>
									setAttributes( {
										url: undefined,
										id: undefined,
										backgroundType: undefined,
										dimRatio: undefined,
										focalPoint: undefined,
										hasParallax: undefined,
									} )
								}
							>
								{ __( 'Clear Media' ) }
							</Button>
						</PanelRow>
					</PanelBody>
				) }
				{ hasBackground && (
					<>
						<PanelColorGradientSettings
							title={ __( 'Overlay' ) }
							initialOpen={ true }
							settings={ [
								{
									colorValue: overlayColor.color,
									gradientValue,
									onColorChange: setOverlayColor,
									onGradientChange: setGradient,
									label: __( 'Color' ),
								},
							] }
						>
							{ !! url && (
								<RangeControl
									label={ __( 'Background opacity' ) }
									value={ dimRatio }
									onChange={ ( newDimRation ) =>
										setAttributes( {
											dimRatio: newDimRation,
										} )
									}
									min={ 0 }
									max={ 100 }
									step={ 10 }
									required
								/>
							) }
						</PanelColorGradientSettings>
					</>
				) }
				<PanelBody title={ __( 'Call to Action Button' ) }>
					<TextControl
						label={ __( 'Text' ) }
						value={ button1Text }
						onChange={ ( value ) => setAttributes( { button1Text: value } ) }
					/>
					<URLInput
						value={ button1URL }
						onChange={ value => setAttributes( { button1URL: value } ) }
					/>
					<ToggleControl
						label={ __( 'Link Target' ) }
						onChange={ ( value ) => setAttributes( value ? { button1LinkTarget: '_blank' } : { button1LinkTarget: undefined } ) }
						checked={ button1LinkTarget === '_blank' }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	if ( ! hasBackground ) {
		const placeholderIcon = <BlockIcon icon={ icon } />;
		const label = __( 'Cover' );

		return (
			<>
				{ controls }
				<MediaPlaceholder
					icon={ placeholderIcon }
					className={ className }
					labels={ {
						title: label,
						instructions: __(
							'Upload an image or video file, or pick one from your media library.'
						),
					} }
					onSelect={ onSelectMedia }
					accept="image/*,video/*"
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					notices={ noticeUI }
					onError={ ( message ) => {
						removeAllNotices();
						createErrorNotice( message );
					} }
				>
					<div className="wp-block-cover__placeholder-background-options">
						<ColorPalette
							disableCustomColors={ true }
							value={ overlayColor.color }
							onChange={ setOverlayColor }
							clearable={ false }
						/>
					</div>
				</MediaPlaceholder>
			</>
		);
	}

	const classes = classnames( className, dimRatioToClass( dimRatio ), {
		'is-dark-theme': isDark,
		'has-background-dim': dimRatio !== 0,
		'has-parallax': hasParallax,
		[ overlayColor.class ]: overlayColor.class,
		'has-background-gradient': gradientValue,
		[ gradientClass ]: ! url && gradientClass,
	} );

	return (
		<>
			{ controls }
				<div data-url={ url } style={ style } className={ classes }>
					{ IMAGE_BACKGROUND_TYPE === backgroundType && (
						// Used only to programmatically check if the image is dark or not
						<img
							ref={ isDarkElement }
							aria-hidden
							alt=""
							style={ {
								display: 'none',
							} }
							src={ url }
						/>
					) }
					{ url && gradientValue && dimRatio !== 0 && (
						<span
							aria-hidden="true"
							className={ classnames(
								'wp-block-cover__gradient-background',
								gradientClass
							) }
							style={ { background: gradientValue } }
						/>
					) }
					{ VIDEO_BACKGROUND_TYPE === backgroundType && (
						<video
							ref={ isDarkElement }
							className="wp-block-cover__video-background"
							autoPlay
							muted
							loop
							src={ url }
						/>
					) }
					<div className="wp-block-cover__inner-container">
						<div className="hero-content">
							<RichText
								tagName="h1"
								className="hero-heading"
								placeholder={ __( 'Heading', 'wpm-lpb' ) }
								onChange={ ( value ) =>
									setAttributes( {
										heading: value,
									} )
								}
								value={ heading }
							/>
							<RichText
								tagName="p"
								className="hero-text"
								placeholder={ __( 'Text', 'wpm-lpb' ) }
								onChange={ ( value ) =>
									setAttributes( {
										text: value,
									} )
								}
								value={ text }
							/>
							<div class="wp-block-buttons">
								<div class="wp-block-button text">
									<RichText
										placeholder={ __( 'Button 1' ) }
										value={ button1Text }
										onChange={ ( value ) => setAttributes( { button1Text: value } ) }
										withoutInteractiveFormatting
										className="wp-block-button__link button1"
									/>
								</div>
							</div>
							<div class="gray-bottom-bar">
								<div class="wp-block-buttons">
									<div class="wp-block-button text icon">
										<RichText
											placeholder={ __( 'Button 2' ) }
											value={ button2Text }
											onChange={ ( value ) => setAttributes( { button2Text: value } ) }
											withoutInteractiveFormatting
											className="wp-block-button__link button2"
										/>
									</div>
								</div>
								<div class="wp-block-buttons">
									<div class="wp-block-button text icon">
										<RichText
											placeholder={ __( 'Button 3' ) }
											value={ button3Text }
											onChange={ ( value ) => setAttributes( { button3Text: value } ) }
											withoutInteractiveFormatting
											className="wp-block-button__link button3"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		</>
	);
}

export default compose( [
	withDispatch( ( dispatch ) => {
		const { toggleSelection } = dispatch( 'core/block-editor' );

		return {
			toggleSelection,
		};
	} ),
	withColors( { overlayColor: 'background-color' } ),
	withNotices,
	withInstanceId,
] )( CoverEdit );
