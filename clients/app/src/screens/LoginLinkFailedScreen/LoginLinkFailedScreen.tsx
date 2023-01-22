import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NotAuthenticatedStackRoutes } from "../../navigation/NotAuthenticatedStack";
import { LoginLinkFailedScreenTemplate } from "./LoginLinkFailedScreen.template";

interface LoginLinkFailedProps extends NativeStackScreenProps<NotAuthenticatedStackRoutes, "LoginLinkFailed"> {}

export const LoginLinkFailedScreen: React.FC<LoginLinkFailedProps> = ({ navigation }) => {
  const handleStartOverPressed = () => {
    navigation.replace("Start");
  };

  return <LoginLinkFailedScreenTemplate onGoBackPressed={handleStartOverPressed} />;
};
