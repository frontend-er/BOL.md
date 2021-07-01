//Burger js

$(document).ready(function() {
    $('.header-menu__burger').click(function(e) {
        $('.header-menu__burger,.header-menu__link,.header').toggleClass('active')
    })
    $('#HP').click(function(e){
        $('.header-menu__burger,.header-menu__link,.header').removeClass('active')
    })
    $('#HP1').click(function(e){
        $('.header-menu__burger,.header-menu__link,.header').removeClass('active')
    })
    $('#HP2').click(function(e){
        $('.header-menu__burger,.header-menu__link,.header').removeClass('active')
    })
    $('#HP3').click(function(e){
        $('.header-menu__burger,.header-menu__link,.header').removeClass('active')
    })
})

