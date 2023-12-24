import express from "express";
import * as userControllers from "../controllers/userController";

const router = express.Router();

router.get("/protected/recommendations", userControllers.recommendations);
router.get("/protected/userinfo", userControllers.userInfo);

export { router };
