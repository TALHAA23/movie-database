// File: model/collection/Movie.ts
import mongoose from "mongoose";
const { Schema } = mongoose;
import Actor from "../Actor";
import Reviewer from "../Reviewer";

const MovieSchema = new Schema({
  title: String,
  releaseYear: Number,
  releaseDate: String,
  runTime: Number,
  rating: Number,
  desc: String,
  genre: [String],
  cast: [Actor.schema],
  reviews: [Reviewer.schema],
  hasMore: Boolean,
});

export default mongoose.model("Movie", MovieSchema);

// interface Movie {
//   title: string;
//   releaseYear: number;
//   releaseDate: string;
//   runTime: number;
//   rating: number;
//   desc: string;
//   genre: string[];
//   cast: Actor[];
//   reviews: Reviewer[];
// }
