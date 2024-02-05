import FeaturedCard from "../../Cards/FeaturedCard";
export default function Featured() {
  return (
    <div className="relative flex flex-col mb-2 p-2 ">
      <h1 className="relative text-white font-semibold">Featured Today</h1>
      <div className="grow flex">
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </div>
  );
}
