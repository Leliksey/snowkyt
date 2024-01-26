$(document).ready(function() {
    $(".burger").click(function() {
        $(".header__nav").slideToggle();
        $(".searchModal__close").click()
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
    $(".faq__list-item__btn").click(function() {
        $(this).parents(".faq__list-item").toggleClass("open");
    });
    $(".cardModal__option-title").click(function() {
        $(this).toggleClass("open");
        $(this).siblings().slideToggle();
    });
    $(".cardModal__close").click(function() {
        $(this).parents(".cardModal").hide();
        $(".overlay").hide();
        $("body").removeClass("ovh");
    });
    $(".card").click(function() {
        $(".cardModal").show();
        $(".overlay").show();
        $("body").addClass("ovh");
    });
    $(".overlay").click(function() {
        $(".cardModal").hide();
        $(".overlay").hide();
        $("body").removeClass("ovh");
    });
    $(".searchModal__close").click(function() {
        $(".searchModal").removeClass("open");
        $(".searchModal").css("top", "-500vh")
    });
    $(".slider__flex .slider__next").text("");
    $(".slider__flex .slider__prev").text("");
   
    $(".search input").on("input", function() {
        $(".searchModal").addClass("open");
        var headerHeight = $(".header").height();
        var categoryMenuHeight = $(".categoryMenu").height();
        var filterHeight = $(".filter").height();
        var currentHeight = headerHeight + categoryMenuHeight;
        $(".searchModal.open").css("top", currentHeight + 20)
    });

    // Инициализация превью слайдера
const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 3, // показывать по 3 превью
	spaceBetween: 0, // расстояние между слайдами
	navigation: { // задаем кнопки навигации
		nextEl: '.slider__next', // кнопка Next
		prevEl: '.slider__prev' // кнопка Prev
	},
	freeMode: true, // при перетаскивании превью ведет себя как при скролле
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'horizontal', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
		}
	}
});
// Инициализация слайдера изображений
const sliderImages = new Swiper('.slider__images .swiper-container', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'vertical', // вертикальная прокрутка
	slidesPerView: 1, // показывать по 1 изображению
	spaceBetween: 0, // расстояние между слайдами
	mousewheel: true, // можно прокручивать изображения колёсиком мыши
	navigation: { // задаем кнопки навигации
		nextEl: '.slider__next', // кнопка Next
		prevEl: '.slider__prev' // кнопка Prev
	},
	grabCursor: true, // менять иконку курсора
	thumbs: { // указываем на превью слайдер
		swiper: sliderThumbs // указываем имя превью слайдера
	},
	breakpoints: { // условия для разных размеров окна браузера
		0: { // при 0px и выше
			direction: 'vertical', // горизонтальная прокрутка
		},
		768: { // при 768px и выше
			direction: 'vertical', // вертикальная прокрутка
		}
	}
});


});