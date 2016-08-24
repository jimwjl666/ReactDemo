var path = require("path");
var config = {
    //打包入口文件
    entry: './src/main.js',
    /*
     * path:输出到根目录
     * filename：输出的文件名
     * */
    output: {
        path: './',
        filename: '[name].js',
    },
    /*
     * port：服务器端口号
     * inline:
     *
     * */
    devServer: {
        inline: true,
        port: 7777
    },
    module: {
        loaders: [ {
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }

}

module.exports = config;