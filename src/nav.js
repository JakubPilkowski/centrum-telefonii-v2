import { scrollToElement } from "./utils";

function assignScrollFunctionality(selector) {
  $(selector).each(function () {
    const element = this.getAttribute("data-move-to");
    $(this).click(() => {
      scrollToElement(element);
      $(".hamburger-menu").addClass("menu-closed").removeClass("menu-open");
    });
  });
}

$(document).ready(function () {
  assignScrollFunctionality(".nav-link");
  assignScrollFunctionality(".nav-brand");
  assignScrollFunctionality(".hamburger-item");
  assignScrollFunctionality(".direction-button");

  $("#hamburger").click(() => {
    $(".hamburger-menu").addClass("menu-open").removeClass("menu-closed");
  });

  $("#hamburger-close").click(() => {
    $(".hamburger-menu").addClass("menu-closed").removeClass("menu-open");
  });

  const onNavScroll = () => {
    if (window.scrollY > 0) {
      $("nav").addClass("nav-moving");
    } else {
      $("nav").removeClass("nav-moving");
    }
  };

  onNavScroll();
  $(window).on("scroll", onNavScroll);
});
