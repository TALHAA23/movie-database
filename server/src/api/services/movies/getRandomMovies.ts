import Movie from "../../model/collections/Movie";

export async function getRandomMovies() {
  const result = await Movie.aggregate([{ $sample: { size: 5 } }]);
  return result;
}
