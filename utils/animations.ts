export const scrollTriggerAnimation = {
  initial: "initial",
  whileInView: "whileInView",
  viewport: { once: true, amount: 0.5 },
  variants: {
    initial: { opacity: 0, y: 100 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
  },
};
