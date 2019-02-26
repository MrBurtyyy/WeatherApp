const path = require("path");

const constants = require("../config/constants");

module.exports = {
  mode: "development",
  entry: {
    client: constants.SOURCE_DIR + "/client/index.ts"
  },
  output: {
    filename: "[name].[hash].js",
    path: constants.BUILD_DIR
  },
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
