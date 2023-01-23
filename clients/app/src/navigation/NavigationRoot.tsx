import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import React, { useContext, useEffect } from "react";

import { AuthenticationContext } from "../context/Authentication";
import { AuthenticatedStack } from "./AuthenticatedStack";
import { NotAuthenticatedStack } from "./NotAuthenticatedStack";
import { linkingConfiguration } from "./LinkingConfiguration";
import { SafeAreaView } from "react-native-safe-area-context";

export const NavigationRoot = () => {
  const { authenticated } = useContext(AuthenticationContext);

  useEffect(() => {
    if (authenticated === undefined) {
      return;
    }

    SplashScreen.hideAsync();
  }, [authenticated]);

  if (authenticated === undefined) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer linking={linkingConfiguration}>
        {authenticated === false && <NotAuthenticatedStack />}
        {authenticated === true && <AuthenticatedStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
};
