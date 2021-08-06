const {  merge } = require("webpack-merge");
const comman = require("./comman")

module.exports =merge(comman,{
    mode:'development',
    devtool:'inline-source-map',
    output:{
        publicPath:'/'
    },
    devServer: {
        historyApiFallback:true,
        contentBase:'./src',
        watchContentBase:true,
        hot:true,
        inline:true,

    }
})