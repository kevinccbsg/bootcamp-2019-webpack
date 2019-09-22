/* eslint-disable no-undef */
const { join } = require('path');

module.exports = {
  mode: 'development',
  entry: join(__dirname, 'webpack-examples', 'handling-css.js'),
  output: {
    path: join(__dirname, 'build'),
    filename: 'bundle.[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
};
