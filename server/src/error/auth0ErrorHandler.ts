import { Response } from "express";
import HttpError from "../../../shared/httpErrorsEnum";
export default function auth0ErrorHandler(err: Error, res: Response) {
  console.log("CATCHED AUTH0 ERROR");
  const errWithBody = err as any;
  console.log(errWithBody.body);
  let [status, message]: any = [null, null];
  try {
    const errorBody = JSON.parse(errWithBody.body as any);
    if (errorBody.statusCode && errorBody.message) {
      [status, message] = [errorBody.statusCode, errorBody.message];
    } else if (errorBody.error_description)
      [status, message] = [404, errorBody.error_description];
    return res.status(status).send(message);
  } catch (e) {
    res.status(500).send("Something went wrong while attemping authintication");
  }
}
