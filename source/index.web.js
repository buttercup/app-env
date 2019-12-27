const { getSharedAppEnv } = require("./native/singleton.js");
const { applyWebConfiguration } = require("./web/index.js");

const appEnv = getSharedAppEnv();
applyWebConfiguration(appEnv);

module.exports = {
    getSharedAppEnv
};
