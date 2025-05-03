const modal = document.querySelector(".modal");
const btnOpen = document.querySelector(".open-modal-btn");
const btnClose = document.querySelector(".close-modal-btn");
const iconClose = document.querySelector(".modal__header i");
const backdrop = document.querySelector(".modal__backdrop");

const toggleModal = () => {
  modal.classList.toggle("hidden");
};

btnOpen.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
iconClose.addEventListener("click", toggleModal);
backdrop.addEventListener("click", toggleModal);
