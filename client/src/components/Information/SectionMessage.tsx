export default function SectionMessage({
  message,
  subtext,
  sectionHeight = "h-full",
}: {
  message: string;
  subtext?: string;
  sectionHeight?: string;
}) {
  return (
    <div
      className={`relative ${sectionHeight} min-h-[20vh] bg-black/90 flex flex-col items-center justify-center`}
    >
      <h1 className=" font-semibold text-white text-3xl">
        {message.toLocaleUpperCase()}
      </h1>
      {subtext && <p className=" text-slate-800">{subtext}</p>}
    </div>
  );
}
