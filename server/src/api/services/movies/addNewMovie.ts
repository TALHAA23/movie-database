import Movie from "../../model/collections/Movie";

interface MovieInterface {
  title: string;
  desc: string;
  cast: string[] | [];
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
    const result = doc.save();
    return result;
  } catch (err) {
    throw err;
  }
}
