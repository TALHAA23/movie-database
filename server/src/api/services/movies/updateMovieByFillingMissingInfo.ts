import objectToArray from "../../../utils/objectToArray";
import Movie, { MovieSchema } from "../../model/collections/Movie";
import castToCastRef from "./castToCastRef";

interface AnyObject {
  [key: string]: any;
}

export default async function updateMovieByFillingMissingInfo(data: AnyObject) {
  try {
    if ("cast" in data) data.cast = await castToCastRef(data.cast);
    const entries = objectToArray(data);
    for (let [key] of entries) //keys validation
      if (MovieSchema.pathType(key) !== "real")
        throw new Error("Invalid Key catched");

    const doc = await Movie.findById(data._id);
    for (let [key, value] of entries) (doc as any)[key] = value; //update

    const update = await doc?.save({
      validateBeforeSave: false,
    });
    return { success: true };
  } catch (err) {
    throw err;
  }
}
