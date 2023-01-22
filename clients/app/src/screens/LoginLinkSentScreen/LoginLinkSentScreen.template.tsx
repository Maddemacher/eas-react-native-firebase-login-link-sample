import { View, StyleSheet } from "react-native";
import { Header } from "../../components/atoms/Header";
import { ScreenContainer } from "../../components/atoms/ScreenContainer";
import { Text } from "../../components/atoms/Text";
import { colors, layout } from "../../constants";

interface LoginLinkSentScreenProps {
  children?: React.ReactNode;
}

export const LoginLinkSentScreenTemplate: React.FC<LoginLinkSentScreenProps> = () => {
  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.iconContainer}></View>
      <Header h1 style={styles.text}>
        Login Link Sent
      </Header>
      <Text style={styles.text}>Check your inbox. Remember to check your junk mail if you cant find it.</Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginBottom: layout.margin.medium
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.default.baseBlue
  },
  text: {
    color: colors.default.greyOne,
    textAlign: "center"
  }
});
