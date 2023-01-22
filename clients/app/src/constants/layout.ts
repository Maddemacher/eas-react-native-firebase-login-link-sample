import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const eightPointSystem = {
  miniscule: 2,
  tiny: 4,
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32
};

export const layout = {
  window: {
    width,
    height
  },
  isSmallDevice: width < 375,
  padding: eightPointSystem,
  margin: eightPointSystem
};
