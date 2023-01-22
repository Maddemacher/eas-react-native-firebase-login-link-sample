import { utils } from "@react-native-firebase/app"
import dynamicLinks, { FirebaseDynamicLinksTypes } from "@react-native-firebase/dynamic-links";
import { Linking } from "react-native";

const resolveLink = async (link: string): Promise<string | null> => {
  try {
    const resolved = await dynamicLinks().resolveLink(link);
    return resolved.url;
  } catch {
    console.log("Unable to resolve deeplink")
    return null;
  }
}

const getDeeplink = async () => {
  const { isAvailable } = utils().playServicesAvailability;

  if (isAvailable === false) {
    return null;
  }

  const initialLink = await dynamicLinks().getInitialLink();

  if (initialLink === null) {
    return null;
  }

  const link = resolveLink(initialLink.url);

  if (link !== null) {
    return link
  }

  return initialLink.url;
}

export const getInitialLink = async (): Promise<string | null> => {
  const url = getDeeplink();

  if (url) {
    return url;
  }

  return await Linking.getInitialURL();
};

const onLink = (listener: (link: string) => void) => async ({ url }: { url: string }) => {
  const resolved = await resolveLink(url)

  if (resolved !== null) {
    listener(resolved)
    return
  }

  listener(url);
}

export const onDynamicLink = (listener: (link: string) => void) => {
  const unsubscribeFirebase = dynamicLinks().onLink(onLink(listener));
  const linkingSubscription = Linking.addEventListener('url', onLink(listener));

  return () => {
    unsubscribeFirebase();
    linkingSubscription.remove();
  };
};
