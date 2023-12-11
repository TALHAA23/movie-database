import express from "express";
import * as findController from "../controllers/findController";

const router = express.Router({ mergeParams: true });

router.get("/", findController.movieBySearch);
export { router };
