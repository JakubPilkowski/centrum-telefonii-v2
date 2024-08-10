export const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    //use the custom value here
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index, //add delay according to the index
    },
  }),
};
