const path = require("path");

module.exports = {
  watch: false,
  entry: {
    app: "./src/assets/js/app.js",
  },
  output: {
    path: path.resolve(__dirname, "../dist/assets/js"),
    filename: "[name].js",
  },
  externals: {
    jquery: "jQuery",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
