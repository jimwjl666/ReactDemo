var path=require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
    //打包入口文件
    entry: {
      /*  basic_demo:'./src/basic_demo.js',
        ajax_demo:'./src/ajax_demo.js',
        refs_demo:'./src/refs_demo.js',*/
        index:'./src/js/react-router_demo.js',
    },
    /*
     * path:输出到根目录
     * filename：输出的文件名
     * */
    output: {
        path: 'dist/',
        publicPath:'/',
        filename: 'js/[name].js',
        chunkFilename: "js/[id].chunk.js"
    },
   
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css") },
            { test: /\.html$/, loader: "html" },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=./img/[hash].[ext]' }

        ]
    },
    plugins:[
        new webpack.ProvidePlugin({	//加载jq
            $: 'jquery'
        }),
          new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin("css/[name].css"),	//单独使用style标签加载css并设置其路径
        new webpack.optimize.UglifyJsPlugin({	//压缩代码
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']	//排除关键字
        }),
        new HtmlWebpackPlugin({						//根据模板插入css/js等生成最终HTML
    		/*favicon:'./src/img/favicon.ico', //favicon路径*/
			filename:'view/index.html',	//生成的html存放路径，相对于 path
			template:'./src/view/index.html',	//html模板路径
			inject:true,	//允许插件修改哪些内容，包括head与body
			hash:true,	//为静态资源生成hash值
			minify:{	//压缩HTML文件
				removeComments:true,	//移除HTML中的注释
				collapseWhitespace:true	//删除空白符与换行符
			}
		})

    ],
    resolve:{
        alias:{
           
        }
    }

}

module.exports = config;