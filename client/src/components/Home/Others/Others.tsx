import MovieList from "./MovieList";
import {
  useRecommendations,
  useTopRated,
} from "../../../Contexts/HomeDataProvider";

export default function Others() {
  const recommendations = useRecommendations();
  const topRated = useTopRated();
  return (
    <section>
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
