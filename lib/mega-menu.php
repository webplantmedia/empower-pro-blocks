<?php
function empower_pro_blocks_mega_menu_options()
{
	// global $empower_pro_blocks_appearance;
	// if ($empower_pro_blocks_appearance['mega-menu']) {
	// add_action('wp_nav_menu_item_custom_fields', 'empower_pro_blocks_menu_item_image', 10, 2);
	// add_action('wp_nav_menu_item_custom_fields', 'empower_pro_blocks_menu_item_image_hover', 10, 2);
	// add_action('wp_nav_menu_item_custom_fields', 'empower_pro_blocks_menu_item_icon', 10, 2);
	add_action('wp_nav_menu_item_custom_fields', 'empower_pro_blocks_menu_item_dropdown_target', 10, 2);
	// add_action('wp_nav_menu_item_custom_fields', 'empower_pro_blocks_menu_item_id', 10, 2);
	// add_action('wp_update_nav_menu_item', 'empower_pro_blocks_save_menu_item_image', 10, 2);
	// add_action('wp_update_nav_menu_item', 'empower_pro_blocks_save_menu_item_image_hover', 10, 2);
	// add_action('wp_update_nav_menu_item', 'empower_pro_blocks_save_menu_item_icon', 10, 2);
	add_action('wp_update_nav_menu_item', 'empower_pro_blocks_save_menu_item_dropdown_target', 10, 2);
	add_action('admin_head-nav-menus.php', 'empower_pro_blocks_menu_image_admin_head_nav_menus_action');
	// }
}
add_action('admin_init', 'empower_pro_blocks_mega_menu_options');

function empower_pro_blocks_mega_menu_wp()
{
	global $empower_pro_blocks_appearance;
	if ($empower_pro_blocks_appearance['mega-menu']) {
		add_action('wp_enqueue_scripts', 'empower_pro_blocks_mega_menu_scripts');
		add_action('genesis_header', 'empower_pro_blocks_do_nav_submenu', 13);
		add_filter('wp_nav_menu_args', 'empower_pro_blocks_mega_menu_args');
		add_filter('genesis_superfish_enabled', '__return_true');
		add_filter('genesis_attr_site-header', 'empower_pro_blocks_add_class');
		add_filter('nav_menu_link_attributes', 'empower_pro_blocks_menu_atts', 10, 3);
	}
}
add_action('wp', 'empower_pro_blocks_mega_menu_wp');

function empower_pro_blocks_menu_item_image($item_id, $item)
{
	$menu_item_image = get_post_meta($item_id, '_menu_item_image', true);
?>
	<div class="mega-menu-options">
		<span class="description"><?php _e("Item Image", 'empower-pro-blocks'); ?></span><br />
		<input type="hidden" class="nav-menu-id" value="<?php echo $item_id; ?>" />
		<div class="logged-input-holder">
			<span class="menu-image-preview">
				<?php if ($menu_item_image) : ?>
					<img src="<?php echo $menu_item_image; ?>" />
				<?php endif; ?>
			</span>
			<input type="hidden" name="menu_item_image[<?php echo $item_id; ?>]" id="menu-item-image-<?php echo $item_id; ?>" value="<?php echo esc_attr($menu_item_image); ?>" />
			<button class="button button-secondary button-large menu-image-button"><span>Add Image</span></button>
			<button class="button button-secondary button-large menu-image-clear"><span>Clear</span></button>
		</div>
	</div>
<?php
}

function empower_pro_blocks_menu_item_image_hover($item_id, $item)
{
	$menu_item_image_hover = get_post_meta($item_id, '_menu_item_image_hover', true);
?>
	<div class="mega-menu-options">
		<span class="description"><?php _e("Item Image Hover", 'empower-pro-blocks'); ?></span><br />
		<input type="hidden" class="nav-menu-id" value="<?php echo $item_id; ?>" />
		<div class="logged-input-holder">
			<span class="menu-image-preview">
				<?php if ($menu_item_image_hover) : ?>
					<img src="<?php echo $menu_item_image_hover; ?>" />
				<?php endif; ?>
			</span>
			<input type="hidden" name="menu_item_image_hover[<?php echo $item_id; ?>]" id="menu-item-image-hover-<?php echo $item_id; ?>" value="<?php echo esc_attr($menu_item_image_hover); ?>" />
			<button class="button button-secondary button-large menu-image-button"><span>Add Image</span></button>
			<button class="button button-secondary button-large menu-image-clear"><span>Clear</span></button>
		</div>
	</div>
<?php
}

