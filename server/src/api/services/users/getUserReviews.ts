import { Types } from "mongoose";
import User from "../../model/collections/User";

export default async function getUserReviews(userId: string) {
  try {
    const doc = await User.aggregate([
      { $match: { _id: userId } },
      { $unwind: "$myReviews" },
      {
        $lookup: {
          from: "movies", // use the actual name of the movies collection
          let: {
            movieId: "$myReviews.movieRef",
            reviewId: "$myReviews.reviewRef",
          },
          pipeline: [
            { $match: { $expr: { $eq: ["$_id", "$$movieId"] } } },
            { $unwind: "$reviews" },
            { $match: { $expr: { $eq: ["$reviews._id", "$$reviewId"] } } },
            { $project: { title: 1, reviews: 1 } },
          ],
          as: "myReviews.movie",
        },
      },
      { $unwind: "$myReviews.movie" },
      {
        $group: {
          _id: "$_id",
          myReviews: {
            $push: {
              movieRef: "$myReviews.movie._id",
              title: "$myReviews.movie.title",
              review: "$myReviews.movie.reviews",
            },
          },
        },
      },
    ]);

    return doc[0].myReviews;
  } catch (err) {
    throw err;
  }
}
