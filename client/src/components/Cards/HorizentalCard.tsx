import testImages from "../../testimages";

export default function HorizentalCard() {
  return (
    <div className="bg-black rounded  h-[28%] flex  shadow-sm hover:shadow-lg shadow-gray-800/70">
      <img
        className="h-full w-[30%] object-center rounded-tl rounded-bl"
        src={testImages.protrait}
        alt="img"
      />
      <div className=" flex flex-col justify-between p-2 ">
        <div>
          <h1 className="text-xl font-semibold">The harry potter movie</h1>
          <p className="leading-tight font-light text-sm text-[#797878]">
            This is a short desc about the current
          </p>
        </div>
        <div className="ml-auto w-1/3 h-[30px] rounded bg-[#d9d9d964] text-white flex items-center">
          <img
            src="../../../public/search-icon.svg"
            className=" bg-white object-contain w-[20%] h-full rounded-tl rounded-bl"
            alt=""
          />
          <div className="grow text-sm font-semibold text-center">Save</div>
        </div>
      </div>
    </div>
  );
}
