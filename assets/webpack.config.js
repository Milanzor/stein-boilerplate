// Path
const path = require('path');

// Get webpack and some plugins
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');

// Initialize the extract plugin to extract css to a different file
const extractPlugin = new ExtractTextPlugin({
    filename: '[name].min.css',
});

// Config
module.exports = {

    entry: WebpackWatchedGlobEntries.getEntries(
        [
            path.resolve(__dirname, 'entry/**/*.js')
        ],
        {
            ignore: '**/*.test.js'
        }
    ),

    // Output
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'test', 'assets'),
    },

    // Resolve
    resolve: {
        modules: [path.resolve(__dirname, 'lib'), path.resolve(__dirname, 'modules'), 'node_modules']
    },

    // Devserver
    devServer: {
        contentBase: path.resolve(__dirname, 'test'),
        publicPath: '/assets/',
        open: true,
        port: 8080
    },

    // Module
    module: {
        rules: [

            // SCSS rule
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },

            // Babel rule
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],

            },

            // Provide plugin, jquery
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            },

            // Font rules
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                },
            }

        ],
    },

    // Plugins
    plugins: [
        extractPlugin,
        new WebpackWatchedGlobEntries(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js",
            minChunks: 2,
        }),
    ]
};
