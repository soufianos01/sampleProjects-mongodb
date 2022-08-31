const nodeExternals = require("webpack-node-externals");
const path = require("path");

const config = {
  entry: "./app.js",
  devtool: "inline-source-map",
  // externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  target: "node",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [],
};

module.exports = config;
