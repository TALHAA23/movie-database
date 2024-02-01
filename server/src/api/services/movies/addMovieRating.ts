import { Types } from "mongoose";
import { RatingPayload } from "../../../../../shared/shared.interfaces";
import { getMovieById } from "./getMovieById";
import Movie from "../../model/collections/Movie";
import errorThrower from "../../../../../shared/errorThrower";
import HttpError from "../../../../../shared/httpErrorsEnum";

export default async function (payload: RatingPayload) {
  try {
    const doc = await Movie.findById(payload.movieRef, "ratings title");
    if (!doc) throw errorThrower("Movie not found", HttpError.NotFound);
    await doc.updateOne({
      $push: {
        ratings: payload.rating,
      },
    });
    return { addedTo: doc.title };
  } catch (err) {
    throw err;
  }
}
