import { ReactNode } from "react";

export default function Frame2({
  frameTitle,
  children,
}: {
  frameTitle: string;
  children: ReactNode;
}) {
  return (
    <section className="w-full">
      <h1 className=" text-3xl font-bold text-right pr-3">{frameTitle}</h1>
      <div className=" m-3 h-auto grid  auto-rows-[124px]  grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 transition-all duration-100">
        {children}
      </div>
    </section>
  );
}
