import { Response } from "express";
import HttpError from "../../../shared/httpErrorsEnum";

export default function customErrorhandler(err: Error, res: Response) {
  const status = HttpError[err.name as keyof typeof HttpError];
  if (status) {
    const message = err.message;
    return res.status(status).send(message);
  } else return res.status(HttpError.UnprocessableEntity).send(err.message);
}
