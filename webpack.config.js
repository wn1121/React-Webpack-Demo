var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var SpritesmithPlugin = require('webpack-spritesmith');

var ENV = process.env.NODE_ENV || "dev";
var DEBUG = ENV == "dev";
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

if (DEBUG) {
    console.log("---------- dev Environment ------------")
} else {
    console.log("---------- Online Environment ------------")
}

module.exports = {
    // 入口
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './src/main.js')],
    // 输出
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    // 服务器配置
    devServer: {
        inline: true,//自动刷新
        historyApiFallback: true,
        port: 8181,
        setup(app){  //模拟数据
            app.get('/getJSON', function(req, res) {
                res.json({ name: 'vajoy' });
            });
        }
    },
    resolve: {
        //root: path.resolve(__dirname) + '/src/',
        alias: {
            //Host: DEBUG ? "./src/config/host_dev" : "./src/config/host_online"
        }
    },
    // 加载器
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
                options:{
                    publicPath:'/'
                }
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader!sass-loader"})
            }
        ]
    },
    //插件项
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [precss, autoprefixer];
                }
            }
        }),
        new webpack.HotModuleReplacementPlugin(),//热替换 只替换更新的部分
        new ExtractTextPlugin("css/[name].css"),//打包输出路径
        new SpritesmithPlugin({//sprite配置
            src: {
                cwd: path.resolve(__dirname, 'src/ico'),
                glob: '*.png'
            },
            target: {
                image: path.resolve(__dirname, 'src/images/sprite.png'),
                css: path.resolve(__dirname, 'src/css/sprite.scss')
            },
            apiOptions: {
                cssImageRef: "../images/sprite.png"
            }
        }),
        new webpack.DefinePlugin({//定义全局变量
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        })
    ]
};