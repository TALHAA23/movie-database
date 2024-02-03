interface RatingPayload {
  userId: string;
  movieRef: string;
  reviewRef?: string;
  rating: number;
}

export type { RatingPayload };
