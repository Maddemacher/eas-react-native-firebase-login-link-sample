import asyncStorage from "@react-native-async-storage/async-storage"
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import queryString from "query-string";
import { createURL } from "expo-linking";

import * as client from "../clients/firebase"
import config from "../config";
import { createLogger } from "../logging";


const logger = createLogger("auth.ts");

const LOGIN_EMAIL_KEY = "@email";

type Unsubscribe = () => void;

const getContinueUrl = (link: string): string => {
  const parsed = queryString.parseUrl(link);
  const { continueUrl } = parsed.query;

  return continueUrl as string;
};

if (["prod", "stage", "test"].includes(config.environment) === false) {
  logger.debug("Connecting authentication to authentication emulator on https://localhost:9099");
  auth().useEmulator(`http://${config.defaults.hostAddress}:9099`);
}

export const requestLoginLink = async (email: string) => {
  const response = await client.requestLoginLink(email)

  if (response.status === 201) {
    await asyncStorage.setItem(LOGIN_EMAIL_KEY, email)
  }
}

export const handlePotentialLoginLink = async (link: string) => {
  if (auth().isSignInWithEmailLink(link) === false) {
    logger.info("Not a login link");
    return link;
  }

  const email = await asyncStorage.getItem(LOGIN_EMAIL_KEY);

  if (email === null) {
    return link
  }

  try {
    logger.info("Login link", {
      link,
      email
    });

    await auth().signInWithEmailLink(email, link);
    return getContinueUrl(link);
  } catch {
    if (auth().currentUser !== null) {
      return null;
    }

    return createURL("/login/failed");
  }
}

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
