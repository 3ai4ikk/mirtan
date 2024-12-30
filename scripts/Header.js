class Header {
  selectors = {
    root: "[data-js-header]",
    headerOverlay: "[data-js-header-overlay]",
    openBurgerButton: "[data-js-burger-button]",
    closeBurgerButton: "[data-js-header-overlay-close-button]",
  };

  stateClasses = {
    isScroll: "scroll",
    isActive: "is-active",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.openBurgerButton = document.querySelector(
      this.selectors.openBurgerButton
    );
    this.headerOverlay = document.querySelector(this.selectors.headerOverlay);
    this.closeBurgerButton = document.querySelector(
      this.selectors.closeBurgerButton
    );
    this.bindEvents();
  }

  onBurgerButton = (event) => {
    event.preventDefault();
    this.headerOverlay.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isActive);
  };

  onScroll = () => {
    this.rootElement.classList.toggle(
      this.stateClasses.isScroll,
      window.scrollY > 30
    );
  };

  bindEvents() {
    this.openBurgerButton.addEventListener("click", this.onBurgerButton);
    this.closeBurgerButton.addEventListener("click", this.onBurgerButton);
    document.addEventListener("scroll", this.onScroll);
  }
}

export default Header;
