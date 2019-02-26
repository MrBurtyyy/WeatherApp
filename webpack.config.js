const path = require("path");
const devConfig = require("./config/webpack.dev.config");
const prodConfig = require("./config/webpack.prod.config");

module.exports = env => {
  if (env.production) {
    return prodConfig;
  }

  return devConfig;
};
