(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      openModalBtn2: document.querySelector("button.hero__btn"),
      openModalBtn3: document.querySelector("button.benefits__btn"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtn2.addEventListener("click", toggleModal);
    refs.openModalBtn3.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("backdrop--is-hidden");
    }
  })();