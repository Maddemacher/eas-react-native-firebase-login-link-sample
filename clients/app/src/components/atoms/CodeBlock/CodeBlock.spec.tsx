import * as React from "react";
import renderer from "react-test-renderer";

import { CodeBlock } from "./CodeBlock";

describe("Atom - CodeBlock", () => {
  it("renders", () => {
    const tree = renderer.create(<CodeBlock></CodeBlock>).toJSON();

    expect(tree).toBeDefined();
  });
});
