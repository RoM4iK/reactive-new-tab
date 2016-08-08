var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var config = require('./webpack.config')

config.devtool = null
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  include: /.js$/,
  minimize: true
}))

module.exports = config
