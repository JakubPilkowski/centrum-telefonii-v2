import { animate, detectContent } from "./utils";

function textCounterAnimation(obj, start, end, duration) {
  animate(duration, {
    onStep: (progress) => {
      obj.html(Math.floor(progress * (end - start) + start));
      return true;
    },
  });
}

$(document).ready(() => {
  detectContent("#clients", {
    onDetect: (content) => {
      content.addClass("translate");
    },
    detectorOffset: window.innerHeight,
    detectOnMount: true,
  });
  detectContent("#repairs", {
    onDetect: (content) => {
      content.addClass("translate");
    },
    detectorOffset: window.innerHeight,
    detectOnMount: true,
  });
  detectContent("#brand", {
    onDetect: (content) => {
      content.addClass("translate");
    },
    detectorOffset: window.innerHeight,
    detectOnMount: true,
  });
  detectContent("#clients h1", {
    onDetect: (content) => {
      textCounterAnimation(content, 1000, 9999, 3000);
    },
    detectorOffset: window.innerHeight,
    detectOnMount: true,
  });
  detectContent("#repairs h1", {
    onDetect: (content) => {
      textCounterAnimation(content, 100, 999, 3000);
    },
    detectorOffset: window.innerHeight,
    detectOnMount: true,
  });
  detectContent("#brand h1", {
    onDetect: (content) => {
      textCounterAnimation(content, 0, 22, 3000);
    },
    detectorOffset: window.innerHeight,
    detectOnMount: true,
  });
});
