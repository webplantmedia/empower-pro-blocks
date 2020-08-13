<?php
/**
 * Empower Pro Blocks child theme.
 *
 * @package Empower_Pro_Blocks
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/empower-pro-blocks/
 */

$empower_pro_blocks_image_1  = CHILD_URL . '/config/import/images/image-1.jpg';
$empower_pro_blocks_image_2  = CHILD_URL . '/config/import/images/image-2.jpg';
$empower_pro_blocks_image_3  = CHILD_URL . '/config/import/images/image-3.jpg';
$empower_pro_blocks_image_4  = CHILD_URL . '/config/import/images/image-4.jpg';
$empower_pro_blocks_image_5  = CHILD_URL . '/config/import/images/image-5.jpg';
$empower_pro_blocks_image_6  = CHILD_URL . '/config/import/images/image-6.jpg';
$empower_pro_blocks_image_7  = CHILD_URL . '/config/import/images/image-7.jpg';
$empower_pro_blocks_image_8  = CHILD_URL . '/config/import/images/image-8.jpg';
$empower_pro_blocks_image_9  = CHILD_URL . '/config/import/images/image-9.jpg';
$empower_pro_blocks_image_10 = CHILD_URL . '/config/import/images/image-10.jpg';
$empower_pro_blocks_image_11 = CHILD_URL . '/config/import/images/image-11.jpg';

$empower_pro_blocks_content = <<<CONTENT
<!-- wp:paragraph -->
<p>This theme is optimized with support for special features of the Gutenberg editor. This includes wide and full-width content blocks, block styling, custom colors, custom font sizes, and back end editor styling that matches the front end of your site.</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>A full-width image</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":113,"align":"full"} -->
<figure class="wp-block-image alignfull"><img src="$empower_pro_blocks_image_1" alt="" class="wp-image-113"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Images, videos, galleries, and other content can also be presented in a wide block that extends beyond the central column at bigger screen widths:</p>
<!-- /wp:paragraph -->

<!-- wp:heading -->
<h2>A wide image</h2>
<!-- /wp:heading -->

<!-- wp:image {"id":26,"align":"wide"} -->
<figure class="wp-block-image alignwide"><img src="$empower_pro_blocks_image_2" alt="" class="wp-image-26"/></figure>
<!-- /wp:image -->

<!-- wp:paragraph -->
<p>Your posts and pages can contain galleries, which are collections of images presented in one or more columns:</p>
<!-- /wp:paragraph -->

<!-- wp:gallery {"ids":["29","114"],"align":"wide"} -->
<ul class="wp-block-gallery alignwide columns-2 is-cropped"><li class="blocks-gallery-item"><figure><img src="$empower_pro_blocks_image_3" alt="" data-id="29" data-link="https://demo.webplantmedia.com/empower-pro-blocks/homepage/stock-images-for-social-media-4/" class="wp-image-29"/></figure></li><li class="blocks-gallery-item"><figure><img src="$empower_pro_blocks_image_4" alt="" data-id="114" data-link="https://demo.webplantmedia.com/empower-pro-blocks/?attachment_id=114" class="wp-image-114"/></figure></li></ul>
<!-- /wp:gallery -->

<!-- wp:paragraph -->
<p>Galleries can use the full width, as above, or the wide block and regular content widths:</p>
<!-- /wp:paragraph -->

<!-- wp:gallery {"ids":["113","88","86","85","26","114","25","24"]} -->
<ul class="wp-block-gallery columns-3 is-cropped"><li class="blocks-gallery-item"><figure><img src="$empower_pro_blocks_image_5" alt="" data-id="113" data-link="https://demo.webplantmedia.com/empower-pro-blocks/?attachment_id=113" class="wp-image-113"/></figure></li><li class="blocks-gallery-item"><figure><img src="$empower_pro_blocks_image_6" alt="" data-id="88" data-link="https://demo.webplantmedia.com/empower-pro-blocks/?attachment_id=88" class="wp-image-88"/></figure></li><li class="blocks-gallery-item"><figure><img src="$empower_pro_blocks_image_7" alt="" data-id="86" data-link="https://demo.webplantmedia.com/empower-pro-blocks/?attachment_id=86" class="wp-image-86"/></figure></li><li class="blocks-gallery-item"><figure><img src="$empower_pro_blocks_image_8" alt="" data-id="85" data-link="https://demo.webplantmedia.com/empower-pro-blocks/?attachment_id=85" class="wp-image-85"/></figure></li><li class="blocks-gallery-item"><figure><img src="$empower_pro_blocks_image_9" alt="" data-id="26" data-link="https://demo.webplantmedia.com/empower-pro-blocks/stock-images-for-social-media-3/" class="wp-image-26"/></figure></li><li class="blocks-gallery-item"><figure><img src="$empower_pro_blocks_image_10" alt="" data-id="114" data-link="https://demo.webplantmedia.com/empower-pro-blocks/?attachment_id=114" class="wp-image-114"/></figure></li><li class="blocks-gallery-item"><figure><img src="$empower_pro_blocks_image_11" alt="" data-id="25" data-link="https://demo.webplantmedia.com/empower-pro-blocks/stock-images-for-social-media-2/" class="wp-image-25"/></figure></li><li class="blocks-gallery-item"><figure><img src="$empower_pro_blocks_image_1" alt="" data-id="24" data-link="https://demo.webplantmedia.com/empower-pro-blocks/stock-images-for-social-media/" class="wp-image-24"/></figure></li></ul>
<!-- /wp:gallery -->

<!-- wp:heading -->
<h2>Video support</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This theme also includes styling for wide and full-width videos, such as this one embedded from YouTube:</p>
<!-- /wp:paragraph -->

<!-- wp:core-embed/youtube {"url":"https://youtu.be/mlkMiqKKuMI","type":"video","providerNameSlug":"youtube","align":"full","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed-youtube alignfull wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://youtu.be/mlkMiqKKuMI
</div><figcaption><em>Your videos can also have captions. This video is by&nbsp;</em><a href="https://www.youtube.com/channel/UCCtcSro569szkRM2hUAnLTQ"><em>Kevin Winzeler</em></a><em>.</em></figcaption></figure>
<!-- /wp:core-embed/youtube -->

<!-- wp:paragraph -->
<p>Or this video embedded from Vimeo:</p>
<!-- /wp:paragraph -->

<!-- wp:core-embed/vimeo {"url":"https://vimeo.com/296520382","type":"video","providerNameSlug":"vimeo","align":"wide","className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
<figure class="wp-block-embed-vimeo alignwide wp-block-embed is-type-video is-provider-vimeo wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://vimeo.com/296520382
</div></figure>
<!-- /wp:core-embed/vimeo -->

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
