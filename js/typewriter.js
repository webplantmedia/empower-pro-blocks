/***
 * This script adds typewriter functionality to theme.
 *
 * @package Empower_Pro_Blocks
 * @author Web Plant Media
 * @version 1.1.3
 * @license GPL-2.0+
 */

(function( $ ) {
	// set animation timing.
	var animationDelay = 2500,
		// loading bar effect.
		barAnimationDelay = 3800,
		barWaiting        = barAnimationDelay - 3000, // 3000 is the duration of the transition on the loading bar - set in the scss/css file.
		// letters effect.
		lettersDelay = 50,
		// type effect.
		typeLettersDelay   = 150,
		selectionDuration  = 500,
		typeAnimationDelay = selectionDuration + 800,
		// clip effect.
		revealDuration       = 600,
		revealAnimationDelay = 2500;

	function initHeadline() {
		// insert <i> element for each letter of a changing word.
		singleLetters( $( '.cd-headline.letters' ).find( 'b' ) );

		var $headline = $( '.cd-headline' );

		// initialise headline animation.
		animateHeadline( $headline );
	}

	function singleLetters($words) {
		$words.each(
			function(){
				var word = $( this ),
				letters  = word.text().split( '' ),
				selected = word.hasClass( 'is-visible' );
				for (i in letters) {
					if (word.parents( '.rotate-2' ).length > 0) {
						letters[i] = '<em>' + letters[i] + '</em>';
					}
					letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>';
				}
				var newLetters = letters.join( '' );
				word.html( newLetters ).css( 'opacity', 1 );
			}
		);
	}

	function animateHeadline($headline) {
		var duration = animationDelay;

		setTimeout( function(){ hideWord( $headline.find( '.is-visible' ).eq( 0 ) ) }, duration );
	}

	function hideWord($word) {
		var nextWord  = takeNext( $word );
		var $headline = $word.parents( '.cd-headline' );

		if ( doType( $headline ) ) {
			$headline.removeClass( 'is-mobile' );
		} else {
			$headline.addClass( 'is-mobile' );
			setTimeout( function(){ hideWord( $word ) }, animationDelay );
			return;
		}

		if ($word.parents( '.cd-headline' ).hasClass( 'type' )) {
			var parentSpan = $word.parent( '.cd-words-wrapper' );
			parentSpan.addClass( 'selected' ).removeClass( 'waiting' );
			setTimeout(
				function(){
					parentSpan.removeClass( 'selected' );
					$word.removeClass( 'is-visible' ).addClass( 'is-hidden' ).children( 'i' ).removeClass( 'in' ).addClass( 'out' );
				},
				selectionDuration
			);
			setTimeout( function(){ showWord( nextWord, typeLettersDelay ) }, typeAnimationDelay );

		} else if ($word.parents( '.cd-headline' ).hasClass( 'letters' )) {
			var bool = ($word.children( 'i' ).length >= nextWord.children( 'i' ).length) ? true : false;
			hideLetter( $word.find( 'i' ).eq( 0 ), $word, bool, lettersDelay );
			showLetter( nextWord.find( 'i' ).eq( 0 ), nextWord, bool, lettersDelay );

		} else if ($word.parents( '.cd-headline' ).hasClass( 'clip' )) {
			$word.parents( '.cd-words-wrapper' ).animate(
				{ width : '2px' },
				revealDuration,
				function(){
					switchWord( $word, nextWord );
					showWord( nextWord );
				}
			);

		} else if ($word.parents( '.cd-headline' ).hasClass( 'loading-bar' )) {
			$word.parents( '.cd-words-wrapper' ).removeClass( 'is-loading' );
			switchWord( $word, nextWord );
			setTimeout( function(){ hideWord( nextWord ) }, barAnimationDelay );
			setTimeout( function(){ $word.parents( '.cd-words-wrapper' ).addClass( 'is-loading' ) }, barWaiting );

		} else {
			switchWord( $word, nextWord );
			setTimeout( function(){ hideWord( nextWord ) }, animationDelay );
		}
	}

	function showWord($word, $duration) {
		if ($word.parents( '.cd-headline' ).hasClass( 'type' )) {
			showLetter( $word.find( 'i' ).eq( 0 ), $word, false, $duration );
			$word.addClass( 'is-visible' ).removeClass( 'is-hidden' );

		} else if ($word.parents( '.cd-headline' ).hasClass( 'clip' )) {
			$word.parents( '.cd-words-wrapper' ).animate(
				{ 'width' : $word.width() + 4 },
				revealDuration,
				function(){
					setTimeout( function(){ hideWord( $word ) }, revealAnimationDelay );
				}
			);
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass( 'in' ).addClass( 'out' );

		if ( ! $letter.is( ':last-child' )) {
			setTimeout( function(){ hideLetter( $letter.next(), $word, $bool, $duration ); }, $duration );
		} else if ($bool) {
			setTimeout( function(){ hideWord( takeNext( $word ) ) }, animationDelay );
		}

		if ($letter.is( ':last-child' ) && $( 'html' ).hasClass( 'no-csstransitions' )) {
			var nextWord = takeNext( $word );
			switchWord( $word, nextWord );
		}
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass( 'in' ).removeClass( 'out' );

		if ( ! $letter.is( ':last-child' )) {
			setTimeout( function(){ showLetter( $letter.next(), $word, $bool, $duration ); }, $duration );
		} else {
			if ($word.parents( '.cd-headline' ).hasClass( 'type' )) {
				setTimeout( function(){ $word.parents( '.cd-words-wrapper' ).addClass( 'waiting' ); }, 200 );}
			if ( ! $bool) {
				setTimeout( function(){ hideWord( $word ) }, animationDelay ) }
		}
	}

	function takeNext($word) {
		return ( ! $word.is( ':last-child' )) ? $word.next() : $word.parent().children().eq( 0 );
	}

	function takePrev($word) {
		return ( ! $word.is( ':first-child' )) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass( 'is-visible' ).addClass( 'is-hidden' );
		$newWord.removeClass( 'is-hidden' ).addClass( 'is-visible' );
	}

	function doType( $headline ) {
		var $toggle  = $( '.menu-toggle' );
		var isMobile = true;
		if ( $toggle.is( ':hidden' ) ) {
			return true;
		}

		return false;
	}

	$.fn.empowerProBlocksTypewriter = function( options ) {

		var settings = $.extend(
			{
				search: '',
				replace: '',
			},
			options
		);

		var $this = $( this );

		if ( typeof options.replace != 'undefined' ) {
			if ($this.html().indexOf( options.search ) >= 0) {
				$this.html(
					function(_, html) {
						var re = new RegExp( options.search,'g' );
						if ( typeof options.replace == 'object' ) {
							var replace = '';
							var length  = options.replace.length;

							for (index = 0; index < length; index++) {
								replace = replace + '<b class="is-hidden">' + options.replace[index] + '</b>';
							}

							return html.replace( re, '<span class="cd-words-wrapper"><b class="is-visible original-text">' + options.search + '</b>' + replace + '</span>' );
						} else if ( typeof options.replace == 'string' ) {
							return html.replace( re, '<span class="cd-words-wrapper"><b class="is-visible original-text">' + options.search + '</b><b class="is-hidden">' + options.replace + '</b></span>' );
						}
					}
				);

				$this.addClass( 'cd-headline clip is-mobile' );
			}

			$( document ).ready(
				function() {
						initHeadline();
				}
			);
		}

		return this;

	}

}( jQuery ));
