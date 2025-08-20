import { EVIL_PERSON } from './evilPerson.js';

export const createPageRival = () => {
  const RIVAL_PAGE = document.querySelector('.rival-page');


  const HTML = `
    <div class="rival-page__container container">
      <h2 class="sr-only">Rival Page Select</h2>

      <div class="rival-page__right rival-right">
        <ul class="rival-right__inner">
          ${EVIL_PERSON.map(({ image, id, name }) =>
    `<li class="rival-right__element">
        <article class="rival-right__item">
            <img class="rival-right__images" src="${image}" alt="${name}" data-id="${id}">
        </article>      
      </li>`
  ).join('')}
        </ul>
      </div>

      <div class="rival-page__left rival-left">
        <div class="rival-left__top"></div>

        <div class="rival-left__bottom"></div>

        <button class="rival-left__btn btn">Select Person</button>
      </div>
    </div>

    <div class="rival-page__modal modal-player modal-player--active">
      <div class="modal-player__container container"> 
        <p class="modal-player__text">
          To select a character, </br>complete the current battle
        </p>
      </div>
    </div>
  `

  RIVAL_PAGE.insertAdjacentHTML('beforeend', HTML);

  const RIVAL_PAGE_CONTAINER = document.querySelector('.rival-page__container');
  const MODAL_WRAPPER = document.querySelector('.modal-player');

  if (localStorage.getItem('active-fight')) {
    RIVAL_PAGE_CONTAINER.classList.add('rival-page__container--active');
    MODAL_WRAPPER.classList.remove('modal-player--active');
  }


  const RIVAL_PAGE_IMAGES = document.querySelectorAll('.rival-right__images');
  const BTN_SELECT_PERSON = document.querySelector('.rival-left__btn');


  const getEvilPerson = (evilPersonId) => EVIL_PERSON.filter(({ id }) => String(id) === evilPersonId);


  const renderRivalLeftTop = ({ name, image, id }) => {
    const ELEMENT_RIVAL_LEFT_TOP = document.querySelector('.rival-left__top');
    ELEMENT_RIVAL_LEFT_TOP.dataset.id = id;

    const HTML = `
      <div class="rival-left__top-inner">
        <h3 class="rival-left__top-name">${name}</h3>

        <img class="rival-left__top-image" src="${image}" alt="${name}">
      </div>
    `
    ELEMENT_RIVAL_LEFT_TOP.innerHTML = '';
    ELEMENT_RIVAL_LEFT_TOP.insertAdjacentHTML('beforeend', HTML);
  }

  const renderRivalLeftBottom = ({ health, attacket, critical_damage, special: { attackZone, defenseZone } }) => {
    const ELEMENT_RIVAL_LEFT_BOTTOM = document.querySelector('.rival-left__bottom');

    const HTML = `
      <ul class="rival-left__bottom-inner">
        <li class="rival-left__bottom-item rival-left__bottom-item--attacket">
          <p class="rival-left__bottom-text">Attack</p>
          <p class="rival-left__bottom-params">${attacket}</p>
        </li>

        <li class="rival-left__bottom-item rival-left__bottom-item--critical-attack">
          <p class="rival-left__bottom-text">Critical Attack</p>
          <p class="rival-left__bottom-params">${critical_damage}</p>
        </li>

        <li class="rival-left__bottom-item rival-left__bottom-item--health">
          <p class="rival-left__bottom-text">Health</p>
          <p class="rival-left__bottom-params">${health}</p>
        </li>

        <li class="rival-left__bottom-item rival-left__bottom-item--attacket-zone">
          <p class="rival-left__bottom-text">Attack Zone</p>
          <p class="rival-left__bottom-params">${attackZone}</p>
        </li>

        <li class="rival-left__bottom-item rival-left__bottom-item--defense-zone">
          <p class="rival-left__bottom-text">Defense Zone</p>
          <p class="rival-left__bottom-params">${defenseZone}</p>
        </li>
      </ul>
    `

    ELEMENT_RIVAL_LEFT_BOTTOM.innerHTML = '';
    ELEMENT_RIVAL_LEFT_BOTTOM.insertAdjacentHTML('beforeend', HTML);
  }

  if (localStorage.getItem('evil-person')) {
    const EVIL_PERSON_LOCAL_STORAGE = JSON.parse(localStorage.getItem('evil-person'));
    renderRivalLeftTop(EVIL_PERSON_LOCAL_STORAGE);
    renderRivalLeftBottom(EVIL_PERSON_LOCAL_STORAGE);
  }

  const setEvilPersonLocalStorage = () => {
    const START_PAGE = document.querySelector('.start-page');
    const ELEMENT_WRAPPER_EVIL_PERSON = document.querySelector('.rival-left__top');
    const BTN_HEADER_RIVAL = document.querySelector('.header-list__btn-rival');
    const BTN_HEADER_HOME = document.querySelector('.header-list__btn-home');
    const GET_ACTIVE_ID_EVIL_PERSON = ELEMENT_WRAPPER_EVIL_PERSON.dataset.id;
    const EVIL_PERSON = getEvilPerson(GET_ACTIVE_ID_EVIL_PERSON);
    localStorage.setItem('evil-person', JSON.stringify(...EVIL_PERSON));
    localStorage.setItem('person-evil-health', EVIL_PERSON[0].health);
    RIVAL_PAGE.classList.add('rival-page--active');
    RIVAL_PAGE.innerHTML = '';
    START_PAGE.classList.remove('start-page--active');
    BTN_HEADER_RIVAL.removeAttribute('disabled');
    BTN_HEADER_HOME.setAttribute('disabled', '');
  }


  RIVAL_PAGE_IMAGES.forEach((elementImages) => {
    elementImages.addEventListener('click', function () {
      const IMAGES_ID = this.dataset.id;
      const EVIL_PERSON = getEvilPerson(IMAGES_ID);
      renderRivalLeftTop(...EVIL_PERSON);
      renderRivalLeftBottom(...EVIL_PERSON);
    })
  })

  BTN_SELECT_PERSON.addEventListener('click', setEvilPersonLocalStorage);
}