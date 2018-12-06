'use strict';

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./index.ts",
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: [
          { loader: "ts-loader" }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"]
  }
};
