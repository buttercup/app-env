const { getSharedInstance } = require("./core/singleton.js");
const { applyWebConfiguration } = require("./web/index.js");

const appEnv = getSharedInstance();
applyWebConfiguration(appEnv);
