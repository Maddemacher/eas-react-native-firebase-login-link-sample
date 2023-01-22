import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LoginLinkFailedScreen } from "../screens/LoginLinkFailedScreen";
import { LoginLinkSentScreen } from "../screens/LoginLinkSentScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { NotFoundScreen } from "../screens/NotFoundScreen";

export type NotAuthenticatedStackRoutes = {
  Start: undefined;
  LoginLinkSent: undefined;
  LoginLinkFailed: undefined;
  NotFound: undefined;
};

const Stack = createNativeStackNavigator<NotAuthenticatedStackRoutes>();

export const NotAuthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start" component={LoginScreen} />
      <Stack.Screen name="LoginLinkSent" component={LoginLinkSentScreen} />
      <Stack.Screen name="LoginLinkFailed" component={LoginLinkFailedScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
};
