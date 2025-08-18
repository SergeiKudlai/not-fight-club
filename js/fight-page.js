import {
  updatePageNameOnHeader,
  getRandomPerson,
  getRandomUnicomRandom,
  setCriticalDamagePersons
} from './globalScript.js';

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

  const GOOD_PERSON_LOCAL_ST = JSON.parse(localStorage.getItem('data-player'));
  const EVIL_PERSON_LOCAL_ST = JSON.parse(localStorage.getItem('evil-person'));


  if (!localStorage.getItem('person-evil-health')) {
    localStorage.setItem('person-evil-health', EVIL_PERSON_LOCAL_ST.health);
  }

  if (!localStorage.getItem('person-good-health')) {
    localStorage.setItem('person-good-health', GOOD_PERSON_LOCAL_ST.health);
  }

  const HTML = ` 
    <div class="fight-page__container container">
      <h2 class="sr-only">Fight Page</h2>

      <ul class="fight-page__top fight-box">
        <li class="fight-box__item fight-box__good-person">
          <h3 class="fight-box__name">${GOOD_PERSON_LOCAL_ST.name}</h3>

          <div class="fight-box__images-box">
            <button class="fight-box__images-btn btn" type="button" data-good>character info</button>

            <img class="fight-box__images" src="${GOOD_PERSON_LOCAL_ST.image}" alt="${GOOD_PERSON_LOCAL_ST.name}" height="400">

            <aside class="fight-box__images-info info-images info-images__good-person">
              <button class="info-images__btn btn" type="button" data-good>Close</button>

                <ul class="info-images__inner">
                  <li class="info-images__item info-images__attack">
                    <p class="info-images__item-name">Attack</p>

                    <p class="info-images__item-param">${GOOD_PERSON_LOCAL_ST.attacket}</p>
                  </li>

                  <li class="info-images__item info-images__critical-attack">
                    <p class="info-images__item-name"> Critical Attack</p>

                    <p class="info-images__item-param">
                      ${GOOD_PERSON_LOCAL_ST.critical_damage}
                    </p>
                  </li>

                  <li class="info-images__item info-images__health">
                    <p class="info-images__item-name">Health</p>

                    <p class="info-images__item-param">
                      ${GOOD_PERSON_LOCAL_ST.health}
                    </p>
                  </li>

                  <li class="info-images__item info-images__attack-zone">
                    <p class="info-images__item-name">Attack Zone</p>

                    <p class="info-images__item-param">
                      1
                    </p
                  </li>

                  <li class="info-images__item info-images__defense-zone">
                    <p class="info-images__item-name">Defense Zone</p>

                    <p class="info-images__item-param">
                      2
                    </p
                  </li>
                </ul>
            </aside>
          </div>

          <progress class="fight-box__bar-health fight-box__good-person__bar" max="${GOOD_PERSON_LOCAL_ST.health}" value="${localStorage.getItem('person-good-health')}"></progress>
          
          <ul class="fight-box__health-list">
            <li class="fight-box__health-item fight-box__health-item__current-good">
            ${localStorage.getItem('person-good-health')}
            </li>

            <li class="fight-box__health-item">/</li>

            <li class="fight-box__health-item">
            ${GOOD_PERSON_LOCAL_ST.health}
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
                <input class="battle-box__item attack-zone__item" type="checkbox" name="attack-head" aria-checked="false">  
              </label>

              <label class="battle-box__inner attack-zone__inner">
                Neck
                <input class="battle-box__item attack-zone__item" type="checkbox" name="attack-neck" aria-checked="false">  
              </label>

              <label class="battle-box__inner attack-zone__inner">
                Body
                <input class="battle-box__item attack-zone__item" type="checkbox" name="attack-body" aria-checked="false">  
              </label>

              <label class="battle-box__inner attack-zone__inner">
                Belly
                <input class="battle-box__item attack-zone__item" type="checkbox" name="attack-belly" aria-checked="false">  
              </label>

              <label class="battle-box__inner attack-zone__inner">
                Legs
                <input class="battle-box__item attack-zone__item" type="checkbox" name="attack-legs" aria-checked="false">  
              </label>
            </li>

            <li class="battle-box__slach-zone"></li>

            <li class="battle-box__defense-zone defense-zone">
              <h4 class="battle-box__title-zone">Defense ZonE</h4>

              <label class="battle-box__inner defense-zone__inner">
                Head
                <input class="battle-box__item defense-zone__item" type="checkbox" name="defense-head" aria-checked="false">  
              </label>

              <label class="battle-box__inner defense-zone__inner">
                Neck
                <input class="battle-box__item defense-zone__item" type="checkbox" name="defense-neck" aria-checked="false">  
              </label>

              <label class="battle-box__inner defense-zone__inner">
                Body
                <input class="battle-box__item defense-zone__item" type="checkbox" name="defense-body" aria-checked="false">  
              </label>

              <label class="battle-box__inner defense-zone__inner">
                Belly
                <input class="battle-box__item defense-zone__item" type="checkbox" name="defense-belly" aria-checked="false">  
              </label>

              <label class="battle-box__inner defense-zone__inner">
                Legs
                <input class="battle-box__item defense-zone__item" type="checkbox" name="defense-legs" aria-checked="false">  
              </label>
            </li>
          </ul>

          <button class="battle-box__btn btn" type="button" disabled>Attack</button>
        </li>

        <li class="fight-box__item fight-box__evil-person">
          <h3 class="fight-box__name">${EVIL_PERSON_LOCAL_ST.name}</h3>

          <div class="fight-box__images-box">
            <button class="fight-box__images-btn btn" type="button" data-evil>character info</button>

            <img class="fight-box__images" src="${EVIL_PERSON_LOCAL_ST.image}" alt="${EVIL_PERSON_LOCAL_ST.name}" height="400">
             
            <aside class="fight-box__images-info info-images info-images__evil-person">
              <button class="info-images__btn btn" type="button" data-evil>Close</button>

              <ul class="info-images__inner">
                <li class="info-images__item info-images__attack">
                    <p class="info-images__item-name">Attack</p>

                    <p class="info-images__item-param">
                      ${EVIL_PERSON_LOCAL_ST.attacket}
                    </p>
                </li>

                <li class="info-images__item info-images__critical-attack">
                    <p class="info-images__item-name">Critical Attack</p>

                    <p class="info-images__item-param">
                      ${EVIL_PERSON_LOCAL_ST.critical_damage}
                    </p>
                </li>

                <li class="info-images__item info-images__health">
                  <p class="info-images__item-name">Health</p>

                  <p class="info-images__item-param">
                    ${EVIL_PERSON_LOCAL_ST.health}
                  </p
                </li>

                <li class="info-images__item info-images__attack-zone">
                  <p class="info-images__item-name">Attack Zone</p>

                  <p class="info-images__item-param">
                    ${EVIL_PERSON_LOCAL_ST.special.attackZone}
                  </p
                </li>

                <li class="info-images__item info-images__defense-zone">
                  <p class="info-images__item-name">Defense Zone</p>

                  <p class="info-images__item-param">
                    ${EVIL_PERSON_LOCAL_ST.special.defenseZone}
                  </p
                </li>
              </ul>
            </aside>
          </div>

          <progress class="fight-box__bar-health fight-box__evil-person__bar" max="${EVIL_PERSON_LOCAL_ST.health}" value="${localStorage.getItem('person-evil-health')}"></progress>
          
          <ul class="fight-box__health-list">
            <li class="fight-box__health-item fight-box__health-item__current-evil">
            ${localStorage.getItem('person-evil-health')}
            </li>

            <li class="fight-box__health-item">/</li>

            <li class="fight-box__health-item">
            ${EVIL_PERSON_LOCAL_ST.health}
            </li>
          </ul>
        </li>
      </ul>

      <div class="fight-page__bottom"></div>
    </div>

    <div class="fight-page__modal modal-fight modal-fight--active">
      <div class="modal-fight__inner">
        <span class="modal-fight__text"></span>

        <button class="modal-fight__btn btn" type="button">Go to start page</button>
      </div>
    </div>
  `;

  FIGHT_PAGE.insertAdjacentHTML('beforeend', HTML);


  const BTN_ATTACK = document.querySelector('.battle-box__btn');
  const ATTACK_ELEMENT = document.querySelectorAll('.attack-zone__item');
  const DEFENSE_ELEMENT = document.querySelectorAll('.defense-zone__item');
  const LOGO_FIGHT_BOX = document.querySelector('.fight-page__bottom');
  const BTN_MODAL = document.querySelector('.modal-fight__btn');
  const BTN_ASIDE_IMAGES = document.querySelectorAll('.fight-box__images-btn');
  const BTN_HIDE_ASIDE_IMAGES = document.querySelectorAll('.info-images__btn');
  let attackControl = false;
  let defenseControl = false;


  BTN_ASIDE_IMAGES.forEach((elemntBtnAsideImages) => {
    elemntBtnAsideImages.addEventListener('click', function () {

      if (this.hasAttribute('data-evil')) {
        const ASIDE_EVIL_PERSON = document.querySelector('.info-images__evil-person');
        ASIDE_EVIL_PERSON.classList.add('info-images__evil-person--active');
      }

      if (this.hasAttribute('data-good')) {
        const ASIDE_EVIL_PERSON = document.querySelector('.info-images__good-person');
        ASIDE_EVIL_PERSON.classList.add('info-images__good-person--active');
      }
    })
  })

  BTN_HIDE_ASIDE_IMAGES.forEach((elementHideAside) => {
    elementHideAside.addEventListener('click', function () {
      if (this.hasAttribute('data-evil')) {
        const ASIDE_EVIL_PERSON = document.querySelector('.info-images__evil-person');
        ASIDE_EVIL_PERSON.classList.remove('info-images__evil-person--active');
      }

      if (this.hasAttribute('data-good')) {
        const ASIDE_EVIL_PERSON = document.querySelector('.info-images__good-person');
        ASIDE_EVIL_PERSON.classList.remove('info-images__good-person--active');
      }
    })
  })



  if (localStorage.getItem('logo-fight')) {
    const LOGO_FIGHT_LOCAL_ST = localStorage.getItem('logo-fight').replaceAll(',', '');
    LOGO_FIGHT_BOX.insertAdjacentHTML('beforeend', LOGO_FIGHT_LOCAL_ST);
  }

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

  const getAttackGoodPersonZone = () => {
    let attackZone = '';

    ATTACK_ELEMENT.forEach(({ checked, name }) => {
      if (checked) {
        attackZone = name;
      }
    })

    return attackZone;
  }

  const getDefenseGoodPersonZone = () => {
    let defenseZone = [];

    DEFENSE_ELEMENT.forEach(({ checked, name }) => {
      if (checked) {
        defenseZone.push(name);
      }
    })

    return defenseZone;
  }

  const getDefenseEvilPerson = () => {
    const { special: { defenseZone } } = EVIL_PERSON_LOCAL_ST;
    const RANDOM_NUM_DEFENSE_ZONE = getRandomUnicomRandom(defenseZone, DEFENSE_ELEMENT);


    const ZONE_DEFENSE_EVIL_PERSON = [];

    [...DEFENSE_ELEMENT].forEach((elements, index) => {
      RANDOM_NUM_DEFENSE_ZONE.forEach((numRandom) => {
        if (numRandom === index) {
          ZONE_DEFENSE_EVIL_PERSON.push(elements.name);
        }
      })
    })

    return ZONE_DEFENSE_EVIL_PERSON;
  }

  const updateStationHealthEvilPerson = (damageGoodPerson) => {
    const EVIL_PERSON_BAR = document.querySelector('.fight-box__evil-person__bar');
    const EVIL_PERSON_CURRENT = document.querySelector('.fight-box__health-item__current-evil');
    const GET_EVIL_PERSON_HEALTH = localStorage.getItem('person-evil-health');
    const CALC_HEALTH_PERSON = GET_EVIL_PERSON_HEALTH - damageGoodPerson;
    localStorage.setItem('person-evil-health', CALC_HEALTH_PERSON);
    EVIL_PERSON_BAR.value = localStorage.getItem('person-evil-health');
    EVIL_PERSON_CURRENT.textContent = localStorage.getItem('person-evil-health');
  }

  const updateStationHealthGoodPerson = (damageEvilPerson) => {
    const GOOD_PERSON_BAR = document.querySelector('.fight-box__good-person__bar');
    const EVIL_PERSON_CURRENT = document.querySelector('.fight-box__health-item__current-good');
    const GET_GOOD_PERSON_HEALTH = localStorage.getItem('person-good-health');
    const CALC_HEALTH_PERSON = GET_GOOD_PERSON_HEALTH - damageEvilPerson;
    localStorage.setItem('person-good-health', CALC_HEALTH_PERSON);
    GOOD_PERSON_BAR.value = localStorage.getItem('person-good-health');
    EVIL_PERSON_CURRENT.textContent = localStorage.getItem('person-good-health');
  }

  const setValuesLocalStorageConsoleFight = (textLogoFight) => {
    const ARRAY_LOGO_FIGHT = [];

    if (localStorage.getItem('logo-fight')) {
      const ACTIVE_LOGO_FIGHT = localStorage.getItem('logo-fight');
      ARRAY_LOGO_FIGHT.push(ACTIVE_LOGO_FIGHT, textLogoFight);
      localStorage.setItem('logo-fight', ARRAY_LOGO_FIGHT);
    } else {
      ARRAY_LOGO_FIGHT.push(textLogoFight);
      localStorage.setItem('logo-fight', ARRAY_LOGO_FIGHT);
    }
  }

  const renderNotPersonEvilZoneBlock = (attackGoodPerson, defenseZoneEvilPerson) => {
    const { attacket, name: name_good_person, critical_damage } = GOOD_PERSON_LOCAL_ST;
    const { name: name_evil_person } = EVIL_PERSON_LOCAL_ST;
    const { text, damage } = setCriticalDamagePersons(critical_damage, attacket, attackGoodPerson.length);


    const HTML = `
      <p class="fight-page__bottom-text">
      <span class="fight-page__bottom-good_person">${name_good_person}</span> атоковал зону : <span class="fight-page__bottom-zone">${attackGoodPerson}</span> - <span class="fight-page__bottom-evil_person">${name_evil_person}</span> заблокировал зоны : <span class="fight-page__bottom-zone">${Array.isArray(defenseZoneEvilPerson) ? defenseZoneEvilPerson.join(' ') : defenseZoneEvilPerson}</span> -> ${text}
      </p>`

    LOGO_FIGHT_BOX.insertAdjacentHTML('beforeend', HTML);
    updateStationHealthEvilPerson(damage);
    setValuesLocalStorageConsoleFight(HTML);
  }

  const rendePersonEvilHasBlock = (attackGoodPerson, defenseZoneEvilPerson) => {
    const { attacket, name: name_good_person, critical_damage } = GOOD_PERSON_LOCAL_ST;
    const { name: name_evil_person } = EVIL_PERSON_LOCAL_ST;
    const { change, text, damage } = setCriticalDamagePersons(critical_damage, attacket, attackGoodPerson.length);

    const HTML = `
      <p class="fight-page__bottom-text">
      <span class="fight-page__bottom-good_person">${name_good_person}</span> атоковал зону : <span class="fight-page__bottom-zone">${attackGoodPerson}</span> - <span class="fight-page__bottom-evil_person">${name_evil_person}</span> заблокировал зоны : <span class="fight-page__bottom-zone">${defenseZoneEvilPerson.join(' ')}</span> -> ${change ? text : '<span class="fight-page__bottom-block__attack">атака заблокирована.</span>'}
      </p>`

    LOGO_FIGHT_BOX.insertAdjacentHTML('beforeend', HTML);
    updateStationHealthEvilPerson(change ? damage : 0);
    setValuesLocalStorageConsoleFight(HTML);
  }

  const setDefenseEvilPerson = (dataDefenseEvil, dataAttackGoodPerson) => {
    let defenseZoneEvilPerson = '';
    let controlZoneAttackAndZoneDefense = '';
    let stringZoneAttackGoodPerson = dataAttackGoodPerson.replace('attack-', '');

    if (dataDefenseEvil.length !== 0) {
      controlZoneAttackAndZoneDefense = dataDefenseEvil.map((element) => element.replaceAll('defense-', '')).filter((element) => element === stringZoneAttackGoodPerson);
      defenseZoneEvilPerson = dataDefenseEvil.map((element) => element.replaceAll('defense-', ''));
    } else {
      defenseZoneEvilPerson = 'нет зон блока';
    }

    if (controlZoneAttackAndZoneDefense.length === 0) {
      renderNotPersonEvilZoneBlock([stringZoneAttackGoodPerson], defenseZoneEvilPerson);
    } else {
      rendePersonEvilHasBlock([stringZoneAttackGoodPerson], defenseZoneEvilPerson);
    }
  }

  const renderNotPersonGoodZoneBlock = (attackZoneEvilPerson, defenseZoneGoodPerson) => {
    const { name: name_good_person } = GOOD_PERSON_LOCAL_ST;
    const { name: name_evil_person, attacket, critical_damage } = EVIL_PERSON_LOCAL_ST;
    const { text, damage, change } = setCriticalDamagePersons(critical_damage, attacket, attackZoneEvilPerson.length);

    const HTML = `
      <p class="fight-page__bottom-text">
      <span class="fight-page__bottom-evil_person">${name_evil_person}</span> атоковал зону : <span class="fight-page__bottom-zone">${attackZoneEvilPerson.join(' ')}</span> - <span class="fight-page__bottom-good_person">${name_good_person}</span> заблокировал зоны : <span class="fight-page__bottom-zone">${defenseZoneGoodPerson.join(' ')}</span> -> ${text} ${change ? `${attackZoneEvilPerson.length > 1 ? `-> пробиты ${attackZoneEvilPerson.length} зоны.` : `-> пробита ${attackZoneEvilPerson.length} зона.`}` : ''}
      </p>`

    LOGO_FIGHT_BOX.insertAdjacentHTML('beforeend', HTML);
    updateStationHealthGoodPerson(damage);
    setValuesLocalStorageConsoleFight(HTML);
  }

  const renderPersonGoodHasBlock = (attackZoneEvilPerson, defenseZoneGoodPerson) => {
    const { name: name_good_person } = GOOD_PERSON_LOCAL_ST;
    const { name: name_evil_person, attacket, critical_damage } = EVIL_PERSON_LOCAL_ST;
    const { text, damage, change } = setCriticalDamagePersons(critical_damage, attacket, attackZoneEvilPerson.length);


    if (attackZoneEvilPerson.length > 1) {
      if (change) {
        const HTML = `
          <p class="fight-page__bottom-text">
           <span class="fight-page__bottom-evil_person">${name_evil_person}</span> атоковал зону : <span class="fight-page__bottom-zone">${attackZoneEvilPerson.join(' ')}</span> - <span class="fight-page__bottom-good_person">${name_good_person}</span> заблокировал зоны : <span class="fight-page__bottom-zone">${defenseZoneGoodPerson.join(' ')}</span> -> ${text} по : ${attackZoneEvilPerson.length} зонам.
          </p>`

        LOGO_FIGHT_BOX.insertAdjacentHTML('beforeend', HTML);

        updateStationHealthGoodPerson(damage);
        setValuesLocalStorageConsoleFight(HTML);
      } else {
        let result = attackZoneEvilPerson.join(' ');

        defenseZoneGoodPerson.forEach((elementDefense) => {
          result = result.replace(elementDefense, '');
        })

        const SUCCESSEFUL_ATTACK = result.trim().split(' ');
        const EVIL_PERSON_DAMAGE_NO_CRITICAL = attacket * SUCCESSEFUL_ATTACK.length;

        const HTML = `
          <p class="fight-page__bottom-text">
           <span class="fight-page__bottom-evil_person">${name_evil_person}</span> атоковал зону : <span class="fight-page__bottom-zone">${attackZoneEvilPerson.join(' ')}</span> - <span class="fight-page__bottom-good_person">${name_good_person}</span> заблокировал зоны : <span class="fight-page__bottom-zone">${defenseZoneGoodPerson.join(' ')}</span> -> <span class="fight-page__bottom-attack">нанесен урон ${EVIL_PERSON_DAMAGE_NO_CRITICAL}.</span>
          </p>`

        LOGO_FIGHT_BOX.insertAdjacentHTML('beforeend', HTML);
        updateStationHealthGoodPerson(EVIL_PERSON_DAMAGE_NO_CRITICAL);
        setValuesLocalStorageConsoleFight(HTML);
      }
    } else {
      const HTML = `
        <p class="fight-page__bottom-text">
        <span class="fight-page__bottom-evil_person">${name_evil_person}</span> атоковал зону : <span class="fight-page__bottom-zone">${attackZoneEvilPerson.join(' ')}</span> - <span class="fight-page__bottom-good_person">${name_good_person}</span> заблокировал зоны : <span class="fight-page__bottom-zone">${defenseZoneGoodPerson.join(' ')}</span> -> ${change ? text : '<span class="fight-page__bottom-block__attack">атака заблокирована</span>'} ${change ? `-> пробита : ${attackZoneEvilPerson.length} зона.` : '.'}
        </p>`

      LOGO_FIGHT_BOX.insertAdjacentHTML('beforeend', HTML);
      updateStationHealthGoodPerson(change ? damage : 0);
      setValuesLocalStorageConsoleFight(HTML);
    }
  }

  const getAttackZoneEvilPerosn = () => {
    const { special: { attackZone } } = EVIL_PERSON_LOCAL_ST;
    const RANDOM_NUM_ATTACK_ZONE = getRandomUnicomRandom(attackZone, ATTACK_ELEMENT);

    const ZONE_ATTACK_EVIL_PERSON = [];

    [...ATTACK_ELEMENT].forEach((elements, index) => {
      RANDOM_NUM_ATTACK_ZONE.forEach((numRandom) => {
        if (numRandom === index) {
          ZONE_ATTACK_EVIL_PERSON.push(elements.name);
        }
      })
    })

    return ZONE_ATTACK_EVIL_PERSON;
  }

  const setDefenseGoodPerson = (dataDefenseGoodPerson, dataAttackEvilPerson) => {
    const controlZoneAttackAndZoneDefense = [];
    const ZOME_ATTACK_EVIL = dataAttackEvilPerson.map((zoneAttackEvil) => zoneAttackEvil.replace('attack-', ''));
    const ZONE_DEFENSE_GOOD_PERSON = dataDefenseGoodPerson.map((element) => element.replace('defense-', ''));


    ZONE_DEFENSE_GOOD_PERSON.forEach((elementDefenseGoodPerson) => {
      ZOME_ATTACK_EVIL.forEach((elementAttackEvilPerson) => {
        if (elementDefenseGoodPerson === elementAttackEvilPerson) {
          controlZoneAttackAndZoneDefense.push(elementDefenseGoodPerson);
        }
      })
    })

    if (controlZoneAttackAndZoneDefense.length === 0) {
      renderNotPersonGoodZoneBlock(ZOME_ATTACK_EVIL, ZONE_DEFENSE_GOOD_PERSON);
    } else {
      renderPersonGoodHasBlock(ZOME_ATTACK_EVIL, ZONE_DEFENSE_GOOD_PERSON);
    }
  }

  const setStatusFight = () => {
    if (!localStorage.getItem('active-fight')) {
      localStorage.setItem('active-fight', true);
    }
  }

  const checkedEndFight = () => {
    const MODAL_FIGHT = document.querySelector('.modal-fight');
    const MODAL_FIGHT_TEXT = document.querySelector('.modal-fight__text');
    const HEALTH_GOOD_PERSON = localStorage.getItem('person-good-health');
    const HEALTH_EVIL_PERSON = localStorage.getItem('person-evil-health');


    if (HEALTH_GOOD_PERSON <= 0) {
      let loses = localStorage.getItem('loses');
      loses++;
      localStorage.setItem('loses', loses);
      MODAL_FIGHT_TEXT.textContent = 'You lost!';
    }

    if (HEALTH_EVIL_PERSON <= 0) {
      let wins = localStorage.getItem('wins');
      wins++;
      localStorage.setItem('wins', wins);
      MODAL_FIGHT_TEXT.textContent = 'You Won!';
    }

    if (HEALTH_GOOD_PERSON <= 0 || HEALTH_EVIL_PERSON <= 0) {
      localStorage.removeItem('active-fight');
      localStorage.removeItem('logo-fight');
      localStorage.removeItem('person-evil-health');
      localStorage.removeItem('person-good-health');
      localStorage.removeItem('evil-person');
      MODAL_FIGHT.classList.remove('modal-fight--active');
    }
  }

  BTN_ATTACK.addEventListener('click', () => {
    const ZONE_ATTACK_GOOD_PERSON = getAttackGoodPersonZone();
    const DEFENSE_EVIL_PERSON_DATA = getDefenseEvilPerson();
    setDefenseEvilPerson(DEFENSE_EVIL_PERSON_DATA, ZONE_ATTACK_GOOD_PERSON);
    const ZONE_DEFENSE_GOOD_PEROSN = getDefenseGoodPersonZone();
    const ZONE_ATTACK_EVIL_PERSON = getAttackZoneEvilPerosn();
    setDefenseGoodPerson(ZONE_DEFENSE_GOOD_PEROSN, ZONE_ATTACK_EVIL_PERSON);
    setStatusFight();
    checkedEndFight();
  })

  BTN_MODAL.addEventListener('click', () => {
    const MODAL_FIGHT = document.querySelector('.modal-fight');
    MODAL_FIGHT.classList.add('modal-fight--active');
    FIGHT_PAGE.classList.add('fight-page--active');
    FIGHT_PAGE.innerHTML = '';
    START_PAGE.classList.remove('start-page--active');
    FOOTER.classList.remove('footer--active');
  })
}