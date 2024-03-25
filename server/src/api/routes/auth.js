import express from "express";
import * as authController from "../controllers/authController";
export const router = express.Router();

router.post("/signup", authController.signupUser);
router.post("/login", authController.loginUser);
router.get("/logout", authController.logoutUser);
router.get("/userInfo", authController.userInfo);
router.get("/refreshToken", authController.refreshToken);
router.get("/logout", (req, res) => {
  res.redirect(`https://${process.env.DOMAIN}/v2/logout`);
});
