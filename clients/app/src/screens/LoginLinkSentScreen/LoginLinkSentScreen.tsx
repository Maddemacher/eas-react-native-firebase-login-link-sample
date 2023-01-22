import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { NotAuthenticatedStackRoutes } from "../../navigation/NotAuthenticatedStack";
import { LoginLinkSentScreenTemplate } from "./LoginLinkSentScreen.template";

interface LoginLinkSentScreenProps extends NativeStackScreenProps<NotAuthenticatedStackRoutes, "LoginLinkSent"> {}

export const LoginLinkSentScreen: React.FC<LoginLinkSentScreenProps> = ({ navigation }) => {
  const handleGoBackPressed = () => {
    navigation.popToTop();
  };

  return <LoginLinkSentScreenTemplate onGoBackPressed={handleGoBackPressed} />;
};
