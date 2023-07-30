//import JustValidate from './just-validate';

//Слайдеры
const swiperCoffe = new Swiper('.coffee-house__swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    navigation: {
        nextEl: '.coffee-house-button-next',
        prevEl: '.coffee-house-button-prev',
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
            spaceBetween: 32,
        }}
})

const swiperOffice = new Swiper('.office__swiper', {
    slidesPerView: 1,
    spaceBetween: 15,
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
    breakpoints: {
        568: {
            slidesPerView: 2,
            spaceBetween: 32,
        }}
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
        1024: {
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
        1024: {
            slidesPerView: 3,
            spaceBetween:50
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
const validate = new window.JustValidate('.form');

validate
  .addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Field is required',
    },
  ])
  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Field is required',
    },    
  ]);

const $form = document.querySelector('.form');

$form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelectorAll('.form__input').forEach(el => {
        if (el.classList.contains('just-validate-error-field')) {
            el.classList.add('error');
        }
    })
});