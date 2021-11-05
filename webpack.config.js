const webpack = require("webpack");

module.exports = {
  module: {
    rules: [
      { test: /.css$/, loader: "css-loader" },
      {
        test: /.*\.svg$/,
        loader: "svg-inline-loader",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
    fallback: { path: false },

    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
