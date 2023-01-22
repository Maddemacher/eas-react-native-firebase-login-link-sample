import { NavigationProp } from "@react-navigation/native";
import { AuthenticatedStackRoutes } from "../../navigation/AuthenticatedStack";
import { NotAuthenticatedStackRoutes } from "../../navigation/NotAuthenticatedStack";
import { NotFoundScreenTemplate } from "./NotFoundScreen.template";

interface NotFoundScreenProps {
  navigation: NavigationProp<NotAuthenticatedStackRoutes | AuthenticatedStackRoutes>;
}

export const NotFoundScreen: React.FC<NotFoundScreenProps> = ({ navigation }) => {
  const handleGoHomePressed = () => {
    navigation.navigate("Start");
  };

  return <NotFoundScreenTemplate onGoHomePressed={handleGoHomePressed} />;
};
