export const UpdatePersonNameHeader = () => {
  const HEADER_PERSON_NAME = document.querySelector('.icon-contetn__name');
  HEADER_PERSON_NAME.textContent = localStorage.getItem('name-person');
}