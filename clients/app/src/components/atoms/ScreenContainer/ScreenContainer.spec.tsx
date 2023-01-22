import * as React from "react";
import renderer from "react-test-renderer";

import { ScreenContainer } from "./ScreenContainer";

describe("Atom - ScreenContainer", () => {
  it("renders", () => {
    const tree = renderer.create(<ScreenContainer></ScreenContainer>).toJSON();

    expect(tree).toBeDefined();
  });
});
