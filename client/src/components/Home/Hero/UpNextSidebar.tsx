import HorizentalCard from "../../Cards/HorizentalCard";
export default function UpNextSidebar() {
  return (
    <div className=" bg-black/80  text-white hidden lg:flex flex-col justify-center gap-2 p-3">
      <h1 className="grow text-2xl font-semibold">Up Next</h1>

      <HorizentalCard />
      <HorizentalCard />
      <HorizentalCard />
    </div>
  );
}
