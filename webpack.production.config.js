var path                  = require('path');
var webpack               = require('webpack');

module.exports = {
    watch: false, // dynamically changed by gulp

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
        // Force NODE_ENV='production'
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                sequences: true,
                dead_code: true,
                conditionals: true,
                booleans: true,
                unused: true,
                if_return: true,
                join_vars: true,
                drop_console: true,
                warnings: false // Disable warnings. Set to true when checking for issues
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            },
            output: {
                comments: false
            }
        })
    ]

};
