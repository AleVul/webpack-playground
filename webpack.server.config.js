const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const fs = require("fs");

module.exports = {
    entry: "./src/server/index.js",
    output: {
        filename: "index.js",
        path: path.join(__dirname, "build")
    },
    target: "node",
    node: {
        __dirname: false,
        __filename: false
    },
    externals: nodeExternals({whitelist: ["sequelize"]}),
    devtool: "source-map", //TODO: this is for development, remove it for prod.
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015"]
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: "src/server/views",
                to: "views"
            }
        ])
    ]
};
