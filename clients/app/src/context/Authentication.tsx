import React, { createContext, Dispatch, useEffect, useState } from "react";

import * as firebaseAuth from "../firebase/auth";
import * as firebaseClient from "../clients/firebase";
import { createLogger } from "../logging";

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

interface AuthenticationContextProps {
  authenticated?: boolean;
  requestLoginLink: (email: string) => Promise<void>;
  verifyLoginLink: (link: string) => Promise<void>;
  signOut: () => Promise<void>;
  setAuthenticated: Dispatch<any>;
}

const initialState = {
  authenticated: undefined,
  requestLoginLink: async () => {},
  verifyLoginLink: async () => {},
  signOut: async () => {},
  setAuthenticated: () => {}
};

const logger = createLogger("Authentication.tsx");

export const AuthenticationContext = createContext<AuthenticationContextProps>(initialState);

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({ children, ...props }) => {
  const [authenticated, setAuthenticated] = useState<boolean | undefined>(undefined);

  const requestLoginLink = async (email: string) => {
    logger.debug("requesting", email);

    if (!email) {
      logger.debug("no email, aborting");
      return;
    }

    await firebaseClient.requestLoginLink(email);
  };

  const verifyLoginLink = async (link: string) => {
    logger.info("Verifying login link");

    try {
      await firebaseAuth.verifyLoginLink(link);
    } catch (e) {
      logger.error("failed login link verification", e);
      setAuthenticated(false);
    }
  };

  const signOut = async () => {
    await firebaseAuth.signOut();
    setAuthenticated(false);
  };

  useEffect(() => {
    const subscription = firebaseAuth.setupAuthStateListener((user) => {
      logger.debug("User received", { user });
      setAuthenticated(user !== null);
    });

    return () => subscription();
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        authenticated,
        requestLoginLink,
        verifyLoginLink,
        signOut,
        setAuthenticated
      }}
      {...props}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default {
  AuthenticationContext,
  AuthenticationProvider
};
