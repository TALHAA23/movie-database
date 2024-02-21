import { Link } from "react-router-dom";
import { FeaturedMoviesInterface } from "../../api/model/Interfaces";

export default function FeaturedCard({
  props,
}: {
  props: FeaturedMoviesInterface;
}) {
  return (
    <div className="h-full w-1/2 flex flex-col gap-0">
      <div className="h-full flex gap-0">
        {props.featuredMovies.map((movie) => (
          <Link to={`/title/${movie._id}`} className="relative">
            <h1 className=" absolute font-semibold text-xs text-black bg-white/50 px-3 rounded">
              {movie.title}
            </h1>
            <img
              className="h-full w-full object-cover"
              src={movie?.banner || "/vite.svg"}
            />
          </Link>
        ))}
      </div>
      <div className="bg-black/80 text-white">
        <h1 className=" font-semibold bg-white/30 px-2 rounded text-black">
          {props.featured}
        </h1>
      </div>
    </div>
  );
}
