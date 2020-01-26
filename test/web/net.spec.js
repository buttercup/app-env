describe("net", function() {
    const { "app-env": { getSharedAppEnv } } = window;

    describe("webdav", function() {
        it("can create a new client", function() {
            const createClient = getSharedAppEnv().getProperty("net/webdav/v1/newClient");
            const client = createClient("https://test.com");
            expect(client).to.have.property("getDirectoryContents").that.is.a("function");
        });
    });
});
