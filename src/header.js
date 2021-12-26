import { detectContent, getDocumentElementPosition } from "./utils";

function hook(obj, target, duration, onStep = () => true, onEnd = () => {}) {
  const { left: objLeft, top: objTop } = obj.get(0).getBoundingClientRect();

  let animationProgress = 0;

  obj.animate(
    {
      left: objLeft,
      top: objTop,
    },
    {
      step: (_, tween) => {
        const { left: targetLeft, top: targetTop } = target;
        const diffX = objLeft - targetLeft;
        const diffY = objTop - (targetTop - scrollY);
        const { prop } = tween;
        if (prop === "left") {
          tween.end = objLeft - animationProgress * diffX;
        }
        if (prop === "top") {
          tween.end = objTop - animationProgress * diffY;
        }
      },
      progress: (_, progress, __) => {
        animationProgress = progress;
        if (!onStep(progress)) {
          obj.css({
            top: "unset",
            left: "unset",
          });
          obj.stop();
        }
      },
      complete: () => {
        obj.css({
          position: "static",
          top: "unset",
          left: "unset",
        });
      },
      duration,
    }
  );
}

function hideText(textObj) {
  textObj.css({
    display: "none",
  });
}

function showText(textObj) {
  textObj.css({
    display: "block",
  });
}

function unhook(obj, destination, duration) {
  const { right: objRight, bottom: objBottom } = obj
    .get(0)
    .getBoundingClientRect();
  const windowWidth = $(window).width();
  const windowHeight = $(window).height();

  obj
    .css({
      position: "fixed",
      top: "unset",
      left: "unset",
      bottom: `${windowHeight - objBottom}px`,
      right: `${windowWidth - objRight}px`,
      // top: objTop,
      // left: objLeft,
    })
    .animate(
      {
        // top: `${(windowHeight * destination.top) / 100 - objHeight}px`,
        // left: `${(windowWidth * destination.left) / 100 - objWidth}px`,
        bottom: `${destination.bottom}%`,
        right: `${destination.right}%`,
      },
      duration
    );
}

function showButton(button) {
  button.animate(
    {
      right: "4vw",
    },
    600
  );
}

function hideButton(button) {
  button.animate(
    {
      right: -46,
    },
    600
  );
}

function setForeground() {
  const foregroundPath = $(".foreground path");
  const windowWidth = $(window).width();
  if (windowWidth <= 480) {
    foregroundPath.attr("d", `M0 0 L20 0 L100 80 L100 100 L0 100 Z`);
  } else if (windowWidth > 480 && windowWidth <= 1280) {
    foregroundPath.attr("d", `M0 0 L40 0 Q50 65 100 100 L100 100 L0 100 Z`);
  } else {
    foregroundPath.attr("d", `M0 0 L45 0 Q50 65 100 80 L100 100 L0 100 Z`);
  }
  $(".jumbotron-card").css({
    visibility: "visible",
  });
}

function detectMoveAnimation() {
  const callButton = $("#header-call-button");
  const opinionButton = $("#header-opinion-button");
  const directionButton = $("#header-direction-button");
  const buttonsHeight = $(".jumbotron-buttons").height();
  $(".jumbotron-buttons").css({
    height: buttonsHeight,
  });
  hideText($(".call-button > p"));
  unhook(callButton, { left: 96, top: 96, bottom: 4, right: 4 }, 800);
  hideText($(".direction-button > p"));
  unhook(
    directionButton,
    {
      left: 96,
      top: 86,
      bottom: 10,
      right: 4,
    },
    800
  );
  hideText($(".opinion-button > p"));
  unhook(
    opinionButton,
    {
      left: 96,
      top: 76,
      bottom: 16,
      right: 4,
    },
    800
  );
}

function leaveMoveAnimation(
  initialCallButtonRect,
  initialDirectionButtonRect,
  initialOpinionButtonRect,
  callback
) {
  const callButton = $("#header-call-button");
  const opinionButton = $("#header-opinion-button");
  const directionButton = $("#header-direction-button");
  showText($(".call-button > p"));
  hook(callButton, initialCallButtonRect, 800, callback);

  showText($(".direction-button > p"));
  hook(directionButton, initialDirectionButtonRect, 800, callback);

  showText($(".opinion-button > p"));
  hook(opinionButton, initialOpinionButtonRect, 800, callback, () => {
    $(".jumbotron-buttons").css({
      height: "max-content",
    });
  });
}

function detectTranslateAnimation() {
  const callButton = $("#floating-call-button");
  const opinionButton = $("#floating-opinion-button");
  const directionButton = $("#floating-direction-button");

  showButton(callButton);
  showButton(opinionButton);
  showButton(directionButton);
}

function leaveTranslateAnimation() {
  const callButton = $("#floating-call-button");
  const opinionButton = $("#floating-opinion-button");
  const directionButton = $("#floating-direction-button");

  hideButton(callButton);
  hideButton(opinionButton);
  hideButton(directionButton);
}

$(document).ready(() => {
  setForeground();

  const callButton = $("#header-call-button");
  const opinionButton = $("#header-opinion-button");
  const directionButton = $("#header-direction-button");
  const initialCallButtonRect = getDocumentElementPosition(callButton);
  const initialOpinionButtonRect = getDocumentElementPosition(opinionButton);
  const initialDirectionButtonRect =
    getDocumentElementPosition(directionButton);

  let hookAnimation = true;

  detectContent(".jumbotron-buttons", {
    onDetect: (buttons) => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 1280) {
        console.log("detectMoveAnimation");
        detectMoveAnimation();
      } else {
        console.log("detectTranslateAnimation");
        detectTranslateAnimation();
      }

      hookAnimation = false;
    },
    onLeave: () => {
      hookAnimation = true;
      const windowWidth = window.innerWidth;

      if (windowWidth > 1280) {
        console.log("leaveMoveAnimation");
        leaveMoveAnimation(
          initialCallButtonRect,
          initialDirectionButtonRect,
          initialOpinionButtonRect,
          () => hookAnimation
        );
      } else {
        console.log("leaveTranslateAnimation");
        leaveTranslateAnimation();
      }

      // showText($(".call-button > p"));
      // hook(callButton, initialCallButtonRect, 800, () => hookAnimation);

      // showText($(".direction-button > p"));
      // hook(directionButton, initialDirectionButtonRect, 800, () => {
      //   console.log("hookAnimation", hookAnimation);
      //   return hookAnimation;
      // });

      // showText($(".opinion-button > p"));
      // hook(
      //   opinionButton,
      //   initialOpinionButtonRect,
      //   800,
      //   () => hookAnimation,
      //   () => {
      //     $(".jumbotron-buttons").css({
      //       height: "max-content",
      //     });
      //   }
      // );
    },
    detectorOffset: $("nav").height(),
    detectOnMount: true,
  });
});
