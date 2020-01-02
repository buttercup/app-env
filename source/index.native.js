const { getSharedAppEnv } = require("./core/singleton.js");
const { applyNativeConfiguration } = require("./native/index.js");

const appEnv = getSharedAppEnv();
applyNativeConfiguration(appEnv);
