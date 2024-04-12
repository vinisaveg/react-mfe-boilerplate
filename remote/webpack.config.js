const path = require("path")
const { ModuleFederationPlugin } = require("webpack").container
const HtmlWebpackPlugin = require("html-webpack-plugin")

/** @type {import('webpack').Configuration} */
module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./Remote": "PATH_TO_MODULE/Remote.tsx",
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  output: {
    path: path.join(__dirname, "/build"),
  },
}
