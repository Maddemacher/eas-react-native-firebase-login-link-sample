import { StyleSheet } from "react-native";
import { Button } from "../../components/atoms/Button";
import { Header } from "../../components/atoms/Header";
import { ScreenContainer } from "../../components/atoms/ScreenContainer";
import { TextInput } from "../../components/atoms/TextInput";

interface LoginScreenProps {
  children?: React.ReactNode;
  onLoginButtonPressed: () => Promise<void>;
  onEmailChanged: (email: string) => void;
  email: string;
  loading: boolean;
}

export const LoginScreenTemplate: React.FC<LoginScreenProps> = ({
  onLoginButtonPressed,
  onEmailChanged,
  email,
  loading
}) => {
  return (
    <ScreenContainer style={styles.container}>
      <Header h1 style={styles.title}>
        Login
      </Header>
      <TextInput
        style={styles.input}
        onChangeText={onEmailChanged}
        value={email}
        placeholder="some@email.com"
        keyboardType="email-address"
      />
      <Button label="Request Login Link" onPress={onLoginButtonPressed} loading={loading} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    marginBottom: 8
  },
  title: {
    textAlign: "center"
  }
});
