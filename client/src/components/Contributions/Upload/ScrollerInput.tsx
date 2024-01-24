import { MouseEvent } from "react";
interface InputInterface {
  scrollerFor: string;
  values: string[];
  stateUpdater: (
    action: "add" | "remove",
    key: string,
    valueToRemove: string
  ) => void;
}
const ScrollerInput = ({
  values,
  scrollerFor,
  stateUpdater,
}: InputInterface) => {
  const sendUpdates = (event: MouseEvent<HTMLSpanElement>) => {
    const key = scrollerFor;
    const value = event.currentTarget.parentElement?.innerText as string;
    stateUpdater("remove", key, value);
  };
  return (
    <div className="narrow-scrollbar rounded col-span-full border px-3 h-11 overflow-x-scroll flex items-center flex-nowrap">
      {values.map((el) => (
        <p
          className={`relative group select-none text-xs px-2 py-1 border
               border-gray-700/45 rounded-full hover:bg-gray-600/25  `}
        >
          {el}
          <span
            id={el}
            onClick={sendUpdates}
            className="absolute w-3 aspect-square  bg-red-500 -top-1 
               rounded-full scale-0 transition-all duration-100
               group-hover:scale-100"
          ></span>
        </p>
      ))}
    </div>
  );
};

export default ScrollerInput;
