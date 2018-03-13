const path = require("path");

module.exports = {
  entry: {
    page1: "./src/client/page-1.js",
    page2: "./src/client/page-2.js"
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "build", "publics", "js")
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }]
  }
};
