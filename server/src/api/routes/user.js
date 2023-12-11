import express from "express";
import * as userControllers from "../controllers/userController";

const router = express.Router({ mergeParams: true });

router.get("/protected/recommendations", userControllers.recommendations);

export { router };
