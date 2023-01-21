import express from "express";
import supertest from "supertest";

import { sendLoginLinkEmail } from "../services/email";
import { router } from "./authentication";

jest.mock("../services/email");

const sendLoginLinkEmailMock = sendLoginLinkEmail as jest.Mock;

const app = express();
app.use(express.json());
app.use(router);

beforeEach(() => {
  jest.clearAllMocks();
  sendLoginLinkEmailMock.mockResolvedValue(true);
});

describe("authentication", () => {
  describe("/login-link", () => {
    it("Should return 201 when there is both an email and a redirect path in the body", async () => {
      await supertest(app)
        .post("/login-link")
        .send({
          email: "some@email.com",
          redirect: "/some-path",
        })
        .expect(201);

      expect(sendLoginLinkEmailMock).toHaveBeenCalledTimes(1);
      expect(sendLoginLinkEmailMock).toHaveBeenCalledWith("some@email.com", "/some-path");
    });

    it("Should return 400 when there is no email in the body", async () => {
      await supertest(app)
        .post("/login-link")
        .send({
          redirect: "/some-path",
        })
        .expect(400);

      expect(sendLoginLinkEmailMock).not.toHaveBeenCalled();
    });

    it("Should return 400 when there is no redirect path in the body", async () => {
      await supertest(app)
        .post("/login-link")
        .send({
          email: "some@email.com",
        })
        .expect(400);

      expect(sendLoginLinkEmailMock).not.toHaveBeenCalled();
    });
  });
});
