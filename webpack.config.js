const webpack = require("webpack");

module.exports = {
    entry: {
        index: [
            "./build/index.js"
        ],
        SimplyPaging: [
            './build/components/SimplyPaging/SimplyPaging.js'
        ]
    },
    output: {
        path: __dirname + "/dist/",
        filename: "[name].js"
    }
};
