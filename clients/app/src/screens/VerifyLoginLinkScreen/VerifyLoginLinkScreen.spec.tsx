import * as React from "react";
import renderer from "react-test-renderer";

import { VerifyLoginLinkScreen } from "./VerifyLoginLinkScreen";

describe("Screens - VerifyLoginLinkScreen", () => {
  it("renders", () => {
    const tree = renderer.create(<VerifyLoginLinkScreen></VerifyLoginLinkScreen>).toJSON();

    expect(tree).toBeDefined();
  });
});
