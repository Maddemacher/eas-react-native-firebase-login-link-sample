import * as React from "react";
import renderer from "react-test-renderer";

import { HomeScreen } from "./HomeScreen";

describe("Screens - Home", () => {
  it("renders", () => {
    const tree = renderer.create(<HomeScreen></HomeScreen>).toJSON();

    expect(tree).toBeDefined();
  });
});
