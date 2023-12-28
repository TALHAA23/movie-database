import { MouseEvent } from "react";
type Diraction = "prev" | "next";

export default function PaginationButton({
  diraction,
}: {
  diraction: Diraction;
}) {
  function move(event: MouseEvent<HTMLButtonElement>) {
    const { parentElement } = event.currentTarget;
    if (!parentElement) return;
    const dir = event.currentTarget.value as Diraction;
    const scrollableWidth = isPrev(dir)
      ? -parentElement.clientWidth
      : parentElement.clientWidth;
    parentElement?.scrollBy(scrollableWidth, 0);
  }
  return (
    <button
      value={diraction}
      onClick={move}
      className={`absolute ${
        isPrev(diraction)
          ? "left-3 hover:-translate-x-2"
          : "right-3 hover:translate-x-2"
      }  top-1/2 -translate-y-1/2 transition-transform duration-150
       disabled:opacity-15
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        width="27.5"
        viewBox="0 0 448 512"
      >
        <path
          opacity="1"
          fill="#1E3050"
          d={
            isPrev(diraction)
              ? "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              : "M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
          }
        />
      </svg>
    </button>
  );
}

const isPrev = (diraction: Diraction) => diraction == "prev";
