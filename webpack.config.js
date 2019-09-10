const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode:"development",
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: "bundel.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {test: /\.css$/,use: ["style-loader","css-loader"]},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]},
            {test:/\.(jpg|jpeg|png|gif|webp)$/,use:[{
                loader:'url-loader',
                options:{
                    limit:1000,
                    name:'[path]-[name]-[hash:5].[ext]'
                }
            }]},
            {test:/\.js$/,use:['babel-loader'],exclude:[/node_modules/,/dist/]}
        ]
    }

}