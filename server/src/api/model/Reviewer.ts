import mongoose from "mongoose";
const { Schema } = mongoose;

interface Reviewer {
  featured?: boolean;
  title: string;
  review: string;
  rating: number;
  reviewDate: string;
  helpful: number;
  unhelpful: number;
}

const ReviewerSchema = new Schema({
  featured: Boolean,
  title: String,
  review: String,
  rating: Number,
  reviewDate: String,
  helpful: Number,
  unhelpful: Number,
});

export default mongoose.model("Reviewer", ReviewerSchema);
