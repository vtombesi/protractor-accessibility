var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './source/index',
        'webpack-dev-server/client?http://localhost:8080'
    ],
    output: {
        publicPath: '/',
        filename: 'index.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'source'),
                loader: 'babel-loader',
                query: {
                    presets: ["es2015"],
                }
            }
        ]
    }
};