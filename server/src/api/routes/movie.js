import express from "express";
import * as movieController from "../controllers/movieController";
const router = express.Router();

router.get("/movie/:id", movieController.movieById);

router.get("/cast/:id", movieController.castById);

router.get("/movie/:id/reviews", movieController.movieReviews);

router.post(
  "/movie/:id/reviews/protected/publish/rating",
  movieController.publishRating
);

router.get("/top-rated", movieController.topRatedMovies);

router.get("/random", movieController.randomMovies);

router.get("/new-releases", movieController.newReleases);

router.get("/related/:id", movieController.related);

router.post("/protected/new", movieController.newMovie);

export { router };
