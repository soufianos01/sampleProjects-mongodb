const nodeExternals = require("webpack-node-externals");
const path = require("path");

const config = {
  entry: "./database.ts",
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
        test: /\.(js|ts)$/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [],
};

module.exports = config;
