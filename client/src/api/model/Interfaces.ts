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
  reviewedBy: string;
  _id: string;
  title: string;
  review: string;
  ratings: [{ rateBy: string; rating: number }];
  reviewDate: Date;
  helpful: number;
  unhelpful: number;
}

interface ActorInterface {
  _id?: string;
  name: string;
  about: string;
  DOB: Date;
  achievments: String[];
  knownFor: MovieInterface[];
  movies: {
    upcoming: MovieInterface[];
    previousMovies: MovieInterface[];
  };
}
type Action = "publish-rating-on-review" | "publish-rating-on-movie";

interface RatingPayload {
  action: Action;
  movieRef: string;
  reviewRef?: string;
  rating: number;
}

export type { MovieInterface, Review, ActorInterface, RatingPayload, Action };
