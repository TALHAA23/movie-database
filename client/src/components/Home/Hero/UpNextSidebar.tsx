import HorizentalCard from "../../Cards/HorizentalCard";
export default function UpNextSidebar() {
  return (
    <div className="hidden lg:flex flex-col justify-between gap-2 px-1">
      <h1 className=" text-2xl font-semibold">Up Next</h1>
      <HorizentalCard />
      <HorizentalCard />
      <HorizentalCard />
    </div>
  );
}
