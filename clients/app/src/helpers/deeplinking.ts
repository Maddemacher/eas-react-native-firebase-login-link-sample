import { utils } from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import dynamicLinks from "@react-native-firebase/dynamic-links";
import queryString from "query-string";

import * as ExpoLinking from "expo-linking";
import { Linking } from "react-native";
import { createLogger } from "../logging";

const logger = createLogger("deeplinking.ts");

const getContinueUrl = (link: string): string => {
  const parsed = queryString.parseUrl(link);
  const { continueUrl } = parsed.query;

  return continueUrl as string;
};

const getDeeplink = async () => {
  const { isAvailable } = utils().playServicesAvailability;

  if (isAvailable) {
    const initialLink = await dynamicLinks().getInitialLink();

    if (initialLink) {
      return initialLink.url;
    }
  }

  const url = await Linking.getInitialURL();

  return url;
};

export const getInitialLink = async (): Promise<string | null> => {
  const url = await getDeeplink();

  logger.info("getInitialLink", { url });

  if (url === null) {
    return null;
  }

  if (auth().isSignInWithEmailLink(url) === false) {
    return url;
  }

  try {
    await auth().signInWithEmailLink("emil.bergstrom1@gmail.com", url);
    return getContinueUrl(url);
  } catch {
    if (auth().currentUser !== null) {
      return null;
    }

    return ExpoLinking.createURL("/login/failed");
  }
};

const handleLink =
  (listener: (link: string) => void) =>
  async ({ url }: { url: string }) => {
    logger.info("handleLink", { url });

    if (auth().isSignInWithEmailLink(url) === false) {
      listener(url);
      return;
    }

    try {
      await auth().signInWithEmailLink("emil.bergstrom1@gmail.com", url);
      const continueUrl = getContinueUrl(url);
      listener(continueUrl);
      return;
    } catch {
      if (auth().currentUser !== null) {
        return;
      }

      listener(ExpoLinking.createURL("/login/failed"));
    }
  };

export const onDynamicLink = (listener: (link: string) => void) => {
  const unsubscribeFirebase = dynamicLinks().onLink(handleLink(listener));
  const linkingSubscription = Linking.addEventListener("url", handleLink(listener));

  return () => {
    unsubscribeFirebase();
    linkingSubscription.remove();
  };
};
