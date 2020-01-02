const { getSharedAppEnv } = require("./core/singleton.js");
const { applyWebConfiguration } = require("./web/index.js");

const appEnv = getSharedAppEnv();
applyWebConfiguration(appEnv);
