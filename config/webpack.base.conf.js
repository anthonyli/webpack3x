
var path = require('path');
var utils = require('./utils');

var config = require('../config');
var entryConfig = require('../config/entry');
var skinEntryConfig = require('../config/skinEntry');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  // 项目的文件夹
  entry: utils.computeEntry(entryConfig, skinEntryConfig),
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },

  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': resolve('src'),
      '@unit': resolve('unit')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          // 'eslint-loader',
          'babel-loader'
        ],
        include: [resolve('src'), resolve('unit/common')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
