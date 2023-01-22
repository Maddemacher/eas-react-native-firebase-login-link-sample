import { View, StyleSheet } from "react-native";
import { Button } from "../../components/atoms/Button";
import { Header } from "../../components/atoms/Header";
import { ScreenContainer } from "../../components/atoms/ScreenContainer";
import { Text } from "../../components/atoms/Text";
import { layout } from "../../constants";

interface LoginLinkSentScreenProps {
  onGoBackPressed: () => void;
}

export const LoginLinkSentScreenTemplate: React.FC<LoginLinkSentScreenProps> = ({ onGoBackPressed }) => {
  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}></View>
        <Header h1 style={styles.text}>
          Login Link Sent
        </Header>
        <Text style={styles.text}>Check your inbox. Remember to check your junk mail if you cant find it.</Text>
      </View>
      <Button label="Go Back" onPress={onGoBackPressed} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginBottom: layout.margin.medium
  },
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    textAlign: "center"
  }
});
