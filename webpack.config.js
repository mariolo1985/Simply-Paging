const webpack = require("webpack");

module.exports = {
    entry: {
        master: [
            "./src/index.js"
        ]
    },
    output: {
        path: __dirname + "/dist/",
        filename: "index.js"
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
