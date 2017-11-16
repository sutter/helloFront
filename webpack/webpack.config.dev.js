const webpackMerge = require("webpack-merge");
const webpackConfigBase = require("./webpack.config.base.js");

module.exports = webpackMerge(webpackConfigBase, {
  devtool: "cheap-module-eval-source-map",
});
