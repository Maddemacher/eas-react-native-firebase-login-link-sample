import * as functions from "firebase-functions";
import { app } from "./endpoint";

export const main = functions
  .region("europe-west1")
  .runWith({
    ingressSettings: "ALLOW_ALL",
    invoker: "public",
  })
  .https.onRequest(app);
