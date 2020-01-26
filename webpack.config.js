const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const SOURCE = path.resolve(__dirname, "./source");
const NATIVE_OUTPUT = path.resolve(__dirname, "./native");
const WEB_OUTPUT = path.resolve(__dirname, "./web");

const plugins = [];
if (process.env.ANALYSE === "bundle") {
    plugins.push(new BundleAnalyzerPlugin());
}

const configs = [
    {
        entry: {
            web: path.join(SOURCE, "index.web.js")
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
            filename: "index.js",
            path: WEB_OUTPUT
        },

        plugins
    },
    {
        entry: {
            node: path.join(SOURCE, "index.native.js")
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

        output: {
            filename: "index.js",
            path: NATIVE_OUTPUT
        },

        target: "node"
    }
];

if (process.env.ANALYSE === "bundle") {
    configs.splice(1, 1);
}

module.exports = configs;
