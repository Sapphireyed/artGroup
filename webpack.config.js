const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        filename: '[name].[contenthash]bundle.js',
        path: path.resolve(__dirname, 'deploy'),
        //  path: '/artgroup/',
    },

    devServer: {
        contentBase: './deploy',
        compress: true,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(gif|svg|jpg|png|PNG)$/,
                loader: "file-loader",
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "artGroup",
            filename: 'index.html',
            chunks: ['index'],
        }),
    ]
}