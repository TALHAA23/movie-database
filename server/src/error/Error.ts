import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import mongooseErroHandler from "./mongooseErrorHandler";
import auth0ErrorHandler from "./auth0ErrorHandler";
import customErrorhandler from "./customErrorHandler";

export default function Error(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("ERROR HANDLING_____________");

  try {
    if (err instanceof mongoose.Error) return mongooseErroHandler(err, res);
    else if (err.hasOwnProperty("body")) return auth0ErrorHandler(err, res);
    else return customErrorhandler(err, res);
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
}
