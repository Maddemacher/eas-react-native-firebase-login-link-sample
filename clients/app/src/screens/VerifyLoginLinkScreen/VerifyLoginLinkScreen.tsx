import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { createLogger } from "../../logging";
import { NotAuthenticatedStackRoutes } from "../../navigation/NotAuthenticatedStack";

import { VerifyLoginLinkScreenTemplate } from "./VerifyLoginLinkScreen.template";

const logger = createLogger("VerifyLoginLinkScreen.tsx");

interface VerifyLoginLinkScreenProps extends NativeStackScreenProps<NotAuthenticatedStackRoutes, "VerifyLoginLink"> {}

export const VerifyLoginLinkScreen: React.FC<VerifyLoginLinkScreenProps> = ({ route }) => {
  const email = route.params.email;

  useEffect(() => {
    logger.info(JSON.stringify({ message: "Verify login link", email }, null, 4));
  }, [email]);

  return <VerifyLoginLinkScreenTemplate></VerifyLoginLinkScreenTemplate>;
};
