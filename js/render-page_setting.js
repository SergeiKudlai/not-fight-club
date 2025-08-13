import { UpdatePersonNameHeader } from './globalScript.js';

export const createPageSetting = () => {
  const SECTION_SETTING_PAGE = document.querySelector('.setting-page');

  const HTML = `
    <div class="setting-page__container container">
      <div class="setting-page__inner">
         <h2 class="setting-page__name">${localStorage.getItem('name-person')}</h2>

         <label class="sr-only" for="new_name"></label>
         <input class="login__enter-text login__enter-text--active" type="text" id="new_name" placeholder="Enter new user" minlength="4" maxlength="17" autocomplete="off" id="">

         <button class="setting-page__btn btn" type="button" data-control>Rename User</button>
      </div>
    </div>
  `
  SECTION_SETTING_PAGE.insertAdjacentHTML('beforeend', HTML);

  const INPUT = SECTION_SETTING_PAGE.querySelector('.login__enter-text');
  const BTN_UPDATE_NAME = document.querySelector('.setting-page__btn');


  const updateNameSectionPage = () => {
    const NAME_PERSON = SECTION_SETTING_PAGE.querySelector('.setting-page__name');
    NAME_PERSON.textContent = localStorage.getItem('name-person');
  }

  const setUpdatePersonName = () => {
    const SECTION_SETTING_PAGE = document.querySelector('.setting-page');
    const ELEMENT_iNPUT_VALUE = SECTION_SETTING_PAGE.querySelector('.login__enter-text').value;
    localStorage.setItem('name-person', ELEMENT_iNPUT_VALUE);;
    UpdatePersonNameHeader();
    updateNameSectionPage();
  }

  const updateStatusElments = (btn) => {
    if (!btn.hasAttribute('data-control')) {
      btn.textContent = 'Rename User';
      btn.setAttribute('data-control', '');
      INPUT.classList.add('login__enter-text--active');
      setUpdatePersonName();
    } else {
      btn.textContent = 'Save';
      INPUT.classList.remove('login__enter-text--active');
      btn.removeAttribute('data-control');
      btn.setAttribute('disabled', '');
    }
  }

  BTN_UPDATE_NAME.addEventListener('click', ({ target }) => {
    updateStatusElments(target);
  })

  INPUT.addEventListener('input', ({ target }) => {
    const { value } = target;
    if (value.length >= 4) {
      BTN_UPDATE_NAME.removeAttribute('disabled');
    } else {
      BTN_UPDATE_NAME.setAttribute('disabled', '');
    }
  })
}