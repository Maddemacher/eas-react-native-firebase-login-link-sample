import { StyleSheet } from "react-native";
import { Header } from "../../components/atoms/Header";
import { ScreenContainer } from "../../components/atoms/ScreenContainer";
import { Text } from "../../components/atoms/Text";
import { colors, layout } from "../../constants";
import { Button } from "../../components/atoms/Button";

interface VerifyLoginLinkFailedScreenTemplateProps {
  onGoBackPressed: () => void;
}

export const VerifyLoginLinkFailedScreenTemplate: React.FC<VerifyLoginLinkFailedScreenTemplateProps> = ({
  onGoBackPressed
}) => {
  return (
    <ScreenContainer style={styles.container}>
      <Header h1 style={styles.text}>
        Oh noes!
      </Header>
      <Text style={styles.text}>We could not verify yoru login link.</Text>

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
