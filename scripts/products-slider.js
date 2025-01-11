class Slider {
  selectors = {
    root: "[data-js-slider]",
  };

  constructor() {
    const mySlider = new Splide(this.selectors.root, {
      type: "loop",
      perPage: 1,
      perMove: 1,
      gap: 120,
      paggination: true,
      focus: "center",
      updateOnMove: true,
      speed: 1300,
      autoHeight: true,
      breakpoints: {
        1023: {
          gap: 80,
          perPage: 2,
        },
        767: {
          gap: 60,
          perPage: 1.5,
        },
        480: {
          perPage: 1,
          gap: 20,
        },
      },
    });

    mySlider.mount();
  }
}

new Slider();
