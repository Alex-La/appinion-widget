const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
require("babel-polyfill");

module.exports = {
  entry: ["babel-polyfill", __dirname + "/src/index.js"],
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    library: "AppinionWidget",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(eot|gif|otf|png|svg|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "bundle.min.css" }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
  resolve: {
    alias: {
      styles: path.resolve(__dirname, "src/styles"),
    },
    modules: [path.resolve("./node_modules"), path.resolve("./src")],
    extensions: ["*", ".js", ".jsx"],
  },
};
