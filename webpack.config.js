const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

/** @type {import("webpack").Configuration} */
module.exports = {
  mode: "production",
  entry: "./src/client.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "client.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "public" }],
    }),
  ],
};