$(document).ready(function () {
	$(function ($) {
		var path = window.location.href;
		$('.nav-link').each(function () {
			if (this.href === path) {
				$('.nav-link').removeClass('nav-link-active');
				$(this).addClass('nav-link-active');
			}
		});
	});


	$('.sliderwrap').slick({
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: $('.arrow_prev'),
		nextArrow: $('.arrow_next'),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});



	$('.slider-wrap').slick({
		dots: false,
		infinite: true,
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: $('.arrow_prev'),
		nextArrow: $('.arrow_next'),
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});




	$(".navbar-toggler").click(function (e) {
		$(".hamburger").toggleClass("d-none");
		$(".nav-cross").toggleClass("d-none");
		$('.mega-cat').removeClass('d-none').addClass('d-block');
		$('.mega-none').addClass('d-none');
		$('.mega-menu').addClass('d-none');
	});


	$(window).scroll(function () {
		if ($(this).scrollTop() > 120) {
			$('nav').addClass('fixed-top shadow bg-white duration-500').removeClass('position-relative');
			$('.scroll-none').addClass('d-none');
			$('.logo-wodwes-brand').removeClass('d-none');

		} else {
			$('nav').addClass('position-relative').removeClass('fixed-top shadow bg-white');
			$('.scroll-none').removeClass('d-none');
			$('.logo-wodwes-brand').addClass('d-none');
		}
	});

	if (window.innerWidth < 768) {
		$('.nav-link').removeClass('navitem-bg-pink');
	}

	$('.our-services .card').mouseenter(function () {
		$('.img-rotate').addClass('hoverrotate').removeClass('img-auto-rotate');
		$('.img-rotate > img').addClass('hexarotate').removeClass('rotate');
	});
	$('.our-services .card').mouseleave(function () {
		$('.img-rotate').removeClass('hoverrotate').addClass('img-auto-rotate');
		$('.img-rotate > img').removeClass('hexarotate').addClass('rotate');
	});

	$(".thumbnail1").click(function () {
		$(".ifvideo1").attr("src", "https://www.youtube.com/embed/HGSR3FDVkkQ");
	});
	$(".thumbnail2").click(function () {
		$(".ifvideo2").attr("src", "https://www.youtube.com/embed/HGSR3FDVkkQ");
	});
	$(".thumbnail3").click(function () {
		$(".ifvideo3").attr("src", "https://www.youtube.com/embed/HGSR3FDVkkQ");
	});
	$(".thumbnail4").click(function () {
		$(".ifvideo4").attr("src", "https://www.youtube.com/embed/HGSR3FDVkkQ");
	});
	$(".thumbnail5").click(function () {
		$(".ifvideo5").attr("src", "https://www.youtube.com/embed/HGSR3FDVkkQ");
	});

	$(".modal-close").click(function () {
		$(".ifvideo").attr("src", "");
	});

	// Navbar

	$(".navbar-toggler").click(function () {
		$(".navbar-brand").toggleClass('d-none');
		$(".navbar-toggler").addClass('text-left ml-auto');
	});

	// Our Best Services

	$(".services button").on('click', function () {
		$(".services button").removeClass('active');
		$(this).addClass('active');
	});

	// Button1
	$(".button1").click(function () {
		$(".srvdevop").addClass('d-none');
		$(".content1").removeClass('d-none');
	});
	// Button2
	$(".button2").click(function () {
		$(".srvdevop").addClass('d-none');
		$(".content2").removeClass('d-none');
	});
	// Button3
	$(".button3").click(function () {
		$(".srvdevop").addClass('d-none');
		$(".content3").removeClass('d-none');
	});
	// Button4
	$(".button4").click(function () {
		$(".srvdevop").addClass('d-none');
		$(".content4").removeClass('d-none');
	});
	// Button5
	$(".button5").click(function () {
		$(".srvdevop").addClass('d-none');
		$(".content5").removeClass('d-none');
	});


	// Technologies

	$(".technologies button").on('click', function (event) {
		$(".technologies button").removeClass('active');
		$(this).addClass('active')
	});

	// Button1
	$(".tecbtn1").click(function () {
		$(".techdtl").addClass('d-none');
		$(".tecdta1").removeClass('d-none');
	});
	//Buitton2
	$(".tecbtn2").click(function () {
		$(".techdtl").addClass('d-none');
		$(".tecdta2").removeClass('d-none');
	});
	//Buitton3
	$(".tecbtn3").click(function () {
		$(".techdtl").addClass('d-none');
		$(".tecdta3").removeClass('d-none');
	});


	//Homepage - Portfolio

	$(".portfolio button").on('click', function () {
		$(".portfolio button").removeClass('active');
		$(this).addClass('active')
	});

	// Button1
	$(".prtbtn1").click(function () {
		$(".prt-detail").addClass('d-none');
		$(".prtdta1").removeClass('d-none');
	});
	//Buitton2
	$(".prtbtn2").click(function () {
		$(".prt-detail").addClass('d-none');
		$(".prtdta2").removeClass('d-none');
	});
	//Buitton3
	$(".prtbtn3").click(function () {
		$(".prt-detail").addClass('d-none');
		$(".prtdta3").removeClass('d-none');
	});
	//Buitton4
	$(".prtbtn4").click(function () {
		$(".prt-detail").addClass('d-none');
		$(".prtdta4").removeClass('d-none');
	});
	//Buitton5
	$(".prtbtn5").click(function () {
		$(".prt-detail").addClass('d-none');
		$(".prtdta5").removeClass('d-none');
	});
	//Buitton6
	$(".prtbtn6").click(function () {
		$(".prt-detail").addClass('d-none');
		$(".prtdta6").removeClass('d-none');
	});

	// Sevices

	// $('#owl-carousel').owlCarousel({
	// 	autoplay: true,
	// 	loop: true,
	// 	// margin: 30,
	// 	dots: true,
	// 	nav: false,
	// 	// items: 2.1,
	// 	responsiveClass: true,
	// 	responsive: {
	// 		0: {
	// 			items: 1
	// 		},
	// 		768: {
	// 			items: 2
	// 		}
	// 	}

	// });

	// Services Page Js

	$(".tch-btn button").on('click', function () {
		$(".tch-btn button").removeClass('active')
		$(this).addClass('active')
	});
	// tch-btn 1
	$(".firstbtn").click(function () {
		$(".devop").addClass('d-none');
		$(".firstcontent").removeClass('d-none');
	});
	// tch-btn 2
	$(".secbtn").click(function () {
		$(".devop").addClass('d-none');
		$(".seccontent").removeClass('d-none');
	});
	// tch-btn 3
	$(".thirdbtn").click(function () {
		$(".devop").addClass('d-none');
		$(".thirdcontent").removeClass('d-none');
	});
	// tch-btn 4
	$(".fourbtn").click(function () {
		$(".devop").addClass('d-none');
		$(".fourthcontent").removeClass('d-none');
	});
	// tch-btn 5
	$(".fivebtn").click(function () {
		$(".devop").addClass('d-none');
		$(".fifthcontent").removeClass('d-none');
	});
	// tch-btn 6
	$(".sixbtn").click(function () {
		$(".devop").addClass('d-none');
		$(".sixthcontent").removeClass('d-none');
	});

	$(document).scroll(function () {
		if ($(document).scrollTop() > $(document).height() / 2) {
			$("#back-to-up").removeClass('d-none');
		} else if ($(document).scrollTop() < $(document).height() / 2) {
			$("#back-to-up").addClass('d-none');
		} else if ($(document).scrollTop() > $(document).height() / 2) {
			$("#back-to-up").addClass('d-none');
		}
	});






	// expandable cards
	if ($(window).width() > 767) {

		$('.ourportexpancards').mouseenter(function () {
			$('.ourportexpancards1').removeClass('md-w-50');
			$('.ourportexpancards').css('width', '16.666%');
			$(this).removeClass('prtcrdfltimg1-50');
			$('.prtcrdfltmaindiv').css('min-width', '300');
			$(this).css('width', '50%');
			$('.prtcrdfltdiv').addClass('d-md-none');
			$(this).find('.prtcrdfltdiv').removeClass('d-md-none');
		});
		$('.ourportexpancards').mouseleave(function () {
			$('.ourportexpancards').css('width', '16.666%');
			$('.prtcrdfltmaindiv').css('min-width', '0');
			$('.ourportexpancards1').addClass('md-w-50');
			$('.prtcrdfltdiv').addClass('d-md-none');
			$('.ourportexpancards1').find('.prtcrdfltdiv').removeClass('d-md-none');
			$('.prtcrdfltimg1').addClass('prtcrdfltimg1-50');
		});
		$('.mega-toggle').mouseenter(function (e) {
			$('.mega-menu').removeClass('d-none');
			$('.chevron-down1').addClass('wodwes-pink rotate-180');
		});
		$('.navbar').mouseleave(function (e) {
			$('.mega-menu').addClass('d-none');
			$('.chevron-down1').removeClass('wodwes-pink rotate-180');
			$('.dropdown-menu').removeClass('show');
		});


		$('.ourportexpancards').mouseenter(function () {
			if (!$(this).find('prtcrdfltmaindiv0').hasClass('prtcrdfltmaindiv1')) {
				$('.prtcrdfltmaindiv0').removeClass('prtcrdfltmaindiv1');
				$('.prtcrdfltimg0').removeClass('prtcrdfltimg1');
			}
		});
		$('.ourportexpancards').mouseleave(function () {
			if (!$(this).find('prtcrdfltmaindiv0').hasClass('prtcrdfltmaindiv1')) {
				$('.prtcrdfltmaindiv0').addClass('prtcrdfltmaindiv1');
				$('.prtcrdfltimg0').addClass('prtcrdfltimg1');
			}
		});

	}

	$('.mega-toggle').click(function (e) {
		$('.mega-menu').toggleClass('d-none');
		$('.chevron-down1').toggleClass('wodwes-pink rotate-180');
	});

	$('.mega-close-icon').click(function (e) {
		$('.mega-menu').addClass('d-none');
		$('.dropdown-menu').removeClass('show');
	});

	$('.dropdown-toggle').mouseenter(function (e) {
		$(this).find('.list-bullet').css('color', 'white', '!important');

	});
	$('.dropdown-toggle').mouseleave(function (e) {
		$(this).find('.list-bullet').css('color', '#F52C73', '!important');

	});

	$('.close-button').click(function (e) {
		$('.mega-cat').removeClass('d-none').addClass('d-block');
		$('.mega-none').addClass('d-none');
	});

	$('.mega-cat-1').click(function (e) {
		$('.mega-subcat').addClass('d-none').removeClass('d-flex');
		$('.mega-subcat-1').removeClass('d-none').addClass('d-flex');
	});
	$('.mega-cat-2').click(function (e) {
		$('.mega-subcat').addClass('d-none').removeClass('d-flex');
		$('.mega-subcat-2').removeClass('d-none').addClass('d-flex');
	});
	$('.mega-cat-3').click(function (e) {
		$('.mega-subcat').addClass('d-none').removeClass('d-flex');
		$('.mega-subcat-3').removeClass('d-none').addClass('d-flex');
	});
	$('.mega-cat-4').click(function (e) {
		$('.mega-subcat').addClass('d-none').removeClass('d-flex');
		$('.mega-subcat-4').removeClass('d-none').addClass('d-flex');
	});
	$('.mega-cat-5').click(function (e) {
		$('.mega-subcat').addClass('d-none').removeClass('d-flex');
		$('.mega-subcat-5').removeClass('d-none').addClass('d-flex');
	});
	$('.mega-cat-6').click(function (e) {
		$('.mega-subcat').addClass('d-none').removeClass('d-flex');
		$('.mega-subcat-6').removeClass('d-none').addClass('d-flex');
	});
	$('.mct').click(function (e) {
		var replace = $(this).text()
		$('#current-service').text(replace);
		$('.mega-cat').addClass('d-none').removeClass('d-block');
		$('.mega-none').removeClass('d-none');
	});
	$('.close-mega-menu').click(function (e) {
		$('.mega-menu').addClass('d-none');
		$('.chevron-down1').removeClass('wodwes-pink rotate-180');
	});
	$('.mct').click(function (e) {
		$('.mct').removeClass('mega-menu-active');
		$(this).addClass('mega-menu-active')
	});

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		dots: false,
		nav: true,
		navText: [
			"<i class='bi bi-arrow-left'></i>",
			"<i class='bi bi-arrow-right'></i>"
		],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	})
});