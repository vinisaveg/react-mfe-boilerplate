const path = require("path")
const { ModuleFederationPlugin } = require("webpack").container
const HtmlWebpackPlugin = require("html-webpack-plugin")

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remote: "remote@<REMOTE_URL>",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  output: {
    path: path.join(__dirname, "/build"),
  },
}
