import express from "express";
import * as reviewController from "../controllers/reviewsController";
export const router = express.Router();

router.post("/protected/new", reviewController.newReview);
