let path = require('path')
let config = require('../config')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let HtmlWebpackPlugin = require('html-webpack-plugin')

let assetsPath = function(_path) {
  let assetsSubDirectory = process.env.NODE_ENV === 'production' ?
    config.build.assetsSubDirectory :
    config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}
exports.assetsPath = assetsPath;

// less加载
exports.styleLoaders = function(options) {
  if (options.extract) {
    return [{
      test: /\.less$/,
      loader: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: "css-loader!postcss-loader!less-loader"
      })
    }]
  } else {
    return [{
      test: /\.less$/,
      loader: "style-loader!css-loader!postcss-loader!less-loader"
    }]
  }
}

/**
 * [description]
 * @param  {Array} entryConfig 入口配置数组
 * @return {Array}             Chunks数组
 */
exports.computeChunks = function(entryConfig) {
  entryConfig = entryConfig || []
  let chunks = []

  for (let i = 0; i < entryConfig.length; i++) {
    let pathBuild = entryConfig[i].path.replace(/\//g, '-');
    chunks.push(pathBuild + entryConfig[i].name)
  }

  return chunks
}

exports.computeEntry = function(entry, skinEntry) {
  entry = entry || []
  let result = {}

  for (let i = 0; i < entry.length; i++) {
    let item = entry[i]
    let path = item.path
    let name = item.name
    let pathBuild = path.replace(/\//g, '-');
    result[pathBuild + name] = './src/js/' + path + name + '.js'
  }

  for (let i = 0; i < skinEntry.length; i++) {
    let item = skinEntry[i]
    let path = item.path
    let name = item.name
    if (process.env.NODE_ENV === 'production') {
      result['../skins/' + path + name] = './src/js/goods/skins/' + name + '.js'
    } else {
      result['skins/' + path + name] = './src/js/goods/skins/' + name + '.js'
    }
  }

  Object.assign(result, {
    vendor: ['@unit/common/js/base', '@unit/common/js/util']
  })

  return result
}

exports.computeHtmlWebpackPlugin = function(entry, skinEntry) {
  entry = entry || []
  let result = []

  for (let i = 0; i < entry.length; i++) {
    let item = entry[i]
    let path = item.path
    let name = item.name
    let pathBuild = path.replace(/\//g, '-');
    let template = item.template
    result.push(
      new HtmlWebpackPlugin({
        filename: process.env.NODE_ENV === 'production' ? path + name + '.vm' : path + name + '.html',
        template: template,
        inject: false,
        chunks: [pathBuild + name, 'vendor']
        // chunks: [pathBuild + name, 'vendor', 'manifest']
      })
    )
  }

  for (let i = 0; i < skinEntry.length; i++) {
    let item = skinEntry[i]
    let path = item.path
    let name = item.name
    let template = item.template

    result.push(
      new HtmlWebpackPlugin({
        filename: process.env.NODE_ENV === 'production' ? assetsPath('/skins/' + path + name + '.html') : 
            'skins/' + path + name + '.html',
        template: template,
        inject: false,
        chunks: process.env.NODE_ENV === 'production' ? ['../skins/' + path + name] : ['skins/' + path + name]
      })
    )
  }

  return result
}