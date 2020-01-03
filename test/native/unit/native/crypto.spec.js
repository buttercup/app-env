const { getCryptoResources } = require("../../../../source/native/crypto.js");

describe("crypto", function() {
    describe("getCryptoResources", function() {
        it("returns expected methods", function() {
            const resources = getCryptoResources();
            expect(resources).to.have.property("crypto/v1/decryptText").that.is.a("function");
            expect(resources).to.have.property("crypto/v1/encryptText").that.is.a("function");
            expect(resources).to.have.property("crypto/v1/setDerivationRounds").that.is.a("function");
        });
    });
});
