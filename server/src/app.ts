import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { jwtCheckMiddleware } from "./auth/jwtVerfier";
import Error from "./error/Error";
import { connectDatabase } from "./db/mongo.js";
import { router as userRoutes } from "./api/routes/user.js";
import { router as searchRoutes } from "./api/routes/find.js";
import { router as movieRoutes } from "./api/routes/movie.js";
import { router as authRoutes } from "./api/routes/auth";
import { config } from "dotenv";
import Movie from "./api/model/collections/Movie";
import User from "./api/model/collections/User";
import mongoose from "mongoose";
import errorThrower from "../../shared/errorThrower";
import HttpError from "../../shared/httpErrorsEnum";
config();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions)); //always on top
app.use(cookieParser());
app.use(jwtCheckMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(connectDatabase);
app.use("/api/users/", userRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/find", searchRoutes);
app.use(Error); //always at bottom

app.get("/", (req, res) => {
  res.end("running");
});

app.get("*", (req, res) => {
  res.end("Route not found");
});

if (import.meta.env.PROD) app.listen(3000);
export const viteNodeApp = app;