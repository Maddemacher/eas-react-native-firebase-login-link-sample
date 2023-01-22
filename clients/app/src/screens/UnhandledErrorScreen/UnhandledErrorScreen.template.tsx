import { StyleSheet } from "react-native";
import { Header } from "../../components/atoms/Header";
import { ScreenContainer } from "../../components/atoms/ScreenContainer";
import { Text } from "../../components/atoms/Text";
import { layout } from "../../constants";
import { Button } from "../../components/atoms/Button";

interface UnhandledErrorScreenProps {
  children?: React.ReactNode;
  onReloadPressed: () => void;
}

export const UnhandledErrorScreenTemplate: React.FC<UnhandledErrorScreenProps> = ({ onReloadPressed }) => {
  return (
    <ScreenContainer style={styles.container}>
      <Header h1 style={styles.text}>
        Ops, något gick riktigt åt fanders!
      </Header>
      <Text style={styles.text}>Du måste tyvärr starta om appen.</Text>

      <Button style={styles.reloadButton} label="Ladda om" onPress={onReloadPressed} />
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
  reloadButton: {
    marginTop: layout.margin.large,
    width: "100%"
  }
});
