const { getSharedInstance } = require("./core/singleton.js");
const { applyNativeConfiguration } = require("./native/index.js");

const appEnv = getSharedInstance();
applyNativeConfiguration(appEnv);
