import express, { json } from "express";

import { router as authenticationRouter } from "./routes/authentication";
import { errorHandler } from "./middlewares/errorHandler";
import { authenticationHandler } from "./middlewares/authenticationHandler";

export const app = express();

app.use(json());

app.get("/api/ping", (request: express.Request, response: express.Response) => {
  response.send("pong");
});

app.use("/api/authentication", authenticationRouter);

app.use(authenticationHandler);

app.get("/api/protected", (request: express.Request, response: express.Response) => {
  response.send({ uid: request.user?.uid });
});

app.get("*", (request: express.Request, response: express.Response) => {
  response.sendStatus(404);
});

app.use(errorHandler);
