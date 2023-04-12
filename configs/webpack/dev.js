const { merge } = require("webpack-merge");
const commonConfig = require("./common");

const path = require("path");

module.exports = merge(commonConfig, {
  mode: "development",
  devServer: {
    hot: true,
    historyApiFallback: true,
    open: true
  },
  devtool: "cheap-module-source-map",
});
