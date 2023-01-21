import nock from "nock";
import functions from "firebase-functions-test";

nock.disableNetConnect();
nock.enableNetConnect("127.0.0.1");

const f = functions();
f.mockConfig({
  environment: {
    current: "test",
  },
  email: {
    user: "some@email.com",
    password: "some-password",
  },
});
