export default function SectionError({
  error,
  sectionHeight = "h-full",
}: {
  error: Error;
  sectionHeight?: string;
}) {
  return (
    <div
      className={`relative ${sectionHeight} min-h-[20vh] bg-black/90 flex items-center justify-center`}
    >
      <h1 className=" font-semibold text-white text-3xl">
        {error.message.toLocaleUpperCase()}
      </h1>
    </div>
  );
}
