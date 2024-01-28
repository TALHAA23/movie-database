export default function Awards({ awards }: { awards: string[] }) {
  return (
    <div className=" bg-black flex text-white items-center py-5 px-2">
      <img
        className="w-1/4 hidden sm:block h-full object-contain  hover:animate-bounce"
        src="../../../public/medal.png"
        alt=""
      />
      <div className="grow flex flex-wrap justify-center items-center ">
        {awards.map((award) => (
          <div className="grow text-center bg-gradient-to-r text-fuchsia-950 border-2 border-fuchsia-200 px-3 font-semibold rounded-full py-2 from-fuchsia-500 via-fuchsia-600 to-fuchsia-700 hover:from-fuchsia-700 hover:to-fuchsia-500">
            {award}
          </div>
        ))}
      </div>
    </div>
  );
}
