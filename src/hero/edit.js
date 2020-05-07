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
const ALLOWED_MEDIA_TYPES = ['image', 'video'];
const INNER_BLOCKS_TEMPLATE = [
	[
		'core/heading',
		{
			level: 1,
			placeholder: __('Heading...'),
		},
	],
	[
		'core/preheading',
		{
			placeholder: __('Text before heading...'),
		},
	],
	[
		'core/paragraph',
		{
			placeholder: __('Paragraph...'),
		},
	],
];
const INNER_BLOCKS_BUTTONS_TEMPLATE = [
	[
		'core/buttons',
		{
			className: 'testing',
		},
		[
			[
				'core/button',
				{
					text: __('Link 1'),
				},
			],
			[
				'core/button',
				{
					text: __('Link 2'),
				},
			],
		],
	],
];

function retrieveFastAverageColor() {
	if (!retrieveFastAverageColor.fastAverageColor) {
		retrieveFastAverageColor.fastAverageColor = new FastAverageColor();
	}
	return retrieveFastAverageColor.fastAverageColor;
}

const CoverHeightInput = withInstanceId(function ({
	value = '',
	instanceId,
	onChange,
}) {
	const [temporaryInput, setTemporaryInput] = useState(null);
	const inputId = `block-cover-height-input-${instanceId}`;
	return (
		<BaseControl label={__('Minimum height in pixels')} id={inputId}>
			<input
				type="number"
				id={inputId}
				onChange={(event) => {
					const unprocessedValue = event.target.value;
					const inputValue =
						unprocessedValue !== ''
							? parseInt(event.target.value, 10)
							: undefined;
					if (
						(isNaN(inputValue) ||
							inputValue < COVER_MIN_HEIGHT) &&
						inputValue !== undefined
					) {
						setTemporaryInput(event.target.value);
						return;
					}
					setTemporaryInput(null);
					onChange(inputValue);
				}}
				onBlur={() => {
					if (temporaryInput !== null) {
						setTemporaryInput(null);
					}
				}}
				value={temporaryInput !== null ? temporaryInput : value}
				min={COVER_MIN_HEIGHT}
				step="1"
			/>
		</BaseControl>
	);
});

const RESIZABLE_BOX_ENABLE_OPTION = {
	top: false,
	right: false,
	bottom: false,
	left: false,
	topRight: false,
	bottomRight: false,
	bottomLeft: false,
	topLeft: false,
};

