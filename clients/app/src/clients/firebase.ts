import axios from "axios";
import constants from "expo-constants";
import { createLogger } from "../logging";

const endpoint = constants.manifest?.extra?.endpoint;

const logger = createLogger("clients/firebase.ts");

if (endpoint === undefined) {
  throw new Error("Unable to setup firebase client without an endpoint address");
}

logger.debug(`Using endpoint ${endpoint}`);

const client = axios.create({ baseURL: endpoint });

export const requestLoginLink = async (email: string) => {
  const response = await client.post("/api/authentication/login-link", {
    email,
    redirect: "/home"
  });

  if (response.status !== 201) {
    throw new Error("Unable to request login link");
  }

  return response;
};
