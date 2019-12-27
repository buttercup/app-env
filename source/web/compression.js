const { compress, decompress } = require("../core/compression.js");

function getCompressionResources() {
    return {
        "compression/v1/compressText": compress,
        "compression/v1/decompressText": decompress
    };
}

module.exports = {
    getCompressionResources
};
