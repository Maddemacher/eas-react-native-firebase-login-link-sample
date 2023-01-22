import * as React from "react";
import renderer from "react-test-renderer";

import { LoginLinkSentScreen } from "./LoginLinkSentScreen";

describe("Screens - LoginLinkSentScreen", () => {
  it("renders", () => {
    const tree = renderer.create(<LoginLinkSentScreen></LoginLinkSentScreen>).toJSON();

    expect(tree).toBeDefined();
  });
});
