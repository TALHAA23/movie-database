import { MovieInterface } from "../../api/model/Interfaces";
import MovieCard from "../Cards/MovieCard";
import Frame from "../Home/Others/Frame";

interface Props {
  knownFor?: MovieInterface[];
  upcoming?: MovieInterface[];
  previousMovies?: MovieInterface[];
}
export default function NameMovies({
  knownFor,
  upcoming,
  previousMovies,
}: Props) {
  return (
    <div>
      <div>{knownFor && createFrame("know for", knownFor)}</div>
      <div>{previousMovies && createFrame("other movies", previousMovies)}</div>
      <div>{upcoming && createFrame("upcoming", upcoming)}</div>
    </div>
  );
}
const createFrame = (title: string, list: MovieInterface[]) =>
  list.length ? (
    <Frame frameTitle={title}>
      {list.map((movie) => (
        <MovieCard id={movie._id} title={movie.title} ratings={4} />
      ))}
    </Frame>
  ) : (
    ""
  );
