import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { Text, StyleSheet, View } from "react-native";
import { Button } from "../../components/atoms/Button";
import { CodeBlock } from "../../components/atoms/CodeBlock";
import { Header } from "../../components/atoms/Header";
import { ScreenContainer } from "../../components/atoms/ScreenContainer";

interface HomeProps {
  user: FirebaseAuthTypes.User | null;
  onSignOutButtonpressed: () => void;
}

export const HomeTemplate: React.FC<HomeProps> = ({ user, onSignOutButtonpressed }) => {
  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.content}>
        <Header h1>Homescreen</Header>
        <Text style={styles.title}>You are logged in!</Text>
        <CodeBlock>
          {JSON.stringify(
            {
              currentUser: user
            },
            null,
            4
          )}
        </CodeBlock>
      </View>

      <Button label="Sign out" onPress={onSignOutButtonpressed}></Button>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
