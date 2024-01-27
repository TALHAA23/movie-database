import "./sectionLoader.css";
export default function SectionLoader({
  sectionHeight = "h-full",
}: {
  sectionHeight?: string;
}) {
  return (
    <div
      className={`w-full ${sectionHeight} min-h-[20vh] flex justify-center items-center bg-black/90`}
    >
      <div className="loader"></div>
    </div>
  );
}
