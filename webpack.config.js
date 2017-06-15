var path = require('path');
var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var SpritesmithPlugin = require('webpack-spritesmith');

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
        inline: true,
        historyApiFallback: true,
        port: 8181
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
        new webpack.HotModuleReplacementPlugin(),
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

    ]
};