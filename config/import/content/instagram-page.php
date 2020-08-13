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
<!-- wp:spacer {"height":50} -->
<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"level":4,"align":"center"} -->
<h4 style="text-align:center">Top Links</h4>
<!-- /wp:heading -->

<!-- wp:button {"align":"center","className":"wide-button"} -->
<div class="wp-block-button aligncenter wide-button"><a class="wp-block-button__link" href="#">Blog</a></div>
<!-- /wp:button -->

<!-- wp:button {"align":"center","className":"wide-button"} -->
<div class="wp-block-button aligncenter wide-button"><a class="wp-block-button__link" href="#">Portfolio</a></div>
<!-- /wp:button -->

<!-- wp:button {"align":"center","className":"wide-button"} -->
<div class="wp-block-button aligncenter wide-button"><a class="wp-block-button__link" href="#">Shop</a></div>
<!-- /wp:button -->

<!-- wp:button {"align":"center","className":"wide-button"} -->
<div class="wp-block-button aligncenter wide-button"><a class="wp-block-button__link" href="#">Contact</a></div>
<!-- /wp:button -->

<!-- wp:spacer {"height":50} -->
<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"level":4,"align":"center"} -->
<h4 style="text-align:center">Top Posts</h4>
<!-- /wp:heading -->

<!-- wp:atomic-blocks/ab-post-grid {"postsToShow":4,"displayPostDate":false,"displayPostExcerpt":false,"displayPostAuthor":false,"displayPostLink":false,"sectionTag":"aside","imageSize":"ab-block-post-grid-landscape"} /-->
CONTENT;

return $empower_pro_blocks_content;
