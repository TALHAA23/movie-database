import { Types } from "mongoose";
import addReviewRefToUserDoc from "../users/addReviewRefToUserDoc";
import Movie from "../../model/collections/Movie";

interface Review {
  userId: string;
  to: string;
  title: string;
  review: string;
}
export default async function (review: Review) {
  try {
    const reviewId = new Types.ObjectId();
    const reviewToPush = {
      _id: reviewId,
      reviewedBy: review.userId,
      title: review.title,
      review: review.review,
    };

    const update = await Movie.updateOne(
      { _id: review.to },
      {
        $addToSet: {
          reviews: reviewToPush,
        },
      }
    );

    await addReviewRefToUserDoc(review.userId, review.to, reviewId);
    return { response: `${update.modifiedCount} doc's updated` };
  } catch (err) {
    throw err;
  }
}
