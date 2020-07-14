/**
 * Trigger AJAX request to save state when the WooCommerce notice is dismissed.
 *
 * @version 1.0.0
 *
 * @author Web Plant Media
 * @license GPL-2.0+
 * @package Empower_Pro_Blocks
 */

jQuery( document ).on(
	'click',
	'.empower-pro-blocks-woocommerce-notice .notice-dismiss',
	function() {

		jQuery.ajax(
			{
				url: ajaxurl,
				data: {
					action: 'empower_pro_blocks_dismiss_woocommerce_notice'
				}
			}
		);

	}
);