function empower_pro_blocks_menu_item_icon($item_id, $item)
{
	$menu_item_icon = get_post_meta($item_id, '_menu_item_icon', true);
?>
	<div class="mega-menu-options">
		<span class="description"><?php _e("Item Icon", 'empower-pro-blocks'); ?></span><br />
		<input type="hidden" class="nav-menu-id" value="<?php echo $item_id; ?>" />
		<div class="logged-input-holder">
			<input type="text" name="menu_item_icon[<?php echo $item_id; ?>]" id="menu-item-icon-<?php echo $item_id; ?>" value="<?php echo esc_attr($menu_item_icon); ?>" />
		</div>
		<span class="description"><a href="https://ionicons.com/" target="_blank">Ionicons</a> and <a href="https://ionic.io/ionicons/v2" target="_blank">Ionicons v2</a>.</span>
	</div>
<?php
}

function empower_pro_blocks_menu_item_dropdown_target($item_id, $item)
{
	$menu_item_dropdown_target = get_post_meta($item_id, '_menu_item_dropdown_target', true);
?>
	<div class="mega-menu-options">
		<span class="description"><?php _e("Dropdown Target", 'empower-pro-blocks'); ?></span><br />
		<input type="hidden" class="nav-menu-id" value="<?php echo $item_id; ?>" />
		<div class="logged-input-holder">
			<input type="text" name="menu_item_dropdown_target[<?php echo $item_id; ?>]" id="menu-item-dropdown-target-<?php echo $item_id; ?>" value="<?php echo esc_attr($menu_item_dropdown_target); ?>" />
		</div>
		<span class="description">For Primary menu only. Enter <code>dropdown-data</code> string of mega menu dropdown you want to open.</span>
	</div>
<?php
}

function empower_pro_blocks_menu_item_id($item_id, $item)
{
?>
	<div class="mega-menu-options">
		<span class="description"><?php _e("Menu ID", 'empower-pro-blocks'); ?></span><br />
		<code>#menu-item-<?php echo $item_id; ?></code>
	</div>
<?php
}

function empower_pro_blocks_save_menu_item_image($menu_id, $menu_item_db_id)
{
	if (isset($_POST['menu_item_image'][$menu_item_db_id])) {
		$sanitized_data = sanitize_url($_POST['menu_item_image'][$menu_item_db_id]);
		update_post_meta($menu_item_db_id, '_menu_item_image', trim($sanitized_data));
	} else {
		delete_post_meta($menu_item_db_id, '_menu_item_image');
	}
}

function empower_pro_blocks_save_menu_item_image_hover($menu_id, $menu_item_db_id)
{
	if (isset($_POST['menu_item_image_hover'][$menu_item_db_id])) {
		$sanitized_data = sanitize_url($_POST['menu_item_image_hover'][$menu_item_db_id]);
		update_post_meta($menu_item_db_id, '_menu_item_image_hover', trim($sanitized_data));
	} else {
		delete_post_meta($menu_item_db_id, '_menu_item_image_hover');
	}
}

function empower_pro_blocks_save_menu_item_icon($menu_id, $menu_item_db_id)
{
	if (isset($_POST['menu_item_icon'][$menu_item_db_id])) {
		$sanitized_data = wp_kses_post($_POST['menu_item_icon'][$menu_item_db_id]);
		update_post_meta($menu_item_db_id, '_menu_item_icon', trim($sanitized_data));
	} else {
		delete_post_meta($menu_item_db_id, '_menu_item_icon');
	}
}

function empower_pro_blocks_save_menu_item_dropdown_target($menu_id, $menu_item_db_id)
{
	if (isset($_POST['menu_item_dropdown_target'][$menu_item_db_id])) {
		$sanitized_data = wp_kses_post($_POST['menu_item_dropdown_target'][$menu_item_db_id]);
		update_post_meta($menu_item_db_id, '_menu_item_dropdown_target', trim($sanitized_data));
	} else {
		delete_post_meta($menu_item_db_id, '_menu_item_dropdown_target');
	}
}


