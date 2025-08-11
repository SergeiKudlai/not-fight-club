export const createPageLogin = () => {
  let control = false;
  const PAGE_LOGIN_WRRAPER = document.querySelector('.login');

  const HTML_LOGIN = `
    <div class="login__container container">
      <h2 class="login__title sr-only">Страница входа</h2>

        <form class="login__inner">
          <label class="login__text" for="login" aria-label="Поле для вода имени">
            <input class="login__enter-text" type="text" id="login" placeholder="Введите имя пользователя" minlength="4" maxlength="17" autocomplete="off" required>

            <button class="login__enter-btn" type="button"></button>
          </label>  

            <button class="login__btn btn" type="submit" disabled>Вход</button>
        </form>
    </div>
  `;

  PAGE_LOGIN_WRRAPER.insertAdjacentHTML('beforeend', HTML_LOGIN);

  const FORM_INPUT = document.querySelector('.login__enter-text');
  const BTN_CLOSE = document.querySelector('.login__enter-btn');
  const BTN_SUBMIT = document.querySelector('.login__btn');


  const controlValidForm = (wrapperLogin) => {
    const FORM_WRAPPER = wrapperLogin.querySelector('.login__inner');

    FORM_WRAPPER.addEventListener('submit', (e) => {
      e.preventDefault();
      localStorage.setItem('name-person', FORM_INPUT.value);
      control = true;
    })
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
    if (target.classList.contains('login__btn')) {
      controlValidForm(this);
    }

    if (target.classList.contains('login__enter-btn')) {
      FORM_INPUT.value = '';
      target.classList.remove('login__enter-btn--active');
      BTN_SUBMIT.setAttribute('disabled', '');
    }
  })

  return control;
} 