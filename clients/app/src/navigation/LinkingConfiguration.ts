import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { NotAuthenticatedStackRoutes } from "./NotAuthenticatedStack";
import { getInitialLink, onDynamicLink } from "../helpers/deeplinking";

import { createLogger } from "../logging";
import { AuthenticatedStackRoutes } from "./AuthenticatedStack";

const logger = createLogger("LinkingConfiguration.ts");

export const linkingConfiguration: LinkingOptions<NotAuthenticatedStackRoutes & AuthenticatedStackRoutes> = {
  prefixes: [
    Linking.createURL("/"),
    "https://eas-rn-login-link-sample.firebaseapp.com"
  ],
  async getInitialURL() {
    const link = await getInitialLink();

    logger.info(`getInitialURL: ${link}`);

    return link;
  },

  subscribe(listener) {
    return onDynamicLink((link) => {
      logger.info(`onDynamicLink: ${link}`);

      listener(link);
    });
  },

  config: {
    screens: {
      Start: "/",
      LoginLinkFailed: "/login/failed",
      NotFound: "*"
    }
  }
};
