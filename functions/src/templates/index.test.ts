import fs from "fs";
import path from "path";

import { renderLoginLink } from ".";

beforeAll(() => {
  fs.mkdirSync(path.join(__dirname, "dist"), { recursive: true });
});

describe("#renderLoginLink", () => {
  it("Should render login link email", () => {
    const output = renderLoginLink("https://some-link.se");
    fs.writeFileSync(path.join(__dirname, "dist", "loginLink.html"), Buffer.from(output));

    expect(true).toBe(true);
  });
});
