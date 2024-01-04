// File: model/collection/Movie.ts
import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;
import Actor from "../Actor";

const MovieSchema = new Schema({
  title: { type: String, required: true },
  releaseYear: Number,
  releaseDate: { type: Date },
  runTime: Number,
  rating: Number,
  desc: String,
  genre: [String],
  cast: [{ type: Schema.Types.ObjectId, ref: "actors" }],
  reviews: [
    {
      featured: Boolean,
      title: { type: String, required: true, maxLength: 50 },
      review: { type: String, required: true, maxLength: 500 },
      rating: Number,
      reviewDate: { type: String, required: true },
      helpful: Number,
      unhelpful: Number,
    },
  ],
  hasMore: { type: Boolean, require: false },
});

export default mongoose.model("Movie", MovieSchema);
