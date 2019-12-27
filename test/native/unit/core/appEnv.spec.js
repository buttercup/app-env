const { createAppEnv } = require("../../../../source/core/appEnv.js");

describe("appEnv", function() {
    describe("createAppEnv", function() {
        it("returns an appEnv instance", function() {
            const appEnv = createAppEnv();
            expect(appEnv).to.be.an("object");
        });

        describe("getProperty", function() {
            beforeEach(function() {
                this.appEnv = createAppEnv();
                this.appEnv.setProperty("test", () => 123);
            });

            it("returns the expected method", function() {
                const test = this.appEnv.getProperty("test");
                expect(test).to.be.a("function");
            });
        });
    });
});
