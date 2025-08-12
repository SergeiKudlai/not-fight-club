import { createPageLogin } from './js/render-page_login.js';
import { createPageStart } from './js/render-page_start.js';
import { createPageSetting } from './js/render-page_setting.js';

createPageLogin();


const BTN_SUBMIT_LOGIN_PAGE = document.querySelector('.login__btn');
const HEADER = document.querySelector('.header');

BTN_SUBMIT_LOGIN_PAGE.addEventListener('click', () => {
  createPageLogin(true);
  createPageStart();
})


const updatePageNameOnHeader = (name, header) => {
  const NAME_PAGE = header.querySelector('.icon-contetn__page');
  NAME_PAGE.textContent = name.toUpperCase();
}

const setStationPagesDisplayNone = (nameSection, header) => {
  const START_PAGE = document.querySelector('.start-page');
  const SETTING_PAGE = document.querySelector('.setting-page');
  const BTN_SETTING = header.querySelector('.header-list__btn-setting');
  const BTN_HOME = header.querySelector('.header-list__btn-home');
  const BTN_PLAYER = header.querySelector('.header-list__btn-player');

  switch (nameSection) {
    case ('setting'):
      START_PAGE.classList.add('start-page--active');
      SETTING_PAGE.classList.remove('setting-page--active');
      createPageSetting();
      BTN_SETTING.setAttribute('disabled', '');
      BTN_HOME.removeAttribute('disabled');
      break;
    case ('home'):
      SETTING_PAGE.classList.add('setting-page--active');
      SETTING_PAGE.innerHTML = '';
      START_PAGE.classList.remove('start-page--active');
      BTN_SETTING.removeAttribute('disabled');
      BTN_HOME.setAttribute('disabled', '');
      break;
    default:
      throw Error('is Problem router Page');
  }
}

HEADER.addEventListener('click', function ({ target }) {
  if (target.classList.contains('header-list__btn-setting')) {
    const NAME_BTN_PAGE = target.dataset.name;
    updatePageNameOnHeader(NAME_BTN_PAGE, this);
    setStationPagesDisplayNone(NAME_BTN_PAGE, this);
  }

  if (target.classList.contains('header-list__btn-home')) {
    const NAME_BTN_PAGE = target.dataset.name;
    updatePageNameOnHeader(NAME_BTN_PAGE, this);
    setStationPagesDisplayNone(NAME_BTN_PAGE, this);
  }
})



