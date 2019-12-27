const { getSharedAppEnv } = require("./native/singleton.js");
const { applyNativeConfiguration } = require("./native/index.js");

const appEnv = getSharedAppEnv();
applyNativeConfiguration(appEnv);

module.exports = {
    getSharedAppEnv
};
