$(document).ready(function() {
    $(".burger").click(function() {
        $(".header__nav").slideToggle();
    });
    $(window).on("resize", function() {
        if ($(window).width() > 991) {
        };
    });
});