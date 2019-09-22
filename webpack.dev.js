/* eslint-disable no-undef */
const { join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'home.html',
      template: join(__dirname, 'webpack-examples', 'index.html'),
    }),
  ],
  devServer: {
    contentBase: join(__dirname, 'webpack-examples'),
    overlay: true,
    open: true, 
    compress: true,
    port: 3000,
  },
};
