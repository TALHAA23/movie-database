// File: model/Actor.ts
import mongoose from "mongoose";
import { MoviesReferece } from "./properties";
const { Schema } = mongoose;

interface Actor {
  name: string;
  about: string;
  DOB: string;
  achievments: string[];
  knownFor: MoviesReferece;
  movies: {
    upcoming: MoviesReferece;
    previousMovies: MoviesReferece;
  };
}

const ActorSchema = new Schema({
  name: { type: String, required: true },
  about: String,
  DOB: String,
  achievments: [String],
  knownFor: [Schema.Types.ObjectId],
  movies: {
    upcoming: [Schema.Types.ObjectId],
    previousMovies: [Schema.Types.ObjectId],
  },
});

export default mongoose.model("Actor", ActorSchema);
