type Action = "shrink" | "expand";
function shrinkorExpandNavigations(action: Action, el: HTMLUListElement) {
  const props: Keyframe[] = [
    {
      flexDirection: "column", //sm screen
      width: "33.33%",
      justifyContent: "center",
      transform: "translate(100%, -50%)",
    },
    {
      flexDirection: "row", //sm screen
      justifyContent: "start",
      width: "auto",
      top: "0",
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
