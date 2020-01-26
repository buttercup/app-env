const { getNetResources } = require("../../../../source/native/net.js");

describe("net", function() {
    describe("getNetResources", function() {
        it("returns expected methods", function() {
            const resources = getNetResources();
            expect(resources).to.have.property("net/webdav/v1/newClient").that.is.a("function");
        });
    });
});
