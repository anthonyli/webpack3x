const path = require('path')
const root = path.join(__dirname, './')
const buildPath = path.join(root, 'dist')

module.exports = {
  entry: {
    main: './src/main.js'
  },
  output: {
    path: buildPath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      }
    ]
  }
}
