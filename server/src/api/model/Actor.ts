// File: model/Actor.ts
import mongoose from "mongoose";
const { Schema } = mongoose;

const ActorSchema = new Schema({
  name: { type: String, required: true },
  about: { type: String, required: true },
  DOB: Date,
  achievments: [String],
  knownFor: [{ type: Schema.Types.ObjectId, ref: "movie" }],
  movies: {
    upcoming: [{ type: Schema.Types.ObjectId, ref: "movie" }],
    previousMovies: [{ type: Schema.Types.ObjectId, ref: "movie" }],
  },
});

export default mongoose.model("actor", ActorSchema);
