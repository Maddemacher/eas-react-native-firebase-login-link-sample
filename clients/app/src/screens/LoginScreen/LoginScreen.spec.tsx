import { NavigationProp } from "@react-navigation/native";
import * as React from "react";
import renderer from "react-test-renderer";
import { NotAuthenticatedStackRoutes } from "../../navigation/NotAuthenticatedStack";

import { LoginScreen } from "./LoginScreen";

describe("Screens - LoginScreen", () => {
  it("renders", () => {
    const navigation = { navigate: jest.fn() } as unknown as NavigationProp<NotAuthenticatedStackRoutes>;
    const tree = renderer.create(<LoginScreen navigation={navigation} />).toJSON();

    expect(tree).toBeDefined();
  });
});
