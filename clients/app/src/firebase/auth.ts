import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import queryString from "query-string";

import config from "../config";
import { createLogger } from "../logging";

const logger = createLogger("auth.ts");

type Unsubscribe = () => void;

if (["prod", "stage", "test"].includes(config.environment) === false) {
  logger.debug("Connecting authentication to authentication emulator on https://localhost:9099");
  auth().useEmulator(`http://${config.defaults.hostAddress}:9099`);
}

const getEmailFromContinueUrl = (continueUrl: string): string | null => {
  const parsed = queryString.parseUrl(continueUrl);
  const { email } = parsed.query;

  if (email === null) {
    return null;
  }

  return email as string;
};

const getEmailFromLoginLink = (link: string): string | null => {
  const parsed = queryString.parseUrl(link);

  if (parsed.query.continueUrl) {
    logger.info("Link has continueUrl, getting email from that");
    return getEmailFromContinueUrl(parsed.query.continueUrl as string);
  }

  if (parsed.query.email === null) {
    return null;
  }

  return parsed.query.email as string;
};

export const verifyLoginLink = async (link: string) => {
  if (auth().isSignInWithEmailLink(link) === false) {
    logger.info(`Trying to verify ${link} but is not a login link`);
    return;
  }

  try {
    const email = getEmailFromLoginLink(link);

    logger.info(`Veryfing login link`, {
      link,
      email
    });

    if (email === null) {
      throw new Error("Unable to verify login link with undefined email");
    }

    await auth().signInWithEmailLink(email, link);
  } catch (error) {
    logger.error(`Failed to login with link: ${link}`, error);
    throw error;
  }
};

export const signOut = async () => {
  await auth().signOut();
};

export const getUser = () => {
  return auth().currentUser;
};

export const getAccessToken = async (): Promise<string | undefined> => {
  const user = getUser();

  if (user === null) {
    return undefined;
  }

  try {
    return await user.getIdToken();
  } catch (e) {
    console.error("Failed fetching accesstoken");
    console.error(e);
    return undefined;
  }
};

export const setupAuthStateListener = (callback: (user: FirebaseAuthTypes.User | null) => void): Unsubscribe => {
  return auth().onAuthStateChanged((user: FirebaseAuthTypes.User | null) => {
    callback(user);
  });
};
