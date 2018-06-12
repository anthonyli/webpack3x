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
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          }, {
            loader: 'css-loader' // translates CSS into CommonJS
          }, {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      }
    ]
  }
}
