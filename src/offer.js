import { detectContent } from "./utils";

$(document).ready(() => {
  detectContent("#accessoriesList", {
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
        $(`#accessories-images .imageContainer.hide`).each(function () {
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
        $(`#accessories-images .imageContainer.show`).each(function () {
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
  detectContent("#serviceList", {
    onDetect: (content) => {
      content.css({
        opacity: 1,
        transform: "translateX(0)",
      });
    },
    detectorOffset: window.innerHeight,
    detectOnMount: true,
  });
  detectContent("#serviceImages", {
    onDetect: (content) => {
      content.css({
        opacity: 1,
        transform: "translateX(0)",
      });
      let isRepaired = false;
      setInterval(() => {
        $(`#serviceImages .imageContainer.hide`).each(function () {
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
        $(`#serviceImages .imageContainer.show`).each(function () {
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
        $(".imageLabel").html(isRepaired ? "Po" : "Przed");
      }, 3000);
    },
    detectorOffset: window.innerHeight,
    detectOnMount: true,
  });
});
