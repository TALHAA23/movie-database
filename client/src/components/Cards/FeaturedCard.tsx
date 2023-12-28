import testImages from "../../testimages";
export default function FeaturedCard() {
  return (
    <div className="h-full w-1/2 flex flex-col gap-0">
      <div className="h-full flex gap-0">
        <img className="h-full w-1/3 object-cover" src={testImages.protrait} />
        <img className="h-full w-1/3 object-cover" src={testImages.landscape} />
        <img className="h-full w-1/3 object-cover" src={testImages.protrait} />
      </div>
      <div className="bg-black/80 text-white">
        <h1 className=" font-light text-sm">This is the title</h1>
      </div>
    </div>
  );
}
