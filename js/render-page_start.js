import { createPageFight } from './fight-page.js';

export const createPageStart = () => {
  const HEADER = document.querySelector('.header');
  const FOOTER = document.querySelector('.footer');
  const SECTION_START_PAGE = document.querySelector('.start-page');
  const NAME_PERSON = HEADER.querySelector('.icon-contetn__name');


  NAME_PERSON.textContent = localStorage.getItem('name-person');
  HEADER.classList.remove('header--active');
  FOOTER.classList.remove('footer--active');

  const html = `
    <div class="start-page__container container">
      <h1 class="sr-only">Fight Page</h1>
      <button class="start-page__btn" type="button" data-name="fight"></button>
    </div>
  `;

  SECTION_START_PAGE.insertAdjacentHTML('beforeend', html);

  const BTN_START_FIGHT = document.querySelector('.start-page__btn');
  BTN_START_FIGHT.addEventListener('click', ({ target }) => createPageFight(target));
}