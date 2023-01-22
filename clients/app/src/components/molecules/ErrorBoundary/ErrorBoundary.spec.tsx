import * as React from "react";
import renderer from "react-test-renderer";

import { UnhandledErrorScreen } from "../../../screens/UnhandledErrorScreen";

import { ErrorBoundary } from "./ErrorBoundary";

describe("Molecule - ErrorBoundary", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const Thrower = () => {
    throw new Error("Error thrown from problem child");
  };

  const render = ({ shouldThrow }: { shouldThrow: boolean }) =>
    renderer.create(
      <ErrorBoundary>
        {shouldThrow === false && null}
        {shouldThrow === true && <Thrower />}
      </ErrorBoundary>
    );

  it("Should display error screen on error", () => {
    const instance = render({ shouldThrow: true }).root;

    expect(instance.findAllByType(UnhandledErrorScreen).length).toEqual(1);
  });

  it("should not display error screen when there is no error", () => {
    const instance = render({ shouldThrow: false }).root;

    expect(instance.findAllByType(UnhandledErrorScreen).length).toEqual(0);
  });
});