function ResizableCover({
	className,
	children,
	onResizeStart,
	onResize,
	onResizeStop,
}) {
	const [isResizing, setIsResizing] = useState(false);

	return (
		<ResizableBox
			className={classnames(className, {
				'is-resizing': isResizing,
			})}
			enable={RESIZABLE_BOX_ENABLE_OPTION}
			onResizeStart={(event, direction, elt) => {
				onResizeStart(elt.clientHeight);
				onResize(elt.clientHeight);
			}}
			onResize={(event, direction, elt) => {
				onResize(elt.clientHeight);
				if (!isResizing) {
					setIsResizing(true);
				}
			}}
			onResizeStop={(event, direction, elt) => {
				onResizeStop(elt.clientHeight);
				setIsResizing(false);
			}}
			minHeight={COVER_MIN_HEIGHT}
		>
			{children}
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
 * @param {?string} overlayColor 
 * @param {?String} buttonBackgroundColor containing the overlay color value if one exists.
 * @param {?Object} elementRef   If a media background is set, elementRef should contain a reference to a
 *                               dom element that renders that media.
 *
 * @return {boolean} True if the cover background is considered "dark" and false otherwise.
 */
function useCoverIsDark(url, dimRatio = 50, overlayColor, buttonBackgroundColor, elementRef) {
	const [isDark, setIsDark] = useState(false);
	useEffect(() => {
		// If opacity is lower than 50 the dominant color is the image or video color,
		// so use that color for the dark mode computation.
		if (url && dimRatio <= 50 && elementRef.current) {
			retrieveFastAverageColor().getColorAsync(
				elementRef.current,
				(color) => {
					setIsDark(color.isDark);
				}
			);
		}
	}, [url, url && dimRatio <= 50 && elementRef.current, setIsDark]);
	useEffect(() => {
		// If opacity is greater than 50 the dominant color is the overlay color,
		// so use that color for the dark mode computation.
		if (dimRatio > 50 || !url) {
			if (!overlayColor || !buttonBackgroundColor) {
				// If no overlay color exists the overlay color is black (isDark )
				setIsDark(true);
				return;
			}
			setIsDark(tinycolor(overlayColor).isDark());
			setIsDark(tinycolor(buttonBackgroundColor).isDark());
		}
	}, [overlayColor, dimRatio > 50 || !url, setIsDark]);
	useEffect(() => {
		if (!url && !overlayColor) {
			// Reset isDark
			setIsDark(false);
		}
	}, [!url && !overlayColor, setIsDark]);
	return isDark;
}

function URLPicker({
	isSelected,
	url,
	setAttributes,
	opensInNewTab,
	onToggleOpenInNewTab,
	keyURL,
	keyLinkTarget,
	toolbarButtonName,
	toolbarButtonTitle,
	rel,
}) {
	const [isURLPickerOpen, setIsURLPickerOpen] = useState(false);
	const openLinkControl = () => {
		setIsURLPickerOpen(true);
	};
	const linkControl = isURLPickerOpen && (
		<Popover
			position="bottom center"
			onClose={() => setIsURLPickerOpen(false)}
		>
			<LinkControl
				className="wp-block-navigation-link__inline-link-input"
				value={{ url, opensInNewTab }}
				onChange={({
					url: newURL = '',
					opensInNewTab: newOpensInNewTab,
				}) => {
					setAttributes({ [keyURL]: newURL });

					if (opensInNewTab !== newOpensInNewTab) {
						onToggleOpenInNewTab(keyLinkTarget, newOpensInNewTab, rel);
					}
				}}
			/>
		</Popover>
	);
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						name={toolbarButtonName}
						icon={link}
						title={toolbarButtonTitle}
						onClick={openLinkControl}
					/>
				</ToolbarGroup>
			</BlockControls>
			{linkControl}
		</>
	);
}

function CoverEdit({
	attributes,
	setAttributes,
	isSelected,
	className,
	noticeUI,
	overlayColor,
	setOverlayColor,
	buttonBackgroundColor,
	setButtonBackgroundColor,
	toggleSelection,
	noticeOperations,
}) {
	const {
		id,
		backgroundType,
		dimRatio,
		focalPoint,
		hasParallax,
		minHeight,
		url,
		heading,
		preheading,
		text,
		button1Text,
		button1URL,
		button1LinkTarget,
		button1Rel,
	} = attributes;
	const {
		gradientClass,
		gradientValue,
		setGradient,
	} = __experimentalUseGradient();
	const onSelectMedia = attributesFromMedia(setAttributes);

	const toggleParallax = () => {
		setAttributes({
			hasParallax: !hasParallax,
			...(!hasParallax ? { focalPoint: undefined } : {}),
		});
	};

	const isDarkElement = useRef();
	const isDark = useCoverIsDark(
		url,
		dimRatio,
		overlayColor.color,
		buttonBackgroundColor.color,
		isDarkElement
	);

	const onToggleOpenInNewTab = useCallback(
		(key, value, rel) => {
			const newLinkTarget = value ? '_blank' : undefined;

			let updatedRel = eval(rel);
			if (newLinkTarget && !eval(rel)) {
				updatedRel = NEW_TAB_REL;
			} else if (!newLinkTarget && eval(rel) === NEW_TAB_REL) {
				updatedRel = undefined;
			}

			setAttributes({
				[key]: newLinkTarget,
				[rel]: updatedRel,
			});
		},
		[setAttributes]
	);

	const [temporaryMinHeight, setTemporaryMinHeight] = useState(null);

	const { removeAllNotices, createErrorNotice } = noticeOperations;

	const style = {
		...(backgroundType === IMAGE_BACKGROUND_TYPE
			? backgroundImageStyles(url)
			: {}),
		backgroundColor: overlayColor.color,
		minHeight: temporaryMinHeight || minHeight,
	};
	const styleButton = {
		backgroundColor: buttonBackgroundColor.color
	}


	if (gradientValue && !url) {
		style.background = gradientValue;
	}

	if (focalPoint) {
		style.backgroundPosition = `${focalPoint.x * 100}% ${focalPoint.y *
			100}%`;
	}

	const hasBackground = !!(url || overlayColor.color || buttonBackgroundColor.color || gradientValue);

	const controls = (
		<>
			<BlockControls>
				{hasBackground && (
					<MediaReplaceFlow
						mediaId={id}
						mediaURL={url}
						allowedTypes={ALLOWED_MEDIA_TYPES}
						accept="image/*,video/*"
						onSelect={onSelectMedia}
					/>
				)}
			</BlockControls>
			<InspectorControls>
				{!!url && (
					<PanelBody title={__('Media settings')}>
						{IMAGE_BACKGROUND_TYPE === backgroundType && (
							<ToggleControl
								label={__('Fixed background')}
								checked={hasParallax}
								onChange={toggleParallax}
							/>
						)}
						{IMAGE_BACKGROUND_TYPE === backgroundType &&
							!hasParallax && (
								<FocalPointPicker
									label={__('Focal point picker')}
									url={url}
									value={focalPoint}
									onChange={(newFocalPoint) =>
										setAttributes({
											focalPoint: newFocalPoint,
										})
									}
								/>
							)}
						{VIDEO_BACKGROUND_TYPE === backgroundType && (
							<video autoPlay muted loop src={url} />
						)}
						<PanelRow>
							<Button
								isSecondary
								isSmall
								className="block-library-cover__reset-button"
								onClick={() =>
									setAttributes({
										url: undefined,
										id: undefined,
										backgroundType: undefined,
										dimRatio: undefined,
										focalPoint: undefined,
										hasParallax: undefined,
									})
								}
							>
								{__('Clear Media')}
							</Button>
						</PanelRow>
					</PanelBody>
				)}
				{hasBackground && (
					<>
						<PanelBody title={__('Dimensions')}>
							<CoverHeightInput
								value={temporaryMinHeight || minHeight}
								onChange={(newMinHeight) =>
									setAttributes({ minHeight: newMinHeight })
								}
							/>
						</PanelBody>
						<PanelColorGradientSettings
							title={__('Background Color')}
							initialOpen={true}
							settings={[
								{
									colorValue: overlayColor.color,
									gradientValue,
									onColorChange: setOverlayColor,
									onGradientChange: setGradient,
									label: __('Background Color'),
								},
							]}
						></PanelColorGradientSettings>
						<PanelColorGradientSettings
							title={__('Button Background Color')}
							initialOpen={true}
							settings={[
								{
									colorValue: buttonBackgroundColor.color,
									gradientValue,
									onColorChange: setButtonBackgroundColor,
									onGradientChange: setGradient,
									label: __('Button Color'),
								},
							]}
						>
							{!!url && (
								<RangeControl
									label={__('Background opacity')}
									value={dimRatio}
									onChange={(newDimRation) =>
										setAttributes({
											dimRatio: newDimRation,
										})
									}
									min={0}
									max={100}
									step={10}
									required
								/>
							)}
						</PanelColorGradientSettings>
					</>
				)}
			</InspectorControls>
		</>
	);

	if (!hasBackground) {
		const placeholderIcon = <BlockIcon icon={icon} />;
		const label = __('Cover');

		return (
			<>
				{controls}
				<MediaPlaceholder
					icon={placeholderIcon}
					className={className}
					labels={{
						title: label,
						instructions: __(
							'Upload an image or video file, or pick one from your media library.'
						),
					}}
					onSelect={onSelectMedia}
					accept="image/*,video/*"
					allowedTypes={ALLOWED_MEDIA_TYPES}
					notices={noticeUI}
					onError={(message) => {
						removeAllNotices();
						createErrorNotice(message);
					}}
				>
					<div className="wp-block-cover__placeholder-background-options">
						<ColorPalette
							disableCustomColors={true}
							value={overlayColor.color}
							onChange={setOverlayColor}
							clearable={false}
						/>
						<ColorPalette
							disableCustomColors={true}
							value={buttonBackgroundColor.color}
							onChange={setButtonBackgroundColor}
							clearable={false}
						/>
					</div>
				</MediaPlaceholder>
			</>
		);
	}

	const classes = classnames(className, dimRatioToClass(dimRatio), {
		'is-dark-theme': isDark,
		'has-background-dim': dimRatio !== 0,
		'has-parallax': hasParallax,
		[overlayColor.class]: overlayColor.class,
		'has-background-gradient': gradientValue,
		[gradientClass]: !url && gradientClass,
		marginLeft: 'calc(50 % - (50vw))',
		marginRight: 'calc(50 % - (50vw))',
		maxWidth: '1000%',
		width: '100vw',
		height: 'calc(100vh)',
		clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 60px), 50% 100%, 0% calc(100% - 60px))',
	});

	const buttonClasses = classnames(className, dimRatioToClass(dimRatio), {
		'has-background-dim': dimRatio !== 0,
		'has-background-gradient': gradientValue,
		[overlayColor.class]: overlayColor.class,
	});

	return (
		<>
			{controls}
			<ResizableCover
				className={classnames(
					'block-library-cover__resize-container no-x-padding',
					{
						'is-selected': isSelected,
					}
				)}
				onResizeStart={() => toggleSelection(false)}
				onResize={setTemporaryMinHeight}
				onResizeStop={(newMinHeight) => {
					toggleSelection(true);
					setAttributes({ minHeight: newMinHeight });
					setTemporaryMinHeight(null);
				}}
			>
				<div data-url={url} style={style} className={classes}>
					{IMAGE_BACKGROUND_TYPE === backgroundType && (
						// Used only to programmatically check if the image is dark or not
						<img
							ref={isDarkElement}
							aria-hidden
							alt=""
							style={{
								display: 'none',
							}}
							src={url}
						/>
					)}
					{url && gradientValue && dimRatio !== 0 && (
						<span
							aria-hidden="true"
							className={classnames(
								'wp-block-cover__gradient-background',
								gradientClass
							)}
							style={{ background: gradientValue }}
						/>
					)}
					{VIDEO_BACKGROUND_TYPE === backgroundType && (
						<video
							ref={isDarkElement}
							className="wp-block-cover__video-background"
							autoPlay
							muted
							loop
							src={url}
						/>
					)}
					<div className="wp-block-cover__inner-container">
						<div className="hero-content">
							<RichText
								tagName="h4"
								className="hero-text alignfull textcenter"
								placeholder={__('Pre-Heading', 'wpm-lpb')}
								onChange={(value) =>
									setAttributes({
										preheading: value,
									})
								}
								value={preheading}
							/>
							<RichText
								tagName="h1"
								className="hero-heading alignfull textcenter"
								placeholder={__('Heading', 'wpm-lpb')}
								onChange={(value) =>
									setAttributes({
										heading: value,
									})
								}
								value={heading}
							/>
							<RichText
								tagName="p"
								className="hero-text alignfull textcenter"
								placeholder={__('Text', 'wpm-lpb')}
								onChange={(value) =>
									setAttributes({
										text: value,
									})
								}
								value={text}
							/>
							<div className="container widthFull textcenter">
								<div className={`button-wrapper wp-block-button aligncenter textcenter`}>
									<RichText
										placeholder={__('Button 1')}
										value={button1Text}
										onChange={(value) => setAttributes({ button1Text: value })}
										withoutInteractiveFormatting
										style={{ backgroundColor: buttonBackgroundColor.color }}
										className={`wp-block-button__link button1`}
										rel={button1Rel}
									/>
									<URLPicker
										url={button1URL}
										setAttributes={setAttributes}
										isSelected={isSelected}
										opensInNewTab={button1LinkTarget === '_blank'}
										onToggleOpenInNewTab={onToggleOpenInNewTab}
										keyURL="button1URL"
										keyLinkTarget="button1LinkTarget"
										toolbarButtonName="link1"
										toolbarButtonTitle={__('Link 1')}
										rel="button1Rel"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</ResizableCover>
		</>
	);
}

export default compose([
	withDispatch((dispatch) => {
		const { toggleSelection } = dispatch('core/block-editor');

		return {
			toggleSelection,
		};
	}),
	withColors({ overlayColor: 'background-color', buttonBackgroundColor: 'background-color' }),
	withNotices,
	withInstanceId,
])(CoverEdit);
