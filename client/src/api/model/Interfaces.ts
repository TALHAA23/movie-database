interface MovieInterface {
  _id: string;
  title: string;
  releaseYear: number;
  releaseDate: Date;
  runTime: number;
  rating: number;
  desc: string;
  genre: [string];
  cast: [any]; //! change require
  reviews?: [
    {
      featured: boolean;
      title: string;
      review: string;
      rating: number;
      reviewDate: Date;
      helpful: number;
      unhelpful: number;
    }
  ];
  hasMore?: boolean;
}
export type { MovieInterface };
