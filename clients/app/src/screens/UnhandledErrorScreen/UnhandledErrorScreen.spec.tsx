import * as React from "react";
import renderer from "react-test-renderer";

import { UnhandledErrorScreen } from "./UnhandledErrorScreen";

describe("Screens - UnhandledErrorScreen", () => {
  it("renders", () => {
    const tree = renderer.create(<UnhandledErrorScreen></UnhandledErrorScreen>).toJSON();

    expect(tree).toBeDefined();
  });
});
