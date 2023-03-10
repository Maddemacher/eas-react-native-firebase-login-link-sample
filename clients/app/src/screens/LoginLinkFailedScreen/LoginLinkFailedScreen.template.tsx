import { StyleSheet } from "react-native";
import { Header } from "../../components/atoms/Header";
import { ScreenContainer } from "../../components/atoms/ScreenContainer";
import { Text } from "../../components/atoms/Text";
import { layout } from "../../constants";
import { Button } from "../../components/atoms/Button";

interface LoginLinkFailedScreenTemplateProps {
  onGoBackPressed: () => void;
}

export const LoginLinkFailedScreenTemplate: React.FC<LoginLinkFailedScreenTemplateProps> = ({ onGoBackPressed }) => {
  return (
    <ScreenContainer style={styles.container}>
      <Header h1 style={styles.text}>
        Oh noes!
      </Header>
      <Text style={styles.text}>We could not verify your login link.</Text>

      <Button style={styles.goBackButton} label="Go back" onPress={onGoBackPressed} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    textAlign: "center"
  },
  goBackButton: {
    marginTop: layout.margin.large,
    width: "100%"
  }
});
