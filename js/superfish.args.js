/**
 * Initialise Superfish with custom arguments.
 *
 * @package Genesis\JS
 * @author Web Plant Media
 * @license GPL-2.0-or-later
 */

jQuery(function ($) {
	"use strict";
	$(".js-superfish").superfish({
		delay: 300,
		dropShadows: false,
		animation: { opacity: "show", height: "show" },
		animationOut: { opacity: "hide", height: "hide" },
		speed: "fast",
		disableHI: true,
	});
});
