import { getCollection } from "../../../db/mongo";

export async function getTopRatedMovie(rating: number = 4) {
  const result = getCollection("movies").find(
    {
      rating: {
        $gte: rating,
      },
    },
    { projection: { rating: 1 } }
  );
  const movies = await result.toArray();
  return movies;
}
