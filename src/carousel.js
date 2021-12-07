import createCard from "./card";

function getNextValue(value) {
  const numberValue = Number.parseInt(value);
  return numberValue === 2 ? 0 : numberValue + 1;
}

const titles = ["Serwis", "Akcesoria", "Telefony"];

$(document).ready(() => {
  function letterAnimation() {
    const value = $(".main").attr("data-index");
    const title = titles[value];
    const carouselHeader = $(".main h1");
    const titleLength = title.length;
    let index = 0;

    const interval = setInterval(() => {
      if (index === titleLength - 1) {
        clearInterval(interval);
      }

      const letter = title[index];
      const word = carouselHeader.text();
      carouselHeader.html(
        `${word + letter}<span aria-hidden="true" class="title-span"></span>`
      );
      index += 1;
    }, 100);
  }

  function imgAnimation() {
    const main = $(".main .flip-box");
    main.addClass("flip-box-inner-rotated");
  }

  function carouselAnimation() {
    const container = $(".jumbotron-container");
    const main = $(".main");
    const next = $(".next");
    const last = $(".last");

    main.addClass("slide-animating");
    next.addClass("slide-animating");
    last.addClass("slide-animating");

    setTimeout(() => {
      main.remove();
      next.removeClass("slide-animating next").addClass("main");
      last.removeClass("slide-animating last").addClass("next");
      const value = last.attr("data-index");
      const nextValue = getNextValue(value);
      container.append(createCard(nextValue));
      letterAnimation();
      imgAnimation();
    }, 1000);
    // second.animate(
    //   {
    //     left: "-100%",
    //   },
    //   1000,
    //   () => {
    //     second.remove();
    //   }
    // );

    // third.animate(
    //   {
    //     left: "0",
    //   },
    //   1000,
    //   () => {
    //     third.removeClass("sub-main-right").addClass("main");
    //     const value = third.attr("data-index");
    //     const nextValue = getNextValue(value);
    //     container.append(createCard(nextValue, "sub-main-right"));
    //     letterAnimation();
    //     imgAnimation();
    //   }
    // );
  }

  let index = 0;
  letterAnimation();
  imgAnimation();

  const interval = setInterval(() => {
    carouselAnimation();
    // index++;
    // if (index > 0) {
    // clearInterval(interval);
    // }
  }, 10000);
});
