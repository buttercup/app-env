const { createSession } = require("iocane/web");

let __derivationRoundsOverride = null;

function decryptText(text, password) {
    return createSession().decrypt(text, password);
}

function encryptText(text, password) {
    const session = createSession();
    if (__derivationRoundsOverride > 0) {
        session.setDerivationRounds(__derivationRoundsOverride);
    }
    return session.encrypt(text, password);
}

function getCryptoResources() {
    return {
        "crypto/v1/decryptText": decryptText,
        "crypto/v1/encryptText": encryptText,
        "crypto/v1/setDerivationRounds": setDerivationRounds
    };
}

function setDerivationRounds(rounds = null) {
    __derivationRoundsOverride = rounds;
}

module.exports = {
    getCryptoResources
};
