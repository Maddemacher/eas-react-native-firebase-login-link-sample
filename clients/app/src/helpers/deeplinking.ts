import { utils } from "@react-native-firebase/app"
import dynamicLinks from "@react-native-firebase/dynamic-links";
import { Linking } from "react-native";

export const getInitialLink = async (): Promise<string | null> => {
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

export const onDynamicLink = (listener: (link: string) => void) => {
  const unsubscribeFirebase = dynamicLinks().onLink(({ url }) => {
    listener(url);
  });

  const linkingSubscription = Linking.addEventListener('url', ({ url }) => {
    listener(url);
  });

  return () => {
    unsubscribeFirebase();
    linkingSubscription.remove();
  };
};
