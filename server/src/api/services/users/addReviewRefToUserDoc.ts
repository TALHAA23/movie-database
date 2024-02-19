import { Types } from "mongoose";
import User from "../../model/collections/User";

export default async function addReviewRefToUserDoc(
  userId: string,
  movieRef: string,
  reviewRef: Types.ObjectId
) {
  try {
    await User.updateOne(
      {
        _id: userId,
      },
      {
        $addToSet: {
          myReviews: { movieRef, reviewRef },
        },
      }
    );
  } catch (err) {
    throw err;
  }
}
