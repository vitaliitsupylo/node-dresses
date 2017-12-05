const webpack = require('webpack');

module.exports = {
    entry: './src/server.js',
    output: {
        filename: 'app.js'
    }
};

if (process.env.NODE_ENV === 'production') {
    module.exports.module = {
        rules: [{
            test: /\.js$/,
            exclude: '/(node_modules|bower_components)/',
            loaders: 'babel-loader',
            query: {
                presets: ['env']
            }
        }]
    };
    module.exports.plugins = [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    ]
} else {
    module.exports.devtool = "source-map";

}
