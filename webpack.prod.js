const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: [
            './src/index.js'
        ]
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: 'babel-loader'
            }
        ]
    }
};
