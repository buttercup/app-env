const path = require("path");

module.exports = {
    entry: {
        "web": path.resolve(__dirname, "./source/index.web.js"),
        "app-env": path.resolve(__dirname, "./source/index.js")
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },

    node: {
        crypto: "empty",
        fs: "empty",
        path: "empty"
    },

    output: {
        filename: "[NAME].js",
        path: path.resolve(__dirname, "./dist"),
        library: "[NAME]",
        libraryTarget: "umd"
    }
};
