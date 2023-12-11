import { MoviesReferece } from "./properties";

interface Actor {
  name: string;
  about: string;
  DOB: string;
  achievments: string[];
  knownFor: MoviesReferece;
  movies: {
    upcoming: MoviesReferece;
    previousMovies: MoviesReferece;
  };
}

export type { Actor };
