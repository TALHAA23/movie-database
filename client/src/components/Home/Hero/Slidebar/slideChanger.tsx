import { Dispatch, RefObject, SetStateAction } from "react";
import { show, shrink, reappear } from "./animate";
interface SlideChanger {
  dir: string;
  numberOfMovies: number;
  currentMovieIndex: number;
  titleRef: RefObject<HTMLDivElement>;
  indexUpdater: Dispatch<SetStateAction<number>>;
}
export default function slideChanger({
  dir,
  numberOfMovies,
  currentMovieIndex,
  titleRef,
  indexUpdater,
}: SlideChanger) {
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

  const isIndexExceeding = isNext
    ? currentMovieIndex + 1 > numberOfMovies - 1
    : currentMovieIndex - 1 < 0;
  const indexOnIndexExceed = isNext ? 0 : numberOfMovies - 1;

  indexUpdater((prevIndex) =>
    isIndexExceeding
      ? indexOnIndexExceed
      : isNext
      ? prevIndex + 1
      : prevIndex - 1
  );
}
