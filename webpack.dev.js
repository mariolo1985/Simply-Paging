const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: [
            './src/index.js',
            './src/components/SimplyPaging/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
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
