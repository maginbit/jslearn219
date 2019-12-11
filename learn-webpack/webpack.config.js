const path = require('path');

module.exports = {
       entry : './src/js/index.js',
       output : {
                filename : 'bundle.js',
                path : path.join(__dirname, '/dist')
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
       }
}