import { View, StyleSheet, ViewProps } from "react-native";
import { layout } from "../../../constants";

interface ScreenContainerProps extends ViewProps {
  children?: React.ReactNode;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({ children, style }) => {
  return <View style={[style, styles.container]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: layout.padding.medium
  }
});
