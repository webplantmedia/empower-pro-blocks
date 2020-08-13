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
<p>Please fill out the form below and we will reply within 24 hours.</p>
<!-- /wp:paragraph -->

<!-- wp:shortcode -->
[wpforms id="225" title="false" description="false"]
<!-- /wp:shortcode -->

<!-- wp:paragraph -->
<p>* This contact form was built with <a href="https://wordpress.org/plugins/wpforms-lite/">WP Forms Lite</a>, which is free to use and comes highly recommend by Web Plant Media.</p>
<!-- /wp:paragraph -->
CONTENT;

return $empower_pro_blocks_content;
