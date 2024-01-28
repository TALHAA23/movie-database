import { Types } from "mongoose";
import { getMovieById } from "./getMovieById";

interface Review {
  to: string;
  title: string;
  review: string;
}
export default async function (review: Review) {
  try {
    const movieRef = new Types.ObjectId(review.to);
    const movieDoc = await getMovieById(movieRef);
    const reviewToPush = {
      title: review.title,
      review: review.review,
    };
    await movieDoc?.updateOne({
      $push: {
        reviews: reviewToPush,
      },
    });
    return { addedTo: movieDoc?.title };
  } catch (err) {
    throw err;
  }
}