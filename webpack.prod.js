var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var stylelint = require('stylelint');
var path = require('path');
var appPackage = require('./package.json');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
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
          'babel',
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(scss)$/,
        loaders: ['style',
                  'css?sourceMap&modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]',
                  'postcss'
                ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /(static)/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
      },
      {
        test: /\.(png|svg)$/,
        include: /(static)/,
        loaders: [
          'file?name=[path][name].[ext]&context=./src/',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
      },
      {
        test: /(\.css)$/,
        include: /(static)/,
        loaders: [
          'file?name=[path][name].[ext]&context=./src/',
          'postcss'
        ],
      },
      {
        test: /\.html$/,
        loaders: [
          'html'
        ]
      },
      {
        test   : /\.(ttf|eot|svg|woff|otf|json)(\?[a-z0-9]+)?$/,
        exclude: /(static)/,
        loader : 'file'
      }
    ]
  },
  postcss: [
    stylelint,
    autoprefixer({ brewsers: ['> 7%'] }),
    precss
  ],
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      // filename: './index.html',
      inject: 'body',
      template: './index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        // removeEmptyAttributes: true,
        // removeStyleLinkTypeAttributes: true,
        // removeOptionalTags: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true,
        unused: true,
        dead_code: true,
        screw_ie8: true, // React doesn't support IE8
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
      sourceMap: false,
    }),
  ]
};
