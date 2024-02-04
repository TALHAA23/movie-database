import MovieList from "./MovieList";
import {
  useRecommendations,
  useTopRated,
} from "../../../Contexts/HomeDataProvider";

export default function Others() {
  const recommendations = useRecommendations();
  const topRated = useTopRated();
  return (
    <section className="flex flex-col gap-0 w-full overflow-x-hidden">
      <MovieList title="recommendations" query={recommendations} />
      <MovieList title="top rated" query={topRated} />
    </section>
    // TODO
    // perPersonalized Recommendations
    // Trending Now
    // New Releases
    // Genres
    // Community Reviews
    // Top Rated
  );
}
