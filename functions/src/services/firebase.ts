import * as admin from "firebase-admin";
import { getAuth } from "firebase-admin/auth";
import config from "../config";

admin.initializeApp();

export const generateLoginLink = async (email: string, verificationPath: string): Promise<string> => {
  const actionCodeSettings = {
    url: `https://login.web.app${verificationPath}`,
    handleCodeInApp: true,
    iOS: {
      bundleId: "com.burgstrom.login",
    },
    android: {
      packageName: "com.burgstrom.login",
      installApp: true,
      minimumVersion: "12",
    },
    dynamicLinkDomain: "burgstromlogin.page.link",
  };

  const auth = getAuth();
  const link = await auth.generateSignInWithEmailLink(email, actionCodeSettings);

  if (config.environment === "dev") {
    console.log(link);
  }

  return link;
};

export const getUserIdFromToken = async (token: string): Promise<string | undefined> => {
  const auth = getAuth();

  try {
    const { uid } = await auth.verifyIdToken(token);

    return uid;
  } catch (e) {
    console.log("Unable to decode token", e);
    return undefined;
  }
};

export default admin;
