const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClosed = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');
modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClosed.addEventListener('click', toggleModal);