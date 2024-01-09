import express from "express";
import * as movieController from "../controllers/movieController";
const router = express.Router();

router.get("/movie/:id", movieController.movieById);

router.get("/top-rated", movieController.topRatedMovies);

router.get("/random", movieController.randomMovies);

router.get("/new-releases", movieController.newReleases);

router.get("/related", movieController.related);

export { router };
