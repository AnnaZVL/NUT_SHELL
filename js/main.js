//Слайдеры
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
    autoplay: {
        delay: 1000,
      },
    pagination: {
        el: ".office-pagination",
        type: "bullets",
        clickable: true,
        dynamicBullets: true,
        },
});

const swiperCommentsTop = new Swiper('.comments-top__swiper', {
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    navigation: {
        nextEl: '.comments-top-button-next',
        prevEl: '.comments-top-button-prev',
    },
    breakpoints: {
        990: {
            slidesPerView: 3,
            spaceBetween:64
        },
        568: {
            slidesPerView: 2,
            spaceBetween:64
        }
    }
});

const swiperCommentsBottom = new Swiper('.comments-bottom__swiper', {
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    navigation: {
        nextEl: '.comments-bottom-button-next',
        prevEl: '.comments-bottom-button-prev',
    },
    breakpoints: {
        990: {
            slidesPerView: 3,
            spaceBetween:64
        },
        568: {
            slidesPerView: 2,
            spaceBetween:64
        }
    }
});

//Аккордион секции вопросов
new Accordion('.questions__acc');

//Выпадающий текст секцииО нас
const $btnMore = document.querySelector('.about__btn'),
    $textMore = document.querySelector('.about__btn-text');

$btnMore.addEventListener('click', () => {
    $btnMore.classList.toggle('open');
    $textMore.classList.toggle('open');
});

//Робота с формой
const $form = document.querySelector('.form');
$form.addEventListener('submit', (e) => {
    e.preventDefault();
});