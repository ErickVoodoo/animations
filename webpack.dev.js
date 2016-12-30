var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var stylelint = require('stylelint');
var path = require('path');
var appPackage = require('./package.json');
var localhost = 'http://localhost:' + appPackage.devServerPort + '/';

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index',
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?' + localhost,
    'babel-polyfill',
  ],
  output: {
    path: __dirname,
    publicPath: localhost + 'src/',
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.scss'],
  },
  node: {
    fs: 'empty'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [
          'babel'
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(scss)$/,
        loaders: [
          'style',
          'css?sourceMap&importLoaders=1&localIndentName=[local]_[hash:base64:5]',
          'postcss'
        ]
      },
      {
        test: /(\.css)$/,
        loaders: [
          'file?name=[path][name].[ext]&context=./src/',
          'postcss'
        ]
      },
      {
        test: /\.(html)$/,
        loaders: [
          'file?name=[name].[ext]'
        ]
      }
    ]
  },
  postcss: [
    stylelint,
    autoprefixer({ brewsers: ['> 7%'] }),
    precss
  ],
  devtool: 'cheap-module-eval-source-map',
  debug: true,
  devServer: {
    historyApiFallback: {
      index: localhost
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.ejs'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};
