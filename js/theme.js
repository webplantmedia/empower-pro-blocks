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

	// Search Menu Item.
	var $searchMenuItem         = $( '#empower-pro-blocks-post-search-menu-item' );
	var $searchMenuDropdown     = $( '#post-search-dropdown' );
	var $searchMenuDropdownMenu = $( '#post-search-dropdown .menu' );
	var $window                 = $( window );

	$searchMenuItem.click(
		function( event ) {
			event.preventDefault();

			var $this = $( this );
			$( $searchMenuDropdown ).css( 'display', 'block' );
			$( $searchMenuDropdownMenu ).slideToggle(
				'fast',
				function() {
					$searchMenuItem.toggleClass(
						'search-on',
						$( this ).is( ':visible' )
					);
				}
			).find( 'form input[type="search"]' ).focus();
		}
	);

	// Prevent action of dropdowns with href="#".
	$( '.menu' ).find( 'a[href="#"]' ).click(
		function( event ) {
			return false;
		}
	);

	function anchorScroll( anchor ) {
		var scrollTop, $anchor, offset = 0;
		$anchor                        = $( anchor );

		if ( $anchor.length ) {

			if ( $anchor.hasClass( 'learn-more' ) ) {
				$anchor   = $( '.learn-more' );
				scrollTop = $anchor.offset().top;
			} else {
				scrollTop = $anchor.offset().top;

				var $header   = $( '.site-header' );
				var marginTop = Number( parseInt( $( 'html' ).css( 'margin-top' ) ) );
				offset        = offset + marginTop;
				offset        = offset + 30;

				if ( $anchor.hasClass( 'large-anchor-offset' ) ) {
					offset = offset + 60;
				}

				if ( 'fixed' === $header.css( 'position' ) ) {
					var headerHeight = $header.outerHeight( true );
					offset           = offset + headerHeight;
				}

				scrollTop = scrollTop - offset;
			}

			$( 'html,body' ).animate( { scrollTop: scrollTop }, 'slow' );

		}
	}

	// animate scroll to anchor, and hide from address bar.
	$( '.anchor-scroll a, .anchor-scroll, .entry-content a' ).filter( 'a[href^="#"]' ).click(
		function( event ) {
			var $this = $( this );
			var href  = $this.attr( 'href' );

			if ( '#' === href ) {
				return true;
			}

			event.preventDefault();

			anchorScroll( href );

			return false;
		}
	);

	$( '.image-link' ).click(
		function() {
			var $button = $( this ).find( '.ab-button' );

			if ( 0 < $button.length ) {
				var href = $button.attr( 'href' );

				if ( 0 < href.length ) {
					window.location.href = href;
				}
			}
		}
	);

	var $siteHeader = $( '.site-header' );
	var $body = $( 'body' );

	var menuActivation = function() {
		var $this       = $( this );
		var isActivated = $( this ).hasClass( 'activated' );

		if ( $this.is( ':hidden' ) ) {
			isActivated = false;
		}

		if ( isActivated ) {
			$body.addClass( 'mobile-menu-activated' );
		} else {
			$body.removeClass( 'mobile-menu-activated' );
		}
	}

	$( document ).ready(
		function() {
				$siteHeader.on( 'click', '.menu-toggle', menuActivation );
				$window.resize( menuActivation );
		}
	);

	$( document ).ready(
		function() {
			$( '.table-player' ).on(
				'mouseenter',
				'div',
				function () {

					var $this      = $( this );
					var $parent = $this.parent();
					var $children = $parent.children( 'div' );
					var $icons = '';

					var allClasses = $children.map(function(){
						return $(this).data('insert');
					}).get();

					allClasses = allClasses.join(' ');

					var target  = $parent.data( 'target' );
					var $target = $( target );
					var filter     = $this.data( 'filter' );
					var $filter = '';
					var insert     = $this.data( 'insert' );

					if ( $target.length ) {
						$icons = $target.find('i');
						$this.removeClass('active').siblings().removeClass( 'active' );
						$parent.removeClass(allClasses);
						$this.addClass('active');
						$parent.addClass( insert );
						$target.removeClass(allClasses).addClass( insert );
						$filter = $target.find( filter );

						if (  $icons.length ) {
							$icons.removeClass('active');
						}
						if ( $filter.length) {
							$filter.addClass( 'active' );
						}
					}


				}
			);
		}
	);

	$( document ).ready(
		function() {
			var $h1 = $(".wp-block-empower-pro-blocks-hero h1.typewriter");
			var $search = $h1.children( 'span.typewriter' );
			var replace = $search.data('replace');
			if ( replace ) {
				var replace = replace.split('|');
				var search = $search.text();
				if ( Array.isArray(replace) && replace.length && search.length ) {
					$h1.empowerProBlocksTypewriter({
						search: search,
						replace: replace, 
					});
				}
			}
		}
	);

	$( document ).ready(
		function() {
			$( '.filtering' ).on(
				'click',
				'div, span',
				function () {

					var $this       = $( this );
					var $parent     = $this.parent();
					var $target     = '';
					var container   = $parent.attr( 'data-container' );
					var collapse    = $parent.attr( 'data-collapse' );
					var $container  = $( container );
					var index = $this.index();

					if ( $container.length ) {
						$target = $container.children().children().eq(index);
					}

					if ( $target.length ) {
						if ( collapse == "false" ) {
							if ( $this.hasClass('active')) {
								// do nothing
							}
							else {
								$this.addClass( 'active' ).siblings().removeClass( 'active' );
								$target.addClass( 'active' ).siblings().removeClass( 'active' );
								$parent.addClass( 'item-selected' );
							}
						}
						else {
							if ( $this.hasClass('active')) {
								$this.removeClass('active').siblings().removeClass( 'active' );
								$target.removeClass( 'active' ).siblings().removeClass( 'active' );
								$parent.removeClass( 'item-selected' );
							}
							else {
								$this.addClass( 'active' ).siblings().removeClass( 'active' );
								$target.addClass( 'active' ).siblings().removeClass( 'active' );
								$parent.addClass( 'item-selected' );
							}
						}
					}

				}
			);
		}
	);

	$( document ).ready(
		function() {
			$( '.hex-list' ).on(
				'mouseleave',
				function () {

					var $li = $( '.hex .blocks-gallery-grid li' );

					$li.removeClass('hover');

				}
			);
			$( '.hex .blocks-gallery-grid' ).on(
				'mouseleave',
				function () {

					var $li = $( '.hex-list li' );

					$li.removeClass('hover');

				}
			);
			$( '.hex-list' ).on(
				'hover',
				'li',
				function () {

					var $this = $( this );
					var $hex  = $( '.hex .blocks-gallery-grid li' );
					var index = $( '.hex-list li' ).index( this );

					index += 2;

					$hex.removeClass('hover');
					$hex.filter(':nth-child('+index+')').addClass('hover');

				}
			);
			$( '.hex .blocks-gallery-grid' ).on(
				'hover',
				'li',
				function () {

					var $this = $( this );
					var $hexList  = $( '.hex-list li' );
					var index = $( '.hex .blocks-gallery-grid li' ).index( this );

					// index -= 2;

					$hexList.removeClass('hover');
					$hexList.filter(':nth-child('+index+')').addClass('hover');

				}
			);
		}
	);
	$( document ).ready(
		function() {
			var modal = document.querySelector("#modal");
			var modalOverlay = document.querySelector("#modal-overlay");
			var closeButton = document.querySelector("#close-button");
			var openButton = document.querySelector(".nav-primary-cta a");

			closeButton.addEventListener("click", function() {
				modal.classList.toggle("closed");
				modalOverlay.classList.toggle("closed");
			});

			openButton.addEventListener("click", function(event) {
				event.preventDefault();
				modal.classList.toggle("closed");
				modalOverlay.classList.toggle("closed");
			});
		}
	);

} )( jQuery );
