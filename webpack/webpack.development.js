const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');
const config = require('./config');
const SSICompileWebpackPlugin = require('ssi-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const argv = require("yargs-parser")(process.argv.slice(2));

module.exports = merge(common,{
    mode:"development",
    devtool:"cheap-module-eval-source-map",
    entry: config('development'),
    devServer:{
        contentBase:["./dist"],
        hot:true,
        watchContentBase: true,
        openPage:"./pc.html",
        host:"t.gl.lenovouat.com",
        port:9983,
        https:true
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            filename: "pc.html",
            template: "./src/dev/html/pc.html",
            chunks: ["pc", "runtime", "vendors"],
            inject: true,
            mode: argv.mode,
            minify: false,
        }),
        new HtmlWebpackPlugin({
            filename: "mobile.html",
            template: "./src/dev/html/mobile.html",
            chunks: ["mobile", "runtime", "vendors"],
            inject: true,
            mode: argv.mode,
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename: "tablet.html",
            template: "./src/dev/html/tablet.html",
            chunks: ["tablet", "runtime", "vendors"],
            inject: true,
            mode: argv.mode,
            minify: false
        }),
        new webpack.HotModuleReplacementPlugin(),
        new SSICompileWebpackPlugin({
            remoteBasePath:"https://j1-ofp.lenovouat.com",
            minify: false
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\/]node_modules[\/]/,
                    minChunks: 1,
                    priority: -10,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
        runtimeChunk: {
            name: "runtime",
        },
    },
    watchOptions: {
        ignored: /node_modules/
    }
})