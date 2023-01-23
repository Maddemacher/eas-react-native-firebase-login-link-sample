import React, { createContext, Dispatch, useEffect, useState } from "react";

import * as auth from "../firebase/auth";
import { createLogger } from "../logging";

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

interface AuthenticationContextProps {
  authenticated?: boolean;
  requestLoginLink: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
  setAuthenticated: Dispatch<any>;
}

const initialState = {
  authenticated: undefined,
  requestLoginLink: async () => {},
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

    await auth.requestLoginLink(email);
  };

  const signOut = async () => {
    await auth.signOut();
    setAuthenticated(false);
  };

  useEffect(() => {
    const subscription = auth.setupAuthStateListener((user) => {
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
