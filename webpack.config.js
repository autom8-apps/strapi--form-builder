const path = require('path');

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname) + "/dist",
    library: "StrapiFormBuilder",
    libraryTarget: "umd",
    umdNamedDefine: true,
    globalObject: `(typeof self !== 'undefined' ? self : this)`,
  },
  devServer: {
    contentBase: "./",
  },
  watch: true,
};