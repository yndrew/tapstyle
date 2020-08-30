$(window).scroll(function() {
	let offset = $('.header-top').height();
	let top = $(document).scrollTop();
	let sh = $(".sticky-header");
	let h = sh.height();
	if (top < offset) {
		sh.css({top: '0', position: 'relative'});
		sh.parent().css('margin-bottom', '0');
	}
	else {
		sh.css({top: '0', position: 'fixed'});
		sh.parent().css('margin-bottom', h + 'px');
	}
});
let el = $('.main-nav-content-subitems');
$('.main-nav-content-items').hover(function () {
	let window_width = $(window).width();
	el.each(function () {
		let width = $(this).width();
		let x = $(this).offset().left;
		//console.log(x + " : "+width +" : "+ window_width);
		if (x + width > window_width) {
			$(this).addClass('opposite');
		}
	});
});
$(window).resize(function () {
	el.removeClass('opposite');
});

let mob_open_button = $('.burger');
let mob_close = $('.mobile-nav-close');
let mob_close_button = $('.mobile-nav-close__button');
let mobile_nav_box = $('.mobile-nav-box');
let mobile_nav_box_overlay = $('.mobile-nav-box-overlay');

mob_open_button.on('click', function () {
	mob_close.addClass('active');
	mobile_nav_box.addClass('active');
	mobile_nav_box_overlay.addClass('active');
});
mob_close_button.on('click', function () {
	mob_close.removeClass('active');
	mobile_nav_box.removeClass('active');
	mobile_nav_box_overlay.removeClass('active');
});

$(window).resize(function () {
	if ($(window).width() > 800) {
		mob_close.removeClass('active');
		mobile_nav_box.removeClass('active');
		mobile_nav_box_overlay.removeClass('active');
	}
});


let mobile_toggle = $('.mobile-nav-submenu__toggle');
mobile_toggle.on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('active');
	$(this).parent().next().slideToggle('fast');
});


let search = $('.search');
let search_open = $('.search__open');
let search_close = $('.search__close');
search_open.on('click', function (e) {
	e.preventDefault();
	search.addClass('active');
});
search_close.on('click', function (e) {
	e.preventDefault();
	search.removeClass('active');
});
$('.hero-slider').slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 3000,
	waitForAnimate: false,
});


$('.product-slider-single').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	waitForAnimate: false,
	asNavFor: '.product-slider-nav',
	responsive: [
		{
			breakpoint: 480,
			dots: true,
		}
	]
});

$('.product-slider-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	focusOnSelect: true,
	arrows: true,
	waitForAnimate: false,
	asNavFor: '.product-slider-single',
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 640,
			settings: {
				slidesToShow: 2,
			}
		}
	]
});
// slider selects type

$('.product-style__item').on('click', function(e) {
	e.preventDefault();
	$('.product-style__item').removeClass('active');
	$(this).addClass('active');
	let slideno = $(this).data('slide');
	$('.product-slider-nav').slick('slickGoTo', slideno - 1);
});


$('.product-size__item').on('click', function(e) {
	e.preventDefault();
	$('.product-size__item').removeClass('active');
	$(this).addClass('active');
});


$('.product-slider-single').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	$('.product-style__item').removeClass('active');
	$(".product-style-items").find(`[data-slide='${nextSlide+1}']`).addClass('active');
});


// specification toggle

let toggle = $('.product-specification__title');

toggle.on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('active');
	$(this).next().slideToggle('fast');
});

// quantity

let quantity = $('.product-quantity__value');
let quantity_minus = $('.product-quantity__minus');
let quantity_plus = $('.product-quantity__plus');

quantity_minus.on('click', function (e) {
	e.preventDefault();
	let val = parseInt(quantity.val());
	if (val > 1) {
		quantity.val(val - 1);
	}

});

quantity_plus.on('click', function (e) {
	e.preventDefault();
	let val = parseInt(quantity.val());
	if (val < 999) {
		quantity.val(val + 1);
	}
});

// share

let share_button = $('.reviews-share-button');
let share_items = $('.reviews-share-items');
share_button.on('click', function () {
	share_items.not($(this).next()).removeClass('active');
	$(this).next().toggleClass('active');
});