import { updatePageNameOnHeader, getRandomPerson } from './globalScript.js';
import { EVIL_PERSON } from './evilPerson.js';

export const createPageFight = (pageStartBtnFight) => {
  const FOOTER = document.querySelector('.footer');
  const START_PAGE = document.querySelector('.start-page');
  const FIGHT_PAGE = document.querySelector('.fight-page');
  const HEADER_NAV_BTN_HOME = document.querySelector('.header-list__btn-home');
  const NAME_BTN_PAGE = pageStartBtnFight.dataset.name;


  START_PAGE.classList.add('start-page--active');
  FOOTER.classList.add('footer--active');
  FIGHT_PAGE.classList.remove('fight-page--active');
  HEADER_NAV_BTN_HOME.removeAttribute('disabled');
  updatePageNameOnHeader(NAME_BTN_PAGE);

  
  if (!localStorage.getItem('evil-person')) {
    localStorage.setItem('evil-person', JSON.stringify(getRandomPerson(EVIL_PERSON)));
  }

  const GOOD_PERSON = JSON.parse(localStorage.getItem('data-player'));
  const EVELI_PERSON = JSON.parse(localStorage.getItem('evil-person'));

  localStorage.setItem('person-good-health', GOOD_PERSON.health);
  localStorage.setItem('person-evil-health', EVELI_PERSON.health);


  const HTML = ` 
    <div class="fight-page__container container">
      <h2 class="sr-only">Fight Page</h2>

      <ul class="fight-page__top fight-box">
        <li class="fight-box__item fight-box__good-person">
          <h3 class="fight-box__name">${GOOD_PERSON.name}</h3>

          <div class="fight-box__images-box">
            <img class="fight-box__images" src="${GOOD_PERSON.image}" alt="${GOOD_PERSON.name}" height="400">
          </div>

          <progress class="fight-box__bar-health" max="${GOOD_PERSON.health}" value="${localStorage.getItem('person-good-health')}"></progress>
          
          <ul class="fight-box__health-list">
            <li class="fight-box__health-item">
            ${localStorage.getItem('person-good-health')}
            </li>

            <li class="fight-box__health-item">/</li>

            <li class="fight-box__health-item">
            ${GOOD_PERSON.health}
            </li>
          </ul>
        </li>

        <li class="fight-box__item battle-box">
          <p class="battle-box__text">
            Please pick 1 Attack zone 
            </br>and 2 Defence zones
          </p>

          <ul class="battle-box__fight-zone">
            <li class="battle-box__attack-zone attack-zone">
              <h4 class="battle-box__title-zone">Attack ZonE</h4>

              <label class="battle-box__inner attack-zone__inner">
                Head
                <input class="battle-box__item attack-zone__item" type="checkbox" name="attack-head">  
              </label>

              <label class="battle-box__inner attack-zone__inner">
                Neck
                <input class="battle-box__item attack-zone__item" type="checkbox" name="attack-neck">  
              </label>

              <label class="battle-box__inner attack-zone__inner">
                Body
                <input class="battle-box__item attack-zone__item" type="checkbox" name="attack-body">  
              </label>

              <label class="battle-box__inner attack-zone__inner">
                Belly
                <input class="battle-box__item attack-zone__item" type="checkbox" name="attack-belly">  
              </label>

              <label class="battle-box__inner attack-zone__inner">
                Legs
                <input class="battle-box__item attack-zone__item" type="checkbox" name="attack-legs">  
              </label>
            </li>

            <li class="battle-box__slach-zone"></li>

            <li class="battle-box__defense-zone defense-zone">
              <h4 class="battle-box__title-zone">Defense ZonE</h4>

              <label class="battle-box__inner defense-zone__inner">
                Head
                <input class="battle-box__item defense-zone__item" type="checkbox" name="defense-head">  
              </label>

              <label class="battle-box__inner defense-zone__inner">
                Neck
                <input class="battle-box__item defense-zone__item" type="checkbox" name="defense-neck">  
              </label>

              <label class="battle-box__inner defense-zone__inner">
                Body
                <input class="battle-box__item defense-zone__item" type="checkbox" name="defense-body">  
              </label>

              <label class="battle-box__inner defense-zone__inner">
                Belly
                <input class="battle-box__item defense-zone__item" type="checkbox" name="defense-belly">  
              </label>

              <label class="battle-box__inner defense-zone__inner">
                Legs
                <input class="battle-box__item defense-zone__item" type="checkbox" name="defense-legs">  
              </label>
            </li>
          </ul>

          <button class="battle-box__btn btn" type="button" disabled>Attack</button>
        </li>

        <li class="fight-box__item fight-box__evil-person">
          <h3 class="fight-box__name">${EVELI_PERSON.name}</h3>

          <div class="fight-box__images-box">
            <img class="fight-box__images" src="${EVELI_PERSON.image}" alt="${EVELI_PERSON.name}" height="400">
          </div>

          <progress class="fight-box__bar-health" max="${EVELI_PERSON.health}" value="${localStorage.getItem('person-evil-health')}"></progress>
          
          <ul class="fight-box__health-list">
            <li class="fight-box__health-item">
            ${localStorage.getItem('person-evil-health')}
            </li>

            <li class="fight-box__health-item">/</li>

            <li class="fight-box__health-item">
            ${EVELI_PERSON.health}
            </li>
          </ul>
        </li>
      </ul>

      <div class="fight-page__bottom"></div>
    </div>
  `;

  FIGHT_PAGE.insertAdjacentHTML('beforeend', HTML);

  const BTN_ATTACK = document.querySelector('.battle-box__btn');
  const ATTACK_ELEMENT = document.querySelectorAll('.attack-zone__item');
  const DEFENSE_ELEMENT = document.querySelectorAll('.defense-zone__item');
  let attackControl = false;
  let defenseControl = false;


  const setCheckedBtn = () => {
    if (attackControl && defenseControl) {
      BTN_ATTACK.removeAttribute('disabled');
    } else {
      BTN_ATTACK.setAttribute('disabled', '');
    }
  }

  ATTACK_ELEMENT.forEach((element) => {
    element.addEventListener('change', () => {
      const CHECKED_ITEM = [...ATTACK_ELEMENT].filter(({ checked }) => checked);

      if (CHECKED_ITEM.length === 1) {
        attackControl = true;
        setCheckedBtn();
      } else {
        attackControl = false;
        setCheckedBtn();
      }
    })
  })

  DEFENSE_ELEMENT.forEach((element) => {
    element.addEventListener('change', () => {
      const CHECKED_ITEM = [...DEFENSE_ELEMENT].filter(({ checked }) => checked);

      if (CHECKED_ITEM.length === 2) {
        defenseControl = true;
        setCheckedBtn();
      } else {
        defenseControl = false;
        setCheckedBtn();
      }
    })
  })








  // ATTACK_ZONE.addEventListener('click', function ({ target }) {
  //   if (target.classList.contains('battle-box__item')) {
  //     getStationAttackZone(this);
  //   }
  // })
}