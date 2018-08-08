class HeaderNavBarMenu {

  constructor() {
    console.log('>>> headerNavbarMenu.js ready!');

    // Call methods
    this.menu();
  }

  menu() {
    // Show/hide menu mobile
    function showHideMenuMobile() {
      const menu = $('#header-menu');
      const menuToggle = $('#menu-toggle');
      const menuLinks = $('.header-menu > .list > .item > .link');

      menuToggle.on('click', () => {
        menu.toggleClass('-open');
        menuToggle.toggleClass('-open');
      });

      menuLinks.on('click', () => {
        menu.removeClass('-open');
        menuToggle.removeClass('-open');
      });
    }

    // Call functions
    showHideMenuMobile();
  }

}

export default HeaderNavBarMenu;
