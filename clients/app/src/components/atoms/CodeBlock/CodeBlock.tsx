import { Text, View, StyleSheet } from "react-native";
import { colors, layout } from "../../../constants";

interface CodeBlockProps {
  children?: React.ReactNode;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    width: "100%",
    padding: layout.padding.large,
    marginVertical: layout.margin.medium
  },
  title: {
    fontSize: 12,
    fontWeight: "bold"
  }
});
