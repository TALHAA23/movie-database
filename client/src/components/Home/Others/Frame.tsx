import { ReactNode } from "react";
import PaginationButton from "../../PaginationButton";

interface Children {
  children: ReactNode;
  frameTitle: string;
  frameSubTitle?: string;
}
export default function Frame({
  children,
  frameTitle,
  frameSubTitle,
}: Children) {
  return (
    <div className="relative h-screen max-h-[600px] px-2 py-3 flex flex-col bg-black/80 text-white">
      <h1 className="relative w-fit pl-4 text-3xl font-semibold before:absolute before:rounded before:left-1 before:h-full before:w-1 before:bg-[#FDE047] before:-z-10 hover:text-white hover:before:w-full before:transition-all  before:duration-100  before:ease-linear">
        {frameTitle}
      </h1>
      {frameSubTitle && <h3>{frameSubTitle}</h3>}

      <div className="hideScrollBar grow flex flex-nowrap overflow-x-scroll scroll-smooth">
        {["next", "prev"].map((dir) => (
          <PaginationButton diraction={dir} />
        ))}
        {children}
      </div>
    </div>
  );
}
