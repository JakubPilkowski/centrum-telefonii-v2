import { scrollToElement } from "./utils";

function assignScrollFunctionality(selector) {
  $(selector).each(function () {
    const element = this.getAttribute("data-move-to");
    $(this).click(() => {
      scrollToElement(element);
      $(".hamburgerMenu").addClass("menuClosed").removeClass("menuOpen");
    });
  });
}

$(document).ready(function () {
  assignScrollFunctionality(".navLink");
  assignScrollFunctionality(".nav-brand");
  assignScrollFunctionality(".hamburgerItem");
  assignScrollFunctionality(".direction-button");

  $("#hamburger").click(() => {
    $(".hamburgerMenu").addClass("menuOpen").removeClass("menuClosed");
  });

  $("#hamburgerClose").click(() => {
    $(".hamburgerMenu").addClass("menuClosed").removeClass("menuOpen");
  });

  const onNavScroll = () => {
    if (window.scrollY > 0) {
      $("nav").addClass("navMoving");
    } else {
      $("nav").removeClass("navMoving");
    }
  };

  onNavScroll();
  $(window).on("scroll", onNavScroll);
});
