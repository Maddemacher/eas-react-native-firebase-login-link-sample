import { View, StyleSheet } from "react-native";
import { Button } from "../../components/atoms/Button";
import { Header } from "../../components/atoms/Header";
import { ScreenContainer } from "../../components/atoms/ScreenContainer";
import { Text } from "../../components/atoms/Text";

interface NotFoundScreenTemplateProps {
  children?: React.ReactNode;
  onGoHomePressed: () => void;
}

export const NotFoundScreenTemplate: React.FC<NotFoundScreenTemplateProps> = ({ onGoHomePressed }) => {
  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.content}>
        <Header h1>404</Header>
        <Text>This screen doesn't exist.</Text>
      </View>
      <Button label="Go home" onPress={onGoHomePressed} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
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
