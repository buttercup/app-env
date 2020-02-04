describe("crypto", function() {
    const { "app-env": { getSharedAppEnv } } = window;

    function arrayBuffersEqual(buf1, buf2) {
        if (buf1.byteLength != buf2.byteLength) return false;
        const dv1 = new Uint8Array(buf1);
        const dv2 = new Uint8Array(buf2);
        for (let i = 0; i <= buf1.byteLength; i += 1) {
            if (dv1[i] !== dv2[i]) return false;
        }
        return true;
    }

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

        it("can encrypt buffers", function() {
            const encrypt = getSharedAppEnv().getProperty("crypto/v1/encryptBuffer");
            const decrypt = getSharedAppEnv().getProperty("crypto/v1/decryptBuffer");
            const arr = new Uint8Array([0xff, 0x01, 0x45, 0xf5, 0x80, 0xac, 0xf4]);
            const buff = arr.buffer;
            return encrypt(arr, "pass")
                .then(enc => decrypt(enc, "pass"))
                .then(res => {
                    expect(res).to.satisfy(buff2 => arrayBuffersEqual(buff2, buff));
                });
        });
    });
});
