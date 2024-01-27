import { Types } from "mongoose";
import Movie from "../../model/collections/Movie";
import addMovieRefToCorrospondingActor from "./addMovieRefToCorrospondingActor";

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

export default async function addNewMovie(data: MovieInterface) {
  const doc = new Movie(data);
  try {
    const result = await doc.save();
    await addMovieRefToCorrospondingActor(result._id, data.cast);
    return result;
  } catch (err) {
    throw err;
  }
}
