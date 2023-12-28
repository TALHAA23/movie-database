import testImages from "../../testimages";
export default function MovieCard() {
  return (
    <div className=" shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex flex-col gap-0 rounded">
      <Image />
      <MovieCardInformation />
    </div>
  );
}

const Image = () => (
  <img
    className="h-[70%] object-cover rounded-t"
    src={testImages.protrait_sm}
    alt="banner"
  />
);

const MovieCardInformation = () => (
  <div className=" h-[30%] flex flex-col justify-around px-1 bg-slate-900/30 text-white rounded-b">
    <div className=" flex justify-between">
      <div className=" flex items-center">
        <img src="../../../public/star-solid-sm.svg" alt="star" />
        <h6 className=" font-semibold">4.5</h6>
      </div>
      <img src="../../../public/star-solid-sm.svg" alt="rating star" />
    </div>
    <h1 className="font-semibold text-2xl">Movie title</h1>
    <div className=" space-y-1 font-semibold">
      <button className="w-full border-2 border-[#FDE047] rounded py-1 font-semibold text-sm hover:bg-[#fddf4765] transition-colors duration-200">
        More
      </button>
      <button className="w-full bg-[#FDE047] hover:bg-[#fddf47d3] text-black rounded py-1 font-semibold text-sm">
        Play
      </button>
    </div>
  </div>
);
