jQuery(function($) {
	"use strict";

	var inoxAnhTrang = window.inoxAnhTrang || {};

	/*========================================
	=			 MAIN FUNCTION 				 =
	========================================*/
	inoxAnhTrang.mainSlider = function() {
		var settings = {
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false
		}
		$('.main-slider').slick(settings);
	}
	inoxAnhTrang.backToTop = function() {
		$("#back-to-top").click(function(e) {
			console.log( $("body, html").scrollTop() );
			$("body, html").animate({
				scrollTop: '0'
			}, 500);
		});
	}

	/*========================================
	=			 INIT FUNCTION 				 =
	========================================*/
	$(document).ready(function() {
		inoxAnhTrang.mainSlider();
		inoxAnhTrang.backToTop();
	});
})
