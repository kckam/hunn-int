const sizes = [
  {
    infix: "xs",
    size: 280,
    styles: null,
  },
  {
    infix: "sm",
    size: 576,
    styles: null,
  },
  {
    infix: "md",
    size: 768,
    styles: null,
  },
  {
    infix: "lg",
    size: 992,
    styles: null,
  },
  {
    infix: "xl",
    size: 1200,
    styles: {
      border: "2px solid grey",
    },
  },
  {
    infix: "xxl",
    size: 1440,
    styles: {
      border: "1px solid red",
    },
  },
  {
    infix: "xxxl",
    size: 1680,
    styles: null,
  },
];

class Breakpoint {
  constructor(min, max, styles = null) {
    this.min = min;
    this.max = max;
    this.styles = styles;
  }

  get range() {
    return `min-width: ${this.min}px) and (max-width: ${this.max - 1}px`;
  }

  get up() {
    return `min-width: ${this.min}px`;
  }

  get down() {
    return `max-width: ${this.min}px`;
  }
}

const breakpoints = sizes.reduce((acc, el, index) => {
  return {
    ...acc,
    [el.infix]: new Breakpoint(
      el.size,
      sizes[index + 1]?.size || 99999,
      el.styles || {}
    ),
  };
}, {});

export default breakpoints;
