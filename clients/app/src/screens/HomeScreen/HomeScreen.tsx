import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../../context/Authentication";
import { getUser } from "../../firebase/auth";
import { HomeTemplate } from "./HomeScreen.template";

export const HomeScreen = () => {
  const { signOut } = useContext(AuthenticationContext);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const curr = getUser();
    setUser(curr);
  }, []);

  const handleSignOutButtonPressed = async () => {
    await signOut();
  };

  return <HomeTemplate user={user} onSignOutButtonpressed={handleSignOutButtonPressed} />;
};
