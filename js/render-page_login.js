import { GOOD_PERSON } from './goodPerson.js';
import { getRandomPerson } from './globalScript.js';

export const createPageLogin = (control) => {
  const PAGE_LOGIN_WRRAPER = document.querySelector('.login');

  const HTML_LOGIN = `
    <div class="login__container container">
      <div class="login__wrapper login__wrapper--active">
        <h2 class="login__title">${localStorage.getItem('name-person')}</h2>

        <button class="login__control-btn login__control-btn__start btn" type="button">
          Continue Fight
        </button>

        <button class="login__control-btn login__control-btn__new btn" type="button">
          Create New User
        </button>
      </div>

      <form class="login__inner login__inner--active">
        <label class="login__text" for="login" aria-label="Enter Name users">
          <input class="login__enter-text" type="text" id="login" placeholder="Enter name user" minlength="4" maxlength="17" autocomplete="off" title="minimum 4 letters" required>

          <button class="login__enter-btn" type="button"></button>
        </label>  

        <button class="login__btn btn" type="submit" disabled>Start Fight</button>
      </form>
    </div>
  `;

  PAGE_LOGIN_WRRAPER.insertAdjacentHTML('beforeend', HTML_LOGIN);

  const LOGIN_WRAPPER = document.querySelector('.login__wrapper');
  const LOGIN_INNER = document.querySelector('.login__inner');
  const BTN_NEW_NAME = document.querySelector('.login__control-btn__new');
  const FORM_INPUT = document.querySelector('.login__enter-text');
  const BTN_CLOSE = document.querySelector('.login__enter-btn');
  const BTN_SUBMIT = document.querySelector('.login__btn');


  const checkedNamePlayer = () => {
    if (localStorage.getItem('name-person')) {
      LOGIN_WRAPPER.classList.remove('login__wrapper--active');
    } else {
      LOGIN_INNER.classList.remove('login__inner--active');
    }
  }
  checkedNamePlayer();

  BTN_NEW_NAME.addEventListener('click', () => {
    LOGIN_WRAPPER.classList.add('login__wrapper--active');
    LOGIN_INNER.classList.remove('login__inner--active');
    localStorage.clear();
  })

  const controlValidForm = () => {
    const FORM_WRAPPER = document.querySelector('.login__inner');
    FORM_WRAPPER.addEventListener('submit', (event) => event.preventDefault());
    const NAME_INPUT_VALUE = FORM_INPUT.value[0].toUpperCase() + FORM_INPUT.value.slice(1);
    localStorage.setItem('name-person', NAME_INPUT_VALUE);
  }

  const setRandomPlayerLocalStorage = () => {
    localStorage.setItem('data-player', JSON.stringify(getRandomPerson(GOOD_PERSON)));
    localStorage.setItem('wins', 0);
    localStorage.setItem('loses', 0);
  }

  FORM_INPUT.addEventListener('input', function () {
    const { value } = this;

    if (value) {
      BTN_CLOSE.classList.add('login__enter-btn--active');
    } else {
      BTN_CLOSE.classList.remove('login__enter-btn--active');
    }

    if (value.length >= 4) {
      BTN_SUBMIT.removeAttribute('disabled');
    } else {
      BTN_SUBMIT.setAttribute('disabled', '');
    }
  })

  PAGE_LOGIN_WRRAPER.addEventListener('click', function ({ target }) {
    if (target.classList.contains('login__enter-btn')) {
      FORM_INPUT.value = '';
      target.classList.remove('login__enter-btn--active');
      BTN_SUBMIT.setAttribute('disabled', '');
    }
  })

  if (control) {
    controlValidForm();
    setRandomPlayerLocalStorage();
    PAGE_LOGIN_WRRAPER.innerHTML = '';
    PAGE_LOGIN_WRRAPER.classList.add('login--active');
  }
} 