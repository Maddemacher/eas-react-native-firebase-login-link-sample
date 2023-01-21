import * as fs from "fs";
import * as handlebars from "handlebars";
import pretty from "pretty";

const headTemplate = fs.readFileSync(`${__dirname}/emails/partials/head.handlebars`, "utf8").toString();

const headerTemplate = fs.readFileSync(`${__dirname}/emails/partials/header.handlebars`, "utf8").toString();

const footerTemplate = fs.readFileSync(`${__dirname}/emails/partials/footer.handlebars`, "utf8").toString();

const loginLinkTemplate = fs.readFileSync(`${__dirname}/emails/loginLink.handlebars`, "utf8").toString();

handlebars.registerPartial("head", headTemplate);
handlebars.registerPartial("header", headerTemplate);
handlebars.registerPartial("footer", footerTemplate);

export const renderLoginLink = (link: string): string => {
  const compiled = handlebars.compile(loginLinkTemplate);

  const raw = compiled({
    link,
  });

  return pretty(raw);
};
