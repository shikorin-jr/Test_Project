'use strict';
const path = require('path');

module.exports = {
  mode:'production',  
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js',
  },
  watch: true,
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(sass|less|css)$/,
        use: ["style-loader", "css-loader", 'sass-loader'],
      }
    ]
  }
};