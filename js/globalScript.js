export const UpdatePersonNameHeader = () => {
  const HEADER_PERSON_NAME = document.querySelector('.icon-contetn__name');
  HEADER_PERSON_NAME.textContent = localStorage.getItem('name-person');
}

export const updatePageNameOnHeader = (name) => {
  const NAME_PAGE = document.querySelector('.icon-contetn__page');
  NAME_PAGE.textContent = name.toUpperCase();
}

export const getRandomPerson = (person) => {
  const RANDOM_NUMBER = Math.floor(Math.random() * person.length);
  return person[RANDOM_NUMBER];
}

export const getRandomUnicomRandom = (countNumber, zoneLength) => {
  const UNICUM_NUMBER = new Set();

  while (UNICUM_NUMBER.size < countNumber) {
    const RANDOM_ZONE = Math.floor(Math.random() * zoneLength.length);
    UNICUM_NUMBER.add(RANDOM_ZONE);
  }

  return [...UNICUM_NUMBER];
}

export const setCriticalDamagePersons = (changeCriticalDamage, attack, checked) => {
  const CHANGE_RANDOM = Math.floor(Math.random() * 100);

  if (CHANGE_RANDOM <= changeCriticalDamage) {
    return {
      change: true,
      text: `<span class="fight-page__bottom-attack__critical">атака прошла нанесен критический урон ${(attack * checked) * 1.5}.</span>`,
      damage: (attack * checked) * 1.5
    }
  } else {
    return {
      change: false,
      text: `<span class="fight-page__bottom-attack">нанесен урон ${attack * checked}.</span>`,
      damage: attack * checked
    }
  }
}