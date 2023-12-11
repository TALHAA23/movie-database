import { Actor } from "../Actor";
import { Reviewer } from "../Reviewer";
interface Movie {
  title: string;
  releaseYear: number;
  releaseDate: string;
  runTime: number;
  rating: number;
  desc: string;
  genre: string[];
  cast: Actor[];
  reviews: Reviewer[];
}
export type { Movie };
