import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginLinkSentScreen } from "../screens/LoginLinkSentScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";
import { VerifyLoginLinkFailedScreen } from "../screens/VerifyLoginLinkFailedScreen";
import { VerifyLoginLinkScreen } from "../screens/VerifyLoginLinkScreen";

export type NotAuthenticatedStackRoutes = {
  Login: undefined;
  LoginLinkSent: undefined;
  VerifyLoginLink: {
    email?: string;
  };
  VerifyLoginLinkFailed: undefined;
  NotFound: undefined;
};

const Stack = createNativeStackNavigator<NotAuthenticatedStackRoutes>();

export const NotAuthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="LoginLinkSent" component={LoginLinkSentScreen} />
      <Stack.Screen name="VerifyLoginLink" component={VerifyLoginLinkScreen} />
      <Stack.Screen name="VerifyLoginLinkFailed" component={VerifyLoginLinkFailedScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
};
