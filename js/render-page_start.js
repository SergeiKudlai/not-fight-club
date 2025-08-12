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
      <button class="start-page__btn" type="button" disabled></button>
    </div>
  `;

  SECTION_START_PAGE.insertAdjacentHTML('beforeend', html);
}