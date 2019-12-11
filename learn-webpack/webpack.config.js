const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
       entry : {
              index: './src/js/index.js',
              nosotros: './src/js/nosotros.js',
              productos: './src/js/productos.js',

       },
       output : {
                filename : '[name].bundle.js',
                path : path.join(__dirname, '/dist')
       },
       devServer: {
              contentBase: path.join(__dirname, 'dist'),
              compress: true,
              port: 9000
       },
       module : {
              rules : [
                     {
                            test : /\.js$/,
                            exclude : /node_modules/,
                            use : {
                                   loader : 'babel-loader',
                                   options : {
                                          presets : ['@babel/preset-env']
                                   }
                            }
                     },
                     {
                         test: /\.css$/,
                         use: [
                                {loader: 'style-loader'},
                                {loader: 'css-loader'}
                         ]   
                     },
                     {
                         test: /\.scss$/,
                         use: [
                                {loader: 'style-loader'},
                                {loader: 'css-loader'},
                                {loader: 'sass-loader'}
                         ]   
                     }
              ]
       },
       optimization: {
              splitChunks: {
                     cacheGroups: {
                            commons: {
                                   test: /[\\/]node_modules[\\/]/,
                                   name: 'common',
                                   chunks: 'all'
                            }
                     }
              }
       },
       plugins:[
              new HtmlWebpackPlugin({
                     filename: 'index.html',
                     template: 'src/template_for_index.html',
                     title: 'Main_Page'
              }),
              new HtmlWebpackPlugin({
                     filename: 'nosotros.html',
                     title: 'Main_Page'
              }),
              new HtmlWebpackPlugin({
                     filename: 'productos.html',
                     title: 'Main_Page'
              })
       ]
}