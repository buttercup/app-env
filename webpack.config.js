const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const SOURCE = path.resolve(__dirname, "./source");
const OUTPUT = path.resolve(__dirname, "./web");

const plugins = [];
if (process.env.ANALYSE === "bundle") {
    plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
    entry: path.join(SOURCE, "index.web.js"),

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
        filename: "index.js",
        path: OUTPUT
    },

    plugins
};
