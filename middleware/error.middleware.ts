import { NextFunction, Request, Response } from "express";
import { HttpError } from "@/interfaces/error";

export function errorMiddleware(
  err: HttpError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) {
  const resObj = {
    code: err.statusCode,
    message: err.message,
    ...(process.env.NODE_ENV === "production"
      ? {}
      : { name: err.name, stack: err.stack, status: err.statusCode }),
  };

  res.status(err.statusCode).json(resObj);
}

export default errorMiddleware;
