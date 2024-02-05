type Action = "shrink" | "expand";
function shrinkorExpandNavigations(action: Action, el: HTMLUListElement) {
  const props: Keyframe[] = [
    {
      width: "33.33%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    {
      width: "auto",
      top: "0%",
      left: "0",
      transform: "translate(-0%, -0%)",
    },
  ];

  const options: KeyframeAnimationOptions = {
    duration: 200,
    fill: "forwards",
    easing: "ease-in",
    direction: action == "shrink" ? "normal" : "reverse",
  };

  el.animate(props, options);
}

export default shrinkorExpandNavigations;
