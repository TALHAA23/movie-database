import express from "express";
import * as contributionController from "../controllers/contributionController";
const router = express.Router();
router.post("/fill-holes", contributionController.fillHoles);
export { router };
