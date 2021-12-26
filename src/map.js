import { detectContent } from "./utils";

$(document).ready(function () {
  detectContent(".map-title-wrapper-inner", {
    onDetect: (content) => {
      content.addClass("map-title-animated");
    },
    detectOnMount: true,
    detectorOffset: window.innerHeight,
  });
});
