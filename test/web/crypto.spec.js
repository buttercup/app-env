describe("crypto", function() {
    const { "app-env": { getSharedAppEnv } } = window;

    describe("encryption", function() {
        it("can encrypt text", function() {
            const encrypt = getSharedAppEnv().getProperty("crypto/v1/encryptText");
            const decrypt = getSharedAppEnv().getProperty("crypto/v1/decryptText");
            return encrypt("test", "pass")
                .then(enc => decrypt(enc, "pass"))
                .then(res => {
                    expect(res).to.equal("test");
                });
        });
    });
});
