<?php
/**
 * Leadership Pro child theme.
 *
 * @package Leadership_Pro
 * @author  Web Plant Media
 * @license GPL-2.0+
 * @link    https://webplantmedia.com/product/leadership-pro/
 */

$leadership_pro_image_3  = CHILD_URL . '/config/import/images/image-3.jpg';
$leadership_pro_home_url = esc_url( home_url( '/' ) );

$leadership_pro_content = <<<CONTENT
<!-- wp:paragraph -->
<p>This  is an example of a WordPress page, you could edit this to put  information so readers know where you are coming from. You can create as  many pages like this one or sub-pages as you like and manage all of  your content inside of WordPress. Click <a href="$leadership_pro_home_url">HERE</a> to return to the theme demo.</p>
<!-- /wp:paragraph -->

<!-- wp:image {"id":29} -->
<figure class="wp-block-image"><img src="$leadership_pro_image_3" alt="" class="wp-image-29"/></figure>
<!-- /wp:image -->

<!-- wp:heading -->
<h2>Reason #1 To Buy This Theme</h2>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This is an example of a WordPress page, you could edit this to put 
information so readers know where you are coming from. You can create as
 many pages like this one or sub-pages as you like and manage all of 
your content inside of WordPress. This is an example of a WordPress 
page, you could edit this to put information so readers know where you 
are coming from. You can create as many pages as you like and manage all
 of your content.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>Reason #2 To Buy This Theme</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This is an example of a WordPress page, you could edit this to put 
information so readers know where you are coming from. You can create as
 many pages like this one or sub-pages as you like and manage all of 
your content inside of WordPress. This is an example of a WordPress 
page, you could edit this to put information so readers know where you 
are coming from. You can create as many pages as you like and manage all
 of your content.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":4} -->
<h4>Reason #3 To Buy This Theme</h4>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>This is an example of a WordPress page, you could edit this to put 
information so readers know where you are coming from. You can create as
 many pages like this one or sub-pages as you like and manage all of 
your content inside of WordPress. This is an example of a WordPress 
page, you could edit this to put information so readers know where you 
are coming from. You can create as many pages as you like and manage all
 of your content.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p></p>
<!-- /wp:paragraph -->
CONTENT;

return $leadership_pro_content;
