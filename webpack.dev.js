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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
  devServer: {
    contentBase: join(__dirname, 'webpack-examples'),
    compress: true,
    port: 3000,
  },
};
