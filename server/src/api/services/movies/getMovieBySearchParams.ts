// File: getMoviesByTitle.ts
import errorThrower from "../../../../../shared/errorThrower";
import HttpError from "../../../../../shared/httpErrorsEnum";
import Movie from "../../model/collections/Movie";

export default async function getMoviesByTitle(title: string) {
  const regex = new RegExp(title, "i");
  try {
    const result = await Movie.find({ title: regex })
      .populate("cast", "name")
      .exec();
    if (!result.length)
      throw errorThrower("Movie not found", HttpError.NotFound);
    return result;
  } catch (err) {
    throw err;
  }
}
