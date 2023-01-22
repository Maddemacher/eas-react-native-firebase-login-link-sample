import restart from "react-native-restart";

import { UnhandledErrorScreenTemplate } from "./UnhandledErrorScreen.template";

export const UnhandledErrorScreen = () => {
  const handleOnReloadPressed = () => {
    restart.Restart();
  };

  return <UnhandledErrorScreenTemplate onReloadPressed={handleOnReloadPressed} />;
};
