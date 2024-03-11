// File: model/collection/Movie.ts
import mongoose from "mongoose";
const { Schema } = mongoose;
export const MovieSchema = new Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    genre: { type: [String], required: true },
    awards: { type: [String], required: false },
    banner: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    releaseDate: { type: Date, required: false },
    uploadDate: { type: Date, default: new Date() },
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
            review: { type: String, required: true, maxLength: 800 },
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
});
export default mongoose.model("movie", MovieSchema);
