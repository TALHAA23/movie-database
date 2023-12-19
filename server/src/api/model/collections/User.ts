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
  watchList: [Schema.Types.ObjectId],
  favoriteList: [Schema.Types.ObjectId],
  myReviewsRef: [Schema.Types.ObjectId],
});

export default mongoose.model("User", UserSchema);

// import { ObjectId } from "mongodb";
// import { MoviesReferece } from "../properties";

// interface User {
//   uid: string;
//   username: string;
//   email: string;
//   watchList: MoviesReferece;
//   favoriteList: MoviesReferece;
//   myReviewsRef: ObjectId[];
// }

// export type { User };
