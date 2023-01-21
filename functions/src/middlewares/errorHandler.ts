import express from "express";
import config from "../config";
import { HttpError } from "../errors";

// eslint-disable-next-line
export const errorHandler = (err: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(err);

  if (err instanceof HttpError) {
    res.status(err.statusCode);

    if (config.environment === "dev") {
      res.json({
        message: err.message,
        stack: err.stack,
      });
      return;
    }

    res.send();
    return;
  }

  res.sendStatus(500);
};
