// File: model/Actor.ts
import mongoose from "mongoose";
const { Schema } = mongoose;

const ActorSchema = new Schema({
  name: { type: String, required: true },
  about: String,
  DOB: Date,
  achievments: [String],
  knownFor: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
  movies: {
    upcoming: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
    previousMovies: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
  },
});

export default mongoose.model("Actor", ActorSchema);
