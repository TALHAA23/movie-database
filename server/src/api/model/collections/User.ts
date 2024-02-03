// File: model/collection/User.ts
import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  _id: { type: String, required: true },
  userInfo: {
    email: { type: String, required: true },
    username: { type: String, required: true },
    created_at: { type: String, required: true },
  },
  watchList: [{ type: Schema.Types.ObjectId, ref: "movies" }],
  favoriteList: [{ type: Schema.Types.ObjectId, ref: "movies" }],
  // myReviewsRef: [{ type: Schema.Types.ObjectId, ref: "Review" }],
});

export default mongoose.model("user", UserSchema);
