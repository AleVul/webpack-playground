const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require("copy-webpack-plugin");

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
