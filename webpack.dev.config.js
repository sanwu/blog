var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var path = require('path');
var pathToBuild = path.resolve(__dirname, 'public');
//页面主控制目录
var controllerSrc = path.resolve(__dirname, '..','src', 'controller');



var filepath = require('./public/filepath');
var _entry = function (options) {
    var entry = {};
    for (var name in options) {
        entry[name] = controllerSrc + '/' + options[name];
    }
    return entry;
}

console.log(_entry(filepath));

var config = {
    pathToBuild: pathToBuild,
    devtool: "source-map",
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:6060', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
         'E:\\Z-Project\\blog\\src\\controller/main'

    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    },
    //输出文件配置
    output: {
        path: path.resolve(__dirname, 'public/build'),
        chunkFilename: '[name].js',
        filename: '[name].js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx|tsx|ts)?$/,
                loaders: ['react-hot', 'babel', 'ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ],
    },
    preLoaders: [
        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        { test: /\.js$/, loader: "source-map-loader" }
    ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
module.exports = config;
