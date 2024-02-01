import getMovieReviews from "./getMovieReviews";
import { RatingPayload } from "../../../../../shared/shared.interfaces";
export default async function (rating: RatingPayload) {
  try {
    const reviews = await getMovieReviews(rating.movieRef);
    if (!reviews) throw new Error("Field not exist");
    const targetReview = reviews.reviews.id(rating.reviewRef);
    if (targetReview) {
      targetReview.ratings.push(rating.rating);
      reviews.markModified("reviews");
      await reviews.save({ validateBeforeSave: false });
      return { addedTo: reviews?.title };
    } else throw new Error("Review not found");
  } catch (err) {
    throw err;
  }
}
