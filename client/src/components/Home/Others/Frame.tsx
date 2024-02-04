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
  frameHight = "h-[90vh]",
  hasPagination = true,
}: Children) {
  return (
    <div
      className={`relative ${frameHight} w-full px-2 py-3 flex flex-col bg-black/90 text-white`}
    >
      <h1 className="relative first-letter:uppercase w-fit bg-white/10 px-2 rounded  pl-4 text-3xl font-semibold tracking-wide">
        {frameTitle}
      </h1>
      {frameSubTitle && (
        <h3 className=" text-sm pl-5 uppercase">{frameSubTitle}</h3>
      )}

      <div className="h-full">
        <div>
          {hasPagination &&
            ["next", "prev"].map((dir) => (
              <PaginationButton for={frameTitle} diraction={dir} />
            ))}
        </div>
        <div
          id={frameTitle}
          className="h-full hideScrollBar flex overflow-x-scroll"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
