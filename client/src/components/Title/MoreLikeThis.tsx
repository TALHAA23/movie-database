import MovieCard from "../Cards/MovieCard";
import Frame from "../Home/Others/Frame";

export default function MoreLikeThis() {
  return (
    <Frame frameTitle="More For You" frameHight="60vh">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </Frame>
  );
}
