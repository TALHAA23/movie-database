// Importing Movie schema from Movie.ts
import Movie from "../../model/collections/Movie";
export async function getTopRatedMovie(rating: number = 8) {
  const movies = await Movie.aggregate([
    {
      $unwind: "$ratings",
    },
    {
      $group: {
        _id: "$_id",
        avgRating: { $avg: "$ratings.rating" }, // Use the rating field of the ratings object
        doc: { $first: "$$ROOT" },
      },
    },
    {
      $match: {
        avgRating: { $gte: rating },
      },
    },
    {
      $sort: { avgRating: -1 },
    },
    {
      $limit: 4,
    },
    {
      $addFields: {
        "doc.ratings": [
          { rateBy: "$doc.ratings.user", rating: "$doc.ratings.rating" },
        ],
      },
    },
    {
      $replaceRoot: { newRoot: "$doc" },
    },
  ]);
  return movies;
}
