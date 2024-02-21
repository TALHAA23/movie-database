import MovieList from "./MovieList";
import {
  useMovieByRandomYear,
  useRecentUploads,
  useRecommendations,
  useTopRated,
} from "../../../Contexts/HomeDataProvider";

export default function Others() {
  const recommendations = useRecommendations();
  const topRated = useTopRated();
  const recentUploads = useRecentUploads();
  return (
    <section className="flex flex-col gap-0 w-full overflow-x-hidden">
      <MovieList title="recommendations" query={recommendations} />
      <MovieList title="top rated" query={topRated} />
      {recentUploads?.data && recentUploads?.data?.length > 0 && (
        <MovieList title="Recent Uploads" query={recentUploads} />
      )}
    </section>
  );
}
