import { utils } from "@react-native-firebase/app";
import dynamicLinks from "@react-native-firebase/dynamic-links";

import { Linking } from "react-native";
import { handlePotentialLoginLink } from "../firebase/auth";
import { createLogger } from "../logging";

const logger = createLogger("deeplinking.ts");

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

  return handlePotentialLoginLink(url)
};

const handleLink =
  (listener: (link: string) => void) =>
    async ({ url }: { url: string }) => {
      logger.info("handleLink", { url });

      const redirect = await handlePotentialLoginLink(url);

      if (redirect !== null) {
        listener(redirect)
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
