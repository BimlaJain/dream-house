// $(document).ready(function () {
//     $('.single-item').slick({
//         prevArrow: $('.slick-prev'), // Custom previous button
//         nextArrow: $('.slick-next'), // Custom next button
//     });
// });
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// var swiper = new Swiper(".mySwiper", {
//     effect: "cards",
//     grabCursor: true,
// });