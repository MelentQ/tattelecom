import { Navigation, Swiper, Pagination, Autoplay } from 'swiper';
import {Slider} from "../components/slider";

Swiper.use([Navigation, Pagination, Autoplay]);

export default () => {
    const sliderWrapperElements = document.querySelectorAll('.js-swiper-custom');
    if (!sliderWrapperElements) return;

    sliderWrapperElements.forEach(function(sliderWrapper) {
        const autoplayValue = sliderWrapper.getAttribute('data-swiper-autoplay');

        const numberOfSlides = sliderWrapper.querySelectorAll('.swiper-slide').length;

        if(numberOfSlides === 1) {
            sliderWrapper.querySelector('.js-slider-btn-prev').remove();
            sliderWrapper.querySelector('.js-slider-btn-next').remove();
        }

        const swiper = new Swiper(".js-swiper-custom", {
            speed: 400,
            autoplay: {
                delay: +autoplayValue,
            },
            navigation: {
                prevEl: sliderWrapper.querySelector('.js-slider-btn-prev'),
                nextEl: sliderWrapper.querySelector('.js-slider-btn-next')
            },
            pagination: {
                el: '.rates-preview__sldier-pagination',
                clickable: true,
                type: "bullets",
            },
        });
    });
};