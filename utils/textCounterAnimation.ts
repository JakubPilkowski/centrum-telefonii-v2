import animate from "./animate";

export default function textCounterAnimation(
  obj: HTMLElement,
  start: number,
  end: number,
  duration: number
) {
  animate(duration, {
    onStep: (progress) => {
      obj.textContent = String(Math.floor(progress * (end - start) + start));
      return true;
    },
  });
}
