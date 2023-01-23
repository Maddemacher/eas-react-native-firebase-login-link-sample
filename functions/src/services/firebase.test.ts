import { getAuth } from "firebase-admin/auth";
import { generateLoginLink } from "./firebase";

describe("firebase", () => {
  describe("#generateLoginLink", () => {
    it("Login link should contain redirect path", async () => {
      const link = await generateLoginLink("some@email.com", "/some-path");

      const auth = getAuth();

      expect(auth.generateSignInWithEmailLink).toHaveBeenCalledTimes(1);
      expect(auth.generateSignInWithEmailLink).toHaveBeenCalledWith("some@email.com", {
        url: "https://eas-rn-login-link-sample.firebaseapp.com/some-path",
        handleCodeInApp: true,
        android: {
          installApp: true,
          minimumVersion: "12",
          packageName: "com.sample.loginlink",
        },
        iOS: {
          bundleId: "com.sample.loginlink",
        },
        dynamicLinkDomain: "loginlinksample.page.link",
      });

      expect(link).toBeDefined();
    });
  });
});
