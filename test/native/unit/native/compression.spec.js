const { getCompressionResources } = require("../../../../source/native/compression.js");

describe("compression", function() {
    describe("getCompressionResources", function() {
        it("returns expected methods", function() {
            const resources = getCompressionResources();
            expect(resources).to.have.property("compression/v1/compressText").that.is.a("function");
            expect(resources).to.have.property("compression/v1/decompressText").that.is.a("function");
        });
    });
});