function empower_pro_blocks_menu_image_admin_head_nav_menus_action()
{
	// wp_enqueue_script(
	// 'empower-pro-blocks-menu-image-admin',
	// CHILD_URL . '/js/admin-menu.js',
	// array('jquery'),
	// CHILD_THEME_VERSION
	// );
	wp_enqueue_style('empower-pro-blocks-admin-menu', EMPOWER_PRO_BLOCKS_URL . 'css/admin-menu.css', array(), EMPOWER_PRO_BLOCKS_VERSION);
	/*wp_localize_script('empower-pro-blocks-menu-image-admin', 'menuImage', array(
		'l10n'     => array(
			'uploaderTitle'      => __('Chose menu image', 'menu-image'),
			'uploaderButtonText' => __('Select', 'menu-image'),
		),
		'settings' => array(
			'nonce' => wp_create_nonce('update-menu-item'),
		),
	));*/
	// wp_enqueue_media();
}

/**
 * Reduces the secondary navigation menu to one level depth.
 *
 * @since 1.0.0
 *
 * @param array $args The WP navigation menu arguments.
 * @return array The modified menu arguments.
 */
function empower_pro_blocks_mega_menu_args($args)
{
	if ('primary' === $args['theme_location']) {
		$args['depth'] = 1;
	}

	return $args;
}


function empower_pro_blocks_mega_menu_scripts()
{
	wp_deregister_script('superfish');
	wp_deregister_script('superfish-args');

	wp_enqueue_script('empower-pro-blocks-dropdown-menu-js', EMPOWER_PRO_BLOCKS_URL . 'js/dropdown-menu.js', array('jquery'), EMPOWER_PRO_BLOCKS_VERSION, true);
}

// Add extra class to content
function empower_pro_blocks_add_class($attributes)
{
	$attributes['class'] = $attributes['class'] . ' globalNav noDropdownTransition';
	// $attributes['class'] = $attributes['class']. ' globalNav overlayActive dropdownActive';
	return $attributes;
}

function empower_pro_blocks_menu_atts($atts, $item, $args)
{
	// inspect $item
	if ('primary' === $args->theme_location) {
		$href = get_post_meta($item->ID, '_menu_item_dropdown_target', true);
		if (substr($href, 0, 1) === '#') {
			$data_dropdown = ltrim($href, '#');
			$atts['data-dropdown'] = $data_dropdown;
			$class = 'hasDropdown';
			if (isset($atts['class'])) {
				$class .= " " . $atts['class'];
			}
			$atts['class'] = $class;
		}
	}

	return $atts;
}

/**
 * Reduces the secondary navigation menu to one level depth.
 *
 * @since 1.0.0
 *
 * @param array $args The WP navigation menu arguments.
 * @return array The modified menu arguments.
 */
function empower_pro_blocks_do_nav_submenu()
{
	global $empower_pro_blocks_appearance;

	$id = $empower_pro_blocks_appearance['mega-menu'];

	if (!$id) {
		return;
	}

	$post = get_post($id);

	if (!$post) {
		return;
	}

	$html = '';

	$html .= '<div id="dropdown-root" class="dropdownRoot">';
	$html .= '<div class="dropdownBackground" style="transform: translateX(452px) scaleX(0.707692) scaleY(1.1075);">';
	$html .= '<div class="alternateBackground" style="transform: translateY(255.53px);"></div>';
	$html .= '</div>';
	$html .= '<div class="dropdownArrow" style="transform: translateX(636px) rotate(45deg);"></div>';
	$html .= '<div class="dropdownContainer" style="transform: translateX(452px); width: 368px; height: 443px;">';

	$content = apply_filters('the_content', get_post_field('post_content', $post->ID));
	$html .= $content;

	$html .= '</div>';
	$html .= '</div>';

	echo $html;
}

add_action('genesis_header', 'empower_pro_blocks_do_mobile_menu', 12);
function empower_pro_blocks_do_mobile_menu()
{
	global $empower_pro_blocks_appearance;

	$mobile_menu_id = $empower_pro_blocks_appearance['mobile-menu'];

	if (!$mobile_menu_id) {
		return;
	}

	$post = get_post($mobile_menu_id);

	if (!$post) {
		return;
	}

	$html = '';

	$html .= '<div class="navSection mobile">';
	$html .= '<button class="menu-toggle burger-menu" aria-expanded="false" aria-pressed="false" id="genesis-mobile-nav-primary"><span class="flex-wrap"><span class="line-1"></span><span class="line-2"></span><span class="line-3"></span></span></button>';
	$html .= '<div class="popup">';
	$html .= '<div class="popupContainer">';

	$content = apply_filters('the_content', get_post_field('post_content', $post->ID));
	$html .= $content;

	$html .= '</div>';
	$html .= '</div>';
	$html .= '</div>';


	echo $html;
}
