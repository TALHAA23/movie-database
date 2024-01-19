import { MovieInterface } from "../../../../api/model/Interfaces";
import testImages from "../../../../testimages";
const List = ({ movies }: { movies: [MovieInterface] }) => (
  <ul className="relative h-full flex flex-row-reverse justify-start items-center ">
    {movies.map((movie, index) => {
      return (
        <li
          className={`${
            index == 0
              ? "isShown absolute w-full h-full z-0"
              : "relative z-10 w-[200px] h-[300px]"
          }`}
        >
          <img
            className="w-full h-full object-cover rounded"
            src={
              index == 0
                ? testImages.landscape
                : index == 1
                ? testImages.protrait_sm
                : testImages.landscape
            }
            alt={movie.title}
          />
        </li>
      );
    })}
  </ul>
);

export default List;
