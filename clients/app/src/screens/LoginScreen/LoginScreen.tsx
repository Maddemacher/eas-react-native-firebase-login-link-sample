import { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import * as auth from "../../firebase/auth";
import { LoginScreenTemplate } from "./LoginScreen.template";
import { NotAuthenticatedStackRoutes } from "../../navigation/NotAuthenticatedStack";

import config from "../../config";
import { createLogger } from "../../logging";

interface LoginScreenProps extends NativeStackScreenProps<NotAuthenticatedStackRoutes, "Start"> {}

const logger = createLogger("LoginScreen.tsx");

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>(config.defaults.email);

  const handleLoginButtonPressed = async () => {
    logger.debug("handle login button pressed");

    if (loading) {
      logger.debug("loading");
      return;
    }
    if (!email.trim()) {
      logger.debug("No email aborting");
      return;
    }
    try {
      setLoading(true);
      await auth.requestLoginLink(email);
    } finally {
      setLoading(false);
      navigation.navigate("LoginLinkSent");
    }
  };

  return (
    <LoginScreenTemplate
      onLoginButtonPressed={handleLoginButtonPressed}
      onEmailChanged={(value: string) => setEmail(value)}
      email={email}
      loading={loading}
    />
  );
};
