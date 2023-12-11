import { ObjectId } from "mongodb";
import { MoviesReferece } from "../properties";

interface User {
  uid: string;
  username: string;
  email: string;
  watchList: MoviesReferece;
  favoriteList: MoviesReferece;
  myReviewsRef: ObjectId[];
}

export type { User };
