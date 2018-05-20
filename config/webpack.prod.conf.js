var package = require('../package.json');


var path = require('path');
var utils = require('./utils');
var webpack = require('webpack');
var config = require('../config');
var merge = require('webpack-merge');

var baseWebpackConfig = require('./webpack.base.conf');

var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');




var entryConfig = require('../config/entry');
var skinEntryConfig = require('../config/skinEntry');

var env = config.build.env;

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash:8].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash:8].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),

    // new ExtractTextPlugin("[name].css"),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash:8].css')
    }),

    // 公共文件提取
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', // 注意不要.js后缀
      chunks: utils.computeChunks(entryConfig, '')
    }),

    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ].concat(utils.computeHtmlWebpackPlugin(entryConfig, skinEntryConfig))
})

module.exports = webpackConfig
