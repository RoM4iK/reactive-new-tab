var webpack = require('webpack');
var config = require('./webpack.config')

config.output.path = './build'
config.devtool = null
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  include: /.js$/,
  minimize: true
}))

module.exports = config
