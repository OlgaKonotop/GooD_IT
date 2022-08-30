 (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-menu-open]"),
      closeModalBtn: document.querySelector("[data-menu-close]"),
      modal: document.querySelector("[data-menu]"),
    };
    // const body = document.querySelector('body');
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("nav--is-open");
      // body.classList.toggle('no-scroll');
    }
})();
  