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
	TextareaControl,
	withNotices,
	KeyboardShortcuts,
	ToolbarButton,
	ToolbarGroup,
	Icon,
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
	MediaUpload,
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

function HeroEdit( {
	attributes,
	setAttributes,
	isSelected,
	className,
	noticeUI,
	overlayColor,
	setOverlayColor,
	heroColor,
	setHeroColor,
	leftPillColor,
	setLeftPillColor,
	rightPillColor,
	setRightPillColor,
	toggleSelection,
	noticeOperations,
} ) {
	const {
		id,
		backgroundType,
		dimRatio,
		leftPillDimRatio,
		rightPillDimRatio,
		focalPoint,
		hasParallax,
		minHeight,
		url,
		heading,
		text,
		typewriterSearch,
		typewriterReplace,
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
				<MediaReplaceFlow
					mediaId={ id }
					mediaURL={ url }
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					accept="image/*,video/*"
					onSelect={ onSelectMedia }
					name="Background"
				/>
			</BlockControls>
			<InspectorControls>
					<PanelBody title={ __( 'Media settings' ) } >
						<PanelRow>
							<MediaUpload
								id={ id }
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								onSelect={ onSelectMedia }
								render={ ( { open } ) => (
									<Button onClick={ open } isSecondary={ true }>
										Select Background Image	
									</Button>
								) }
							/>
						</PanelRow>
						{ !! url && (
							<PanelRow>
								<Button
									isSecondary
									className=""
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
						) }
						{ url && IMAGE_BACKGROUND_TYPE === backgroundType && (
							<PanelRow>
								<ToggleControl
									label={ __( 'Fixed background' ) }
									checked={ hasParallax }
									onChange={ toggleParallax }
								/>
							</PanelRow>
						) }
						{ url && IMAGE_BACKGROUND_TYPE === backgroundType &&
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
						{ url && VIDEO_BACKGROUND_TYPE === backgroundType && (
							<video autoPlay muted loop src={ url } />
						) }
					</PanelBody>
				<PanelColorGradientSettings
					title={ __( 'Overlay' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: overlayColor.color,
							onColorChange: setOverlayColor,
							label: __( 'Color' ),
						},
					] }
				>
					{ !! url && (
						<RangeControl
							label={ __( 'Background opacity' ) }
							value={ dimRatio }
							onChange={ ( newDimRatio ) =>
								setAttributes( {
									dimRatio: newDimRatio,
								} )
							}
							min={ 0 }
							max={ 100 }
							step={ 10 }
							required
						/>
					) }
				</PanelColorGradientSettings>
				<PanelColorGradientSettings
					title={ __( 'Hero Color' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: heroColor.color,
							onColorChange: setHeroColor,
							label: __( 'Color' ),
						},
					] }
				>
				</PanelColorGradientSettings>
				<PanelColorGradientSettings
					title={ __( 'Left Pill Color' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: leftPillColor.color,
							onColorChange: setLeftPillColor,
							label: __( 'Color' ),
						},
					] }
				>
					<RangeControl
						label={ __( 'Opacity' ) }
						value={ leftPillDimRatio }
						onChange={ ( newLeftPillDimRatio ) =>
							setAttributes( {
								dimRatio: newLeftPillDimRatio,
							} )
						}
						min={ 0 }
						max={ 100 }
						step={ 10 }
						required
					/>
				</PanelColorGradientSettings>
				<PanelColorGradientSettings
					title={ __( 'Right Pill Color' ) }
					initialOpen={ true }
					settings={ [
						{
							colorValue: rightPillColor.color,
							onColorChange: setRightPillColor,
							label: __( 'Color' ),
						},
					] }
				>
					<RangeControl
						label={ __( 'Opacity' ) }
						value={ rightPillDimRatio }
						onChange={ ( newRightPillDimRatio ) =>
							setAttributes( {
								dimRatio: newRightPillDimRatio,
							} )
						}
						min={ 0 }
						max={ 100 }
						step={ 10 }
						required
					/>
				</PanelColorGradientSettings>
				<PanelBody title={ __( 'Heading' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Typewriter Search' ) }
						help="phrase to search and replace with a typewriter effect."
						value={ typewriterSearch }
						onChange={ ( value ) => setAttributes( { typewriterSearch: value } ) }
					/>
					<TextareaControl
						label={ __( 'Typewriter Replace' ) }
						help="Put each replacement phrase on its own line."
						value={ typewriterReplace }
						onChange={ ( value ) => setAttributes( { typewriterReplace: value } ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Call to Action Button' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Text' ) }
						value={ button1Text }
						onChange={ ( value ) => setAttributes( { button1Text: value } ) }
					/>
					<URLInput
						value={ button1URL }
						className="url-input-inspector-field"
						onChange={ value => setAttributes( { button1URL: value } ) }
						autoFocus= { false }
					/>
					<ToggleControl
						label={ __( 'Link Target' ) }
						onChange={ ( value ) => setAttributes( value ? { button1LinkTarget: '_blank' } : { button1LinkTarget: undefined } ) }
						checked={ button1LinkTarget === '_blank' }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Secondary Button 1' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Text' ) }
						value={ button2Text }
						onChange={ ( value ) => setAttributes( { button2Text: value } ) }
					/>
					<URLInput
						value={ button2URL }
						className="url-input-inspector-field"
						onChange={ value => setAttributes( { button2URL: value } ) }
						autoFocus= { false }
					/>
					<ToggleControl
						label={ __( 'Link Target' ) }
						onChange={ ( value ) => setAttributes( value ? { button2LinkTarget: '_blank' } : { button2LinkTarget: undefined } ) }
						checked={ button2LinkTarget === '_blank' }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Secondary Button 2' ) } initialOpen={ true }>
					<TextControl
						label={ __( 'Text' ) }
						value={ button3Text }
						onChange={ ( value ) => setAttributes( { button3Text: value } ) }
					/>
					<URLInput
						value={ button3URL }
						className="url-input-inspector-field"
						onChange={ value => setAttributes( { button3URL: value } ) }
						autoFocus= { false }
					/>
					<ToggleControl
						label={ __( 'Link Target' ) }
						onChange={ ( value ) => setAttributes( value ? { button3LinkTarget: '_blank' } : { button3LinkTarget: undefined } ) }
						checked={ button3LinkTarget === '_blank' }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

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
				<div className="wp-block-hero__outer-wrapper">
					<div className={ classes }>
						<div className="wp-block-hero__inner-container">
							<div data-url={ url } style={ style } className="wp-block-hero__background-image">
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
											'wp-block-hero__gradient-background',
											gradientClass
										) }
										style={ { background: gradientValue } }
									/>
								) }
								{ VIDEO_BACKGROUND_TYPE === backgroundType && (
									<video
										ref={ isDarkElement }
										className="wp-block-hero__video-background"
										autoPlay
										muted
										loop
										src={ url }
									/>
								) }
							</div>
							<div className="hero-content">
								<div className="wp-block-hero__inner-content">
									<RichText
										tagName="h1"
										className="hero-heading"
										placeholder={ __( 'Heading', 'wpm-epb' ) }
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
										placeholder={ __( 'Text', 'wpm-epb' ) }
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
							<div class="above-fold-background glide glide-left glide-down">
								<svg x="0px" y="0px" width="631px" height="789px" viewBox="0 0 631 789">
									<path fill="#ED5652" d="M63.7,763.5C-2.9,718-20,627.2,25.4,560.5l339-496.8C409.9-2.9,500.7-20,567.3,25.5 c66.6,45.5,83.7,136.4,38.2,203l-339,496.8C221.1,791.9,130.3,809,63.7,763.5"/>
								</svg>
							</div>
						</div>
					</div>
					<div class="top-right-background glide glide-right glide-down">
						<svg x="0px" y="0px" width="573px" height="716px" viewBox="0 0 573 716">
							<path fill="#FF7226" d="M515.2,692.9c60.5-41.3,76-123.8,34.7-184.2L242.1,57.8c-41.3-60.5-123.8-76-184.2-34.7 c-60.5,41.3-76,123.8-34.7,184.2l307.8,450.8C372.2,718.6,454.7,734.2,515.2,692.9"/>
						</svg>
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
	withColors( { overlayColor: 'background-color', heroColor: 'hero-color', leftPillColor: 'left-pill-color', rightPillColor: 'right-pill-color' } ),
	withNotices,
	withInstanceId,
] )( HeroEdit );
