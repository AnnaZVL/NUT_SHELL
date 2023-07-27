const swiperCoffe = new Swiper('.coffee-house__swiper', {
    slidesPerView: 2,
    spaceBetween: 32,
    navigation: {
        nextEl: '.coffee-house-button-next',
        prevEl: '.coffee-house-button-prev',
    },
})

const swiperOffice = new Swiper('.office__swiper', {
    slidesPerView: 2,
    spaceBetween: 32,
    loop: true,
    // autoplay: {
    //     delay: 1000,
    //   },
    pagination: {
        el: ".office-pagination",
        type: "bullets",
        clickable: true,
        dynamicBullets: true,
        },
})