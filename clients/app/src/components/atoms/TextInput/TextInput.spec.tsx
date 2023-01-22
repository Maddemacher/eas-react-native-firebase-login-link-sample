import * as React from "react";
import renderer from "react-test-renderer";

import { TextInput } from "./TextInput";

describe("Atom - TextInput", () => {
  it("renders", () => {
    const tree = renderer.create(<TextInput></TextInput>).toJSON();

    expect(tree).toBeDefined();
  });
});
