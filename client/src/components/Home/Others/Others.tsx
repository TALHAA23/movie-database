import MovieList from "./MovieList";
import {
  useFavriouteGenres,
  useRecentUploads,
  useRecommendations,
  useTopRated,
} from "../../../Contexts/HomeDataProvider";
import GenreListFromMyFavrts from "./GenreListFromMyFavrts";

export default function Others() {
  const recommendations = useRecommendations();
  const topRated = useTopRated();
  const recentUploads = useRecentUploads();
  const favrioteGenres = useFavriouteGenres();
  return (
    <section className="flex flex-col gap-0 w-full overflow-x-hidden">
      <MovieList title="recommendations" query={recommendations} />
      <MovieList title="top rated" query={topRated} />
      {recentUploads?.data && recentUploads?.data?.length > 0 && (
        <MovieList title="Recent Uploads" query={recentUploads} />
      )}
      <GenreListFromMyFavrts query={favrioteGenres} />
    </section>
  );
}
