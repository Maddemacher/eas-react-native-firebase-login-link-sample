import nock from "nock";
import { requestLoginLink } from "./firebase";

describe("clients/firebase", () => {
  it("Should have email address in query of verification path", async () => {
    const email = "some@email.com";
    const redirect = `/verify-login-link?email=${email}`;

    nock("http://test")
      .post("/api/authentication/login-link", {
        email,
        redirect
      })
      .reply(201);

    const response = await requestLoginLink(email);

    expect(response.status).toBe(201);
  });
});
