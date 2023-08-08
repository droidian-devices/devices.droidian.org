export const slideRight = {
  init: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      delay: 0,
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      delay: 0,
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const slideLeft = {
  init: {
    x: '100vw',
  },
  visible: {
    x: 0,
    transition: {
      delay: 0,
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    x: '100vw',
    transition: {
      delay: 0,
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const slideDown = {
  init: {
    y: '-100vw',
  },
  visible: {
    y: 0,
    transition: {
      delay: 0,
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100vw',
    transition: {
      delay: 0,
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const slowSlideDown = {
  init: {
    y: '-100vw',
  },
  visible: {
    y: 0,
    transition: {
      delay: 0,
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100vw',
    transition: {
      delay: 0,
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

export const slowSlideRight = {
  init: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      delay: 0,
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
  exit: {
    x: '-120vw',
    transition: {
      delay: 0,
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

export const opacity = {
  init: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0, duration: 0.8, ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
