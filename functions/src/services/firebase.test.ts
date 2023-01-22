import { getAuth } from "firebase-admin/auth";
import { generateLoginLink } from "./firebase";

describe("firebase", () => {
  describe("#generateLoginLink", () => {
    it("Login link should contain email and verification path", async () => {
      const link = await generateLoginLink("some@email.com", "/some-path?email=some@email.com");

      const auth = getAuth();

      expect(auth.generateSignInWithEmailLink).toHaveBeenCalledTimes(1);
      expect(auth.generateSignInWithEmailLink).toHaveBeenCalledWith("some@email.com", {
        url: "https://login.firebaseapp.com/some-path?email=some@email.com",
        handleCodeInApp: true,
        android: {
          installApp: true,
          minimumVersion: "12",
          packageName: "com.burgstrom.login",
        },
        iOS: {
          bundleId: "com.burgstrom.login",
        },
        dynamicLinkDomain: "burgstromlogin.page.link",
      });

      expect(link).toBeDefined();
    });
  });
});
