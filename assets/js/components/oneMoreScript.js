$(document).ready(function() {
    $(".burger").click(function() {
        $(".header__nav").slideToggle();
    });
    $(window).on("resize", function() {
        if ($(window).width() > 991) {
        };
    });
    $('.featured__slider').owlCarousel({
        loop:true,
        nav:true,
        mouseDrag:true,
        touchDrag: true,
        pullDrag:false,
        freeDrag:false,
        URLhashListener:false,
        dots:false,
        autoplay:false,
        responsive:{
            0:{
                items:1,
                margin: 0
            },
            576:{
                items:2,
                margin:40,
            },
            992:{
                items:3,
                margin: 50,
            }
        }
    });
});