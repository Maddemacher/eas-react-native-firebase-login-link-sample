import * as functions from "firebase-functions";

type Environment = "dev" | "test" | "prod";

export interface Configuration {
  environment: Environment;
  email: {
    user: string;
    password: string;
  };
}

const config: Configuration = {
  environment: functions.config().environment.current,
  email: {
    user: functions.config().email.user,
    password: functions.config().email.password,
  },
};

export default config;
