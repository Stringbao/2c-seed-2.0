const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const argv = require('yargs-parser')(process.argv.slice(2));
const webpack = require("webpack");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(c|sc|sa)ss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModules: true,
                            hmr: argv.mode == 'development',
                            reloadAll: true,
                        }
                    },
                    "css-loader",
                    "sass-loader"
                ],
                sideEffects:true
            }
        ]
    },
    resolve: {
        alias: {
            "@css": path.resolve(__dirname,'../src/css'),
            "@services": path.resolve(__dirname,"../src/main/services"),
            "@view": path.resolve(__dirname,"../src/main/view"),
            "@model": path.resolve(__dirname,"../src/main/model"),
            "@helper": path.resolve(__dirname,"../src/main/helper"),
            "@src": path.resolve(__dirname,"../src"),
            "@api": path.resolve(__dirname,"../src/main/api"),
            "@constant": path.resolve(__dirname,"../src/constant"),
            
        },
        extensions: ['.js','.json']
    },
    plugins: [
        new webpack.DefinePlugin({
            $PRODUCTION: argv.mode === 'production',
        }),
        new webpack.ProvidePlugin({
            $MAP: [path.resolve(__dirname,'../src/constant/index.js'), "default"],
            $UTIL: [path.resolve(__dirname,'../src/main/util/util.js'), "default"],
            $API: [path.resolve(__dirname,'../src/main/api/index.js'), "default"],
            $DOM_EVENT_CENTER:[path.resolve(__dirname,'../src/main/util/domEventCenter.js'), "default"],
            $CACHE_CENTER:[path.resolve(__dirname,'../src/main/util/cacheCenter.js'), "default"],
            $Injector:[path.resolve(__dirname,'../src/main/util/injector/config.js'), "default"],
        })
    ],
}
