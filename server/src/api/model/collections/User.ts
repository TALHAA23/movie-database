// File: model/collection/User.ts
import mongoose from "mongoose";
import { MovieInterface } from "../../../../../shared/shared.interfaces";
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
  contributions: {
    uploads: [{ type: Schema.Types.ObjectId, ref: "movie" }],
    addOns: [
      {
        ref: { type: Schema.Types.ObjectId, ref: "movie" },
        additionalProps: { type: [String], default: [] },
      },
    ],
  },
});

export default mongoose.model("user", UserSchema);
