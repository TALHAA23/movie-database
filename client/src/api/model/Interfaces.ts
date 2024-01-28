interface MovieInterface {
  _id?: string;
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
  reviews?: [Review];
  rating?: number;
}
// interface MovieInterface {
//   _id: string;
//   title: string;
//   releaseYear: number;
//   releaseDate: Date;
//   runTime: number;
//   rating: number;
//   desc: string;
//   genre: [string];
//   cast: [any]; //! change require
//   reviews?: [Review];
//   hasMore?: boolean;
// }

interface Review {
  featured: boolean;
  title: string;
  review: string;
  rating: number;
  reviewDate: Date;
  helpful: number;
  unhelpful: number;
}

interface ActorInterface {
  _id?: string;
  name: string;
  about: string;
  DOB: Date;
  achievments: [String];
  knownFor: [MovieInterface];
  movies: {
    upcoming: [MovieInterface];
    previousMovies: [MovieInterface];
  };
}

export type { MovieInterface, Review, ActorInterface };
