const { getCryptoResources } = require("./crypto.js");

function applyNativeConfiguration(appEnv) {
    appEnv.setProperties(getCryptoResources());
}

module.exports = {
    applyNativeConfiguration
};
