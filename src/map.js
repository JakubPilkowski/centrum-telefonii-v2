import { detectContent } from "./utils";

$(document).ready(function () {
  detectContent(".mapTitlewrapperInner", {
    onDetect: (content) => {
      content.addClass("mapTitleAnimated");
    },
    detectOnMount: true,
    detectorOffset: window.innerHeight,
  });
});
