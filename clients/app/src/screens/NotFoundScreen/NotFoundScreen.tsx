import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthenticatedStackRoutes } from "../../navigation/AuthenticatedStack";
import { NotAuthenticatedStackRoutes } from "../../navigation/NotAuthenticatedStack";
import { NotFoundScreenTemplate } from "./NotFoundScreen.template";

interface NotFoundScreenProps
  extends NativeStackScreenProps<NotAuthenticatedStackRoutes | AuthenticatedStackRoutes, "NotFound"> {}

export const NotFoundScreen: React.FC<NotFoundScreenProps> = ({ navigation }) => {
  const handleGoHomePressed = () => {
    navigation.navigate("Start");
  };

  return <NotFoundScreenTemplate onGoHomePressed={handleGoHomePressed} />;
};
