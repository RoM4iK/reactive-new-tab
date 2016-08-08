var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');


module.exports = {
    entry: {
      "bundle": "app.js",
    },
    devtool: 'source-map',
    output: {
        path: './dist',
        filename: "[name].js"
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel'
        },
        {
          test: /\.scss$/,
          loaders: ["style", "css?sourceMap", "sass?sourceMap"]
        },
        {
          test: /\.css$/,
          loaders: ["style", "css"]
        },
        {
          test: /.*\.(gif|png|svg|jpe?g)(\?.*)?$/i,
          loader: 'url?limit=25000',
        },
        {
          test: /\.(ttf|eot|otf|woff(2)?)(\?.*)?$/,
          loader: 'file',
          query: {
            name: 'font/[hash].[ext]'
          }
        },
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: 'assets/index.html' },
        { from: 'manifest.json' }
      ])
    ],
    resolve: {
      root: path.resolve('./src'),
      extensions: ['', '.js']
    }
}
