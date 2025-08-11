import { createPageLogin } from './js/render-page_login.js';
import { createPageStart } from './js/render-page_start.js';

createPageLogin();


const BTN_SUBMIT_LOGIN_PAGE = document.querySelector('.login__btn');

BTN_SUBMIT_LOGIN_PAGE.addEventListener('click', () => {
  createPageLogin(true);
  createPageStart();
})