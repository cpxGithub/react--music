const baseWebpackConfig = require('./webpack.base.conf')
const merge = require('webpack-merge')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
})

module.exports = devWebpackConfig