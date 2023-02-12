const adressButton = document.querySelector(".adress-button");
const modalContainer = document.querySelector(".modal-container");
const modalCloseButton = document.querySelector(".modal-close-button");
adressButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  modalContainer.classList.remove("modal-close");
});

modalCloseButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  modalContainer.classList.add("modal-close");
});

modalContainer.addEventListener("click", (evt) => {
  if (evt.target.closest(".modal-feedback")) {
    return;
  }
  evt.preventDefault();
  modalContainer.classList.add("modal-close");
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    evt.preventDefault();
    modalContainer.classList.add("modal-close");
  }
});
