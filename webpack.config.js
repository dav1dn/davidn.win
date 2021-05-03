const HTMLWebpackPlugin = require("html-webpack-plugin");
const glob = require('glob');
const path = require('path');

const generateHTMLPlugins = () =>
  glob.sync("./src/**/*.html").map(
    (dir) =>
      new HTMLWebpackPlugin({
        filename: path.basename(dir), // Output
        template: dir, // Input
      })
  );

module.exports = {
  entry: ["./src/index.js", "./src/styles.scss"],
  devServer: {
    contentBase: "src",
    watchContentBase: true,
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.html$/,
        loader: "raw-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [...generateHTMLPlugins()],
};
