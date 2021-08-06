const TerserPlugin = require("terser-webpack-plugin");
const {  merge } = require("webpack-merge");
const comman = require("./comman");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require("path")

module.exports =merge(comman,{
    mode: "production",
    output:{
        filename:'bundle.js',
        publicPath:'./',
        path:path.resolve('build'),
        chunkFilename:'vendor-[id]-[contenthash].js',
    },
    optimization: {
        minimize: true,
        minimizer:[
            new TerserPlugin({
                terserOptions:{
                    format:{
                        comments:false
                    }
                },
                extractComments:false
            })
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
    ]
})