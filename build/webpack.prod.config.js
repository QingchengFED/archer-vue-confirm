/**
 * User: yxp-qingcheng
 * Date: 16/9/20
 * Time: 下午3:47
 */
var webpack = require('webpack');
var config = require('./webpack.base.config');

config.plugins = (config.plugins || []).concat([
    // This minifies not only JavaScript, but also
    // the templates (with html-minifier) and CSS (with cssnano)!
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
])

module.exports = config;
