import { Middleware } from "../../utils/ReqResNextType";
import { getMovieById } from "../services/movies/getMovieById";
import { getTopRatedMovie } from "../services/movies/getTopRatedMovies";
import { getRandomMovies } from "../services/movies/getRandomMovies";
import { Types } from "mongoose";
import errorThrower from "../../../../shared/errorThrower";
import HttpError from "../../../../shared/httpErrorsEnum";
import getRecentReleases from "../services/movies/getRecentReleases";
import getRelated from "../services/movies/getRelated";
const movieById: Middleware = async (req, res, next) => {
  const id = req.params.id;
  const mongodbObjectId = new Types.ObjectId(id);
  try {
    const result = await getMovieById(mongodbObjectId);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const topRatedMovies: Middleware = async (req, res, next) => {
  const ratingQuery = req?.query?.rating;
  try {
    if (typeof ratingQuery != "string")
      throw errorThrower("Invalid Query Type", HttpError.NotAcceptable);
    const result = await getTopRatedMovie(parseInt(ratingQuery) || undefined);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const randomMovies: Middleware = async (req, res, next) => {
  try {
    const result = await getRandomMovies();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const newReleases: Middleware = async (req, res, next) => {
  getRecentReleases();
  res.end("Done");
};

const related: Middleware = async (req, res, next) => {
  const id = req.params.id;
  const mongodbObjectId = new Types.ObjectId(id);
  try {
    const result = await getRelated(mongodbObjectId);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export { movieById, topRatedMovies, randomMovies, newReleases, related };
