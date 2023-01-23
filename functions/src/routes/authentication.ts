import express from "express";
import asyncHandler from "express-async-handler";
import joi from "joi";

import * as validate from "../middlewares/validate";
import { sendLoginLinkEmail } from "../services/email";

const router = express.Router();

const loginLinkBodySchema = joi.object({
  email: joi.string().email().required(),
  redirectTo: joi.string().required(),
});

interface PostLoginLinkBody {
  email: string;
  redirectTo: string;
}

router.post(
  "/login-link",
  validate.body(loginLinkBodySchema),
  asyncHandler(async (request: express.Request<unknown, unknown, PostLoginLinkBody, unknown>, response) => {
    const { email, redirectTo } = request.body;

    await sendLoginLinkEmail(email, redirectTo);

    response.sendStatus(201);
  })
);

export { router };
