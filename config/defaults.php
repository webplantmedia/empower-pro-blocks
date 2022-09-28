<?php

/**
 * Empower Pro Blocks customizer defaults
 *
 * @package Empower_Pro_Blocks
 * @author  Web Plant Media
 * @license GPL-2.0-or-later
 * @link    https://webplantmedia.com/
 */

$css_vars = '';

$colors = array(
	'primary-color'   => '#ed5652',
	'secondary-color' => '#ff7226',
	'third-color' => '#a44e9e',
	'fourth-color' => '#d43c31',
	'fifth-color' => '#42b97c',
	'sixth-color' => '#942940',
	'seventh-color' => '#176e99',
	'eighth-color' => '#ffcc2a',
	'defaulttext-color' => '#777777',
	'darktext-color' => '#222222',
	'heading-color' => '#333333',
	'bodybackground-color' => '#ffffff',
	'altbackground-color' => '#f7f7f7',
	'border-color' => '#edecee',
	'white-color' => '#ffffff',
	'black-color' => '#000000',
);

foreach ($colors as $key => $value) {
	$css_vars .= $key . ': ' . $value . ";\n";
	$css_vars .= $key . '-hover: ' . empower_pro_blocks_color_brightness($value, 0.15) . ";\n";
	$css_vars .= $key . '-bright: ' . empower_pro_blocks_color_brightness($value, 0.15) . ";\n";
	$css_vars .= $key . '-contrast: ' . empower_pro_blocks_color_contrast($value, 0.15) . ";\n";
	$css_vars .= $key . '-rgb: ' . empower_pro_blocks_color_rgb($value) . ";\n";
}

$css_vars .= '
gray-text-color: #888;
light-gray-text-color: #ccc;
lightest-gray-text-color: #f5f5f5;
body-background-color: #fff;
body-background-color-two: #f5f5f5;
heading-h3-h4-color: #333;
heading-h3-h4-color-hover: #444;
heading-h5-h6-color: #333;
heading-h5-h6-margin-bottom: 30px;
nav-color: #8e8e8e;
text-color-hover: #444;
form-border-color: #dcdadd;
table-border-color: #eeeeee;

body-font-family: "Source Sans Pro", sans-serif;
body-font-size-tiny: 13px;
body-font-size-xsmall: 14px;
body-font-size-small: 16px;
body-font-size: 18px;
body-font-size-large: 20px;
body-font-size-larger: 24px;
body-font-size-huge: 50px;
body-font-size-huge-desktop: 40px;
body-font-size-huge-ipad: 28px;
body-font-letter-spacing: normal;
body-font-line-height: 1.5;
body-font-weight: 400;
body-font-weight-bold: 700;
body-font-drop-cap-size: 4em;
body-font-drop-cap-margin: 0.11em 0.1em 0 -0.08em;

label-letter-spacing: 1px;

title-font-family: "Source Sans Pro", sans-serif;
title-font-size: 16px;
title-font-letter-spacing: normal;
title-font-weight: 700;
title-font-style: normal;
title-font-text-transform: uppercase;
title-font-letter-spacing: 5px;
description-font-letter-spacing: 3px;
description-font-size: 12px;

page-title-font-family: "Source Sans Pro", sans-serif;;
page-title-font-line-height: 1.2;
page-title-font-letter-spacing: normal;
page-title-font-weight: 300;
page-title-font-style: normal;
page-title-font-text-transform: uppercase;
page-title-font-variant: normal;
page-title-color: #333;

heading-font-family: "Source Sans Pro", sans-serif;
heading-font-line-height: 1.2;
heading-font-letter-spacing: normal;
heading-font-weight: 300;
heading-font-weight-bold: 400;
heading-font-weight-light: 300;
heading-font-h4-weight: 400;
heading-font-h4-letter-spacing: 2px;
heading-font-style: normal;
heading-font-text-transform: none;
heading-font-variant: normal;
heading-font-size-hero-title: 80px;
hero-font-line-height: 1.05;
hero-font-letter-spacing: 2px;
heading-font-size-slider-title: 30px;
heading-font-size-h1: 62px;
heading-font-size-h2: 60px;
heading-font-size-h3: 30px;
heading-font-size-h4: 20px;
heading-font-size-h4-tiny: 13px;
heading-font-size-h4-tiny-letter-spacing: 2px;
heading-font-size-h5: 18px;
heading-font-size-h6: 20px;
heading-font-style-h6: italic;

heading-font-size-h1-desktop: 64px;
heading-font-size-h1-ipad: 48px;
heading-font-size-h1-tablet: 36px;

heading-font-size-h2-ipad: 40px;
heading-font-size-h3-ipad: 22px;
heading-font-size-h4-ipad: 18px;
heading-font-size-h5-ipad: 16px;
heading-font-size-h6-ipad: 20px;

