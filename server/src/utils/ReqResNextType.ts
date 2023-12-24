import { Response, Request, NextFunction } from "express";
type Middleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void | Promise<void>;

export type { Middleware };
