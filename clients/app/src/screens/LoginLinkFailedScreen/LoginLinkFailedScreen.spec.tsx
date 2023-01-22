import * as React from "react";
import renderer from "react-test-renderer";

import { LoginLinkFailedScreen } from "./LoginLinkFailedScreen";

describe("Screens - UnhandledErrorScreen", () => {
  it("renders", () => {
    const tree = renderer.create(<LoginLinkFailedScreen></LoginLinkFailedScreen>).toJSON();

    expect(tree).toBeDefined();
  });
});
