class SlideIntro {

  constructor() {
    console.log('>>> slideIntro.js ready!');

    // Call methods
    this.init();
  }

  // Initialize SlideIntro
  init() {
    const slideIntro = new Swiper('.slide-container-intro', {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: 6000,
      speed: 800,
      preventClicks: false,
      preventClicksPropagation: false,
      autoplayDisableOnInteraction: false,
      loop: true,
      effect: 'fade',
      // prevButton: '.slide-prev-intro',
      // nextButton: '.slide-next-intro',
      pagination: '.slide-pagination-intro',
      bulletClass: 'slide-pagination-bullet-intro',
      bulletActiveClass: 'slide-pagination-bullet-intro-active',
      paginationClickable: true,
      // paginationBulletRender: function (swiper, index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + '</span>';
      // },
      // breakpoints: {
      //   992: {
      //     slidesPerView: 2,
      //     spaceBetween: 5,
      //   },
      //   768: {
      //     slidesPerView: 2,
      //     spaceBetween: 2,
      //   },
      //   576: {
      //     slidesPerView: 1,
      //     spaceBetween: 0,
      //   },
      // },
    });
  }

}

export default SlideIntro;
