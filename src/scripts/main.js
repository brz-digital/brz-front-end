import Common from './modules/common';
import HeaderNavBarMenu from './modules/headerNavbarMenu';
import SlideCountries from './modules/slideCountries';
import Map from './modules/map';
// import Mask from './modules/mask';x
// import ScrollSpy from './modules/scrollSpy';
// import MapGetPosition from './modules/mapGetPosition';

const availableModules = { Common, HeaderNavBarMenu, SlideCountries, Map };

window.modules = {};

$(() => {
  const htmlModules = $('[data-module]');

  // Loading htmlModules if they are in availableModules
  htmlModules.each((key, value) => {
    const mod = $(value).data('module');

    if (Object.prototype.hasOwnProperty.call(availableModules, mod)) {
      window.modules[mod] = new availableModules[mod]();
    } else {
      console.log(`The module "${mod}" does not exists.`);
    }
  });
});
