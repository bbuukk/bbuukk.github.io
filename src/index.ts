import './assets/styles/index.scss';

import './utils/dom.utils.ts';

import Router from './services/router.service.js';

window._app = {
  router: Router
};

document.addEventListener('DOMContentLoaded', () => {
  window._app.router.init();
});

document.addEventListener('DOMContentLoaded', () => {
  // const mainEl = $('main');
  // console.log(mainEl);
});
