import { ObjectId } from "mongodb";

type MovieReferece = ObjectId;
type MoviesReferece = MovieReferece[];

export type { MovieReferece, MoviesReferece };
