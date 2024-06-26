type Diraction = "prev" | "next";
interface PaginationButtonProp {
  for: string;
  diraction: Diraction;
}
interface MovieInterface {
  _id: string;
  title: string;
  desc: string;
  cast: ActorInterface[];
  genre: string[] | [];
  banner?: string;
  awards?: string[] | [];
  releaseYear: number;
  releaseDate?: string;
  runTime: number;
  tagline?: string;
  creator?: string;
  language?: string;
  countryOfOrigin?: string;
  reviews: Review[];
  numberofReviews?: number;
  rating?: number;
  ratings: [{ rateBy: string; rating: 0 }];
}

interface Review {
  reviewedBy: { userInfo: { username: string } };
  _id: string;
  title: string;
  review: string;
  ratings: [{ rateBy: string; rating: number }];
  reviewDate: Date;
}

interface ActorInterface {
  _id: string;
  name: string;
  banner: string;
  about: string;
  DOB: Date;
  achievments: string[];
  knownFor: MovieInterface[];
  movies: {
    upcoming: MovieInterface[];
    previousMovies: MovieInterface[];
  };
}

interface UserInfo {
  email: string;
  email_verified: boolean;
  nickname: string;
  name: string;
  picture: string;
  sub: string;
  updated_at: string;
}

type Action = "publish-rating-on-review" | "publish-rating-on-movie";
type MovieStatus = "mark-as-watched" | "mark-as-watch-later" | "mark-as-favrt";
type MyMoviesType = "watchList" | "watched" | "favoriteList";

interface RatingPayload {
  action: Action;
  movieRef: string;
  reviewRef?: string;
  rating: number;
}

type addOn = {
  ref: Partial<MovieInterface>;
  additionalProps: string[];
}[];

interface Contributions {
  contributions: {
    uploads: MovieInterface[];
    addOns: addOn;
  };
}

interface FeaturedMoviesInterface {
  featured: string;
  featuredMovies: {
    _id: string;
    banner?: string;
    title: string;
  }[];
}

export type {
  Diraction,
  PaginationButtonProp,
  MovieInterface,
  Review,
  ActorInterface,
  RatingPayload,
  Action,
  MovieStatus,
  MyMoviesType,
  UserInfo,
  addOn,
  Contributions,
  FeaturedMoviesInterface,
};
