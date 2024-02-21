import { useMovieByRandomYear } from "../../../Contexts/HomeDataProvider";
import FeaturedCard from "../../Cards/FeaturedCard";
export default function Featured() {
  const randomYearMovies = useMovieByRandomYear();
  const hasRandomYearMovies =
    randomYearMovies?.data && randomYearMovies?.data?.featuredMovies.length > 0;
  if (!hasRandomYearMovies) return;
  return (
    <div className="relative flex flex-col mb-2 p-2 ">
      <h1 className="relative text-white font-semibold">Featured Today</h1>
      <div className="grow flex">
        {hasRandomYearMovies && <FeaturedCard props={randomYearMovies.data} />}
        {/* <FeaturedCard /> */}
      </div>
    </div>
  );
}
