$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		slidesToShow:1,
		autoplay:true,
		speed:2000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
	$('.slider-m').slick({
		arrows:false,
		slidesToShow:1,
		autoplay:true,
		speed:2000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
$("#nav-bar__menu").on("click","a", function (event) {
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь

        top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс

    $('body,html').animate({scrollTop: top}, 1500);
});
$("#offer-wrapp").on("click","a", function (event) {
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь

        top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс

    $('body,html').animate({scrollTop: top}, 1500);
});

// Hamburger menu
$(function() {
    $('.menu-open').click(function() {
        $('.burg-menu').toggleClass('show-menu')
    })
    $('.hamb-close').click(function() {
        $('.burg-menu').removeClass('show-menu')
    })
    $('.menu-open').click(function() {
        $('.head__btn').addClass('mar')
    })
    $('.hamb-close').click(function() {
        $('.head__btn').removeClass('mar')
    })
});

// MODAL-WINDOW

$('.m-foto').click(function(e) {
    e.preventDefault();
    $('.foto-gal').fadeIn();

    $('.foto-gal').click(function() {
        $('.foto-gal').fadeOut();
    });

    $('.foto-gal').children().click(function(e) {
        e.stopPropagation();
    });
});