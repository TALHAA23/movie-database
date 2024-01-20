function show(el: HTMLLIElement) {
  el.classList.add("isShown");
  el.classList.replace("relative", "absolute");
  el.classList.remove("hidden");
  const prop: Keyframe = {
    width: "100%",
    height: "100%",
    zIndex: "0",
  };
  const options: KeyframeAnimationOptions = {
    duration: 400,
    fill: "forwards",
    easing: "ease-in-out",
  };
  el.animate([prop], options);
}

function shrink(el: HTMLLIElement) {
  el.classList.remove("isShown");
  el.classList.replace("absolute", "relative");
  el.classList.add("hidden");

  const prop: Keyframe = {
    width: "100px",
    height: "200px",
    zIndex: "20",
  };
  const options: KeyframeAnimationOptions = {
    duration: 200,
    fill: "forwards",
    easing: "ease-in-out",
  };
  el.animate([prop], options);
}

function reappear(el: HTMLDivElement) {
  const propAtStart: Keyframe = {
    offset: 0,
    translate: "-10px",
    opacity: "0",
  };
  const propAtEnd: Keyframe = {
    offset: 1,
    opacity: "1",
    translate: "0px",
  };
  const options: KeyframeAnimationOptions = {
    duration: 500,
    fill: "forwards",
    easing: "ease-in-out",
  };

  el.animate([propAtStart, propAtEnd], options);
}

export { show, shrink, reappear };
