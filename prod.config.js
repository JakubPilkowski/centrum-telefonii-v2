const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: ["./src/index.js"],
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    // filename: "centrum-telefonii.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|webp|svg|ico)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          outputhPath: "./images/",
        },
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
    }),
  ],
};
