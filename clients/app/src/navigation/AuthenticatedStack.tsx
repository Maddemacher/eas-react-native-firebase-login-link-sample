import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";

import { NotFoundScreen } from "../screens/NotFoundScreen";

export type AuthenticatedStackRoutes = {
  Start: undefined;
  Modal: undefined;
  NotFound: undefined;
};

const Stack = createNativeStackNavigator<AuthenticatedStackRoutes>();

export const AuthenticatedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
    </Stack.Navigator>
  );
};
