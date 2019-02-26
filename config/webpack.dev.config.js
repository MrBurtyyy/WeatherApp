const path = require("path");

const constants = require("../config/constants");

module.exports = {
  entry: constants.SOURCE_DIR + "/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(constants.BUILD_DIR)
  }
};
