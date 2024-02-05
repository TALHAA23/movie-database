// File: model/collection/User.ts
import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

export const UserSchema = new Schema({
  _id: { type: String, required: true },
  userInfo: {
    email: { type: String, required: true },
    username: { type: String, required: true },
    created_at: { type: String, required: true },
  },
  watchList: [{ type: Schema.Types.ObjectId, ref: "movie" }],
  favoriteList: [{ type: Schema.Types.ObjectId, ref: "movie" }],
  watched: [{ type: Schema.Types.ObjectId, ref: "movie" }],
  // myReviewsRef: [{ type: Schema.Types.ObjectId, ref: "Review" }],
});

export default mongoose.model("user", UserSchema);
