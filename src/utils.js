export function scrollToElement(element) {
  const scrollTop = getDocumentElementPosition($(element));
  const windowY = window.scrollY;

  animate(750, {
    onStep: (progress) => {
      const navigationHeight = $("nav").height();
      $("HTML, BODY").get(0).scrollTop =
        (scrollTop.top - (windowY + navigationHeight)) * progress + windowY;
      return true;
    },
  });
}

export function closeModal() {
  const modal = $(".modal-container");
  modal.remove();
}

export function getDocumentElementPosition(obj) {
  const { top, left, bottom, right } = obj.get(0).getBoundingClientRect();
  return {
    top: Math.abs(top + window.scrollY),
    left: Math.abs(left + window.scrollX),
    bottom: Math.abs(bottom + window.scrollY),
    right: Math.abs(right + window.scrollX),
  };
}

export function animate(
  duration,
  options = {
    onStep,
    onEnd,
  }
) {
  let startTimestamp = null;

  const { onStep, onEnd } = {
    onStep: () => true,
    onEnd: () => {},
    ...options,
  };

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const onStepResult = onStep(progress);
    if (!onStepResult) {
      return;
    }
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      onEnd();
    }
  };
  window.requestAnimationFrame(step);
}

export function detectContent(
  identifier,
  options = {
    detectorOffset: 0,
    onDetect: () => {},
    onLeave: () => {},
    detectOnMount: false,
  }
) {
  const { detectorOffset, onDetect, onLeave, detectOnMount } = {
    detectorOffset: 0,
    detectOnMount: false,
    ...options,
  };
  const contentScrollTop = getDocumentElementPosition($(identifier)).top;
  let contentDetected = false;
  let contentLeaved = false;

  const detect = () => {
    const windowY = window.scrollY;

    if (
      windowY + detectorOffset > contentScrollTop &&
      !contentDetected &&
      onDetect
    ) {
      onDetect($(identifier));
      contentDetected = true;
      contentLeaved = false;
    } else if (
      windowY + detectorOffset < contentScrollTop &&
      onLeave &&
      !contentLeaved &&
      contentDetected
    ) {
      onLeave($(identifier));
      contentDetected = false;
      contentLeaved = true;
    }
  };

  if (detectOnMount) detect();

  $(window).on("scroll", () => {
    detect();
  });
}
