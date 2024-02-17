import { Types } from "mongoose";
import Movie from "../../model/collections/Movie";

export async function getMovieById(id: Types.ObjectId) {
  const featureBasedOn = ["number_of_ratings", "highest_rating", "newest"][
    Math.floor(Math.random() * 3)
  ];
  try {
    const movie = await Movie.findById(id)
      .populate("cast", "_id name banner")
      .populate("reviews.reviewedBy", "_id userInfo.username")
      .populate("ratings.rateBy", "_id userInfo.username")
      .exec();
    if (!movie) throw new Error("Movie not found");
    if (!movie.reviews.length) return movie; //no featured review
    let selectedReview;
    if (featureBasedOn === "number_of_ratings") {
      selectedReview = movie.reviews.reduce((prev, current) =>
        prev.ratings.length > current.ratings.length ? prev : current
      );
    } else if (featureBasedOn === "highest_rating") {
      selectedReview = movie.reviews.reduce((prev, current) =>
        averageRating(prev?.ratings) > averageRating(current.ratings)
          ? prev
          : current
      );
    } else if (featureBasedOn === "newest") {
      selectedReview = movie.reviews.reduce((prev, current) =>
        prev.reviewDate > current.reviewDate ? prev : current
      );
    }

    movie.numberofReviews = movie.reviews.length;
    movie.reviews = selectedReview ? [selectedReview] : [movie.reviews?.[0]];
    return movie;
  } catch (err) {
    throw err;
  }
}

function averageRating(ratings: { user: Types.ObjectId; rating: number }[]) {
  return ratings.reduce((a, b) => a + b.rating, 0) / ratings.length;
}
