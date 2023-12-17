// File: getMovieById.ts
import { Types } from "mongoose";
import Movie from "../../model/collections/Movie";

export async function getMovieById(id: Types.ObjectId) {
  const result = await Movie.findById(id).exec();
  return result;
}

// import { ObjectId } from "mongodb";
// import { getCollection } from "../../../db/mongo";

// export async function getMovieById(id: string) {
//   const result = await getCollection("movies").findOne({
//     _id: new ObjectId(id),
//   });
//   return result;
// }
