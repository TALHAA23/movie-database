// File: getRandomMovies.ts
import Movie from "../../model/collections/Movie";

export async function getRandomMovies() {
  const result = await Movie.aggregate([
    { $sample: { size: 5 } },
    // { $project: { title: 1, ratings: 1, banner: 1 } },
  ]);
  return result;
}
