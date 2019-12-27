const { getCryptoResources } = require("./crypto.js");
const { getCompressionResources } = require("./compression.js");

function applyNativeConfiguration(appEnv) {
    appEnv.setProperties(getCryptoResources());
    appEnv.setProperties(getCompressionResources());
}

module.exports = {
    applyNativeConfiguration
};
