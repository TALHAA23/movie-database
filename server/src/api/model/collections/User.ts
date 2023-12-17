// File: model/collection/User.ts
import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  uid: String,
  username: String,
  email: String,
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
