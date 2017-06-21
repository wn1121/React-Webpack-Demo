/**
 * Created by wangna on 2017/6/21.
 */

module.exports = {
    entry: {

    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, './src/', 'build', '[name]-manifest.json'),
            name: '[name]_library'
        })
    ]
}