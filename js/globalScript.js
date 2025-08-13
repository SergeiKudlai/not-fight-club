export const UpdatePersonNameHeader = () => {
  const HEADER_PERSON_NAME = document.querySelector('.icon-contetn__name');
  HEADER_PERSON_NAME.textContent = localStorage.getItem('name-person');
}

export const updatePageNameOnHeader = (name, header) => {
  const NAME_PAGE = header.querySelector('.icon-contetn__page');
  NAME_PAGE.textContent = name.toUpperCase();
}