//Burger js

$(document).ready(function() {
    $('.header-menu__burger').click(function(e) {
        $('.header-menu__burger,.header-menu__link,.header, .footer').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('#HP').click(function(e){
        $('.header-menu__burger,.header-menu__link,.header, .footer').removeClass('active');
        $('body').removeClass('lock');
    })
    $('#HP1').click(function(e){
        $('.header-menu__burger,.header-menu__link,.header, .footer').removeClass('active');
        $('body').removeClass('lock');

    })
    $('#HP2').click(function(e){
        $('.header-menu__burger,.header-menu__link,.header, .footer').removeClass('active');
        $('body').removeClass('lock');

    })
    $('#HP3').click(function(e){
        $('.header-menu__burger,.header-menu__link,.header, .footer').removeClass('active')
        $('body').removeClass('lock');

    })

    //Slick slider


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

    new WOW().init();

})

