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