import { detectContent } from "./utils";

$(document).ready(function () {
  detectContent(".map-title-wrapper", (content) => {
    content.addClass("map-title-animated");
  });

  detectContent(
    ".maps-wrapper",
    () => {
      const button = $(".direction-button");
      button
        .removeClass("direction-button-show")
        .addClass("direction-button-hide");
    },
    () => {
      const button = $(".direction-button");
      button
        .removeClass("direction-button-hide")
        .addClass("direction-button-show");
    }
  );
});

function onMoveToMap() {
  const map = $("#map");
  map
    .get(0)
    .scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}
