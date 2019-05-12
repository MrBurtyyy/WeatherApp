const path = require("path");
const rootDir = path.resolve(__dirname + "/..");

module.exports = {
  SOURCE_DIR: path.resolve(rootDir + "/src"),
  BUILD_DIR: path.resolve(rootDir + "/dist"),
  PUBLIC_DIR: path.resolve(rootDir + "/public")
};
