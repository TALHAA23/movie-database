import { ReactNode } from "react";
import PaginationButton from "../../PaginationButton";

interface Children {
  children: ReactNode;
  frameTitle: string;
  frameHight?: string;
  frameSubTitle?: string;
  hasPagination?: boolean;
}
export default function Frame({
  children,
  frameTitle,
  frameSubTitle,
  frameHight = "h-screen",
  hasPagination = true,
}: Children) {
  return (
    <div
      className={`relative ${frameHight} px-2 py-3 flex flex-col bg-black/90 text-white`}
    >
      <h1 className="relative first-letter:uppercase w-fit  pl-4 text-3xl font-semibold before:absolute before:rounded before:left-1 before:h-full before:w-1 before:bg-[#FDE047] before:-z-10 hover:text-white hover:before:w-full before:transition-all  before:duration-100  before:ease-linear">
        {frameTitle}
      </h1>
      {frameSubTitle && (
        <h3 className=" text-sm pl-5 uppercase">{frameSubTitle}</h3>
      )}

      <div className="grow scrollableDiv hideScrollBar flex flex-nowrap overflow-x-scroll">
        {hasPagination &&
          ["next", "prev"].map((dir) => <PaginationButton diraction={dir} />)}
        {children}
      </div>
    </div>
  );
}
