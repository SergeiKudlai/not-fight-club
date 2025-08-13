import { GOOD_PERSON } from './goodPerson.js';

export const createPageLogin = (control) => {
  const PAGE_LOGIN_WRRAPER = document.querySelector('.login');

  const HTML_LOGIN = `
    <div class="login__container container">
      <h2 class="login__title sr-only">page enter</h2>

        <form class="login__inner">
          <label class="login__text" for="login" aria-label="Enter Name users">
            <input class="login__enter-text" type="text" id="login" placeholder="Enter name user" minlength="4" maxlength="17" autocomplete="off" required>

            <button class="login__enter-btn" type="button"></button>
          </label>  

            <button class="login__btn btn" type="submit" disabled>Start</button>
        </form>
    </div>
  `;

  PAGE_LOGIN_WRRAPER.insertAdjacentHTML('beforeend', HTML_LOGIN);

  const FORM_INPUT = document.querySelector('.login__enter-text');
  const BTN_CLOSE = document.querySelector('.login__enter-btn');
  const BTN_SUBMIT = document.querySelector('.login__btn');


  const controlValidForm = () => {
    const FORM_WRAPPER = document.querySelector('.login__inner');
    FORM_WRAPPER.addEventListener('submit', (event) => event.preventDefault());
    localStorage.setItem('name-person', FORM_INPUT.value);
  }

  const setRandomPlayerLocalStorage = () => {
    if (localStorage.getItem('data-player')) {
      return
    } else {
      const RANDOM_NUMBER = Math.floor(Math.random() * GOOD_PERSON.length);
      const RANDOM_PLAYER = GOOD_PERSON[RANDOM_NUMBER];
      localStorage.setItem('data-player', JSON.stringify(RANDOM_PLAYER));
      localStorage.setItem('wins', 0);
      localStorage.setItem('loses', 0);
    }
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
    PAGE_LOGIN_WRRAPER.innerHTML = '';
    PAGE_LOGIN_WRRAPER.classList.add('login--active');
  }
  setRandomPlayerLocalStorage();
} 