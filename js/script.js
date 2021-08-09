//Burger js

$(document).ready(function () {
    $('.header-menu__burger').click(function (e) {
        $('.header-menu__burger,.header-menu__link,.header, .footer').toggleClass('active');
        $('body').toggleClass('lock');
    })
    $('#HP').click(function (e) {
        $('.header-menu__burger,.header-menu__link,.header, .footer').removeClass('active');
        $('body').removeClass('lock');
    })
    $('#HP1').click(function (e) {
        $('.header-menu__burger,.header-menu__link,.header, .footer').removeClass('active');
        $('body').removeClass('lock')

    })
    $('#HP2').click(function (e) {
        $('.header-menu__burger,.header-menu__link,.header, .footer').removeClass('active');
        $('body').removeClass('lock');

    })
    $('#HP3').click(function (e) {
        $('.header-menu__burger,.header-menu__link,.header, .footer').removeClass('active')
        $('body').removeClass('lock');

    })

    //Slick slider


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true,
        autoplaySpeed: 4000,
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });





    /*

    $('.project__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    */
    new WOW().init();


    // Infograph


    $('#infoG1').click(function () {
        $('.project__donlowad').toggleClass('active');
    })


    $('#infoG2').click(function () {
        $('.project__donlowad').toggleClass('active');
    })


    $('#infoG3').click(function () {
        $('.project__donlowad').toggleClass('active');
    })




    // Donation

    $('#paypal').click(function () {
        $('.donate__paypal').addClass('active');
        $('.donate__data-paypal').addClass('active');
        $('.donate__visa').removeClass('active');
        $('.donate__data-visa').removeClass('active');

    })


    $('#visa').click(function () {
        $('.donate__visa').addClass('active');
        $('.donate__data-visa').addClass('active');
        $('.donate__paypal').removeClass('active');
        $('.donate__data-paypal').removeClass('active');

    })






    // reCapcha



    var idCaptcha1, idCaptcha2;
    var onloadReCaptchaInvisible = function () {
        idCaptcha1 = grecaptcha.render('recaptcha1', {
            "sitekey": "значение публичного ключа",
            "callback": "onSubmitReCaptcha",
            "size": "invisible"
        });
        idCaptcha2 = grecaptcha.render('recaptcha2', {
            "sitekey": "значение публичного ключа",
            "callback": "onSubmitReCaptcha",
            "size": "invisible"
        });
    };












    $('.center').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });




})