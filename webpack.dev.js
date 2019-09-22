/* eslint-disable no-undef */
const { join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', join(__dirname, 'src', 'index.js')],
  output: {
    path: join(__dirname, 'build'),
    filename: 'bundle.[name].js',
    publicPath: '/',
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
              modules: false,
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
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html',
      template: join(__dirname, 'index.html'),
    }),
  ],
  devServer: {
    contentBase: join(__dirname, 'src'),
    overlay: true,
    // open: true, 
    compress: true,
    // proxy: {
    //   '/': 'http://localhost:3000'
    // },
    port: 3000,
    historyApiFallback: true,
    hot: true,
    // watchContentBase: true,
  },
};
