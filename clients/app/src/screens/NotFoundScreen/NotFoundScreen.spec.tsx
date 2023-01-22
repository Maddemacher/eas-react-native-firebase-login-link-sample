import * as React from "react";
import renderer from "react-test-renderer";

import { NotFoundScreen } from "./NotFoundScreen";

describe("Screens - NotFoundScreen", () => {
  it("renders", () => {
    const tree = renderer.create(<NotFoundScreen></NotFoundScreen>).toJSON();

    expect(tree).toBeDefined();
  });
});
