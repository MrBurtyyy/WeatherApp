import { Request, Response, NextFunction } from "express";
import { LoggerFactory } from "./logFactory";
import * as moment from "moment";

const logger = LoggerFactory.getLogger();

export const logAllRequests = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const ipAddress = req.ip;
  const method = req.method.toUpperCase();
  const path = req.originalUrl;
  const protocol = req.httpVersion;
  const dateTime = moment(new Date()).format("DD/MMM/YYYY:HH:mm:ss Z");

  logger.info(
    `${ipAddress} [${dateTime}] "${method} ${path} HTTP/${protocol}"`
  );
  next();
};
