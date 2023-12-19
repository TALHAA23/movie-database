import { Response } from "express";
export default function auth0ErrorHandler(err: Error, res: Response) {
  console.log("CATCHED AUTH0 ERROR");
  const errWithBody = err as any;
  console.log(errWithBody.body);
  try {
    const errorBody = JSON.parse(errWithBody.body as any);
    if (errorBody.statusCode && errorBody.message) {
      return res.status(errorBody.statusCode).send(errorBody.message);
    }
  } catch (e) {
    throw new Error("An unknown error has occurred!");
  }
}
