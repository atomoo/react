/**
 * @file
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const templatePath = path.resolve(__dirname, './app/index.html');
const serverBase = path.join(__dirname, 'dist');
module.exports = {
    context: path.resolve(__dirname, 'app'),
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React
    
        'webpack-dev-server/client?http://0.0.0.0:8989',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        'webpack/hot/only-dev-server',
        './index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js(x)?$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 启用 HMR
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            template: templatePath,
            inject: 'body'
        })
    ],
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: serverBase,
        compress: true,
        port: 8989,
        host: '0.0.0.0',
        hot: true,
        historyApiFallback: true
    }
};