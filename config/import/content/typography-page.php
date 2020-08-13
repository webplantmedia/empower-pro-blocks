<?php
/**
 * Empower Pro Blocks child theme.
 *
 * @package Empower_Pro_Blocks
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/empower-pro-blocks/
 */

$empower_pro_blocks_content = <<<CONTENT
<!-- wp:paragraph -->
<p>This theme is optimized with support for special features of the Gutenberg editor. This includes wide and full-width content blocks, block styling, custom colors, custom font sizes, and back end editor styling that matches the front end of your site.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Quotes</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You can pull parts of your content into quotes, such as this one. Here is a large quote:</p>
<!-- /wp:paragraph -->

<!-- wp:quote {"className":"is-style-large"} -->
<blockquote class="wp-block-quote is-style-large"><p>Good  design is as little as possible. Less, but better, because it  concentrates on the essential aspects.&nbsp;Back to purity, back to  simplicity.</p><cite>- Dieter Rams<br></cite></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p>Here is a regular size quote:</p>
<!-- /wp:paragraph -->

<!-- wp:quote {"className":"is-style-default"} -->
<blockquote class="wp-block-quote is-style-default"><p>Good  design is as little as possible. Less, but better, because it  concentrates on the essential aspects.&nbsp;Back to purity, back to  simplicity.</p><cite>- Dieter Rams<br></cite></blockquote>
<!-- /wp:quote -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Buttons</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Insert buttons as calls to action:</p>
<!-- /wp:paragraph -->

<!-- wp:button {"backgroundColor":"primary","className":"small"} -->
<div class="wp-block-button small"><a class="wp-block-button__link has-background has-primary-background-color" href="https://webplantmedia.com">Visit Web Plant Media</a></div>
<!-- /wp:button -->

<!-- wp:button {"backgroundColor":"primary"} -->
<div class="wp-block-button"><a class="wp-block-button__link has-background has-primary-background-color" href="https://webplantmedia.com">Visit Web Plant Media</a></div>
<!-- /wp:button -->

<!-- wp:button {"backgroundColor":"primary","className":"large"} -->
<div class="wp-block-button large"><a class="wp-block-button__link has-background has-primary-background-color" href="https://webplantmedia.com">Visit Web Plant Media</a></div>
<!-- /wp:button -->

<!-- wp:button {"backgroundColor":"secondary","className":"small"} -->
<div class="wp-block-button small"><a class="wp-block-button__link has-background has-secondary-background-color" href="https://webplantmedia.com">Visit Web Plant Media</a></div>
<!-- /wp:button -->

<!-- wp:button {"backgroundColor":"secondary"} -->
<div class="wp-block-button"><a class="wp-block-button__link has-background has-secondary-background-color" href="https://webplantmedia.com">Visit Web Plant Media</a></div>
<!-- /wp:button -->

<!-- wp:button {"backgroundColor":"secondary","className":"large"} -->
<div class="wp-block-button large"><a class="wp-block-button__link has-background has-secondary-background-color" href="https://webplantmedia.com">Visit Web Plant Media</a></div>
<!-- /wp:button -->

<!-- wp:button {"textColor":"primary","className":"small is-style-outline"} -->
<div class="wp-block-button small is-style-outline"><a class="wp-block-button__link has-text-color has-primary-color" href="https://webplantmedia.com">Visit Web Plant Media</a></div>
<!-- /wp:button -->

