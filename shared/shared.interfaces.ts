type MovieStatus = "mark-as-watched" | "mark-as-watch-later" | "mark-as-favrt";

interface RatingPayload {
  userId: string;
  movieRef: string;
  reviewRef?: string;
  rating: number;
}

export type { RatingPayload, MovieStatus };
