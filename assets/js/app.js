var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true, // Enable infinite loop
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
            translate: ["60%", 0, 0],
        },
    },
    loop: true,
});