import { Navigation, Swiper, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);

export default () => {
    const sliderWrapper = document.querySelector('.js-swiper-custom');
    const autoplayValue = sliderWrapper.getAttribute('data-swiper-autoplay');

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
};