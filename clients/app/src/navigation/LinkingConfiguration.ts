import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { NotAuthenticatedStackRoutes } from "./NotAuthenticatedStack";
import { getInitialLink, onDynamicLink } from "../helpers/deeplinking";

import { createLogger } from "../logging";

const logger = createLogger("LinkingConfiguration.ts")

export const linkingConfiguration: LinkingOptions<NotAuthenticatedStackRoutes> = {
  prefixes: [
    Linking.createURL("/"),
    "https://loginlinksample.page.link",
    "https://eas-rn-login-link-sample.firebaseapp.com"
  ],
  async getInitialURL() {
    const link = await getInitialLink()

    logger.info(`getInitialURL: ${link}`)

    return link;
  },

  subscribe(listener) {
    return onDynamicLink((link) => {
      logger.info(`onDynamicLink: ${link}`);

      listener(link)
    });
  },

  config: {
    screens: {
      Login: "/login",
      LoginLinkSent: "/login/sent",
      VerifyLoginLink: "/login/verify",
      NotFound: "*"
    }
  }
};
