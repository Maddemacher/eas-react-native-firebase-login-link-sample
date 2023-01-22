import ReactNative, { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

import { Text } from "../Text";

interface ButtonProps extends ReactNative.TouchableOpacityProps {
  label: string;
  loading?: boolean;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({ style, label, loading, onPress }) => {
  return (
    <TouchableOpacity style={[style, styles.container, loading && styles.loading]} onPress={onPress} disabled={loading}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 100,
    backgroundColor: "blue"
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  },
  loading: {
    opacity: 0.2
  }
});
