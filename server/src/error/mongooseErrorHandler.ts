import handleMongooseError from "./databaseErrorThrower";
import { Response } from "express";
export default function mongooseErroHandler(err: Error, res: Response) {
  console.log("MONGOOSE Handler");
  const errorInfo = handleMongooseError(err);
  return res.status(errorInfo.statusCode).send(errorInfo.message);
}
