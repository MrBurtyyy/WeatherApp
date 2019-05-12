const path = require("path");
const devConfig = require("./config/webpack.dev.config");
const prodConfig = require("./config/webpack.prod.config");
const _ = require("lodash");

module.exports = env => {
  if (!_.isUndefined(env.production)) {
    return prodConfig;
  }

  return devConfig;
};
