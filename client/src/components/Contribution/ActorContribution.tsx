export default function ActorContribution() {
  return (
    <div className=" h-[40vh] bg-black/90 text-white flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl">The section requir contribution</h1>
      <small className="text-sm font-light">
        Help us to grow, contribute to the section!
      </small>
      <button className="px-5 py-2 font-semibold rounded border-2 bg-[#FDE047] text-black hover:text-white hover:bg-transparent hover:border-2 active:scale-95 border-[#FDE047] transition-all duration-100">
        Contribute
      </button>
    </div>
  );
}
