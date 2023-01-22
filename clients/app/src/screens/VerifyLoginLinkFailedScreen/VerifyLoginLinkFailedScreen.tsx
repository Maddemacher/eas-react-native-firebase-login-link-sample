import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NotAuthenticatedStackRoutes } from "../../navigation/NotAuthenticatedStack";
import { VerifyLoginLinkFailedScreenTemplate } from "./VerifyLoginLinkFailedScreen.template";

interface VerifyLoginLinkScreenProps
  extends NativeStackScreenProps<NotAuthenticatedStackRoutes, "VerifyLoginLinkFailed"> {}

export const VerifyLoginLinkFailedScreen: React.FC<VerifyLoginLinkScreenProps> = ({ navigation }) => {
  const handleStartOverPressed = () => {
    navigation.replace("Login");
  };

  return <VerifyLoginLinkFailedScreenTemplate onGoBackPressed={handleStartOverPressed} />;
};
