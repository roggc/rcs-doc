const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|ico|webmanifest)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@slices": path.resolve(__dirname, "src/slices"),
      "@src": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  experiments: {
    outputModule: true,
  },
};
