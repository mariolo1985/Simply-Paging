const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    name: 'CSS Build',
    mode: 'production',
    entry: {
        master: path.join(__dirname, 'src/less/master.less')
    },
    output: {
        path: path.join(__dirname, 'dist/css')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: false
        }),
        new MiniCssExtractPlugin({
            filename: '[name].min.css'
        }),
        new CopyWebpackPlugin([
            { from: 'src/less/*.less', to: path.join(__dirname, 'dist/less'), flatten: true },
            { from: 'src/scss/*.scss', to: path.join(__dirname, 'dist/scss'), flatten: true }
        ])
    ]
};
