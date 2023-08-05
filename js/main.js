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
        768: {
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
        768: {
            slidesPerView: 2,
            spaceBetween: 32,
        }}
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

const $form = document.querySelector('.form'),
$name = document.getElementById('name')
const TOKEN = '6429995960:AAH2icRifBKSo73IKJt-cnD98TH6mumIqqM', 
    CHAT_ID = '-1001941193516';
const URL = `https://api.telegram.org/bot${ TOKEN }/sendMessage`

$form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelectorAll('.form__input').forEach(el => {
        if (el.classList.contains('just-validate-error-field')) {
            el.classList.add('error');
        } 
    });

    let message = `Заявка от ${$name.value}. Номер телефона: ${this.phone.value}`;
    
    axios.post(URL, {
        chat_id: CHAT_ID,
        text: message
    })
    .then (res => {
        $name.value = '';
        this.phone.value = '';
        alert("Application accepted. We will contact you shortly");
    })
});

// function openFullscreen(img) {
//     if (img.requestFullscreen) {
//       img.requestFullscreen({ navigationUI: "show" });
//     } else if (img.mozRequestFullScreen) { // Firefox
//       img.mozRequestFullScreen({ navigationUI: "show" });
//     } else if (img.webkitRequestFullscreen) { // Chrome, Safari and Opera
//       img.webkitRequestFullscreen({ navigationUI: "show" });
//     } else if (img.msRequestFullscreen) { // IE/Edge
//       img.msRequestFullscreen({ navigationUI: "show" });
//     }
//   }

Fancybox.bind('[data-fancybox="gallery_modern"]', {
    
});

Fancybox.bind('[data-fancybox="gallery_neo"]', {

});

