import { Text, StyleSheet, TextProps } from "react-native";
import { font, layout } from "../../../constants";

interface HeaderProps extends TextProps {
  children?: React.ReactNode;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ style, h1, h2, h3, children }) => {
  return <Text style={[style, styles.header, h1 && styles.h1, h2 && styles.h2, h3 && styles.h3]}>{children}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    marginBottom: layout.margin.small
  },
  h1: {
    fontSize: font.size.xlarge
  },
  h2: {
    fontSize: font.size.large
  },
  h3: {
    fontSize: font.size.medium
  }
});
