import { StyleSheet, TextInput as RNTextInput, TextInputProps as RNTextInputProps } from "react-native";

interface TextInputProps extends RNTextInputProps {}

export const TextInput: React.FC<TextInputProps> = ({ style, ...props }) => {
  return <RNTextInput style={[style, styles.container]} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "black"
  }
});
