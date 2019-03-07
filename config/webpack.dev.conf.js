const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    compress: true,
    host: '0.0.0.0',
    hot: true,
    publicPath: '/assets/',
    quiet: true // 关闭打印信息
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:3000'],
        notes: ['Some additionnal notes to be displayed unpon successful compilation']
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('public/index.html')
    })
  ]
})

module.exports = devWebpackConfig