const smoothEase = [0.22, 1, 0.36, 1]

export const viewportOnce = {
  amount: 0.15,
  once: true,
}

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
}

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: smoothEase,
    },
  },
}

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
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.08,
    },
  },
}

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
}

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
}

export const mobileMenuVariants = {
  closed: {
    opacity: 0,
    scale: 0.98,
    y: -8,
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.18,
      ease: 'easeInOut',
    },
    y: -8,
  },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.22,
      ease: 'easeOut',
    },
    y: 0,
  },
}

export const softFloat = {
  animate: {
    transition: {
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
    },
    y: [0, -8, 0],
  },
}
