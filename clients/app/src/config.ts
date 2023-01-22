import Constants from "expo-constants";

// prod   -> real app,      firebase environment
// stage  -> simulator app, firebase environment
// dev    -> simulator app, local environment

type Environment = "prod" | "stage" | "dev" | "storybook" | "test";

interface Configuration {
  environment: Environment;
  defaults: {
    email: string;
    hostAddress: string;
  };
}

const extra = Constants.manifest?.extra;

if (extra === undefined) {
  throw new Error("Unable to locate extra config in app.config.json");
}

const config: Configuration = {
  environment: extra.environment,
  defaults: {
    email: extra.defaults?.email ?? "",
    hostAddress: extra.defaults?.hostAddress ?? "localhost"
  }
};

export default config;
