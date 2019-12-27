const { getCryptoResources } = require("./crypto.js");
const { getCompressionResources } = require("../native/compression.js");

function applyWebConfiguration(appEnv) {
    appEnv.setProperties(getCryptoResources());
    appEnv.setProperties(getCompressionResources());
}

module.exports = {
    applyWebConfiguration
};
