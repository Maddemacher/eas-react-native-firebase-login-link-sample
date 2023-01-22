import * as React from "react";
import renderer from "react-test-renderer";

import { Header } from "./Header";

describe("Atom - Header", () => {
  it("renders", () => {
    const tree = renderer.create(<Header></Header>).toJSON();

    expect(tree).toBeDefined();
  });
});
