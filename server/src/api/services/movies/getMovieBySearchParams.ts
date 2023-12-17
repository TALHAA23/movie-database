// File: getMoviesByTitle.ts
import Movie from "../../model/collections/Movie";

export default async function getMoviesByTitle(title: string) {
  const regex = new RegExp(title, "i");
  const result = await Movie.find({ title: regex }).exec();
  if (!result.length) throw Error("Movie not found");
  return result;
}

// import { getCollection } from "../../../db/mongo";

// export default async function getMoviesByTitle(title: string) {
//   const regex = new RegExp(title, "i");
//   const cursor = getCollection("movies").find({ title: regex });
//   const result = await cursor.toArray();
//   if (!result.length) throw Error("Movie not found");
//   return result;
// }
