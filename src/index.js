import { closeModal, scrollToElement } from "./utils";

$(window).on("scroll", function () {
  if (window.scrollY > 0) {
    $("nav").addClass("nav-moving");
  } else {
    $("nav").removeClass("nav-moving");
  }
});

$(document).ready(function () {
  $(".modal-container button").click(() => {
    closeModal();
  });

  // $(".modal-card").click(() => {
  //   closeModal();
  // });

  $(".direction-button").click(() => {
    scrollToElement(".map-title");
  });

  $("#home-link").click(() => {
    scrollToElement("#home");
  });

  $("#timers-link").click(() => {
    scrollToElement("#timers");
  });

  $("#map-link").click(() => {
    scrollToElement(".map-title");
  });

  $("#promotion-link").click(() => {
    scrollToElement("#promotion");
  });

  $("#footer-link").click(() => {
    scrollToElement("footer");
  });
});
