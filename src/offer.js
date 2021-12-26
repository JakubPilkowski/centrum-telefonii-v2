import { detectContent } from "./utils";

$(document).ready(() => {
  detectContent("#accessories-list", {
    onDetect: (content) => {
      content.css({
        opacity: 1,
        transform: "translateX(0)",
      });
    },
    detectorOffset: window.innerHeight,
    detectOnMount: true,
  });

  detectContent("#accessories-images", {
    onDetect: (content) => {
      content.css({
        opacity: 1,
        transform: "translateX(0)",
      });

      setInterval(() => {
        $(`#accessories-images .image-container.hide`).each(function () {
          $(this).animate(
            {
              opacity: 1,
            },
            1000,
            () => {
              $(this).removeClass("hide").addClass("show");
            }
          );
        });
        $(`#accessories-images .image-container.show`).each(function () {
          $(this).animate(
            {
              opacity: 0,
            },
            1000,
            () => {
              $(this).removeClass("show").addClass("hide");
            }
          );
        });
      }, 3000);
    },
    detectorOffset: window.innerHeight,
    detectOnMount: true,
  });
  detectContent("#service-list", {
    onDetect: (content) => {
      content.css({
        opacity: 1,
        transform: "translateX(0)",
      });
    },
    detectorOffset: window.innerHeight,
    detectOnMount: true,
  });
  detectContent("#service-images", {
    onDetect: (content) => {
      content.css({
        opacity: 1,
        transform: "translateX(0)",
      });
      let isRepaired = false;
      setInterval(() => {
        $(`#service-images .image-container.hide`).each(function () {
          $(this).animate(
            {
              opacity: 1,
            },
            1000,
            () => {
              $(this).removeClass("hide").addClass("show");
            }
          );
        });
        $(`#service-images .image-container.show`).each(function () {
          $(this).animate(
            {
              opacity: 0,
            },
            1000,
            () => {
              $(this).removeClass("show").addClass("hide");
            }
          );
        });
        isRepaired = !isRepaired;
        $(".image-label").html(isRepaired ? "Po" : "Przed");
      }, 3000);
    },
    detectorOffset: window.innerHeight,
    detectOnMount: true,
  });
});
