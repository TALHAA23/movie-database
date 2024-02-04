// File: getRandomMovies.ts
import Movie from "../../model/collections/Movie";

export async function getRandomMovies() {
  const result = await Movie.aggregate([{ $sample: { size: 10 } }]);
  return result;
}
