const smoothEase = [0.22, 1, 0.36, 1];

export const viewportOnce = {
  amount: 0.15,
  once: true,
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
    y: 0,
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.08,
    },
  },
};

export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: smoothEase,
    },
    y: 0,
  },
};

export const modalOverlayVariants = {
  hidden: {
    opacity: 0,
    backdropFilter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    backdropFilter: "blur(12px)",
    transition: {
      duration: 0.22,
      ease: smoothEase,
    },
  },
  exit: {
    opacity: 0,
    backdropFilter: "blur(0px)",
    transition: {
      duration: 0.18,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export const modalPanelVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.96,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.34,
      ease: smoothEase,
      when: "beforeChildren",
      staggerChildren: 0.055,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: 14,
    scale: 0.98,
    filter: "blur(4px)",
    transition: {
      duration: 0.22,
      ease: [0.4, 0, 0.2, 1],
      when: "afterChildren",
      staggerChildren: 0.035,
      staggerDirection: -1,
    },
  },
};

export const modalContentItemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.24,
      ease: smoothEase,
    },
  },
  exit: {
    opacity: 0,
    y: 6,
    transition: {
      duration: 0.14,
      ease: "easeIn",
    },
  },
};

export const heroVisual = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: smoothEase,
    },
    y: 0,
  },
};

export const mobileMenuVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.18,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.22,
      ease: "easeOut",
    },
  },
};

export const mobileDrawerVariants = {
  closed: (isRtl = false) => ({
    opacity: 0,
    scale: 0.985,
    x: isRtl ? "-100%" : "100%",
  }),
  exit: (isRtl = false) => ({
    opacity: 0,
    scale: 0.985,
    transition: {
      duration: 0.24,
      ease: [0.4, 0, 0.2, 1],
    },
    x: isRtl ? "-100%" : "100%",
  }),
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      damping: 30,
      mass: 0.8,
      stiffness: 260,
      type: "spring",
    },
    x: 0,
  },
};

export const mobileDrawerListVariants = {
  closed: {},
  open: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.045,
    },
  },
};

export const mobileDrawerItemVariants = {
  closed: (isRtl = false) => ({
    opacity: 0,
    x: isRtl ? -14 : 14,
  }),
  open: {
    opacity: 1,
    transition: {
      duration: 0.24,
      ease: smoothEase,
    },
    x: 0,
  },
};

export function createPebbleFloat(index = 0) {
  const direction = index % 2 === 0 ? 1 : -1;
  const amplitude = 4 + (index % 3);
  const rotation = 0.8 + (index % 3) * 0.2;

  return {
    rotate: [0, rotation * direction, 0, -rotation * direction * 0.45, 0],
    transition: {
      delay: -((index % 7) + 1) * 0.42,
      duration: 4.4 + (index % 5) * 0.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
    y: [0, -amplitude, 0, amplitude * 0.35, 0],
  };
}

export function createOrbitAnimation(
  duration,
  delay = 0,
  direction = 1,
  initialRotation = 0,
) {
  const rotation = direction === 1 ? 360 : -360;

  return {
    rotate: [initialRotation, initialRotation + rotation],
    transition: {
      delay,
      duration,
      ease: "linear",
      repeat: Infinity,
    },
  };
}

export function createCounterOrbitAnimation(
  duration,
  delay = 0,
  direction = 1,
  initialRotation = 0,
) {
  const rotation = direction === 1 ? -360 : 360;

  return {
    rotate: [-initialRotation, -initialRotation + rotation],
    transition: {
      delay,
      duration,
      ease: "linear",
      repeat: Infinity,
    },
  };
}
