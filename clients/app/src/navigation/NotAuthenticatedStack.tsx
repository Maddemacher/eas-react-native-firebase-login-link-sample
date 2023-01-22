import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginLinkSentScreen } from "../screens/LoginLinkSentScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";
import { VerifyLoginLinkScreen } from "../screens/VerifyLoginLinkScreen";

export type NotAuthenticatedStackRoutes = {
  Login: undefined;
  LoginLinkSent: undefined;
  VerifyLoginLink: {
    email: string;
  };
  NotFound: undefined;
};

const Stack = createNativeStackNavigator<NotAuthenticatedStackRoutes>();

export const NotAuthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VerifyLoginLink" component={VerifyLoginLinkScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LoginLinkSent" component={LoginLinkSentScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
    </Stack.Navigator>
  );
};
