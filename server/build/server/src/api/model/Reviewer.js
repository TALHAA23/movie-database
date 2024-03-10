import mongoose from "mongoose";
const { Schema } = mongoose;
const ReviewerSchema = new Schema({
    featured: Boolean,
    title: { type: String, required: true, maxLength: 50 },
    review: { type: String, required: true, maxLength: 500 },
    rating: Number,
    reviewDate: { type: String, required: true },
    helpful: Number,
    unhelpful: Number,
});
export { ReviewerSchema };
