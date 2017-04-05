var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    watch: false, // dynamically changed by gulp

    /* Comment this to have access to the debugger in a JetBrains IDE */
    devtool: 'source-map',

    output: {
        filename: '[name].js',
        publicPath: '/'
    },

    // Exposing external libs (loaded from cdn)
    externals: {
        'jquery': 'jQuery'
    },

    resolve: {
        extensions: [
            '',
            '.js',
            '.json'
        ],
        root: [
            path.resolve('./build/assets/js')
        ]
    },

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: [
                'babel' // babel config is located in .babelrc
            ]
        }, {
            test: /\.json$/,
            loaders: [
                'json'
            ]
        }]
    },

    plugins: [
        new WebpackNotifierPlugin()
        /* Uncomment to have access to the debugger in a JetBrains IDE */
        /* new webpack.SourceMapDevToolPlugin(
         '[file].map', null,
         '[absolute-resource-path]', '[absolute-resource-path]'
         )*/
    ]

};
