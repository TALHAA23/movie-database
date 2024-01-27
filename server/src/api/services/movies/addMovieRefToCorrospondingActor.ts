import { Types } from "mongoose";
import Actor from "../../model/Actor";

export default async function addMovieRefToCorrospondingActor(
  movieRef: Types.ObjectId,
  casts: Types.ObjectId[]
) {
  await Promise.all(
    casts.map(async (castRef) => {
      await Actor.updateOne(
        { _id: castRef },
        {
          $push: {
            "movies.previousMovies": movieRef,
          },
        }
      );
    })
  );
}
