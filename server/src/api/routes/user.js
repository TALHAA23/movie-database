import express from "express";
import * as userControllers from "../controllers/userController";

const router = express.Router();

router.get("/protected/recommendations", userControllers.recommendations);
router.get("/protected/userinfo", userControllers.userInfo);
router.post("/protected/my-movies", userControllers.manageMyMovies);
router.get("/protected/my-movies/:type", userControllers.myProfileMovies);
router.get("/protected/my-contributions", userControllers.myContributions);
export { router };
