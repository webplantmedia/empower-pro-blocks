/**
 * Trigger AJAX request to save state when the WooCommerce notice is dismissed.
 *
 * @version 1.0.0
 *
 * @author Web Plant Media
 * @license GPL-2.0+
 * @package Leadership_Pro
 */

jQuery( document ).on(
	'click',
	'.leadership-pro-woocommerce-notice .notice-dismiss',
	function() {

		jQuery.ajax(
			{
				url: ajaxurl,
				data: {
					action: 'leadership_pro_dismiss_woocommerce_notice'
				}
			}
		);

	}
);
