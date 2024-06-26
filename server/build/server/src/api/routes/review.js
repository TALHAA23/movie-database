import express from "express";
import * as reviewController from "../controllers/reviewsController";
export const router = express.Router();
router.get("/user-reviews", reviewController.myReviews);
router.post("/protected/new", reviewController.newReview);
