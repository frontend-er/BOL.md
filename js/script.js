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
        $('body').removeClass('lock');

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







    $('.project__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });


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

    // Работа с виджетом recaptcha
    // 1. Получить ответ гугл капчи
    var captcha = grecaptcha.getResponse();

    // 2. Если ответ пустой, то выводим сообщение о том, что пользователь не прошёл тест.
    // Такую форму не будем отправлять на сервер.
    if (!captcha.length) {
        // Выводим сообщение об ошибке
        $('#recaptchaError').text('* Вы не прошли проверку "Я не робот"');
    } else {
        // получаем элемент, содержащий капчу
        $('#recaptchaError').text('');
    }

    // 3. Если форма валидна и длина капчи не равно пустой строке, то отправляем форму на сервер (AJAX)
    if ((formValid) && (captcha.length)) {

        // добавить в formData значение 'g-recaptcha-response'=значение_recaptcha
        formData.append('g-recaptcha-response', captcha);

    }

    // 4. Если сервер вернул ответ error, то делаем следующее...
    // Сбрасываем виджет reCaptcha
    grecaptcha.reset();
    // Если существует свойство msg у объекта $data, то...
    if ($data.msg) {
        // вывести её в элемент у которого id=recaptchaError
        $('#recaptchaError').text($data.msg);
    }

})