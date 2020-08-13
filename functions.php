<?php

/**
 * Change default arguments for the dropdown menu script
 *
 * @since 2.2.3
 *
 * @return string URL of superfish arguemnt js file.
 */
function empower_pro_blocks_superfish_args_url() {

	return EMPOWER_PRO_BLOCKS_URL . 'js/superfish.args.js';

}
add_filter( 'genesis_superfish_args_url', 'empower_pro_blocks_superfish_args_url', 99 );


global $empower_pro_blocks_appearance;
$empower_pro_blocks_appearance = empower_pro_blocks_get_config( 'appearance' );
