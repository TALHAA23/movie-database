// File: model/collection/Movie.ts
import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;
interface Review {
  featured: boolean;
  title: string;
  review: string;
  rating: number;
  reviewDate: Date;
  helpful: number;
  unhelpful: number;
}
interface MovieInterface {
  _id?: string;
  title: string;
  desc: string;
  cast: string[] | [];
  genre: string[] | [];
  banner?: File;
  awards?: string[] | [];
  rating?: number;
  releaseYear?: number;
  releaseDate?: Date;
  runTime: number;
  tagline?: string;
  creator?: string;
  language?: string;
  countryOfOrigin?: string;
  reviews: Review[];
  hasMore: boolean;
}

export const MovieSchema = new Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  genre: { type: [String], required: true },
  awards: { type: [String], required: false },
  banner: { type: String, required: true },
  releaseYear: { type: Number, required: true },
  releaseDate: { type: Date, required: false },
  runTime: { type: Number, required: false },
  tagline: { type: String, required: false },
  creator: { type: String, required: false },
  language: { type: String, required: false },
  countryOfOrigin: { type: String, required: false },
  // ratings: { type: [Number], default: [0] },
  ratings: [
    {
      rateBy: { type: String, ref: "user", require: true },
      rating: Number,
    },
  ],
  cast: [{ type: Schema.Types.ObjectId, ref: "actor" }],
  reviews: [
    {
      reviewedBy: { type: String, ref: "user", require: true },
      featured: { type: Boolean, require: false },
      title: { type: String, required: true, maxLength: 50 },
      review: { type: String, required: true, maxLength: 500 },
      reviewDate: { type: Date, default: new Date() },
      helpful: { type: Number, default: 0 },
      unhelpful: { type: Number, default: 0 },
      ratings: [
        {
          rateBy: { type: String, ref: "user", require: true },
          rating: Number,
        },
      ],
    },
  ],
  numberofReviews: { type: Number, require: false },
  hasMore: { type: Boolean, require: false },
});

export default mongoose.model("movie", MovieSchema);
