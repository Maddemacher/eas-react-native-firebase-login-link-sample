import Constants from "expo-constants";

type LogLevel = "debug" | "info" | "warning" | "error" | "none";

type LoglevelCollection = {
  [key in LogLevel]: LogLevel;
};

const logLevels: LoglevelCollection = {
  debug: "debug",
  info: "info",
  warning: "warning",
  error: "error",
  none: "none"
};

const getLogLevel = () => {
  const configLogLevel = Constants.manifest?.extra?.logLevel;

  let logLevel = configLogLevel || "warning";

  if (process.env.NODE_ENV === "test") {
    logLevel = "none";
  }

  return logLevel;
};

const logLevel = getLogLevel();

/* eslint-disable no-console */
export const createLogger = (prefix: string) => {
  if (typeof prefix !== "string") {
    throw new TypeError("createLogger must be called with a string prefix");
  }

  return {
    debug(...args: any[]) {
      if ([logLevels.debug].includes(logLevel)) {
        console.log("DEBUG\t", `[${prefix}] `, ...args);
      }
    },

    info(...args: any[]) {
      if ([logLevels.debug, logLevels.info].includes(logLevel)) {
        console.log("INFO\t", `[${prefix}] `, ...args);
      }
    },

    warning(...args: any[]) {
      if ([logLevels.debug, logLevels.info, logLevels.warning].includes(logLevel)) {
        console.log("WARN\t", `[${prefix}] `, ...args);
      }
    },

    error(...args: any[]) {
      if ([logLevels.debug, logLevels.info, logLevels.warning, logLevels.error].includes(logLevel)) {
        console.log("ERROR\t", `[${prefix}] `, ...args);
      }
    }
  };
};

/* eslint-enable no-console */
const logger = createLogger("logging.ts");
logger.info(`initiated to: ${logLevel}`);
