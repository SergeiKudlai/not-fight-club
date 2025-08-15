import { createPageLogin } from './render-page_login.js';
import { createPageStart } from './render-page_start.js';
import { createPageSetting } from './render-page_setting.js';
import { createPagePlayer } from './render-page_person.js';
import { updatePageNameOnHeader } from './globalScript.js';

export const startJSPages = () => {
  createPageLogin();

  const HEADER = document.querySelector('.header');
  const FOOTER = document.querySelector('.footer');
  const PAGE_LOGIN_WRRAPER = document.querySelector('.login');
  const BTN_CONTINUE_FIGHT = document.querySelector('.login__control-btn__start');
  const BTN_SUBMIT_LOGIN_PAGE = document.querySelector('.login__btn');


  BTN_CONTINUE_FIGHT.addEventListener('click', () => {
    createPageStart();
    PAGE_LOGIN_WRRAPER.innerHTML = '';
    PAGE_LOGIN_WRRAPER.classList.add('login--active');
  })

  BTN_SUBMIT_LOGIN_PAGE.addEventListener('click', () => {
    createPageLogin(true);
    createPageStart();
  })

  const setStationPagesDisplayNone = (nameSection, header) => {
    const START_PAGE = document.querySelector('.start-page');
    const SETTING_PAGE = document.querySelector('.setting-page');
    const PLAYER_PAGE = document.querySelector('.player-page');
    const FIGHT_PAGE = document.querySelector('.fight-page');
    const BTN_SETTING = header.querySelector('.header-list__btn-setting');
    const BTN_HOME = header.querySelector('.header-list__btn-home');
    const BTN_PLAYER = header.querySelector('.header-list__btn-player');

    switch (nameSection) {
      case ('setting'):
        START_PAGE.classList.add('start-page--active');
        PLAYER_PAGE.classList.add('player-page--active');
        FIGHT_PAGE.classList.add('fight-page--active');
        FOOTER.classList.remove('footer--active');
        SETTING_PAGE.classList.remove('setting-page--active');
        FIGHT_PAGE.innerHTML = '';
        PLAYER_PAGE.innerHTML = '';
        createPageSetting();
        BTN_SETTING.setAttribute('disabled', '');
        BTN_PLAYER.removeAttribute('disabled');
        BTN_HOME.removeAttribute('disabled');
        break;
      case ('home'):
        PLAYER_PAGE.classList.add('player-page--active');
        SETTING_PAGE.classList.add('setting-page--active');
        FIGHT_PAGE.classList.add('fight-page--active');
        FOOTER.classList.remove('footer--active');
        FIGHT_PAGE.innerHTML = '';
        SETTING_PAGE.innerHTML = '';
        PLAYER_PAGE.innerHTML = '';
        START_PAGE.classList.remove('start-page--active');
        BTN_HOME.setAttribute('disabled', '');
        BTN_PLAYER.removeAttribute('disabled');
        BTN_SETTING.removeAttribute('disabled');
        break;
      case ('player'):
        PLAYER_PAGE.classList.remove('player-page--active');
        START_PAGE.classList.add('start-page--active');
        SETTING_PAGE.classList.add('setting-page--active');
        FIGHT_PAGE.classList.add('fight-page--active');
        FOOTER.classList.remove('footer--active');
        FIGHT_PAGE.innerHTML = '';
        SETTING_PAGE.innerHTML = '';
        BTN_HOME.removeAttribute('disabled');
        BTN_PLAYER.setAttribute('disabled', '');
        BTN_SETTING.removeAttribute('disabled');
        createPagePlayer();
        break;
      default:
        throw Error('is Problem router Page');
    }
  }

  HEADER.addEventListener('click', function ({ target }) {
    if (target.classList.contains('header-list__btn-setting')) {
      const NAME_BTN_PAGE = target.dataset.name;
      updatePageNameOnHeader(NAME_BTN_PAGE);
      setStationPagesDisplayNone(NAME_BTN_PAGE, this);
    }

    if (target.classList.contains('header-list__btn-home')) {
      const NAME_BTN_PAGE = target.dataset.name;
      updatePageNameOnHeader(NAME_BTN_PAGE);
      setStationPagesDisplayNone(NAME_BTN_PAGE, this);
    }

    if (target.classList.contains('header-list__btn-player')) {
      const NAME_BTN_PAGE = target.dataset.name;
      updatePageNameOnHeader(NAME_BTN_PAGE);
      setStationPagesDisplayNone(NAME_BTN_PAGE, this);
    }
  })
}