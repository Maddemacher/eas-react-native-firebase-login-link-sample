import { sendLoginLinkEmail } from "./email";
import { generateLoginLink } from "./firebase";

jest.mock("./firebase");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { mock } = require("nodemailer");

const generateLoginLinkMock = generateLoginLink as jest.Mock;

beforeEach(() => {
  jest.clearAllMocks();
});

describe("email", () => {
  describe("#sendLoginLinkEmail", () => {
    it("iShould send login link email through nodemailer", async () => {
      const link = "some-login-link-that-user-uses-to-login";

      generateLoginLinkMock.mockResolvedValue(link);

      await sendLoginLinkEmail("someone@email.com", "some-verification-path");

      const sentEmails = mock.getSentMail();
      expect(sentEmails.length).toBe(1);
      expect(sentEmails[0].from).toBe("some@email.com");
      expect(sentEmails[0].to).toBe("someone@email.com");
      expect(sentEmails[0].html).toContain(link);

      expect(generateLoginLink).toHaveBeenCalledTimes(1);
      expect(generateLoginLink).toHaveBeenCalledWith("someone@email.com", "some-verification-path");
    });
  });
});
