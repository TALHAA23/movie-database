// Importing Movie schema from Movie.ts
import Movie from "../../model/collections/Movie";

export async function getTopRatedMovie(rating: number = 8) {
  const movies = await Movie.find({
    rating: {
      $gte: rating,
    },
  })
    .limit(4)
    .exec();

  return movies;
}

// import { getCollection } from "../../../db/mongo";

// export async function getTopRatedMovie(rating: number = 4) {
//   const result = getCollection("movies").find(
//     {
//       rating: {
//         $gte: rating,
//       },
//     },
//     { projection: { rating: 1 } }
//   );
//   const movies = await result.toArray();
//   return movies;
// }
