import axios from "axios";
import constants from "expo-constants";
import { createLogger } from "../logging";
import { linkingConfiguration } from "../navigation/LinkingConfiguration";

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
    redirect: `${linkingConfiguration.config?.screens.VerifyLoginLink}?email=${email}`
  });

  if (response.status !== 201) {
    throw new Error("Unable to request login link");
  }

  return response;
};
