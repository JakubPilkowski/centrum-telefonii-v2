export function scrollToElement(element) {
  const scrollTop =
    $(element).get(0).getBoundingClientRect().top + window.scrollY;

  $("HTML, BODY").animate(
    {
      scrollTop: scrollTop - 65,
      // scrollTop > window.innerHeight
      //   ? scrollTop + window.innerHeight - 65
      //   : scrollTop,
    },
    750
  );
}

export function closeModal() {
  const modal = $(".modal-container");
  modal.remove();
  // $("HTML").css({ overflowY: "scroll" });
  // document.body.style.overflowY = "scroll";
}

export function detectContent(identifier, onDetect, onLeave) {
  const content = $(identifier).get(0);
  const contentScrollTop = content.getBoundingClientRect().top;

  let contentDetected = false;
  let contentLeaved = false;

  $(window).on("scroll", () => {
    const windowY = window.scrollY + window.innerHeight;

    if (windowY > contentScrollTop && !contentDetected) {
      contentDetected = true;
      contentLeaved = false;
      onDetect($(identifier));
      // animateValue(clients.get(0), 1000, 9999, 2000);
    } else if (windowY < contentScrollTop && onLeave && !contentLeaved) {
      contentDetected = false;
      contentLeaved = true;
      onLeave($(identifier));
    }
  });
}
