import { detectContent } from "./utils";

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.html(Math.floor(progress * (end - start) + start));
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

$(document).ready(() => {
  detectContent("#clients", (content) => {
    content.addClass("translate");
  });
  detectContent("#repairs", (content) => {
    content.addClass("translate");
  });
  detectContent("#brand", (content) => {
    content.addClass("translate");
  });
  detectContent("#clients h1", (content) => {
    animateValue(content, 1000, 9999, 3000);
  });
  detectContent("#repairs h1", (content) => {
    animateValue(content, 100, 999, 3000);
  });
  detectContent("#brand h1", (content) => {
    animateValue(content, 0, 22, 3000);
  });
});
