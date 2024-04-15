export function slides() {

    if (document.querySelector('.brochure__swiper')) {
        new Swiper('.brochure__swiper', {
            modules: [Autoplay, Navigation],
            observer: true,
            observeParents: true,
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    }


    if (document.querySelector('.paymentSwiper')) {
        new Swiper('.paymentSwiper', {
            modules: [Autoplay, Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            speed: 800,
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

        });
    }
}