const HtmlWebPackPlugin = require('html-webpack-plugin');
const path  = require('path');
module.exports = {
    entry:"./src/index.js",
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude:'/node_modules/',
                use:{
                    loader:'babel-loader',
                        options:{
                             presets: ['@babel/preset-env','@babel/preset-react'],
                          
                              plugins: [
                                [
                                  require.resolve("@babel/plugin-transform-runtime"),
                                  {
                                    corejs: false,
                                    regenerator: true,
                                    useESModules: false,
                                    helpers: false,
                                    absoluteRuntime: path.dirname(
                                      require.resolve("@babel/runtime/package.json")
                                    )
                                  }
                                ]
                              ]
                        }
                }
            }
        ]
    },
    plugins: [new HtmlWebPackPlugin({
        title:'React_redux_Apllication',
        template:'./src/index.html',
        
    })]
} 
