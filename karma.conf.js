module.exports = config => {
    config.set({
        autoWatch: false,
        basePath: __dirname,
        browsers: ["ChromeHeadless"],
        captureTimeout: 15000,
        client: {
            mocha: {
                timeout: "10000"
            }
        },
        files: [
            "dist/web.js",
            "dist/app-env.js",
            "test/web/**/*.spec.js"
        ],
        frameworks: ["mocha", "chai", "sinon"]
    });
};
