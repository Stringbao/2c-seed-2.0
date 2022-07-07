const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common');
const config = require('./config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

let moduleList = [];
config('production').forEach(component => {
    component.list.forEach(item => {
        let moduleExports = merge(common, {
            mode: 'production',
            entry: item.entry,
            output: {
                path: path.resolve(__dirname, `../dist/${component.componentName}/${item.terminal}`),
                filename: `${item.terminal}.js`,
                library: component.library,
                libraryTarget: "umd",
                libraryExport: 'default',
            },
            plugins: [
                new MiniCssExtractPlugin({filename: `${item.terminal}.css`,chunkFilename: '[name].css'}),
                new CleanWebpackPlugin(),
                new CopyWebpackPlugin({patterns:[{from:path.join(__dirname,`../httl/${item.terminal}.httl`),to:''}]}),
                new UglifyJsPlugin({
                    uglifyOptions:{
                        compress:{
                            drop_console: true
                        }
                    }
        
                })
            ]
        })
        moduleList.push(moduleExports)
    })
})
module.exports = moduleList