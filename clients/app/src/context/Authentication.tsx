import React, { createContext, Dispatch, useEffect, useState } from "react";

import * as auth from "../firebase/auth";
import { createLogger } from "../logging";

interface AuthenticationProviderProps {
  children: React.ReactNode;
}

interface AuthenticationContextProps {
  authenticated?: boolean;
  signOut: () => Promise<void>;
}

const initialState = {
  authenticated: undefined,
  signOut: async () => {}
};

const logger = createLogger("Authentication.tsx");

export const AuthenticationContext = createContext<AuthenticationContextProps>(initialState);

export const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({ children, ...props }) => {
  const [authenticated, setAuthenticated] = useState<boolean | undefined>(undefined);

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
        signOut
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
