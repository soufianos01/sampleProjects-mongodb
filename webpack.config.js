const nodeExternals = require("webpack-node-externals");
const path = require("path");
const webpack = require("webpack");

const config = {
  entry: "./database.ts",
  // devtool: "inline-source-map",
  externals: [
    nodeExternals({
      allowlist: ["mongodb"],
    }),
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    environment: {
      // The environment supports arrow functions ('() => { ... }').
      arrowFunction: false,
      // The environment supports BigInt as literal (123n).
      bigIntLiteral: false,
      // The environment supports const and let for variable declarations.
      const: false,
      // The environment supports destructuring ('{ a, b } = obj').
      destructuring: false,
      // The environment supports an async import() function to import EcmaScript modules.
      dynamicImport: false,
      // The environment supports 'for of' iteration ('for (const x of array) { ... }').
      forOf: false,
      // The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...').
      module: false,
      // The environment supports optional chaining ('obj?.a' or 'obj?.()').
      optionalChaining: false,
      // The environment supports template literals.
      templateLiteral: false,
    },
  },
  target: "node",
  mode: "production",
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
    modules: ["node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [new webpack.ProgressPlugin()],
  optimization: {
    minimize: false,
  },
};

module.exports = config;
