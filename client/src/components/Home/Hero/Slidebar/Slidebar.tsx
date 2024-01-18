// import "./slidebar.css";
import Image from "./Image";
import PaginationButton from "../../../PaginationButton";
import Bookmark from "./Bookmark";
import Title from "./Title";
import testImages from "../../../../testimages";
import { ReactElement, useEffect, useRef, useState } from "react";
import { MouseEvent } from "react";
import { reappear, show, shrink } from "./animate";
export default function SlideBar() {
  const titleRef = useRef(null);
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [slideShowData, setSlideShowData] = useState([
    "data1",
    "data2",
    "data3",
  ]);
  function changeCurrentlyShown(dir: string) {
    const isNext = dir == "right" ? true : false;
    const currentlyShown = document.querySelector(".isShown") as HTMLLIElement;
    if (!currentlyShown || !titleRef?.current) throw new Error();
    const nextSibling = currentlyShown.nextElementSibling;
    const prevSibling = currentlyShown.previousElementSibling;
    reappear(titleRef.current);
    shrink(currentlyShown);
    if (isNext ? nextSibling : prevSibling)
      isNext
        ? show(nextSibling as HTMLLIElement)
        : show(prevSibling as HTMLLIElement);
    else
      isNext
        ? show(currentlyShown?.parentElement?.firstChild as HTMLLIElement)
        : show(currentlyShown.parentElement?.lastElementChild as HTMLLIElement);
    setCurrentDataIndex((prevIndex) =>
      prevIndex == slideShowData.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div
      className={`relative bg-black/90 text-white  border-4 border-rose-800`}
    >
      <div
        ref={titleRef}
        className=" bg-black/40 px-2 py-1 rounded absolute w-[40%] z-30 top-1/2 -translate-y-1/2 left-4"
      >
        <h1 className=" font-bold text-4xl">
          Harry potter, and the story of that flower
        </h1>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.
        </p>
      </div>
      <ul className="relative h-full   border-4 border-green-800 flex items-center justify-end">
        {[1, 2, 3].map((item, index) => {
          return (
            <li
              className={`${
                index == 2 && "isShown"
              } relative z-10 w-[200px] h-[300px] border-4
               first:border-red-600 last:border-purple-800`}
            >
              <img
                className="w-full h-full object-cover rounded"
                src={
                  index == 0
                    ? testImages.landscape
                    : index == 1
                    ? testImages.protrait_sm
                    : testImages.landscape
                }
                alt=""
              />
            </li>
          );
        })}
      </ul>
      <div className="absolute z-40 bottom-4 left-1/2 -translate-x-1/2 bg-white/50 flex  w-[200px] h-[50px]  rounded-full">
        {["left", "right"].map((dir) => (
          <button
            onClick={() => changeCurrentlyShown(dir)}
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
    </div>
    // <div className="relative flex justify-center bg-black text-white">
    //   <Image />
    //   <PaginationButton diraction="prev" />
    //   <PaginationButton diraction="next" />
    //   <Bookmark bookmarked={false} />
    //   <Title />
    // </div>
  );
}
