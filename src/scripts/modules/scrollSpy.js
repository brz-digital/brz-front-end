class ScrollSpy {

  constructor() {
    console.log('>>> scrollSpy.js ready!');

    // Call methods
    this.scrollPageNavLinks();
    this.scrollActiveLinks();
    // this.scrollSlideIntro();
  }

  // Scroll Page Nav Links and animation
  scrollPageNavLinks() {
    const navLinks = $('[data-container="link"]');
    const headerMenu = $('#header-menu');

    // Onclick scroll page
    navLinks.click(function() {
      const section = $(this).data('link');

      // Get position
      function getPosition(section) {
        const menuHeight = parseInt(headerMenu.outerHeight());
        if (menuHeight > 200) {
          const position = parseInt(($('[data-container="' + section + '"]').position().top) - 50);
          return position;
        } else {
          const position = parseInt(($('[data-container="' + section + '"]').position().top) - menuHeight);
          return position;
        }
      }

      // Animate scroll
      $('html, body').animate({ scrollTop: getPosition(section) }, 1300);

      return false;
    });
  }

  scrollActiveLinks() {

    const navLinks = $('[data-container="link"]');
    const menuHeight = parseInt($('#header-menu').outerHeight());
    const section = $('.section-block');
    const documentEl = $(document);

    documentEl.on('scroll', function() {
      const currentScrollPos = documentEl.scrollTop();

      section.each(function() {
        const self = $(this);
        if ( self.offset().top < (currentScrollPos - (menuHeight - 180)) && (currentScrollPos - (menuHeight - 180)) < (self.offset().top + self.outerHeight()) ) {
          const targetClass = self.attr('class').split(' ')[1].split('-')[1];
          navLinks.removeClass('-active');
          const activeLink = $('[data-link="' + targetClass + '"]');
          $(activeLink).addClass('-active');
        }
      });

    });

  }

  // scrollSlideIntro() {

  //   // Scroll Slide Intro animation
  //   function scrollSlide() {
  //     const bannerSlideIntro = document.querySelector('#banner-intro');
  //     const scrollPos = window.scrollY;
  //     if (scrollPos <= 500) {
  //       bannerSlideIntro.style.transform = "translateY(" + (-scrollPos / 5) + "px" + ")";
  //       bannerSlideIntro.style.opacity = 1 - (scrollPos / 500);
  //     }
  //   }
  //   window.addEventListener('scroll', scrollSlide);

  // }

}

export default ScrollSpy;
