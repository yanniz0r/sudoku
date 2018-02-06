const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    app: './frontend/src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'frontend/dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react', 'stage-2']
          }
        }],
      },
      {
        test: /\.(less|css)$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "less-loader"
        }]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './frontend/dist',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({template: './frontend/src/index.html'})
  ]
}

module.exports = config
