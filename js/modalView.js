const movieButtons = document.querySelectorAll("#modalOpenView");
const modals = document.querySelectorAll("#modalView-modal");

movieButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modalId = button.dataset.modalId; // Получаем значение атрибута data-modal-id
    const modal = document.getElementById(modalId);
    modal.classList.add("is-active");
  });
});
