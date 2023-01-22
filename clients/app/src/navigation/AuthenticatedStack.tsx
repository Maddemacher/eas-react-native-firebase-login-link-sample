import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";

import { NotFoundScreen } from "../screens/NotFoundScreen";

export type AuthenticatedStackRoutes = {
  Start: undefined;
  NotFound: undefined;
};

const Stack = createNativeStackNavigator<AuthenticatedStackRoutes>();

export const AuthenticatedStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start" component={HomeScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} />
    </Stack.Navigator>
  );
};
