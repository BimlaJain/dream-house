var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    speed: 900,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    spaceBetween: 20,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
});


var swiper2 = new Swiper(".mySwiper2", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: false,
            translate: [0, 0, -400],
        },
        next: {
            translate: ["90%", 0, 0],
        },
    },
    loop: true,
    slideToClickedSlide: true,
    speed: 1000,
});
