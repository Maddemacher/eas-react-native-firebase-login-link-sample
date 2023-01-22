import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AuthenticationProvider } from "./context/Authentication";
import { ErrorBoundary } from "./components/molecules/ErrorBoundary";

import useCachedResources from "./hooks/useCachedResources";
import { NavigationRoot } from "./navigation/NavigationRoot";

import "./logging";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <AuthenticationProvider>
          <NavigationRoot />
          <StatusBar />
        </AuthenticationProvider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
}
