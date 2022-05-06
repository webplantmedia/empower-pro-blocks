<?php

function empower_pro_blocks_fetch_all_site_elements()
{
	$list = array();
	$args = array('post_type' => 'site_element');
	$posts = get_posts($args);

	foreach ($posts as $post) {
		$list[$post->ID] = $post->post_title;
	}

	return array("" => "None") + $list;
}
