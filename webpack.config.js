/**
 * Created by Atom on 2016.4.19.0019.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'output');
var NODE_MODULE = path.resolve(ROOT_PATH, 'node_modules');

var webpackConfig;
webpackConfig = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: {
        app:path.resolve(APP_PATH,'index.js'),
        mobile:path.resolve(APP_PATH, 'mobile.js'),
        vendors:['jquery'],
    },
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    resolve: {
        alias: {
            jquery: path.resolve(NODE_MODULE, 'jquery/dist/jquery.min.js')
        }
    },
    module:{
        loaders:[
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: APP_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            }
        ]
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'lib.js'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    // devtool: 'eval-source-map',
    devServ: {
        historyApiFallback: true,
        progress: true
    }
};
module.exports = webpackConfig;