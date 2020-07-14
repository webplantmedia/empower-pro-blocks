/***
 * This script adds general functionality to theme.
 *
 * @package Empower_Pro_Blocks
 * @author Web Plant Media
 * @version 1.1.3
 * @license GPL-2.0+
 */

( function($) {

	'use strict';

	var $window = $( window );
	var drew = false;
	var scroll = 0;

	var scrollIt = function (event) {

		scroll           = $window.scrollTop();
		var windowHeight = $window.height();
		var stop         = windowHeight;
		var $body        = $( 'body' );
		var $siteHeader  = $( '.site-header' );
		var $mobileCTA   = $( '.nav-mobile-cta' );
		var $menuToggle  = $( '.menu-toggle' );
		var $glide       = $( '.glide' );
		var $drawLine    = $( '.draw-line' );
		var linePos      = null;
		
		if ( $drawLine.length ) {
			var linePos = $drawLine.offset();
		}

		if ( $menuToggle.is( ':hidden' ) ) {
			if ( scroll > 10 ) {
				$body.addClass( 'sticky' );
			} else {
				$body.removeClass( 'sticky' );
			}
		} else if ( $mobileCTA.length ) {
			if ( scroll > 600 ) {
				$mobileCTA.addClass( 'sticky-mobile' );
			} else {
				$mobileCTA.removeClass( 'sticky-mobile' );
			}
		}

		if ( ! drew && linePos && linePos.hasOwnProperty( 'top' ) ) {
			var top = null;
			var bottom = null;
			var left = null;
			var diff = 0;

			top = linePos.top - windowHeight + 200;
			bottom = linePos.top + 500;

			// console.log(top);
			// console.log(scroll);
			// console.log(bottom);
			if ( top < scroll && scroll < bottom ) {
				$drawLine.addClass('draw-line-animate');
				drew = true;
			}

			// if ( bottom < scroll || scroll < top ) {
				// $drawLine.removeClass('draw-line-animate');
			// }
		}


		$glide.each( function() {
			var $this = $( this );
			var x = 0;
			var y = 0;
			var top = 0;

			if ( top != null ) {

				if ( scroll < stop ) {
					// console.log(scroll);
					// console.log(stop);
					if ( scroll > 0 ) {
						if ( $this.hasClass('glide-left') )  { 
							x = scroll;
							y = scroll * 2;

							if ( $this.hasClass('glide-down') )  { 
								$this.css( 'transform', 'translate(-'+x+'px, '+y+'px)' );
							}
							else {
								$this.css( 'transform', 'translateX(-'+x+'px)' );
							}
						}
						if ( $this.hasClass('glide-right') )  { 
							x = scroll;
							y = scroll * 2;

							if ( $this.hasClass('glide-down') )  { 
								$this.css( 'transform', 'translate('+x+'px, '+y+'px)' );
							}
							else {
								$this.css( 'transform', 'translateX('+x+'px)' );
							}
						}
					}
					else {
						$this.css( 'transform', 'translate(0)' );
					}
				}
			}
		});
	};

	$window.scroll( scrollIt );
	$window.load( scrollIt );
	$window.resize( scrollIt );

} )( jQuery );
