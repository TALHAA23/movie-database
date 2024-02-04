import slideChanger from "./slideChanger";
import { MovieInterface } from "../../../../api/model/Interfaces";
import { Dispatch, RefObject, SetStateAction } from "react";
interface SlideChanger {
  numberOfMovies: number;
  currentMovieIndex: number;
  titleRef: RefObject<HTMLDivElement>;
  indexUpdater: Dispatch<SetStateAction<number>>;
}

const Paginator = (options: SlideChanger) => (
  <div className="absolute z-40 bottom-4 left-1/2 -translate-x-1/2 bg-white/50 flex  w-[200px] h-[50px]  rounded-full">
    {["left", "right"].map((dir) => (
      <button
        onClick={() => slideChanger({ ...options, dir })}
        className={`w-1/2 hover:bg-white h-full active:bg-white/75
          ${dir == "left" ? " rounded-l-full" : "rounded-r-full"}
          `}
      >
        <img
          className="mx-auto"
          src={`../../../../../public/arrow-${dir}-solid.svg`}
        />
      </button>
    ))}
  </div>
);

export default Paginator;
