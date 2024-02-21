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
import { router as reviewRoutes } from "./api/routes/review";
import { router as contributionRoutes } from "./api/routes/contributions";
import { config } from "dotenv";
import bodyParser from "body-parser";
import getRecentReleases from "./api/services/movies/getRecentReleases";
import getRecentUploads from "./api/services/movies/getRecentUploads";
import getByRandomYear from "./api/services/movies/getByRandomYear";
config();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};
const app = express();
app.use(cors(corsOptions)); //always on top
app.use(bodyParser.json({ limit: "50mb" })); //increase payload limit
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(jwtCheckMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(connectDatabase);
app.use("/api/users/", userRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/find", searchRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/protected/contribution", contributionRoutes);
app.use(Error); //always at bottom

app.get("/", (req, res) => {
  res.end("running");
});

app.get("/test", async (req, res) => {
  const result = await getByRandomYear();
  console.log(result);
  res.json(result);
});

app.get("*", (req, res) => {
  res.end("Route not found");
});

if (import.meta.env.PROD) app.listen(3000);
export const viteNodeApp = app;
