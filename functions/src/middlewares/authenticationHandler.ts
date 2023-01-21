import express from "express";
import expressAsyncHandler from "express-async-handler";
import { getUserIdFromToken } from "../services/firebase";

const doAuthentication = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const { authorization } = req.headers;

  if (authorization === undefined) {
    res.sendStatus(401);
    return;
  }

  const uid = await getUserIdFromToken(authorization);

  if (uid === undefined) {
    res.sendStatus(401);
    return;
  }

  req.user = {
    uid,
  };

  next();
};

export const authenticationHandler = expressAsyncHandler(
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (req.path.startsWith("/api") === false) {
      next();
      return;
    }

    await doAuthentication(req, res, next);
  }
);

export const authenticated = expressAsyncHandler(
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    await doAuthentication(req, res, next);
  }
);
