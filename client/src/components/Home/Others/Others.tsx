import MovieCard from "../../Cards/MovieCard";
import Frame from "./Frame";

export default function Others() {
  return (
    <section>
      <Frame frameTitle="Dummy section">
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </Frame>
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
