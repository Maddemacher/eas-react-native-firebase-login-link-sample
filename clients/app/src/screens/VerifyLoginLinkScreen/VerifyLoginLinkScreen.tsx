import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useContext, useEffect } from "react";
import { AuthenticationContext } from "../../context/Authentication";
import { createLogger } from "../../logging";
import { NotAuthenticatedStackRoutes } from "../../navigation/NotAuthenticatedStack";

import { VerifyLoginLinkScreenTemplate } from "./VerifyLoginLinkScreen.template";

const logger = createLogger("VerifyLoginLinkScreen.tsx");

interface VerifyLoginLinkScreenProps extends NativeStackScreenProps<NotAuthenticatedStackRoutes, "VerifyLoginLink"> {}

export const VerifyLoginLinkScreen: React.FC<VerifyLoginLinkScreenProps> = ({ route, navigation }) => {
  const { verifyLoginLink } = useContext(AuthenticationContext);

  const email = route.params.email;
  const path = route.path;

  useEffect(() => {
    const doLoginLinkVerification = async () => {
      logger.info("verifyLoginLink hook triggered", { path, email });

      if (path === undefined || email === undefined) {
        return;
      }

      try {
        await verifyLoginLink(path, email);
      } catch {
        navigation.replace("VerifyLoginLinkFailed");
      }
    };

    doLoginLinkVerification();
  }, [path, email]);

  return <VerifyLoginLinkScreenTemplate />;
};
