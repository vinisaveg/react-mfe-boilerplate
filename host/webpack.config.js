const path = require("path")
const { ModuleFederationPlugin } = require("webpack").container
const HtmlWebpackPlugin = require("html-webpack-plugin")

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index",
  mode: "development",
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
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remote: "remote@http://localhost:<PORT>/remoteEntry.js",
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
    publicPath: "/",
  },
}
