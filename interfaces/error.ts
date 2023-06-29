import { IHttpError } from "@/types/status-code";
import { StatusCodes } from "http-status-codes";

export class HttpError extends Error implements IHttpError {
  public statusCode: StatusCodes;

  constructor(args: IHttpError) {
    super(args.message);
    this.statusCode = args.statusCode;
    this.name = args.name;
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message: string) {
    super({
      name: "Unauthorized",
      message: message,
      statusCode: StatusCodes.UNAUTHORIZED,
    });
  }
}

export class NotFoundError extends HttpError {
  constructor(message: string) {
    super({
      name: "Not Found",
      message: message,
      statusCode: StatusCodes.NOT_FOUND,
    });
  }
}

export class BadRequestError extends HttpError {
  constructor(message: string) {
    super({
      name: "Bad Request",
      message: message,
      statusCode: StatusCodes.BAD_REQUEST,
    });
  }
}

export class UnprocessableError extends HttpError {
  constructor(message: string) {
    super({
      name: "Unprocessable Entity",
      message: message,
      statusCode: StatusCodes.UNPROCESSABLE_ENTITY,
    });
  }
}

export class NotImplementedError extends HttpError {
  constructor(message: string) {
    super({
      name: "Not Implmented",
      message: message,
      statusCode: StatusCodes.NOT_IMPLEMENTED,
    });
  }
}

export class ConflictError extends HttpError {
  constructor(message: string) {
    super({
      name: "Conflict",
      message: message,
      statusCode: StatusCodes.CONFLICT,
    });
  }
}

export class GoneError extends HttpError {
  constructor(message: string) {
    super({
      name: "Gone",
      message: message,
      statusCode: StatusCodes.GONE,
    });
  }
}

export class InternalError extends HttpError {
  constructor(message: string) {
    super({
      name: "Internal Server Error",
      message: message,
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
}

export class RangeError extends HttpError {
  constructor(message: string) {
    super({
      name: "Range Not Satisifable",
      message: message,
      statusCode: StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE,
    });
  }
}
