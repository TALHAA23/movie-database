import getMovieReviews from "./getMovieReviews";

interface Rating {
  parentDocId: string;
  subDocRef: string;
  rating: number;
}
export default async function (rating: Rating) {
  try {
    const reviews = await getMovieReviews(rating.parentDocId);
    if (!reviews) throw new Error("Field not exist");
    const targetReview = reviews.reviews.id(rating.subDocRef);
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