heading-font-hero-h4-letter-spacing: 10px;
heading-font-hero-h4-font-size: 18px;
heading-font-hero-h4-font-weight: 400;
heading-font-hero-h4-text-transform: uppercase;

entry-meta-font-family: "Source Sans Pro", sans-serif;;
entry-meta-font-weight: 400;
entry-meta-font-size: 13px;
entry-meta-font-line-height: 1.3;
entry-meta-font-letter-spacing: normal;
entry-meta-font-style: normal;

quote-font-family: "Source Sans Pro", sans-serif;
quote-font-line-height: 1.2;
quote-font-letter-spacing: normal;
quote-font-weight: 400;
quote-font-style: normal;
quote-font-size: 30px;
quote-font-size-large: 38px;
quote-cite-font-size: 20px;
quote-cite-font-size-large: 24px;
quote-cite-font-style: italic;
quote-cite-font-weight: 300;

button-font-family: "Source Sans Pro", sans-serif;
button-font-letter-spacing: 2px;
button-font-weight: 400;
button-font-style: normal;
button-font-size: 14px;
button-font-size-small: 13px;
button-font-text-transform: uppercase;
button-font-text-decoration: none;
button-font-line-height: 1;
button-font-text-color: #333333;
button-radius: 99em;

nav-font-family: "Source Sans Pro", sans-serif;
nav-font-size: 14px;
nav-font-weight: 400;
nav-font-weight-bold: 600;
nav-font-line-height: 1;
nav-font-letter-spacing: 2px;
nav-font-text-transform: uppercase;
nav-font-style: normal;
nav-height: 94px;

nav-submenu-font-family: "Source Sans Pro",sans-serif;
nav-submenu-font-size: 17px;
nav-submenu-font-weight: 400;
nav-submenu-font-weight-bold: 700;
nav-submenu-font-line-height: 1.5;
nav-submenu-font-letter-spacing: normal;
nav-submenu-text-transform: none;
nav-submenu-font-style: normal;
nav-submenu-font-description-size: 15px;

accent-font-family: "Source Sans Pro", sans-serif;;
accent-font-weight: 400;
accent-font-line-height: 1.3;
accent-font-letter-spacing: 10px;
accent-font-text-transform: uppercase;
accent-font-style: normal;
accent-font-size: 18px;

border-radius-large: 50px;
border-radius-medium: 14px;
border-radius: 4px;
form-border-radius: 4px;
border-width: 0;
form-border-width: 1px;
table-border-width: 1px;
form-input-height: 49px;

slider-arrow-size: 40px;
slider-pagination-size: 14px;

margin-bottom: 40px;
margin-bottom-mobile: 30px;
';

return array(
	// Fonts.
	'fonts-url'                    => 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i|Source+Sans+Pro:100,100i,300,300i,400,400i,600,600i,700,700i&display=swap',
	'custom-fonts-url'             => '',
	'icons-url'                    => 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
	'icons-js-url'                 => 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
	'icons-esm-js-url'	           => 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
	// Logo.
	'logo-sticky'                  => '',
	'logo-width'                   => 270,
	'logo-mobile'                  => '',
	'logo-mobile-width'            => '',
	'logo-top-spacing'             => 20,
	'logo-bottom-spacing'          => 10,
	'logo-mobile-top-spacing'      => 15,
	'logo-mobile-bottom-spacing'   => 15,
	// WooCommerce.
	'shop-post-menu-search'        => 0,
	'shop-hide-menu-cart'          => 0,
	'shop-gallery-zoom'            => 0,
	'shop-gallery-lightbox'        => 0,
	'shop-gallery-slider'          => 0,
	'shop-hide-stars'              => 0,
	'shop-product-hide-stars'      => 0,
	'shop-hide-result-count'       => 0,
	'shop-hide-catalog-ordering'   => 0,
	'shop-product-hide-meta'       => 0,
	'shop-columns'                 => 3,
	'shop-rows'                    => 2,
	'shop-footer-cta'              => 0,
	// Menu.
	'hide-menu-search'             => 1,
	'colored-menu-background'      => 0,
	'transparent-menu-background'  => 1,
	'display-banner-desktop'       => 0,
	'mobile-cta-text'       => 'Contact',
	'mega-menu'       => '',
	'mobile-menu'       => '',
	'footer-menu'       => '',
	'popup'       => '',
	// Images.
	'post-image'                   => 1,
	'page-image'                   => 1,
	'portfolio-image'              => 1,
	'event-image'                  => 1,
	// Simple Social Icons.
	'simple-social-icons-settings' => array(
		'title'                  => 'Connect',
		'alignment'              => 'aligncenter',
		'background_color'       => '',
		'background_color_hover' => '',
		'border_radius'          => 9999,
		'border_width'           => 0,
		'size'                   => 62,
	),
	// Gutenberg.
	'content-width'                => 750,
	'content-width-wide'           => 1120,
	'css-vars'                     => $css_vars,
);
