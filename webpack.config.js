const path = require("path");
module.exports = {
  mode: "development",
  // entry: "./src/index.ts",
  entry: "./src/strategy/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        // include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
