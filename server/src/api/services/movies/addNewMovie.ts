import Movie from "../../model/collections/Movie";
import addMovieRefToCorrospondingActor from "./addMovieRefToCorrospondingActor";
import User from "../../model/collections/User";
import { MovieInterface } from "../../../../../shared/shared.interfaces";

interface Data extends MovieInterface {
  userId: string;
}

export default async function addNewMovie(data: Data) {
  const doc = new Movie(data);
  try {
    const result = await doc.save();
    await addMovieRefToCorrospondingActor(result._id, data.cast);
    await User.findByIdAndUpdate(data.userId, {
      $set: {
        "contributions.uploads": doc.id,
      },
    });
    return result;
  } catch (err) {
    throw err;
  }
}
