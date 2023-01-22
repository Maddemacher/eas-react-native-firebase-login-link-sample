import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Header } from "../../components/atoms/Header";
import { layout } from "../../constants";

interface VerifyLoginLinkScreenProps {
  children?: React.ReactNode;
}

export const VerifyLoginLinkScreenTemplate: React.FC<VerifyLoginLinkScreenProps> = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Header h1 style={styles.title}>
        Verifying your login link
      </Header>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    marginTop: layout.margin.large
  }
});
