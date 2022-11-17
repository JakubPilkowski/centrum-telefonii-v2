type Options = {
  onStep?: (step: number) => boolean;
  onEnd?: () => void;
};

export default function animate(duration: number, options?: Options) {
  let startTimestamp = 0;

  const { onStep, onEnd } = {
    onStep: () => true,
    onEnd: () => {},
    ...options,
  };

  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const onStepResult = onStep(progress);
    if (!onStepResult) {
      return;
    }
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      onEnd();
    }
  };
  window.requestAnimationFrame(step);
}
