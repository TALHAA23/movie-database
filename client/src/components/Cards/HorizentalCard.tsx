import testImages from "../../testimages";

export default function HorizentalCard() {
  return (
    <div className="bg-black rounded  h-[28%] flex  shadow-sm hover:shadow-lg shadow-slate-700">
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
        <div className="group ml-auto w-1/3 h-[30px] rounded border border-white/25 bg-[#FDE047] text-black flex items-center cursor-pointer hover:scale-90">
          <img
            src="../../../public/search-icon-sm.svg"
            className=" group-hover:w-0 transition-all duration-500 bg-yellow-800 object-scale-down w-[30%] h-full rounded-tl rounded-bl"
            alt=""
          />
          <div className="grow text-sm font-semibold text-center group-hover:text-slate-700">
            Save
          </div>
        </div>
      </div>
    </div>
  );
}
