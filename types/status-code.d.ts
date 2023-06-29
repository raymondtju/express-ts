import { StatusCodes } from "http-status-codes";

export interface IHttpError extends Error {
  statusCode: StatusCodes
} 