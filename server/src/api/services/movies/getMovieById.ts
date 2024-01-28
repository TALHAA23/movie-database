import { Types } from "mongoose";
import Movie from "../../model/collections/Movie";

export async function getMovieById(id: Types.ObjectId) {
  try {
    const result = await Movie.findById(id).populate("cast", "_id name").exec();
    return result;
  } catch (err) {
    throw err;
  }
}
