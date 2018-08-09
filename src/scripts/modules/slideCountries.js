class SlideCountries {

  constructor() {
    console.log('>>> SlideCountries ready!');
    // Call methods
    this.init();
  }

  init() {
    const SlideCountries = new Swiper('.slide-container-countries', {
      slidesPerView: 3,
      spaceBetween: 45,
      autoplay: 6000,
      speed: 800,
      // autoplayDisableOnInteraction: false,
      loop: false,
      // effect: 'fade',
      prevButton: '.slide-prev-countries',
      nextButton: '.slide-next-countries',
      pagination: '.slide-pagination-countries',
      bulletClass: 'slide-pagination-bullet-countries',
      bulletActiveClass: 'slide-pagination-bullet-countries-active',
      paginationClickable: true,
      // paginationBulletRender: function (swiper, index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + '</span>';
      // },
      breakpoints: {
        1087: {
          slidesPerView: 2,
          spaceBetween: 45,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        575: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },
    });
  }

}

export default SlideCountries;
