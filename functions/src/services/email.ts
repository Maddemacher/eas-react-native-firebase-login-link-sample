import * as nodemailer from "nodemailer";
import config from "../config";

import { renderLoginLink } from "../templates";
import { generateLoginLink } from "./firebase";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: config.email.user,
    pass: config.email.password,
  },
});

export const sendLoginLinkEmail = async (email: string, verificationPath: string) => {
  const link = await generateLoginLink(email, verificationPath);
  const rendered = renderLoginLink(link);

  if (config.environment === "dev") {
    console.log("Dev mode, no email is sent");
    return;
  }

  await transporter.sendMail({
    from: config.email.user,
    to: email,
    subject: "Login Link for Sample App",
    html: rendered,
  });
};
