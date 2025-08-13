import { GOOD_PERSON } from './goodPerson.js';

export const createPagePlayer = () => {
  const PLAYER_PAGE = document.querySelector('.player-page');
  const GET_PLAYER = JSON.parse(localStorage.getItem('data-player'));
  const { name, image, health, defense, attacket, critical_damage } = GET_PLAYER;


  const HTML = `
    <div class="player-page__container container">
      <div class="player-page__wrapper">
        <h2 class="player-page__name">${name}</h2>

        <div class="player-page__inner">
          <ul class="player-page__static-fight">
            <li class="player-page__static-item">
              Wins :
              <span class="player-page__wins">${localStorage.getItem('wins')}</span>
            </li>

            <li class="player-page__static-item">
              Loses :
              <span class="player-page__loses">${localStorage.getItem('loses')}</span>   
            </li>
          </ul>
          <div class="player-page__images-box">
            <img class="player-page__images" src="${image}" alt="${name}" width="300" height="300">
          </div>

          <ul class="player-page__characteristics">
            <li class="player-page__characteristics-item player-page__characteristics-item--health">
              HEALTH : 
              <span class="player-page__characteristics-health">
                ${health}
              </span>
            </li>

            <li class="player-page__characteristics-item player-page__characteristics-item--defense">
              DEFENSE : 
              <span class="player-page__characteristics-defense">
                ${defense}
              </span>
            </li>

            <li class="player-page__characteristics-item player-page__characteristics-item--attacket">
              ATTACKET : 
              <span class="player-page__characteristics-attacket">
                ${attacket}
              </span>
            </li>

            <li class="player-page__characteristics-item player-page__characteristics-item--critical-damage">
              CRITICAL DAMAGE : 
              <span class="player-page__characteristics-critical-damage">
                ${critical_damage}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div class="player-page__slider slider-player">
        <div class="slider-player__box-left">
          <button class="slider-player__btn slider-player__btn-left" type="button"></button>
        
          <div class="slider-player__inner">
            ${GOOD_PERSON.map(({ image, name, id }) => {
    return `<article class="slider-player__slides" data-id="${id}">
      <img class="slider-player__slides-images" src="${image}" alt="${name}" height="300">
    </article>`
  }).join('')}
          </div>

          <button class="slider-player__btn slider-player__btn-right" type="button"></button>
        </div>

        <ul class="slider-player__box-right characteristics-player">
          <li class="characteristics-player__items">
            NAME:
            <span class="characteristics-player__items-name">${GOOD_PERSON[0].name}</span>
          </li>

          <li class="characteristics-player__items">
            ATTACKET:
            <span class="characteristics-player__items-attacket">${GOOD_PERSON[0].attacket}</span>
          </li>

          <li class="characteristics-player__items">
            DEFENSE:
            <span class="characteristics-player__items-defense">${GOOD_PERSON[0].defense}</span>
          </li>

          <li class="characteristics-player__items">
            HEALTH:
            <span class="characteristics-player__items-health">${GOOD_PERSON[0].health}</span>
          </li>

          <li class="characteristics-player__items">
            CRITICAL DAMAGE:
            <span class="characteristics-player__items-critical_damage">${GOOD_PERSON[0].critical_damage}</span>
          </li>
        </ul>
      </div>
      <button class="player-page__select-btn btn" type="button">Select Person</button>
    </div>
  `
  PLAYER_PAGE.insertAdjacentHTML('beforeend', HTML);


  const SLIDES_BOX = document.querySelector('.slider-player__inner');
  const BTN_LEFT = document.querySelector('.slider-player__btn-left');
  const BTN_RIGHT = document.querySelector('.slider-player__btn-right');
  const SELECT_BTN = document.querySelector('.player-page__select-btn');
  let checkedArrayUpdate = true;


  const updateArraySlides = (positionSlides) => {
    const ARRAY_SLIDES = [...SLIDES_BOX.children];
    switch (positionSlides) {
      case ('left'):
        ARRAY_SLIDES.unshift(ARRAY_SLIDES.pop());
        break;
      case ('right'):
        ARRAY_SLIDES.push(ARRAY_SLIDES.shift());
        break;
      default: throw Error('Error slides router');
    }

    ARRAY_SLIDES.forEach((element) => SLIDES_BOX.append(element));
  }

  const setSliderRouter = (positionSlides) => {
    [...SLIDES_BOX.children].forEach((elementSlides) => {
      switch (positionSlides) {
        case ('left'):
          elementSlides.classList.add('slider-player__slides-left');
          break;
        case ('right'):
          elementSlides.classList.add('slider-player__slides-right');
          break;
        default: throw Error('Error slides add router class');
      }
    })
  }

  const controlStatusDisabledBtnArrow = (controlBoolean) => {
    if (controlBoolean) {
      BTN_LEFT.setAttribute('disabled', '');
      BTN_RIGHT.setAttribute('disabled', '');
    } else {
      BTN_LEFT.removeAttribute('disabled');
      BTN_RIGHT.removeAttribute('disabled');
    }
  }

  const removeAnimationElementLeft = () => {
    [...SLIDES_BOX.children].forEach((element) => {
      element.addEventListener('animationend', () => {
        element.classList.remove('slider-player__slides-left');
        SELECT_BTN.removeAttribute('disabled');
        controlStatusDisabledBtnArrow(false);
      })
    })
  }

  const removeAnimationElementRight = () => {
    [...SLIDES_BOX.children].forEach((element) => {
      element.addEventListener('animationend', () => {
        element.classList.remove('slider-player__slides-right');
        if (checkedArrayUpdate) updateArraySlides('right');
        checkedArrayUpdate = false;
        SELECT_BTN.removeAttribute('disabled');
        controlStatusDisabledBtnArrow(false);
      })
    })
    checkedArrayUpdate = true;
  }

  const updatePlayerCharacteristics = (position) => {
    const SLIDER_BOX_characteristics = document.querySelector('.slider-player__box-right');
    let GET_ID_PALYER = '';
    let ACTIVE_PLAYER = '';


    switch (position) {
      case ('left'):
        GET_ID_PALYER = [...SLIDES_BOX.children][0].dataset.id;
        ACTIVE_PLAYER = GOOD_PERSON.filter(({ id }) => `${id}` === GET_ID_PALYER)[0];
        break;
      case ('right'):
        GET_ID_PALYER = [...SLIDES_BOX.children][1].dataset.id;
        ACTIVE_PLAYER = GOOD_PERSON.filter(({ id }) => `${id}` === GET_ID_PALYER)[0];
        break;
      default: throw Error('Not Update characteristics Person');
    }

    const { name, attacket, defense, health, critical_damage } = ACTIVE_PLAYER;
    const HTML = `
              <li class="characteristics-player__items">
            NAME:
            <span class="characteristics-player__items-name">${name}</span>
          </li>

          <li class="characteristics-player__items">
            ATTACKET:
            <span class="characteristics-player__items-attacket">${attacket}</span>
          </li>

          <li class="characteristics-player__items">
            DEFENSE:
            <span class="characteristics-player__items-defense">${defense}</span>
          </li>

          <li class="characteristics-player__items">
            HEALTH:
            <span class="characteristics-player__items-health">${health}</span>
          </li>

          <li class="characteristics-player__items">
            CRITICAL DAMAGE:
            <span class="characteristics-player__items-critical_damage">${critical_damage}</span>
          </li>
    `

    SLIDER_BOX_characteristics.innerHTML = '';
    SLIDER_BOX_characteristics.innerHTML = HTML;
  }

  const updatePersonActivePlayer = () => {
    const WRAPPER_PLAYER_TOP = document.querySelector('.player-page__wrapper');
    const GET_ID_PALYER = [...SLIDES_BOX.children][0].dataset.id;
    const GET_ACTIVE_PLAYER_DATA = GOOD_PERSON.filter(({ id }) => String(id) === GET_ID_PALYER)[0];
    localStorage.setItem('data-player', JSON.stringify(GET_ACTIVE_PLAYER_DATA));
    const { name, image, attacket, health, defense, critical_damage } = GET_ACTIVE_PLAYER_DATA;

    const HTML = `
        <h2 class="player-page__name">${name}</h2>
        <div class="player-page__inner">
          <ul class="player-page__static-fight">
            <li class="player-page__static-item">
              Wins :
              <span class="player-page__wins">${localStorage.getItem('wins')}</span>
            </li>

            <li class="player-page__static-item">
              Loses :
              <span class="player-page__loses">${localStorage.getItem('loses')}</span>   
            </li>
          </ul>
          <div class="player-page__images-box">
            <img class="player-page__images" src="${image}" alt="${name}" width="300" height="300">
          </div>

          <ul class="player-page__characteristics">
            <li class="player-page__characteristics-item player-page__characteristics-item--health">
              HEALTH : 
              <span class="player-page__characteristics-health">
                ${health}
              </span>
            </li>

            <li class="player-page__characteristics-item player-page__characteristics-item--defense">
              DEFENSE : 
              <span class="player-page__characteristics-defense">
                ${defense}
              </span>
            </li>

            <li class="player-page__characteristics-item player-page__characteristics-item--attacket">
              ATTACKET : 
              <span class="player-page__characteristics-attacket">
                ${attacket}
              </span>
            </li>

            <li class="player-page__characteristics-item player-page__characteristics-item--critical-damage">
              CRITICAL DAMAGE : 
              <span class="player-page__characteristics-critical-damage">
                ${critical_damage}
              </span>
            </li>
          </ul>
        </div>
    `
    WRAPPER_PLAYER_TOP.innerHTML = '';
    WRAPPER_PLAYER_TOP.innerHTML = HTML;
  }

  BTN_LEFT.addEventListener('click', () => {
    controlStatusDisabledBtnArrow(true);
    SELECT_BTN.setAttribute('disabled', '');
    updateArraySlides('left');
    setSliderRouter('left');
    removeAnimationElementLeft();
    updatePlayerCharacteristics('left');
  })

  BTN_RIGHT.addEventListener('click', () => {
    controlStatusDisabledBtnArrow(true);
    SELECT_BTN.setAttribute('disabled', '');
    setSliderRouter('right');
    removeAnimationElementRight();
    updatePlayerCharacteristics('right');
  })

  SELECT_BTN.addEventListener('click', () => {
    updatePersonActivePlayer();
  })
}