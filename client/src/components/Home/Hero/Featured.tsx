import { Review } from "../../../api/model/Interfaces";
import FeaturedCard from "../../Cards/FeaturedCard";
import PaginationButton from "../../PaginationButton";
import Frame from "../Others/Frame";
export default function Featured({ review }: { review: Review }) {
  return (
    <div className="relative flex flex-col mb-2 p-2 ">
      <h1 className="relative text-white font-semibold">Featured Today</h1>
      <div className="grow flex">
        {["next", "prev"].map((dir) => (
          <PaginationButton diraction={dir} />
        ))}
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </div>
  );
}
