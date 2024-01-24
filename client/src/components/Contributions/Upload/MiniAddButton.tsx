import { MouseEvent } from "react";
const MiniAddButton = ({
  stateUpdater,
}: {
  stateUpdater: (action: "add" | "remove", key: string, value: string) => void;
}) => {
  const sendUpdates = (event: MouseEvent<HTMLSpanElement>) => {
    const targetEl = event.currentTarget.parentElement?.querySelector(
      ".input"
    ) as HTMLSelectElement | HTMLInputElement;
    const { name, value } = targetEl;
    stateUpdater("add", name, value);
    targetEl.value = "";
  };
  return (
    <button
      onClick={sendUpdates}
      type="button"
      className={`absolute -top-1 -right-2 text-xs rounded-full px-2 border bg-green-600
    text-white active:scale-90 scale-0 peer-focus:scale-100 transition-all duration-100
  `}
    >
      add
    </button>
  );
};

export default MiniAddButton;
