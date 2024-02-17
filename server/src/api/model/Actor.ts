// File: model/Actor.ts
import mongoose from "mongoose";
const { Schema } = mongoose;

export const ActorSchema = new Schema({
  name: { type: String, required: true },
  banner: { type: String, default: null },
  about: { type: String, default: "" },
  DOB: { type: Date, default: null },
  achievments: [String],
  knownFor: [{ type: Schema.Types.ObjectId, ref: "movie" }],
  movies: {
    upcoming: [{ type: Schema.Types.ObjectId, ref: "movie" }],
    previousMovies: [{ type: Schema.Types.ObjectId, ref: "movie" }],
  },
});

export default mongoose.model("actor", ActorSchema);
