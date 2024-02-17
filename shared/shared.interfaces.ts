import { Types } from "mongoose";
type MovieStatus = "mark-as-watched" | "mark-as-watch-later" | "mark-as-favrt";

interface RatingPayload {
  userId: string;
  movieRef: string;
  reviewRef?: string;
  rating: number;
}

interface MovieInterface {
  title: string;
  desc: string;
  cast: Types.ObjectId[];
  genre: string[] | [];
  banner?: File;
  awards?: string[] | [];
  releaseYear?: number;
  releaseDate?: Date;
  runTime: number;
  tagline?: string;
  creator?: string;
  language?: string;
  countryOfOrigin?: string;
}

export type { RatingPayload, MovieStatus, MovieInterface };
