const { createSession } = require("iocane");

function decryptText(text, password) {
    return createSession().decrypt(text, password);
}

function encryptText(text, password) {
    return createSession().encrypt(text, password);
}

function getCryptoResources() {
    return {
        "crypto/v1/decryptText": decryptText,
        "crypto/v1/encryptText": encryptText
    };
}

module.exports = {
    getCryptoResources
};
