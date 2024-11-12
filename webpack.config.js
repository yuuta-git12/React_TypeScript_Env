const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules :[
            {
                test: /¥.(jsjsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /¥.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve :{
        extensions: ['.js','.jsx']
    },
    plugins :[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        static: [
            {
                directory: path.join(__dirname,'dist')
            },
            {
                directory: path.join(__dirname, 'public'),
                publicPath: '/'
            }
        ],
        compress: true,
        port: 3000
    }
};