<!-- wp:button {"textColor":"primary","className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-text-color has-primary-color" href="https://webplantmedia.com">Visit Web Plant Media</a></div>
<!-- /wp:button -->

<!-- wp:button {"textColor":"primary","className":"large is-style-outline"} -->
<div class="wp-block-button large is-style-outline"><a class="wp-block-button__link has-text-color has-primary-color" href="https://webplantmedia.com">Visit Web Plant Media</a></div>
<!-- /wp:button -->

<!-- wp:button {"customBackgroundColor":"#333333","customTextColor":"#ffffff","className":"small is-style-squared"} -->
<div class="wp-block-button small is-style-squared"><a class="wp-block-button__link has-text-color has-background" href="https://webplantmedia.com" style="background-color:#333333;color:#ffffff">Visit Web Plant Media</a></div>
<!-- /wp:button -->

<!-- wp:button {"customBackgroundColor":"#333333","customTextColor":"#ffffff","className":"is-style-squared"} -->
<div class="wp-block-button is-style-squared"><a class="wp-block-button__link has-text-color has-background" href="https://webplantmedia.com" style="background-color:#333333;color:#ffffff">Visit Web Plant Media</a></div>
<!-- /wp:button -->

<!-- wp:button {"customBackgroundColor":"#333333","customTextColor":"#ffffff","className":"large is-style-squared"} -->
<div class="wp-block-button large is-style-squared"><a class="wp-block-button__link has-text-color has-background" href="https://webplantmedia.com" style="background-color:#333333;color:#ffffff">Visit Web Plant Media</a></div>
<!-- /wp:button -->

<!-- wp:button {"className":"text"} -->
<div class="wp-block-button text"><a class="wp-block-button__link" href="https://webplantmedia.com">Visit Web Plant Media</a></div>
<!-- /wp:button -->

<!-- wp:heading -->
<h2>Content Boxes</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Style paragraphs with custom colors to call attention to text anywhere in your content:</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"backgroundColor":"primary"} -->
<p class="has-background has-primary-background-color">This is a sample paragraph text with a colored background. You can use  this to feature content, highlight something important, or provide a  call-to-action.&nbsp;<a href="https://demo.webplantmedia.com/breakthrough/gutenberg-optimized/#">Sample link.</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"backgroundColor":"secondary"} -->
<p class="has-background has-secondary-background-color">This is a sample paragraph text with a colored background. You can use  this to feature content, highlight something important, or provide a  call-to-action.&nbsp;<a href="https://demo.webplantmedia.com/breakthrough/gutenberg-optimized/#">Sample link.</a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"customTextColor":"#ffffff","customBackgroundColor":"#333333"} -->
<p style="background-color:#333333;color:#ffffff" class="has-text-color has-background">This is a sample paragraph text with a colored background. You can use  this to feature content, highlight something important, or provide a  call-to-action.&nbsp;<a href="https://demo.webplantmedia.com/breakthrough/gutenberg-optimized/#">Sample link.</a></p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Headings</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Style headings from level one to six:</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":1} -->
<h1>Heading level 1</h1>
<!-- /wp:heading -->

<!-- wp:heading -->
<h2>Heading level 2</h2>
<!-- /wp:heading -->

<!-- wp:heading -->
<h2>Heading level 3</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":4} -->
<h4>Heading level 4</h4>
<!-- /wp:heading -->

<!-- wp:heading {"level":5} -->
<h5>Heading level 5</h5>
<!-- /wp:heading -->

<!-- wp:heading {"level":6} -->
<h6>Heading level 6</h6>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>You also have a range of font sizes to choose from for regular text:</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Text sizes</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"fontSize":"small"} -->
<p class="has-small-font-size">Small font size.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Regular font size.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"large"} -->
<p class="has-large-font-size">Large font size.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"larger"} -->
<p class="has-larger-font-size">Larger font size.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"fontSize":"huge"} -->
<p class="has-huge-font-size">Huge paragraph font size.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Ready to try it yourself? Here’s how:</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>Get started</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>To get started writing content with Gutenberg:</p>
<!-- /wp:paragraph -->

<!-- wp:list {"ordered":true} -->
<ol><li>Purchase this theme or <a href="https://webplantmedia.com/sites/">host your site with WP Engine</a> to get access to all Web Plant Media themes.</li><li><a href="https://wordpress.org/download/">Install or update to WordPress 5.0</a>&nbsp;if your host does not manage your WordPress installation for you.</li><li>Activate your theme and start writing!</li></ol>
<!-- /wp:list -->
CONTENT;

return $empower_pro_blocks_content;
