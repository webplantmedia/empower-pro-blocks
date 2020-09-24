<?php 

function empower_pro_blocks_create_post_type() {

	$args = apply_filters(
		'empower_pro_blocks_post_type_args',
		array(
			'labels'        => array(
				'name'               => __( 'Site Elements', 'empress-pro-blocks' ),
				'singular_name'      => __( 'Site Element', 'empress-pro-blocks' ),
				'add_new'            => __( 'Add New', 'empress-pro-blocks' ),
				'add_new_item'       => __( 'Add New Site Element', 'empress-pro-blocks' ),
				'edit'               => __( 'Edit', 'empress-pro-blocks' ),
				'edit_item'          => __( 'Edit Site Element', 'empress-pro-blocks' ),
				'new_item'           => __( 'New Site Element', 'empress-pro-blocks' ),
				'view'               => __( 'View Site Element', 'empress-pro-blocks' ),
				'view_item'          => __( 'View Site Element', 'empress-pro-blocks' ),
				'search_items'       => __( 'Search Site Elements', 'empress-pro-blocks' ),
				'not_found'          => __( 'No site elements found', 'empress-pro-blocks' ),
				'not_found_in_trash' => __( 'No site elements found in Trash', 'empress-pro-blocks' ),
			),
			'public'        => true,
			'exclude_from_search' => true,
			'publicly_queryable' => true,
			'show_ui' => true,
			'show_in_menu' => true,
			'query_var'     => true,
			'menu_position' => 6,
			'menu_icon'     => 'dashicons-welcome-widgets-menus',
			'has_archive'   => false,
			'show_in_rest'  => true,
			'supports'      => array( 'title', 'page-attributes', 'author', 'editor', 'excerpt', 'revisions', 'thumbnail'),
		)
	);

	register_post_type( 'site_element', $args );

}

add_action( 'init', 'empower_pro_blocks_create_post_type' );

function empower_pro_blocks_fetch_all_site_elements() {
	$list = array();
	$args = array('post_type' => 'site_element');
	$posts = get_posts( $args ); 

	foreach($posts as $post) {
		$list[$post->ID] = $post->post_title;
	}

	return array( "" => "None" ) + $list;
}
