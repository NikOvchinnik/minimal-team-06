(() => {
  const refs = {
    openBurgerBtn: document.querySelector('[data-burger-open]'),
    closeBurgerBtn: document.querySelector('[data-burger-close]'),
    burger: document.querySelector('[data-burger]'),
  };

  refs.openBurgerBtn.addEventListener('click', toggleBurger);
  refs.closeBurgerBtn.addEventListener('click', toggleBurger);

  function toggleBurger() {
    refs.burger.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
