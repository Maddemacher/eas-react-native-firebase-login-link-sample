import defaults from "./defaults.json";

const buildNumber = "1";
const bundleId = "com.sample.loginlink";

const getCommonConfig = () => {
  return {
    expo: {
      name: "eas-rnfirebase-login-link-sample",
      slug: "login-link-sample",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/images/icon.png",
      scheme: bundleId,
      userInterfaceStyle: "automatic",
      splash: {
        image: "./assets/images/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff"
      },
      updates: {
        fallbackToCacheTimeout: 0
      },
      assetBundlePatterns: ["**/*"],
      plugins: [
        [
          "expo-build-properties",
          {
            ios: {
              useFrameworks: "static"
            }
          }
        ],
        "@react-native-firebase/app",
        "@react-native-firebase/auth",
        "@react-native-firebase/dynamic-links"
      ],
      ios: {
        bundleIdentifier: bundleId,
        supportsTablet: true,
        buildNumber,
        config: {
          usesNonExemptEncryption: false
        },
        googleServicesFile: "./keys/GoogleService-info.plist",
        associatedDomains: [
          "applinks:loginlinksample.page.link",
          "applinks:eas-rn-login-link-sample.web.app"
        ],
        infoPlist: {
          FirebaseDynamicLinksCustomDomains: [
            "https://loginlinksample.page.link",
            "https://eas-rn-login-link-sample.web.app",
          ]
        }
      },
      android: {
        versionCode: 1,
        package: bundleId,
        googleServicesFile: "./keys/google-services.json",
        intentFilters: [
          {
            action: "VIEW",
            autoVerify: true,
            data: [
              {
                scheme: "https",
                host: "loginlinksample.page.link"
              }
            ],
            category: ["BROWSABLE", "DEFAULT"]
          },
          {
            action: "VIEW",
            autoVerify: true,
            data: [
              {
                scheme: "https",
                host: "eas-rn-login-link-sample.web.app"
              }
            ],
            category: ["BROWSABLE", "DEFAULT"]
          }
        ]
      },
      web: {
        favicon: "./assets/images/favicon.png"
      },
      extra: {
        eas: {
          projectId: "29fa229c-24db-43f7-8ad8-aa54811a5928"
        },
        defaults
      }
    }
  };
};

const getConfig = (appEnv) => {
  const common = getCommonConfig();

  if (appEnv === "stage") {
    return {
      ...common,
      expo: {
        ...common.expo,
        extra: {
          ...common.expo.extra,
          logLevel: "debug",
          environment: "stage",
          endpoint: "https://europe-west1-eas-rn-login-link-sample.cloudfunctions.net/main"
        }
      }
    };
  }

  if (appEnv === "dev") {
    return {
      ...common,
      expo: {
        ...common.expo,
        extra: {
          ...common.expo.extra,
          logLevel: "debug",
          environment: "dev",
          endpoint: `http://${defaults.hostAddress}:5001/eas-rn-login-link-sample/europe-west1/main`
        }
      }
    };
  }

  return common;
};

module.exports = () => getConfig(process.env.APP_ENV);

module.exports.getConfig = getConfig;
