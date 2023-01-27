import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded', function () {

    modal('[data-modal]', '.modal');

    const swiper = new Swiper(".swiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    const navSlide = () => {
        const hamburger = document.querySelector('.hamburger');
        const hmenu = document.querySelector('.header__m');

        hamburger.addEventListener('click', () => {
            hmenu.classList.toggle('nav-active');
            document.body.classList.toggle('hidden');
            hamburger.classList.toggle('toggle');
        });
    };

    const app = () => {
        navSlide();
    };

    app();


});