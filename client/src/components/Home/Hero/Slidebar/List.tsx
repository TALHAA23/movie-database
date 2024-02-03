import { Link } from "react-router-dom";
import { MovieInterface } from "../../../../api/model/Interfaces";
import testImages from "../../../../testimages";
const List = ({ movies }: { movies: MovieInterface[] }) => (
  <ul className="relative h-full flex flex-row-reverse justify-start items-end">
    {movies.map((movie, index) => {
      return (
        <Link
          to={`/title/${movie._id}`}
          className={`${
            index == 0
              ? "isShown absolute w-full h-full z-0 "
              : "relative z-10 w-[100px] h-[200px] hidden"
          } md:block`}
        >
          <img
            className="w-full h-full object-cover rounded"
            src={movie.banner || testImages.noImage}
            alt={movie.title}
          />
        </Link>
      );
    })}
  </ul>
);

export default List;
