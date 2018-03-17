const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: {
    page1: "./src/client/page-1.js",
    page2: "./src/client/page-2.js"
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "build", "publics", "js")
  },
  externals: [nodeExternals()],
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
  }
};
