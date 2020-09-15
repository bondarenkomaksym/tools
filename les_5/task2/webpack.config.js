const path = require("path");

module.exports = {
  entry: {
    //точки входа
    profile: "./src/profile/index.js",
    dashboard: "./src/dashboard/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "./build"),
  },
  watch: false,
};
