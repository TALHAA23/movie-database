import { Request, Response, NextFunction } from "express";
export default function Error(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status =
    err.name.includes("mongo") || err.name.includes("Mongo")
      ? 400
      : err?.status || 500;
  const message = err?.message || "Internal server error";
  console.log(err);
  return res.status(status).send(message);
}
