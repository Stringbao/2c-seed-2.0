const merge = require('webpack-merge');
const webpack = require('webpack');
const path =require('path')
const common = require('../webpack/webpack.common');
const config = require('../webpack/config');
const SSICompileWebpackPlugin = require('ssi-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common,{
    mode:"development",
    devtool:"cheap-module-eval-source-map",
    entry: config('development'),
    devServer:{
        contentBase: ['httl', 'debug', 'confightml','src'],
        hot:true,
        watchContentBase: true,
        openPage:"./en/vue_pangoo/nec-fe-cms/debug.html",
        host:"t.gl.lenovouat.com",
        // port:9970,
        https:true,
        proxy: {
            "/api": {
              target: "https://admin.gl.lenovouat.com/",
              ws: true,
              changeOrigin: true,
              secure: false,
              pathRewrite: {
                "^/api": ""
              }
            }
        }
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            filename: "en/vue_pangoo/nec-fe-cms/debug.html",
            template: "./debug/index.html",
            chunks: ['pc'],
            minify: false,
            minify:false
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin( {
            patterns:[ 
                {
                    from : path.join(__dirname,'../httl'),
                    to : 'en/vue_pangoo/nec-fe-cms/httl'
                },
                {
                    from : path.join(__dirname,'../configHtml'),
                    to : 'en/vue_pangoo/nec-fe-cms/configHtml'
                },
            ]
        }),
        new SSICompileWebpackPlugin({
            remoteBasePath:"https://h1-ofp.lenovouat.com",
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